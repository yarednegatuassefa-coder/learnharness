import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Refuse to start a remotely reachable process without the owner gate and
// durable storage paths. This launcher is separate from local/desktop npm start.
const required = ["LH_OWNER_PASSWORD", "LH_OWNER_SESSION_SECRET", "LH_DATA_DIR", "LH_AUTH_FILE"];
const missing = required.filter(name => !process.env[name]);
if (process.env.LH_HOSTED_OWNER_AUTH !== "1" || missing.length) {
  console.error("[hosted-start] Refusing to start: set LH_HOSTED_OWNER_AUTH=1 and provide " + required.join(", ") + ".");
  process.exit(1);
}
if (process.env.LH_OWNER_PASSWORD.length < 16 || process.env.LH_OWNER_SESSION_SECRET.length < 32) {
  console.error("[hosted-start] LH_OWNER_PASSWORD must be at least 16 characters and LH_OWNER_SESSION_SECRET at least 32 characters.");
  process.exit(1);
}
for (const name of ["LH_DATA_DIR", "LH_AUTH_FILE"]) {
  if (!path.isAbsolute(process.env[name])) {
    console.error("[hosted-start] " + name + " must be an absolute path on the persistent volume.");
    process.exit(1);
  }
}
const dataDir = path.resolve(process.env.LH_DATA_DIR);
const authFile = path.resolve(process.env.LH_AUTH_FILE);
if (authFile !== path.join(dataDir, "auth.json")) {
  console.error("[hosted-start] Set LH_AUTH_FILE to <LH_DATA_DIR>/auth.json so credentials persist with the owner data.");
  process.exit(1);
}

const port = process.env.PORT || "3000";
if (!/^[0-9]+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
  console.error("[hosted-start] Invalid PORT: " + port);
  process.exit(1);
}

const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const child = spawn(process.execPath, [nextBin, "start", "--hostname", "0.0.0.0", "--port", port], {
  stdio: "inherit", env: process.env,
});
child.on("error", error => { console.error("[hosted-start] Could not start Next.js:", error); process.exitCode = 1; });
child.on("exit", (code, signal) => { process.exitCode = signal === "SIGINT" ? 130 : signal === "SIGTERM" ? 143 : code ?? 1; });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => { if (!child.killed) child.kill(signal); });
