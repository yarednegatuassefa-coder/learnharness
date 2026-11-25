import { spawn } from "node:child_process";

// Railway and other hosted Node runtimes provide PORT at runtime.
// Keep the normal desktop/local start command unchanged.
const port = process.env.PORT || "3000";
if (!/^\\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
	console.error(`[hosted-start] Invalid PORT: ${port}`);
	process.exit(1);
}

const nextBin = new URL("../node_modules/next/dist/bin/next", import.meta.url);
const child = spawn(process.execPath, [nextBin.pathname, "start", "--hostname", "0.0.0.0", "--port", port], {
	stdio: "inherit",
	env: process.env,
});

child.on("error", (error) => {
	console.error("[hosted-start] Could not start Next.js:", error);
	process.exitCode = 1;
});
child.on("exit", (code, signal) => {
	if (signal) process.kill(process.pid, signal);
	else process.exitCode = code ?? 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) {
	process.on(signal, () => {
		if (!child.killed) child.kill(signal);
	});
}
