import { fallbackProducts, normalizeProducts } from "./data";
import type { Product } from "./types";

export const BASE_URLS = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

function addMissingProducts(products: Product[]) {
  const result = [...products];
  const usedSlugs = new Set(result.map((product) => product.slug));

  for (const product of fallbackProducts) {
    if (!usedSlugs.has(product.slug)) {
      result.push(product);
      usedSlugs.add(product.slug);
    }
  }

  return result;
}

export async function getProducts(): Promise<Product[]> {
  for (const base of BASE_URLS) {
    try {
      const response = await fetch(`${base}/products`, { next: { revalidate: 300 } });

      if (response.ok) {
        const data = normalizeProducts(await response.json());
        return addMissingProducts(data);
      }
    } catch {
      // API না চললে নিচের fallback data ব্যবহার হবে।
    }
  }

  return fallbackProducts;
}

export async function getProduct(slug: string) {
  const allProducts = await getProducts();
  return allProducts.find((product) => product.slug === slug || product.id === slug) ?? null;
}

export async function getCategory(category: string) {
  const allProducts = await getProducts();
  return allProducts.filter((product) => product.category === category);
}
