import Link from 'next/link';

const navItems = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Workspace', href: '/dashboard' },
  { label: 'Profile', href: '/dashboard' },
];

export function TopNav() {
  return (
    <header className="border-b border-[var(--panel-border)] bg-black/30 px-6 py-4 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-gold)]">Clario</span>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className="text-sm text-zinc-300 transition hover:text-[var(--accent-gold)]" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
