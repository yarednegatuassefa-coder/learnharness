import { NextResponse, type NextRequest } from "next/server";
import { clearOwnerCookie, createOwnerSession, ownerAuthConfigured, ownerCookie, ownerPasswordMatches, ownerRequestOriginAllowed } from "@/src/server/owner-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const MAX_LOGIN_BODY_BYTES = 8192;

async function readLoginBody(request: Request): Promise<unknown> {
  const length = request.headers.get("content-length");
  if (length && (!/^\\d+$/.test(length) || Number(length) > MAX_LOGIN_BODY_BYTES)) throw new Error("Login request is too large.");
  if (!request.body) throw new Error("Missing login request body.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_LOGIN_BODY_BYTES) {
        await reader.cancel();
        throw new Error("Login request is too large.");
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
}

export async function POST(request: NextRequest) {
  if (process.env.LH_HOSTED_OWNER_AUTH !== "1" || !ownerAuthConfigured()) {
    return NextResponse.json({ error: "Owner authentication is not configured." }, { status: 503 });
  }
  if (!ownerRequestOriginAllowed(request)) return NextResponse.json({ error: "Cross-origin request refused." }, { status: 403 });
  const bucket = globalThis as typeof globalThis & { __lhLoginAttempts?: { count: number; reset: number } };
  const now = Date.now();
  const current = bucket.__lhLoginAttempts;
  if (current && current.reset > now && current.count >= 8) return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  try {
    const body = await readLoginBody(request);
    if (typeof body?.password !== "string" || !ownerPasswordMatches(body.password)) {
      const entry = current && current.reset > now ? current : { count: 0, reset: now + 15 * 60_000 };
      entry.count++;
      bucket.__lhLoginAttempts = entry;
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }
    delete bucket.__lhLoginAttempts;
    const session = createOwnerSession(now);
    const response = NextResponse.json({ ok: true });
    response.headers.set("Set-Cookie", ownerCookie(session.token, session.maxAge));
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!ownerRequestOriginAllowed(request)) return NextResponse.json({ error: "Cross-origin request refused." }, { status: 403 });
  const response = NextResponse.json({ ok: true });
  response.headers.set("Set-Cookie", clearOwnerCookie());
  response.headers.set("Cache-Control", "no-store");
  return response;
}
