import { NextResponse, type NextRequest } from "next/server";
import { apiRequestRefusal } from "./src/server/desktop-access.ts";
import { ownerAuthConfigured, ownerSessionValid } from "./src/server/owner-auth.ts";

const LOGIN_PATH = "/login";
const SESSION_PATH = "/api/owner-session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === LOGIN_PATH || pathname === SESSION_PATH) return NextResponse.next();

  if (process.env.LH_HOSTED_OWNER_AUTH === "1") {
    if (!ownerAuthConfigured()) {
      return pathname === "/api" || pathname.startsWith("/api/")
        ? NextResponse.json({ error: "Owner authentication is not configured." }, { status: 503, headers: { "Cache-Control": "no-store" } })
        : NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
    if (!ownerSessionValid(request.headers.get("cookie"))) {
      if (pathname === "/api" || pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Authentication required." }, { status: 401, headers: { "Cache-Control": "no-store" } });
      }
      const login = new URL(LOGIN_PATH, request.url);
      login.searchParams.set("next", pathname + request.nextUrl.search);
      return NextResponse.redirect(login);
    }
    if (![ "GET", "HEAD", "OPTIONS" ].includes(request.method.toUpperCase())) {
      const origin = request.headers.get("origin");
      if (!origin || origin !== request.nextUrl.origin) {
        return NextResponse.json({ error: "Cross-origin request refused." }, { status: 403, headers: { "Cache-Control": "no-store" } });
      }
    }
    return NextResponse.next();
  }

  const refusal = apiRequestRefusal(request);
  if (refusal) return NextResponse.json({ error: refusal }, { status: 403, headers: { "Cache-Control": "no-store" } });
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|login|api/plugins/[^/]+/documents/markdown).*)"],
};
