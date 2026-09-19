import Link from "next/link";

const featuredBooks = [
  { title: "The Silent Echo", author: "A. Miller", accent: "from-[#8E2C3A] to-[#D47A83]" },
  { title: "Cloud Atlas", author: "R. Flynn", accent: "from-[#2F6B57] to-[#6AB08F]" },
  { title: "Designing Systems", author: "L. Chen", accent: "from-[#3F64B5] to-[#8AA9FF]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink px-6 py-10 text-paper">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gilt">Shelfmark</p>
            <h1 className="mt-2 font-display text-3xl text-paper">Library system</h1>
          </div>

          <nav className="flex items-center gap-4 text-sm text-paper/80">
            <Link href="/login" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-gilt hover:text-gilt">
              Sign in
            </Link>
            <Link href="/dashboard" className="rounded-full bg-gilt px-4 py-2 font-medium text-ink transition hover:opacity-90">
              Open library
            </Link>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-gilt/40 bg-gilt/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gilt">
              Book management dashboard
            </p>
            <h2 className="max-w-xl font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl">
              Curate a library that feels like a real reading room.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-paper/70">
              Manage books, categories, reviews, and cover images in one elegant system built for authors and librarians.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login" className="rounded-full bg-gilt px-6 py-3 font-medium text-ink transition hover:opacity-90">
                Get started
              </Link>
              <Link href="/dashboard" className="rounded-full border border-white/15 px-6 py-3 font-medium text-paper transition hover:border-gilt hover:text-gilt">
                Explore library
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {featuredBooks.map((book, index) => (
              <div key={index} className="group rounded-2xl border border-white/10 bg-shelf p-4 shadow-2xl shadow-black/20">
                <div className={`flex h-56 items-end rounded-xl bg-gradient-to-br ${book.accent} p-4`}>
                  <div className="w-full rounded-lg border border-white/20 bg-black/10 px-3 py-2 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">Featured</p>
                    <p className="mt-3 font-display text-lg text-white">{book.title}</p>
                    <p className="text-sm text-white/80">{book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
