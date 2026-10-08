import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/api";
import ProductSection from "@/components/Section";

export default async function Home() {
  const products = await getProducts();

  const priceUp = products
    .filter((product) => product.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 6);

  const priceDown = products
    .filter((product) => product.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, 6);

  return (
    <main>
      <section className="container pt-8 pb-10">
        <div className="rounded-[30px] overflow-hidden bg-[#eaf2e5] grid lg:grid-cols-2 items-center min-h-[430px]">
          <div className="p-8 sm:p-12">
            <span className="inline-block px-3 py-2 rounded-full bg-white text-[#1d7a45] text-sm font-bold">
              আজকের বাজার • সহজ হিসাব
            </span>

            <h1 className="text-4xl sm:text-5xl font-black mt-5 leading-tight">
              বাজারের দামের খবর,
              <br />
              <span className="text-[#1d7a45]"> এক নজরে। </span>
            </h1>

            <p className="text-gray-600 mt-5 max-w-xl">
              প্রতিদিনের প্রয়োজনীয় পণ্যের আজকের দাম, ওঠানামা ও বাজারভিত্তিক তথ্য সহজভাবে দেখুন।
            </p>

            <Link href="#all-products" className="btn btn-primary mt-7">
              সব পণ্য দেখুন ↓
            </Link>
          </div>

          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <Image
              src="/bazar-hero.png"
              alt="বাজার দর"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </section>

      <div className="container">
        <ProductSection
          title="আজ দাম বাড়ছে ▲"
          subtitle="যেসব পণ্যের দাম আজ তুলনামূলক বেশি বেড়েছে"
          products={priceUp}
        />

        <ProductSection
          title="আজ দাম কমেছে ▼"
          subtitle="যেসব পণ্যের দাম আজ কমেছে"
          products={priceDown}
        />

        <div id="all-products">
          <ProductSection
            title="সব পণ্য"
            subtitle="প্রয়োজনীয় পণ্যের বর্তমান বাজারদর এক জায়গায়"
            products={products}
          />
        </div>
      </div>
    </main>
  );
}
