import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  subtitle?: string;
  products: Product[];
};

export default function ProductSection({ title, subtitle, products }: Props) {
  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="muted mt-2">{subtitle}</p>}
      </div>

      {products.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="card p-10 text-center muted">
          এই অংশে এখন কোনো পণ্য নেই।
        </div>
      )}
    </section>
  );
}
