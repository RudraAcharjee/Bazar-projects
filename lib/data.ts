import type { Product } from "./types";

function makeProduct(id:string, slug:string, name:string, emoji:string, unit:string, price:number, change:number, category:string, categoryLabel:string): Product {
  return {
    id, slug, name, emoji, unit, price, change, category, categoryLabel,
    description: `আজকের বাজারে ${name} এর বর্তমান গড় বাজারদর।`,
    minPrice: Math.round(price * 0.95),
    maxPrice: Math.round(price * 1.05),
    avgPrice: price,
    markets: [
      { name: "কারওয়ান বাজার", price: Math.round(price * 0.98) },
      { name: "মিরপুর বাজার", price: price },
      { name: "নিউ মার্কেট", price: Math.round(price * 1.02) },
    ],
  };
}

export const fallbackProducts: Product[] = [
  makeProduct('1', 'miniket-chal', 'মিনিকেট চাল', '🍚', 'প্রতি কেজি', 82, 2.8, 'chal', 'চাল'),
  makeProduct('2', 'najirshail-chal', 'নাজিরশাইল চাল', '🍚', 'প্রতি কেজি', 95, 1.8, 'chal', 'চাল'),
  makeProduct('3', 'katari-chal', 'কাটারিভোগ চাল', '🍚', 'প্রতি কেজি', 88, -1.6, 'chal', 'চাল'),
  makeProduct('4', 'paijam-chal', 'পাইজাম চাল', '🍚', 'প্রতি কেজি', 68, 2.4, 'chal', 'চাল'),
  makeProduct('5', 'mashuri-chal', 'মাশুরী চাল', '🍚', 'প্রতি কেজি', 72, -2.1, 'chal', 'চাল'),
  makeProduct('6', 'mota-chal', 'মোটা চাল', '🍚', 'প্রতি কেজি', 58, 1.3, 'chal', 'চাল'),
  makeProduct('7', 'mosur-dal', 'মসুর ডাল', '🫘', 'প্রতি কেজি', 142, -2.4, 'dal', 'ডাল'),
  makeProduct('8', 'mug-dal', 'মুগ ডাল', '🫘', 'প্রতি কেজি', 168, 1.9, 'dal', 'ডাল'),
  makeProduct('9', 'chola-dal', 'ছোলা ডাল', '🫘', 'প্রতি কেজি', 118, -1.7, 'dal', 'ডাল'),
  makeProduct('10', 'maskalai-dal', 'মাষকলাই ডাল', '🫘', 'প্রতি কেজি', 132, 2.6, 'dal', 'ডাল'),
  makeProduct('11', 'soyabean-oil', 'সয়াবিন তেল', '🫙', 'প্রতি লিটার', 185, -1.7, 'tel', 'তেল'),
  makeProduct('12', 'mustard-oil', 'সরিষার তেল', '🫙', 'প্রতি লিটার', 225, 2.2, 'tel', 'তেল'),
  makeProduct('13', 'sunflower-oil', 'সূর্যমুখী তেল', '🫙', 'প্রতি লিটার', 245, -1.2, 'tel', 'তেল'),
  makeProduct('14', 'potato', 'আলু', '🥔', 'প্রতি কেজি', 32, 3.6, 'sobji', 'সবজি'),
  makeProduct('15', 'onion', 'পেঁয়াজ', '🧅', 'প্রতি কেজি', 86, -3.1, 'sobji', 'সবজি'),
  makeProduct('16', 'green-chili', 'কাঁচা মরিচ', '🌶️', 'প্রতি কেজি', 210, 4.2, 'sobji', 'সবজি'),
  makeProduct('17', 'eggplant', 'বেগুন', '🍆', 'প্রতি কেজি', 48, 1.8, 'sobji', 'সবজি'),
  makeProduct('18', 'tomato', 'টমেটো', '🍅', 'প্রতি কেজি', 60, -2.6, 'sobji', 'সবজি'),
  makeProduct('19', 'cauliflower', 'ফুলকপি', '🥦', 'প্রতি পিস', 45, -1.5, 'sobji', 'সবজি'),
  makeProduct('20', 'cabbage', 'বাঁধাকপি', '🥬', 'প্রতি পিস', 38, 2.1, 'sobji', 'সবজি'),
  makeProduct('21', 'carrot', 'গাজর', '🥕', 'প্রতি কেজি', 70, 1.4, 'sobji', 'সবজি'),
  makeProduct('22', 'ilish', 'ইলিশ মাছ', '🐟', 'প্রতি কেজি', 1850, 2.1, 'mach', 'মাছ'),
  makeProduct('23', 'rui', 'রুই মাছ', '🐟', 'প্রতি কেজি', 420, -1.9, 'mach', 'মাছ'),
  makeProduct('24', 'katla', 'কাতলা মাছ', '🐟', 'প্রতি কেজি', 480, 1.6, 'mach', 'মাছ'),
  makeProduct('25', 'pangas', 'পাঙ্গাস মাছ', '🐟', 'প্রতি কেজি', 220, -2.2, 'mach', 'মাছ'),
  makeProduct('26', 'broiler', 'ব্রয়লার মুরগি', '🍗', 'প্রতি কেজি', 190, -2.9, 'mangsho', 'মাংস'),
  makeProduct('27', 'beef', 'গরুর মাংস', '🥩', 'প্রতি কেজি', 780, 1.7, 'mangsho', 'মাংস'),
  makeProduct('28', 'mutton', 'খাসির মাংস', '🍖', 'প্রতি কেজি', 1050, -1.3, 'mangsho', 'মাংস'),
  makeProduct('29', 'dim', 'ডিম', '🥚', 'প্রতি ডজন', 150, 1.2, 'dim', 'ডিম'),
  makeProduct('30', 'duck-egg', 'হাঁসের ডিম', '🥚', 'প্রতি ডজন', 190, -1.1, 'dim', 'ডিম'),
  makeProduct('31', 'ada', 'আদা', '🫚', 'প্রতি কেজি', 260, 2.7, 'moshla', 'মসলা'),
  makeProduct('32', 'roshun', 'রসুন', '🧄', 'প্রতি কেজি', 230, -1.4, 'moshla', 'মসলা'),
  makeProduct('33', 'holud', 'হলুদ', '🟡', 'প্রতি কেজি', 310, 1.9, 'moshla', 'মসলা'),
  makeProduct('34', 'jira', 'জিরা', '🟤', 'প্রতি কেজি', 620, 2.5, 'moshla', 'মসলা'),
  makeProduct('35', 'darchini', 'দারুচিনি', '🟫', 'প্রতি কেজি', 850, -1.6, 'moshla', 'মসলা'),
  makeProduct('36', 'elach', 'এলাচ', '🟢', 'প্রতি কেজি', 1750, 1.8, 'moshla', 'মসলা'),
];

const categoryAliases: Record<string, string> = {
  "চাল": "chal", "rice": "chal", "dal": "dal", "ডাল": "dal",
  "তেল": "tel", "oil": "tel", "সবজি": "sobji", "vegetable": "sobji",
  "মাছ": "mach", "fish": "mach", "মাংস": "mangsho", "meat": "mangsho",
  "ডিম": "dim", "egg": "dim", "মসলা": "moshla", "spice": "moshla",
};

const key = (x: unknown) => String(x ?? "").trim();
const num = (x: unknown, fallback = 0) => {
  const n = Number(x);
  return Number.isFinite(n) ? n : fallback;
};

function getFallbackByIndex(index: number) {
  return fallbackProducts[index % fallbackProducts.length];
}

function normalizeCategory(value: unknown) {
  const text = key(value).toLowerCase();
  return categoryAliases[text] || text || "other";
}

export function normalizeProducts(payload: any): Product[] {
  const rows = Array.isArray(payload) ? payload : payload?.data ?? payload?.products ?? [];
  if (!Array.isArray(rows) || !rows.length) return fallbackProducts;

  return rows.map((p: any, i: number) => {
    const fallback = getFallbackByIndex(i);
    const name = key(p.name ?? p.title ?? fallback.name);
    const price = num(p.price ?? p.currentPrice ?? p.todayPrice ?? p.averagePrice, fallback.price) || fallback.price;
    const rawChange = num(p.change ?? p.changePercent ?? p.percentage ?? p.percent, fallback.change);
    const change = rawChange === 0 ? fallback.change : rawChange;
    const category = normalizeCategory(p.category ?? p.categorySlug ?? p.categoryName ?? fallback.category);
    const categoryLabel = key(p.categoryLabel ?? p.categoryName ?? fallback.categoryLabel);
    const slug = key(p.slug) || name.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || `product-${i + 1}`;

    return {
      id: key(p.id ?? i + 1),
      slug,
      name,
      emoji: key(p.emoji ?? p.icon ?? fallback.emoji),
      unit: key(p.unit ?? p.unitName ?? fallback.unit),
      price,
      change,
      category,
      categoryLabel,
      description: key(p.description ?? p.summary ?? fallback.description),
      minPrice: num(p.minPrice ?? p.minimumPrice, Math.round(price * 0.95)),
      maxPrice: num(p.maxPrice ?? p.maximumPrice, Math.round(price * 1.05)),
      avgPrice: num(p.avgPrice ?? p.averagePrice, price),
      markets: Array.isArray(p.markets) && p.markets.length ? p.markets.map((m: any) => ({
        name: key(m.name ?? m.bazar ?? m.market ?? "বাজার"),
        price: num(m.price ?? m.todayPrice ?? m.currentPrice, price),
        note: key(m.note) || undefined,
      })) : fallback.markets,
    };
  });
}