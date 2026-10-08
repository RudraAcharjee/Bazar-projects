export type Product = {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  image: string;
  unit: string;
  price: number;
  change: number;
  category: string;
  categoryLabel: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  markets: { name: string; price: number; note?: string }[];
};
