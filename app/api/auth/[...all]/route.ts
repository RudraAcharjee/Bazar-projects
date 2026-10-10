import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

function databaseNotConfigured() {
  return NextResponse.json(
    {
      message:
        "Authentication is not configured. Add DATABASE_URL and create the Better Auth database tables.",
    },
    { status: 503 }
  );
}

export async function GET(request: Request) {
  if (!process.env.DATABASE_URL) return databaseNotConfigured();
  return handlers.GET(request);
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) return databaseNotConfigured();
  return handlers.POST(request);
}
