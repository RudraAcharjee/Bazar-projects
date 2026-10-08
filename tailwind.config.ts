import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { sans: ["Arial", "sans-serif"] }, boxShadow: { soft: "0 14px 40px rgba(22, 101, 52, .08)" } } }, plugins: [] } satisfies Config;
