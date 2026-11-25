import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// Railway and other hosted Node runtimes provide PORT at runtime.
// Keep the normal desktop/local start command unchanged.
const port = process.env.PORT || "3000";
if (!/^[0-9]+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
	console.error(`[hosted-start] Invalid PORT: ${port}`);
	process.exit(1);
}

const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const child = spawn(process.execPath, [nextBin, "start", "--hostname", "0.0.0.0", "--port", port], {
	stdio: "inherit",
	env: process.env,
});

child.on("error", (error) => {
	console.error("[hosted-start] Could not start Next.js:", error);
	process.exitCode = 1;
});
child.on("exit", (code, signal) => {
	process.exitCode = signal === "SIGINT" ? 130 : signal === "SIGTERM" ? 143 : code ?? 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) {
	process.on(signal, () => {
		if (!child.killed) child.kill(signal);
	});
}
