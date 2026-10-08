import { normalizeProducts } from "./data";
import type { Product } from "./types";
export const BASE_URLS=["https://api.api-store.workers.dev/api/bazardor","https://api.abcz.workers.dev/api/bazardor"];
export async function getProducts(): Promise<Product[]> {
  for (const base of BASE_URLS) { try { const r=await fetch(`${base}/products`,{next:{revalidate:300}}); if(r.ok) return normalizeProducts(await r.json()); } catch {} }
  return normalizeProducts([]);
}
export async function getProduct(slug:string){ const all=await getProducts(); return all.find(p=>p.slug===slug || p.id===slug) ?? null; }
export async function getCategory(category:string){ const all=await getProducts(); return all.filter(p=>p.category===category); }
