import { createHmac, timingSafeEqual } from "node:crypto";

export const OWNER_COOKIE = "__Host-lh_owner";
const SESSION_SECONDS = 60 * 60 * 12;

function configured(env: NodeJS.ProcessEnv = process.env) {
  const password = env.LH_OWNER_PASSWORD ?? "";
  const secret = env.LH_OWNER_SESSION_SECRET ?? "";
  return password.length >= 16 && secret.length >= 32 ? { password, secret } : null;
}

function signature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function ownerAuthConfigured() { return configured() !== null; }

export function ownerPasswordMatches(candidate: string) {
  const settings = configured();
  if (!settings || candidate.length > 1024) return false;
  const expected = Buffer.from(settings.password);
  const actual = Buffer.from(candidate);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function ownerSessionValid(cookieHeader: string | null, now = Date.now()) {
  const settings = configured();
  if (!settings || !cookieHeader) return false;
  const entry = cookieHeader.split(";").map(v => v.trim()).find(v => v.startsWith(OWNER_COOKIE + "="));
  if (!entry) return false;
  const token = entry.slice(OWNER_COOKIE.length + 1);
  const split = token.lastIndexOf(".");
  if (split < 1) return false;
  const payload = token.slice(0, split);
  const supplied = Buffer.from(token.slice(split + 1));
  const expected = Buffer.from(signature(payload, settings.secret));
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return false;
  const expires = Number(payload);
  return Number.isSafeInteger(expires) && expires > Math.floor(now / 1000);
}

export function createOwnerSession(now = Date.now()) {
  const settings = configured();
  if (!settings) throw new Error("Owner authentication is not configured");
  const expires = Math.floor(now / 1000) + SESSION_SECONDS;
  const payload = String(expires);
  return { token: payload + "." + signature(payload, settings.secret), maxAge: SESSION_SECONDS };
}

export function ownerCookie(token: string, maxAge: number) {
  return `${OWNER_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

export function clearOwnerCookie() {
  return `${OWNER_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export function ownerRequestOriginAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try { return new URL(origin).origin === new URL(request.url).origin; }
  catch { return false; }
}
