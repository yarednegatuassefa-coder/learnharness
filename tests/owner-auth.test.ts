import assert from "node:assert/strict";
import { it } from "node:test";
import { createOwnerSession, ownerCookie, ownerPasswordMatches, ownerSessionValid, OWNER_COOKIE } from "../src/server/owner-auth.ts";

const before = {
  password: process.env.LH_OWNER_PASSWORD,
  secret: process.env.LH_OWNER_SESSION_SECRET,
};
function configure() {
  process.env.LH_OWNER_PASSWORD = "a-strong-owner-password";
  process.env.LH_OWNER_SESSION_SECRET = "a".repeat(64);
}
function restore() {
  if (before.password === undefined) delete process.env.LH_OWNER_PASSWORD; else process.env.LH_OWNER_PASSWORD = before.password;
  if (before.secret === undefined) delete process.env.LH_OWNER_SESSION_SECRET; else process.env.LH_OWNER_SESSION_SECRET = before.secret;
}

it("compares owner passwords and refuses missing or short configuration", () => {
  try {
    delete process.env.LH_OWNER_PASSWORD;
    delete process.env.LH_OWNER_SESSION_SECRET;
    assert.equal(ownerPasswordMatches("a-strong-owner-password"), false);
    configure();
    assert.equal(ownerPasswordMatches("a-strong-owner-password"), true);
    assert.equal(ownerPasswordMatches("incorrect"), false);
    assert.equal(ownerPasswordMatches("a".repeat(1025)), false);
  } finally { restore(); }
});

it("signs expiring owner sessions and rejects tampering, expiry and absent cookies", () => {
  try {
    configure();
    const now = 1_800_000_000_000;
    const session = createOwnerSession(now);
    const cookie = ownerCookie(session.token, session.maxAge);
    assert.match(cookie, new RegExp("^" + OWNER_COOKIE));
    assert.match(cookie, /HttpOnly/);
    assert.match(cookie, /Secure/);
    assert.match(cookie, /SameSite=Strict/);
    assert.equal(ownerSessionValid(cookie, now), true);
    assert.equal(ownerSessionValid(cookie, now + session.maxAge * 1000 + 1000), false);
    assert.equal(ownerSessionValid(cookie.replace(session.token, session.token.slice(0, -1) + "x"), now), false);
    assert.equal(ownerSessionValid(null, now), false);
  } finally { restore(); }
});
