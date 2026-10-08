import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

function formatPrice(price: number) {
  return new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 1 }).format(price);
}

export default function ProductCard({ product }: { product: Product }) {
  const priceUp = product.change > 0;
  const priceDown = product.change < 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="card product-card p-4 block hover:-translate-y-1 transition"
    >
      <div className="flex items-start gap-3">
        <div className="product-icon overflow-hidden p-0">
          <Image
            src={product.image}
            alt={product.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-base leading-tight">{product.name}</h3>
          <p className="text-xs muted mt-1">{product.unit}</p>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-end gap-3">
        <div>
          <p className="text-[11px] muted">আজকের দাম</p>
          <p className="font-bold text-lg mt-1">
            {formatPrice(product.price)} টাকা
          </p>
        </div>

        <span
          className={`change-badge text-xs font-bold px-2.5 py-1 rounded-full ${
            priceUp
              ? "bg-red-50 text-red-600"
              : priceDown
              ? "bg-green-50 text-green-700"
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
