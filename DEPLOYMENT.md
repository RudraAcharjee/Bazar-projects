# Deployment checklist

## Local setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Create a PostgreSQL database (Neon is a simple option for Vercel).
4. Put the PostgreSQL connection string in `DATABASE_URL`.
5. Set a strong value for `BETTER_AUTH_SECRET`.
6. Set `BETTER_AUTH_URL=http://localhost:3000` locally.
7. Run `npm run auth:migrate` to create the Better Auth tables.
8. Run `npm run build`.

## Vercel

Add these Production Environment Variables in Vercel:

- `DATABASE_URL` = your Neon/PostgreSQL connection string
- `BETTER_AUTH_SECRET` = a long random secret
- `BETTER_AUTH_URL` = your Vercel production URL, for example `https://bazar-projects-ioby.vercel.app`
- `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` if GitHub login is enabled
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` if Google login is enabled

Then redeploy the project.

## Why SQLite was removed

The previous version used `better-sqlite3` with `./sqlite.db`. Vercel serverless functions do not provide a persistent writable project-local SQLite file, which caused `SQLITE_CANTOPEN` and the 500 error on `/product/[slug]`. This version uses PostgreSQL through `pg`, which Better Auth officially supports.
