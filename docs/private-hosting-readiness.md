# Private hosted deployment readiness

## Current status

LearnHarness is designed around a trusted, single-user desktop/local server. Its Next.js server owns agent execution, background workers, conversations, settings, jobs, graph records, and filesystem-backed credentials. The current application does **not** provide a complete multi-user authentication and tenant-isolation boundary.

This repository change only prepares a hosted process entry point. It does not make the application safe to expose publicly and does not create a Railway deployment.

## Hosted process entry point

Use `npm run start:hosted` as the service start command after building the application. The launcher reads the runtime `PORT` (defaults to 3000 for local smoke testing) and binds Next.js to `0.0.0.0`. The existing `npm start` remains unchanged for the local/desktop workflow.

The service must run as one instance unless every store and coordination mechanism is migrated to shared, concurrency-safe infrastructure. The current filesystem stores and process-local admission/liveness controls are not a distributed coordination system.

## Mandatory blockers before any public URL

1. **Owner authentication:** put an identity-aware access gateway in front of the service and enforce origin protection so the Railway service domain cannot bypass that gateway. Validate all page, API, stream, upload, download, and websocket-like paths. Do not trust a client-supplied identity header.
2. **Authorization:** enforce owner-only access server-side for every route that reads or mutates data. A gateway alone is insufficient if the origin remains directly reachable.
3. **Persistent storage:** identify every runtime data path and credential file, mount durable storage at the correct location, and verify permissions and restart persistence. Do not assume that mounting a volume at `/app/data` covers all stores.
4. **Secrets:** inject provider keys only through protected runtime variables or an encrypted owner-controlled store. Never commit credentials, copy local `data/`, `auth.json`, or `.env` files into an image or build artifact.
5. **Plugin execution:** community and user-installed plugins execute trusted Node.js code in the current architecture. Do not enable untrusted plugin installation or expose plugin-management APIs until an isolation/allowlist policy is implemented and tested.
6. **Single-instance operation:** enforce one service replica and test worker recovery, concurrent requests, filesystem locking, and restart behaviour. Current queues/liveness coordination are process-local and JSON-file based.
7. **Operational controls:** configure health checks, bounded request sizes/timeouts, backups, log redaction, rate limits, and a documented restore test.

## Deployment gate

Do not create a public domain or accept a production deployment until the authentication/origin gate and persistent-storage mapping have been implemented and independently tested. A private project setting or an obscure URL is not authentication. Do not upgrade a hosting plan or create billable resources without the owner's separate approval.

## Verification required after infrastructure becomes available

- Unauthenticated browser requests and direct API requests are rejected.
- Authenticated owner requests work for every required route.
- Direct access to the provider's default domain cannot bypass the access gateway.
- Data and settings survive process restart and redeployment.
- Provider credentials are not present in Git history, build output, logs, or client bundles.
- Plugin installation is disabled or restricted to explicitly trusted code.
- The service remains single-instance and background work recovers safely after restart.
- Backup restoration is demonstrated before real learning records are stored.
