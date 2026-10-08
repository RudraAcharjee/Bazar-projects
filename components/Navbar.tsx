"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const categories = [
  ["chal", "🍚", "চাল"],
  ["dal", "🫘", "ডাল"],
  ["tel", "🫙", "তেল"],
  ["sobji", "🥬", "সবজি"],
  ["mach", "🐟", "মাছ"],
  ["mangsho", "🍗", "মাংস"],
  ["dim", "🥚", "ডিম"],
  ["moshla", "🌶️", "মসলা"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const date = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  async function handleLogout() {
    await authClient.signOut();
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8ede7]">
      <div className="container">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="বাজার দর" className="w-10 h-10 rounded-xl" />
            <div>
              <h2 className="font-bold text-xl leading-none">বাজার দর</h2>
              <p className="text-xs text-gray-500 mt-1">{date}</p>
            </div>
          </Link>

          <div className="hidden lg:flex gap-2">
            {session ? (
              <>
                <Link href="/profile" className="btn btn-outline">প্রোফাইল</Link>
                <button onClick={handleLogout} className="btn btn-primary">সাইন আউট</button>
              </>
            ) : (
              <>
                <Link href="/sign-in" className="btn btn-outline">সাইন ইন</Link>
                <Link href="/sign-up" className="btn btn-primary">সাইন আপ</Link>
              </>
            )}
          </div>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="hidden lg:flex gap-2 overflow-x-auto pb-3">
          {categories.map(([slug, icon, name]) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
                pathname === `/category/${slug}`
                  ? "bg-[#1d7a45] text-white"
                  : "bg-[#f2f6ef]"
              }`}
            >
              <span className="text-base leading-none">{icon}</span>
              <span>{name}</span>
            </Link>
          ))}
          <Link href="/#all-products" className="px-4 py-2 rounded-full text-sm font-bold bg-[#f2f6ef]">
            সব পণ্য
          </Link>
        </nav>

        {menuOpen && (
          <div className="lg:hidden pb-4">
            <div className="grid grid-cols-2 gap-2">
              {categories.map(([slug, icon, name]) => (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-[#f2f6ef] font-bold flex items-center gap-2"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              {session ? (
                <>
                  <Link href="/profile" className="btn btn-outline flex-1">প্রোফাইল</Link>
                  <button onClick={handleLogout} className="btn btn-primary flex-1">সাইন আউট</button>
                </>
              ) : (
                <>
                  <Link href="/sign-in" className="btn btn-outline flex-1">সাইন ইন</Link>
                  <Link href="/sign-up" className="btn btn-primary flex-1">সাইন আপ</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <PriceTicker />
    </header>
  );
}

function PriceTicker() {
  const prices = [
    "🍚 মিনিকেট চাল ৮২ টাকা/কেজি ▲ ২.৮%",
    "🫘 মসুর ডাল ১৪২ টাকা/কেজি ▼ ২.৪%",
    "🥔 আলু ৩২ টাকা/কেজি ▲ ৩.৬%",
    "🧅 পেঁয়াজ ৮৬ টাকা/কেজি ▼ ৩.১%",
    "🐟 ইলিশ ১,৮৫০ টাকা/কেজি ▲ ২.১%",
    "🥚 ডিম ১৫০ টাকা/ডজন ▲ ১.২%",
  ];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...prices, ...prices].map((price, index) => (
          <span key={index} className="px-8 py-2 text-sm font-semibold">
            {price}
          </span>
        ))}
      </div>
    </div>
  );
}
