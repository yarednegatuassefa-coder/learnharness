"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/owner-session", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }), credentials: "same-origin",
      });
      const result = await response.json();
      if (!response.ok) { setError(result.error ?? "Sign-in failed."); return; }
      const requested = params.get("next") ?? "/";
      const destination = requested.startsWith("/") && !requested.startsWith("//") ? requested : "/";
      window.location.assign(destination);
    } catch { setError("Could not reach the server. Try again."); }
    finally { setBusy(false); }
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <label htmlFor="owner-password" className="block text-sm font-medium">Owner password</label>
      <Input id="owner-password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required maxLength={1024} />
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <Button type="submit" className="w-full" disabled={busy || !password}>{busy ? "Signing in…" : "Sign in"}</Button>
    </form>
  );
}
