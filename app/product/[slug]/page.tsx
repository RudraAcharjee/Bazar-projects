import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

function formatPrice(price: number) {
  return new Intl.NumberFormat("bn-BD").format(Math.round(price));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Product details are only available after login.
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/sign-in?callbackUrl=${encodeURIComponent(`/product/${slug}`)}`);
  }

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const priceUp = product.change > 0;
  const priceDown = product.change < 0;

  return (
    <main className="container py-10">
      <Link href="/" className="text-sm font-bold text-[#1d7a45]">
        ← হোমে ফিরে যান
      </Link>

      <div className="grid lg:grid-cols-2 gap-6 mt-5">
        <section className="card p-7 sm:p-10">
          <div className="w-28 h-28 rounded-3xl bg-[#eef5ea] overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2 flex-wrap mt-6">
            <span className="px-3 py-1 rounded-full bg-[#eef5ea] text-[#1d7a45] text-sm font-bold">
              {product.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-bold">
              {product.unit}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black mt-5">
            {product.name}
          </h1>

          <p className="muted mt-3 leading-7">{product.description}</p>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <PriceBox title="সর্বনিম্ন" price={product.minPrice} />
            <PriceBox title="সর্বোচ্চ" price={product.maxPrice} />
            <PriceBox title="গড় দাম" price={product.avgPrice} />
          </div>
        </section>

        <section className="card p-7 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="muted text-sm">আজকের দাম</p>
              <p className="text-4xl font-black mt-1">
                {formatPrice(product.price)} <span className="text-lg">টাকা</span>
              </p>
            </div>

            <span
              className={`px-3 py-2 rounded-full text-sm font-bold ${
                priceUp
                  ? "bg-red-50 text-red-600"
                  : priceDown
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {priceUp ? "▲" : "▼"} {formatPrice(Math.abs(product.change))}%
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-extrabold">বাজারভিত্তিক দাম</h2>
            <p className="muted mt-1">বিভিন্ন বাজারে আজকের আনুমানিক দাম</p>

            <div className="mt-4 divide-y">
              {product.markets.map((market, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <div>
                    <p className="font-bold">{market.name}</p>
                    <p className="text-xs muted mt-1">
                      {market.note || "আজকের খুচরা বাজার"}
                    </p>
                  </div>
                  <p className="font-extrabold whitespace-nowrap">
                    {formatPrice(market.price)} টাকা
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="card p-6 mt-6">
        <h2 className="text-xl font-extrabold">এই পণ্য সম্পর্কে</h2>
        <p className="muted mt-2 leading-7">
          {product.name} এর আজকের বাজারদর, গড় দাম এবং বিভিন্ন বাজারের দাম এখানে দেখা যাচ্ছে।
          দাম প্রতিদিন পরিবর্তন হতে পারে।
        </p>
      </div>
    </main>
  );
}

function PriceBox({ title, price }: { title: string; price: number }) {
  return (
    <div className="rounded-2xl bg-[#f6f8f3] p-4">
      <p className="text-xs muted">{title}</p>
      <p className="font-extrabold mt-1">
        {formatPrice(price)} টাকা
      </p>
    </div>
  );
}
