"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "@/lib/auth";

const features = [
  { title: "Catalog management", text: "Track books, authors, and collection details from one place." },
  { title: "Auth-ready", text: "Secure sign in and registration flow connected to the NestJS API." },
  { title: "Cloud image support", text: "Upload and manage book covers directly from the backend service." },
];

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(Boolean(token));

    if (token) {
      router.replace("/dashboard");
    }
  }, [router]);

  function logout() {
    removeToken();
    setIsLoggedIn(false);
    router.replace("/");
  }

  if (isLoggedIn) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0f1a2e] px-6 py-10 text-[#efe9dc]">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#e3b04b]">Shelfmark</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Book management dashboard</h1>
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="rounded-full border border-[#e3b04b] px-5 py-2.5 font-medium text-[#e3b04b] transition hover:bg-[#e3b04b] hover:text-[#0f1a2e]"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#e3b04b] px-5 py-2.5 font-medium text-[#0f1a2e] transition hover:brightness-110"
            >
              Register
            </Link>
            {isLoggedIn ? (
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-white/10 px-5 py-2.5 font-medium text-[#efe9dc] transition hover:border-[#e3b04b] hover:text-[#e3b04b]"
              >
                Logout
              </button>
            ) : null}
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-[#182640] p-8 shadow-2xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a9b0c0]">Library overview</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
              Built for reading lists, authors, and book administration.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-[#a9b0c0]">
              This app organizes your book catalog with author profiles, category management, reviews,
              and Cloudinary-backed image uploads.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-full bg-[#e3b04b] px-6 py-3 font-semibold text-[#0f1a2e] transition hover:brightness-110"
              >
                Create account
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-white/10 px-6 py-3 font-semibold text-[#efe9dc] transition hover:border-[#e3b04b] hover:text-[#e3b04b]"
              >
                Sign in
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e3b04b]/35 bg-[#1d2d49] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#e3b04b]">Current stack</p>
            <ul className="mt-4 space-y-4 text-[#efe9dc]">
              <li className="rounded-2xl border border-white/10 bg-[#0f1a2e] p-3">NestJS backend</li>
              <li className="rounded-2xl border border-white/10 bg-[#0f1a2e] p-3">MongoDB database</li>
              <li className="rounded-2xl border border-white/10 bg-[#0f1a2e] p-3">Next.js frontend</li>
              <li className="rounded-2xl border border-white/10 bg-[#0f1a2e] p-3">Cloudinary uploads</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-white/10 bg-[#182640] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#e3b04b]">Feature</p>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-[#a9b0c0]">{feature.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
