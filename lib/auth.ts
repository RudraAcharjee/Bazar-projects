import { betterAuth } from "better-auth";
import { Pool } from "pg";

// Vercel serverless functions should use a hosted database instead of a local
// SQLite file. Set DATABASE_URL to your Neon/PostgreSQL connection string.
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("DATABASE_URL is not set. Add it to .env.local and Vercel Environment Variables.");
}

const database = new Pool({
  connectionString: databaseUrl || "postgres://localhost:5432/bazar_dor",
  max: 1,
});

export const auth = betterAuth({
  database,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET || "dev-only-change-this-secret-please",
  emailAndPassword: { enabled: true },
  socialProviders: {
    ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        }
      : {}),
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),
  },
  user: {
    changeEmail: { enabled: false },
  },
});
