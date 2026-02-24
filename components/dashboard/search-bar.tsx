export function SearchBar() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <label className="sr-only" htmlFor="command-search">
        Search workspace
      </label>
      <input
        id="command-search"
        type="text"
        placeholder="Search Clario workspace"
        className="w-full rounded-xl border border-[var(--panel-border)] bg-carbon/80 px-5 py-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-[var(--accent-gold)] focus:shadow-glow"
      />
    </div>
  );
}
