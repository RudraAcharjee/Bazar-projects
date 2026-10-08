import type { Product } from "./types";

export const fallbackProducts: Product[] = [
  {id:"1",slug:"miniket-chal",name:"মিনিকেট চাল",emoji:"🍚",unit:"প্রতি কেজি",price:82,change:2.8,category:"chal",categoryLabel:"চাল",description:"আজকের বাজারে মিনিকেট চালের দাম কিছুটা বেড়েছে।",minPrice:78,maxPrice:88,avgPrice:82,markets:[{name:"কারওয়ান বাজার",price:82},{name:"মিরপুর বাজার",price:84},{name:"নিউ মার্কেট",price:80}]},
  {id:"2",slug:"swarnamashi-chal",name:"স্বর্ণমাছি চাল",emoji:"🍚",unit:"প্রতি কেজি",price:74,change:1.9,category:"chal",categoryLabel:"চাল",description:"জনপ্রিয় মাঝারি মানের চাল।",minPrice:70,maxPrice:78,avgPrice:74,markets:[{name:"কারওয়ান বাজার",price:74},{name:"মিরপুর বাজার",price:76},{name:"নিউ মার্কেট",price:72}]},
  {id:"3",slug:"mosur-dal",name:"মসুর ডাল",emoji:"🫘",unit:"প্রতি কেজি",price:142,change:-2.4,category:"dal",categoryLabel:"ডাল",description:"দেশি মসুর ডালের আজকের গড় বাজারদর।",minPrice:135,maxPrice:150,avgPrice:142,markets:[{name:"কারওয়ান বাজার",price:140},{name:"মিরপুর বাজার",price:145},{name:"নিউ মার্কেট",price:142}]},
  {id:"4",slug:"soyabean-oil",name:"সয়াবিন তেল",emoji:"🫙",unit:"প্রতি লিটার",price:185,change:-1.7,category:"tel",categoryLabel:"তেল",description:"বোতলজাত সয়াবিন তেলের বাজারদর।",minPrice:180,maxPrice:190,avgPrice:185,markets:[{name:"কারওয়ান বাজার",price:184},{name:"মিরপুর বাজার",price:186},{name:"নিউ মার্কেট",price:185}]},
  {id:"5",slug:"alu",name:"আলু",emoji:"🥔",unit:"প্রতি কেজি",price:32,change:3.6,category:"sobji",categoryLabel:"সবজি",description:"আজ আলুর দাম ঊর্ধ্বমুখী।",minPrice:28,maxPrice:36,avgPrice:32,markets:[{name:"কারওয়ান বাজার",price:31},{name:"মিরপুর বাজার",price:33},{name:"নিউ মার্কেট",price:32}]},
  {id:"6",slug:"peyaj",name:"পেঁয়াজ",emoji:"🧅",unit:"প্রতি কেজি",price:86,change:-3.1,category:"sobji",categoryLabel:"সবজি",description:"পেঁয়াজের বাজারদর আজ কিছুটা কমেছে।",minPrice:80,maxPrice:92,avgPrice:86,markets:[{name:"কারওয়ান বাজার",price:84},{name:"মিরপুর বাজার",price:88},{name:"নিউ মার্কেট",price:86}]},
  {id:"7",slug:"morich",name:"কাঁচা মরিচ",emoji:"🌶️",unit:"প্রতি কেজি",price:210,change:4.2,category:"sobji",categoryLabel:"সবজি",description:"কাঁচা মরিচের দাম বেড়েছে।",minPrice:190,maxPrice:230,avgPrice:210,markets:[{name:"কারওয়ান বাজার",price:205},{name:"মিরপুর বাজার",price:215},{name:"নিউ মার্কেট",price:210}]},
  {id:"8",slug:"ilish",name:"ইলিশ মাছ",emoji:"🐟",unit:"প্রতি কেজি",price:1850,change:2.1,category:"mach",categoryLabel:"মাছ",description:"ইলিশের বাজারে আজকের গড় দাম।",minPrice:1700,maxPrice:2000,avgPrice:1850,markets:[{name:"কারওয়ান বাজার",price:1800},{name:"মিরপুর বাজার",price:1900},{name:"নিউ মার্কেট",price:1850}]},
  {id:"9",slug:"broiler",name:"ব্রয়লার মুরগি",emoji:"🍗",unit:"প্রতি কেজি",price:190,change:-2.9,category:"mangsho",categoryLabel:"মাংস",description:"ব্রয়লার মুরগির আজকের বাজারদর।",minPrice:180,maxPrice:200,avgPrice:190,markets:[{name:"কারওয়ান বাজার",price:188},{name:"মিরপুর বাজার",price:192},{name:"নিউ মার্কেট",price:190}]},
  {id:"10",slug:"dim",name:"ডিম",emoji:"🥚",unit:"প্রতি ডজন",price:150,change:1.2,category:"dim",categoryLabel:"ডিম",description:"খুচরা বাজারে ডিমের গড় দর।",minPrice:145,maxPrice:155,avgPrice:150,markets:[{name:"কারওয়ান বাজার",price:148},{name:"মিরপুর বাজার",price:152},{name:"নিউ মার্কেট",price:150}]},
  {id:"11",slug:"ada",name:"আদা",emoji:"🫚",unit:"প্রতি কেজি",price:260,change:0,category:"moshla",categoryLabel:"মসলা",description:"আদার বাজারদর অপরিবর্তিত।",minPrice:240,maxPrice:280,avgPrice:260,markets:[{name:"কারওয়ান বাজার",price:260},{name:"মিরপুর বাজার",price:265},{name:"নিউ মার্কেট",price:255}]},
  {id:"12",slug:"roshun",name:"রসুন",emoji:"🧄",unit:"প্রতি কেজি",price:230,change:-1.4,category:"moshla",categoryLabel:"মসলা",description:"রসুনের বাজারদর আজ কমেছে।",minPrice:215,maxPrice:245,avgPrice:230,markets:[{name:"কারওয়ান বাজার",price:228},{name:"মিরপুর বাজার",price:235},{name:"নিউ মার্কেট",price:227}]}
];

const key = (x: unknown) => String(x ?? "").trim();
const num = (x: unknown, fallback=0) => { const n=Number(x); return Number.isFinite(n) ? n : fallback; };
const pick = (o: any, keys: string[], fallback: any = undefined) => { for (const k of keys) if (o?.[k] !== undefined && o?.[k] !== null) return o[k]; return fallback; };

export function normalizeProducts(payload: any): Product[] {
  const rows = Array.isArray(payload) ? payload : payload?.data ?? payload?.products ?? [];
  if (!Array.isArray(rows) || !rows.length) return fallbackProducts;
  return rows.map((p:any, i:number) => {
    const name=key(p.name ?? p.title ?? `পণ্য ${i+1}`); const price=num(p.price ?? p.currentPrice ?? p.todayPrice ?? p.averagePrice, 0);
    const change=num(p.change ?? p.changePercent ?? p.percentage ?? p.percent, 0); const category=key(p.category ?? p.categorySlug ?? "other") || "other";
    const markets=Array.isArray(p.markets) ? p.markets.map((m:any)=>({name:key(m.name ?? m.bazar ?? m.market ?? "বাজার"),price:num(m.price ?? m.todayPrice ?? m.currentPrice,price),note:key(m.note) || undefined})) : fallbackProducts[i%fallbackProducts.length].markets;
    const slug=key(p.slug) || name.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-|-$/g,"") || `product-${i+1}`;
    return {id:key(p.id ?? i+1),slug,name,emoji:key(p.emoji ?? p.icon ?? fallbackProducts[i%fallbackProducts.length].emoji),unit:key(p.unit ?? p.unitName ?? "প্রতি কেজি"),price,change,category,categoryLabel:key(p.categoryLabel ?? p.categoryName ?? category),description:key(p.description ?? p.summary ?? "আজকের বাজারদর এক নজরে দেখুন।"),minPrice:num(p.minPrice ?? p.minimumPrice,price),maxPrice:num(p.maxPrice ?? p.maximumPrice,price),avgPrice:num(p.avgPrice ?? p.averagePrice,price),markets};
  });
}
