"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application page error:", error);
  }, [error]);

  return (
    <main className="container py-20 max-w-xl text-center">
      <div className="card p-8 sm:p-10">
        <div className="text-5xl" aria-hidden="true">🛠️</div>
        <h1 className="text-2xl sm:text-3xl font-black mt-4">পাতাটি লোড করা যায়নি</h1>
        <p className="muted mt-3 leading-7">
          সাময়িক সমস্যা হয়েছে। আবার চেষ্টা করুন। সমস্যা চলতে থাকলে সার্ভারের লগ পরীক্ষা করুন।
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
          <button onClick={() => reset()} className="btn btn-primary">আবার চেষ্টা করুন</button>
          <Link href="/" className="btn btn-outline">হোম পেজে ফিরুন</Link>
        </div>
      </div>
    </main>
  );
}
