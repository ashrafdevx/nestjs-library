"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { getToken, saveToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "Ashraf",
    email: "demo@example.com",
    book: "The Library",
    password: "123456",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getToken()) {
      router.replace("/dashboard");
    }
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Registration failed");
      }

      saveToken(data.access_token);
      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f1a2e] px-4 py-12 text-[#efe9dc]">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#182640] p-8 shadow-2xl shadow-black/30">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#e3b04b]">Create account</p>
          <h1 className="mt-3 text-3xl font-semibold">Join Shelfmark</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-[#a9b0c0]">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none transition focus:border-[#e3b04b]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-[#a9b0c0]">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none transition focus:border-[#e3b04b]"
              required
            />
          </div>

          <div>
            <label htmlFor="book" className="mb-2 block text-sm text-[#a9b0c0]">Book/Collection</label>
            <input
              id="book"
              value={form.book}
              onChange={(e) => setForm({ ...form, book: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none transition focus:border-[#e3b04b]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-[#a9b0c0]">Password</label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none transition focus:border-[#e3b04b]"
              required
            />
          </div>

          {error ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#e3b04b] px-4 py-3 font-semibold text-[#0f1a2e] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#a9b0c0]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#e3b04b] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
