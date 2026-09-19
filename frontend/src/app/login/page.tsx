"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { getToken, saveToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("123456");
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
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Login failed");
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
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#182640] p-8 shadow-2xl shadow-black/30">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#e3b04b]">Shelfmark</p>
          <h1 className="mt-3 text-3xl font-semibold">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-[#a9b0c0]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none ring-0 transition focus:border-[#e3b04b]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-[#a9b0c0]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0f1a2e] px-4 py-3 text-[#efe9dc] outline-none transition focus:border-[#e3b04b]"
              placeholder="••••••••"
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
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#a9b0c0]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-[#e3b04b] hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
