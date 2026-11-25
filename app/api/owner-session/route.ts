import { NextResponse, type NextRequest } from "next/server";
import { clearOwnerCookie, createOwnerSession, ownerAuthConfigured, ownerCookie, ownerPasswordMatches, ownerRequestOriginAllowed } from "@/src/server/owner-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
    const body = await request.json();
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
