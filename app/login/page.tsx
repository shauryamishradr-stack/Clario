import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-[var(--panel-border)] bg-carbon/70 p-8 shadow-glow backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-zinc-100">Welcome back</h1>
        <p className="mt-2 text-sm text-zinc-400">Sign in to enter your executive workspace.</p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-[var(--panel-border)] bg-black/20 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-[var(--accent-gold)]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-[var(--panel-border)] bg-black/20 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-[var(--accent-gold)]"
          />
          <button
            type="button"
            className="w-full rounded-lg bg-[var(--accent-gold)] px-4 py-3 text-sm font-semibold text-black transition hover:bg-gold-400"
          >
            Enter Clario
          </button>
        </form>

        <Link href="/dashboard" className="mt-6 inline-block text-xs text-zinc-500 transition hover:text-[var(--accent-gold)]">
          Continue to dashboard shell →
        </Link>
      </div>
    </main>
  );
}
