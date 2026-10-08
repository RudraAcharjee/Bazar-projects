"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type Props = {
  mode: "signin" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);

    if (mode === "signup") {
      const result = await authClient.signUp.email({ name, email, password });

      if (result.error) {
        toast.error(result.error.message || "সাইন আপ করা যায়নি");
      } else {
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে");
        router.push("/sign-in");
      }
    } else {
      const result = await authClient.signIn.email({ email, password });

      if (result.error) {
        toast.error(result.error.message || "সাইন ইন করা যায়নি");
      } else {
        toast.success("সফলভাবে সাইন ইন হয়েছে");
        router.push(searchParams.get("callbackUrl") || "/");
        router.refresh();
      }
    }

    setLoading(false);
  }

  async function googleLogin() {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  }

  async function githubLogin() {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" });
  }

  return (
    <div className="card p-7 sm:p-10">
      <h1 className="text-3xl font-black">
        {mode === "signup" ? "অ্যাকাউন্ট তৈরি করুন" : "স্বাগতম ফিরে আসায়"}
      </h1>
      <p className="muted mt-2">
        {mode === "signup" ? "বাজার দর ব্যবহার করতে রেজিস্টার করুন।" : "আপনার অ্যাকাউন্টে সাইন ইন করুন।"}
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        {mode === "signup" && (
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="আপনার নাম"
            className="w-full border rounded-xl px-4 py-3"
          />
        )}

        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="ইমেইল"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)"
          className="w-full border rounded-xl px-4 py-3"
        />

        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "অপেক্ষা করুন..." : mode === "signup" ? "সাইন আপ" : "সাইন ইন"}
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <span className="h-px bg-gray-200 flex-1" />
        <span className="text-xs muted">অথবা</span>
        <span className="h-px bg-gray-200 flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button onClick={googleLogin} className="btn btn-outline">Google</button>
        <button onClick={githubLogin} className="btn btn-outline">GitHub</button>
      </div>

      <p className="text-sm text-center mt-6 muted">
        {mode === "signup" ? "আগেই অ্যাকাউন্ট আছে? " : "অ্যাকাউন্ট নেই? "}
        <Link
          href={mode === "signup" ? "/sign-in" : "/sign-up"}
          className="font-bold text-[#1d7a45]"
        >
          {mode === "signup" ? "সাইন ইন" : "সাইন আপ"}
        </Link>
      </p>
    </div>
  );
}
