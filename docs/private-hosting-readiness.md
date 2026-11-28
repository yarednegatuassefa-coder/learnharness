# Private hosted deployment readiness

## Current status

LearnHarness remains a trusted, single-owner application, not a multi-user tenant-isolated service. The hosted branch adds an application-level owner password gate, but deployment remains blocked pending build/test verification, plugin policy, storage validation, and infrastructure setup.

No Railway project, service, volume, domain, or deployment has been created.

## Hosted process and required environment

Use `npm run build` followed by `npm run start:hosted`. The hosted launcher fails closed unless all of the following are configured:

- `LH_HOSTED_OWNER_AUTH=1`
- `LH_OWNER_PASSWORD`: a unique password with at least 16 characters.
- `LH_OWNER_SESSION_SECRET`: at least 32 random characters; use a cryptographically random value, not a memorable phrase.
- `LH_DATA_DIR`: absolute path on the persistent volume.
- `LH_AUTH_FILE`: exactly `<LH_DATA_DIR>/auth.json`.
- `PORT`: supplied by the hosting platform; defaults to 3000 for local smoke tests.

The login password and session signing secret are environment secrets. Never commit them, place them in a Docker build argument, or expose them to client-side variables. The owner session is a 12-hour HMAC-signed cookie with Secure, HttpOnly and SameSite=Strict attributes. Password login is rate-limited per client IP in-process; the reverse proxy must overwrite the client-IP header rather than trust a client-supplied value. Keep one service instance, and configure edge-level rate limiting as well.

The normal `npm start` command remains unchanged for desktop/local operation.

## Authentication boundary

The Next.js proxy protects application pages and API routes. API requests without a valid owner session receive 401; page requests redirect to /login. State-changing requests require a same-origin Origin header. The login/logout endpoint validates its Origin. The streamed plugin-document upload route is deliberately excluded from proxy body cloning and performs the owner-session and origin checks itself before reading the request or initializing plugin services.

This is application-level owner authentication, not multi-user identity, account recovery, MFA, or a defense against a compromised hosting account. Protect the hosting dashboard and GitHub account with MFA.

## Persistent storage map

Set `LH_DATA_DIR` to the mounted persistent volume directory. The repository's `config.ts` resolves mutable state beneath it:

- `chats/` — conversation transcripts.
- `graph/` — graph ledgers, source records and graph metadata.
- `settings.json` — application preferences.
- `themes/` — imported themes.
- `prompts/` — prompt overrides.
- `plugins/` and `core-plugin-data/` — plugin state and data.
- `auth.json` — provider credentials via `LH_AUTH_FILE`.

Read-only prompts and application assets remain in the application bundle. Imported notes may refer to paths on the original computer; those source files do not automatically transfer to the hosted service. Before migrating real data, inventory all additional runtime file paths, validate file permissions, and test restore/restart behaviour.

## Remaining mandatory blockers

1. **Plugin execution:** hosted owner mode now skips community plugin discovery entirely; app-owned Core plugins remain available. Community plugins are arbitrary Node.js code and are not sandboxed. Do not add a community-plugin allowlist or enable community execution until a separate isolation/security review is complete.
2. **Single instance:** use exactly one service replica. Filesystem stores, job admission and process-local coordination are not distributed.
3. **Storage validation:** mount the durable volume, verify every mutable path resolves beneath it, and test data and credential persistence across restart and redeploy.
4. **Origin protection:** confirm the service's provider URL is not bypassing any intended network access policy. Application auth remains the primary gate, including on the provider's direct domain.
5. **Operations:** configure health checks, bounded request sizes/timeouts, backups, log redaction, edge-level rate limits, and a documented restore test. The login endpoint rejects non-JSON requests and caps the streamed body at 8 KiB.
6. **Build and test:** run lint, typecheck, unit tests, production build, and authenticated/unauthenticated route smoke tests before merging or deploying. The CI workflow now also triggers on pushes to this preparation branch; if no checks appear, enable GitHub Actions for this fork in repository Settings → Actions.

## Deployment gate

Do not create a public domain or accept a production deployment until the remaining blockers are implemented and verified. Do not upgrade a hosting plan or create billable resources without the owner's separate approval.
