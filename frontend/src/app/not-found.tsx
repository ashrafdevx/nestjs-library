import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f1a2e] px-6 py-12 text-[#efe9dc]">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#e3b04b]">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-lg text-[#a9b0c0]">
          The page you requested does not exist or is not available.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#e3b04b] px-5 py-3 font-medium text-[#0f1a2e] transition hover:brightness-110"
          >
            Go home
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/10 px-5 py-3 font-medium text-[#efe9dc] transition hover:border-[#e3b04b] hover:text-[#e3b04b]"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
