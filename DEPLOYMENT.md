# Deployment checklist

## Required environment variables

- `DATABASE_URL`: hosted PostgreSQL connection string (Neon recommended)
- `BETTER_AUTH_SECRET`: long, random secret kept private
- `BETTER_AUTH_URL`: `http://localhost:3000` locally; deployed HTTPS URL on Vercel

Optional social providers:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

## Before deploying

1. Create a hosted PostgreSQL database and confirm the app can connect to it.
2. Add all required environment variables to the local `.env.local` and Vercel project settings. Never commit `.env.local`.
3. Create the Better Auth tables using the migration command supported by the installed Better Auth version.
4. Run `npm run lint` and `npm run build` locally.
5. Deploy and test home page, category sorting, invalid product 404, sign-up, sign-in, protected product details, profile update, and sign-out.
6. Check Vercel runtime logs if authentication or database calls fail.

A missing database configuration is handled as a signed-out state on protected pages to avoid crashing the page render. It does not make authentication work without a real database; configure PostgreSQL before testing sign-up/sign-in.
