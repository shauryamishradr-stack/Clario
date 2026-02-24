import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-matte px-6">
      <div className="rounded-2xl border border-[var(--panel-border)] bg-carbon/70 p-10 text-center shadow-glow backdrop-blur-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Clario</h1>
        <p className="mt-3 text-sm text-zinc-400">Executive OS frontend shell initialized.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link className="rounded-lg border border-[var(--panel-border)] px-5 py-2 text-sm text-zinc-200 transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]" href="/login">
            Login
          </Link>
          <Link className="rounded-lg bg-[var(--accent-gold)] px-5 py-2 text-sm font-medium text-black transition hover:bg-gold-400" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
