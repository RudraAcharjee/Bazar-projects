# 🛒 বাজার দর (BazarDor)

বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের আনুমানিক বাজারদর, দামের ওঠানামা এবং ক্যাটাগরিভিত্তিক পণ্য দেখার জন্য একটি beginner-friendly Next.js প্রজেক্ট।

## ফিচার

- আজ দাম বাড়ছে ও কমছে—এমন পণ্যের আলাদা তালিকা
- বাংলা সংখ্যায় পণ্যের দাম ও পরিবর্তনের হার
- চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার ক্যাটাগরি
- ক্যাটাগরির পণ্য দামের কম-বেশি অনুযায়ী সাজানো
- পণ্যের বিস্তারিত পেজ; বিস্তারিত দেখতে সাইন ইন প্রয়োজন
- Better Auth দিয়ে ইমেইল/পাসওয়ার্ড authentication
- Google ও GitHub OAuth-এর ঐচ্ছিক সেটআপ
- প্রোফাইলের নাম আপডেট
- মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য responsive layout
- API unavailable হলে local sample data দিয়ে হোমপেজ চালু রাখা
- Friendly 404 এবং page error state

## ব্যবহৃত প্রযুক্তি

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Better Auth
- PostgreSQL (Neon recommended for Vercel)
- `react-hot-toast`


```bash
npm run auth:migrate
```

```bash
npm run dev
```

ব্রাউজারে খুলুন: `http://localhost:3000`