"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

export default function CategoryClient({ products }: { slug: string; products: Product[] }) {
  const [sort, setSort] = useState("default");
  const sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const categoryName = products[0]?.categoryLabel || "পণ্য";
  const categoryEmoji = products[0]?.emoji || "🛒";

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <div>
          <div className="text-4xl mb-2">{categoryEmoji}</div>
          <h1 className="section-title">{categoryName}</h1>
          <p className="muted mt-2">এই ক্যাটাগরির আজকের বাজারদর</p>
        </div>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="border rounded-xl px-3 py-2 bg-white font-semibold"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="card p-10 text-center">
          <h2 className="font-bold text-2xl">কোনো পণ্য পাওয়া যায়নি</h2>
          <Link href="/" className="btn btn-primary mt-5">হোমে ফিরে যান</Link>
        </div>
      )}
    </>
  );
}
