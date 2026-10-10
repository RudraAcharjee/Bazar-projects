import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * Read the current Better Auth session without crashing a Server Component.
 * A hosted PostgreSQL database must be configured for authentication to work.
 */
export async function getCurrentSession() {
  if (!process.env.DATABASE_URL) {
    console.error(
      "Better Auth is not configured: DATABASE_URL is missing. Add a PostgreSQL/Neon connection string to .env.local and your hosting environment."
    );
    return null;
  }

  try {
    return await auth.api.getSession({ headers: await headers() });
  } catch (error) {
    console.error("Could not read the Better Auth session. Check DATABASE_URL and the Better Auth database schema.", error);
    return null;
  }
}
