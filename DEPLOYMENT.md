# Deployment checklist

1. `npm install`
2. Copy `.env.example` to `.env.local` and set a strong `BETTER_AUTH_SECRET`.
3. Run `npm run auth:migrate` to create Better Auth tables.
4. `npm run build`
5. Deploy to Vercel/Netlify. For production, use a persistent SQL database instead of local SQLite if the platform filesystem is ephemeral.
6. If Google/GitHub OAuth is desired, add provider credentials and configure callback URLs under `/api/auth/callback/google` and `/api/auth/callback/github` for your production domain.
