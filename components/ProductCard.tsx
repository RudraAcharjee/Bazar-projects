import Link from "next/link";
import type { Product } from "@/lib/types";

function formatPrice(price: number) {
  return new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 1 }).format(price);
}

export default function ProductCard({ product }: { product: Product }) {
  const priceUp = product.change > 0;
  const priceDown = product.change < 0;

  return (
    <Link href={`/product/${product.slug}`} className="card p-5 block hover:-translate-y-1 transition">
      <div className="flex justify-between items-start">
        <div className="w-16 h-16 rounded-2xl bg-[#f1f6ee] flex items-center justify-center text-4xl">
          {product.emoji}
        </div>
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">
          {product.categoryLabel}
        </span>
      </div>

      <h3 className="font-bold text-lg mt-4">{product.name}</h3>
      <p className="text-sm muted mt-1">{product.unit}</p>

      <div className="mt-5 flex justify-between items-end gap-2">
        <div>
          <p className="text-xs muted">আজকের দাম</p>
          <p className="font-bold text-xl mt-1">
            {formatPrice(product.price)} টাকা
          </p>
        </div>

        <span
          className={`text-sm font-bold px-2 py-1 rounded-full ${
            priceUp
              ? "bg-green-50 text-green-700"
              : priceDown
              ? "bg-red-50 text-red-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {product.change === 0
            ? "— ০.০%"
            : `${priceUp ? "▲" : "▼"} ${formatPrice(Math.abs(product.change))}%`}
        </span>
      </div>
    </Link>
  );
}
