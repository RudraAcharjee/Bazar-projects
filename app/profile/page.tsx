import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/session";

export default async function Profile() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/sign-in?callbackUrl=%2Fprofile");
  }

  return (
    <main className="container py-14 max-w-2xl">
      <div className="card p-8">
        <div className="w-20 h-20 rounded-full bg-[#eaf2e5] flex items-center justify-center text-3xl font-black text-[#1d7a45]">
          {session.user.name?.slice(0, 1) || "U"}
        </div>
        <h1 className="text-3xl font-black mt-5">{session.user.name}</h1>
        <p className="muted mt-1">{session.user.email}</p>
        <Link href="/profile/update" className="btn btn-primary mt-7">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </main>
  );
}
