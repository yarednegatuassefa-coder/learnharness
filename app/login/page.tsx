import { LoginForm } from "@/components/owner-login";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-6 py-12">
      <section className="w-full max-w-sm space-y-6 rounded-xl border bg-card p-8 shadow-sm">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Private instance</p>
          <h1 className="text-2xl font-semibold tracking-tight">LearnHarness</h1>
          <p className="text-sm text-muted-foreground">Sign in to your private workspace.</p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
