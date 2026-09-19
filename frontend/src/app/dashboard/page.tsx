"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/login");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0f1a2e] px-6 py-10 text-[#efe9dc]">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#e3b04b]">Shelfmark</p>
            <h1 className="mt-3 text-3xl font-semibold">Dashboard</h1>
          </div>

          <button
            type="button"
            onClick={() => {
              removeToken();
              router.replace("/login");
            }}
            className="rounded-full border border-white/10 px-5 py-2.5 font-medium text-[#efe9dc] transition hover:border-[#e3b04b] hover:text-[#e3b04b]"
          >
            Logout
          </button>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#182640] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a9b0c0]">Books</p>
            <h2 className="mt-4 text-4xl font-semibold">24</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#182640] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a9b0c0]">Authors</p>
            <h2 className="mt-4 text-4xl font-semibold">12</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#182640] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a9b0c0]">Categories</p>
            <h2 className="mt-4 text-4xl font-semibold">8</h2>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/10 px-5 py-2.5 font-medium text-[#efe9dc] transition hover:border-[#e3b04b] hover:text-[#e3b04b]"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-[#e3b04b] px-5 py-2.5 font-medium text-[#0f1a2e] transition hover:brightness-110"
          >
            Continue
          </Link>
        </div>
      </div>
    </main>
  );
}
