/* eslint-disable @typescript-eslint/naming-convention */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const SPOTIFY_SECRET_LENGTH = 32;

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string().length(SPOTIFY_SECRET_LENGTH),
    SPOTIFY_CLIENT_SECRET: z.string().length(SPOTIFY_SECRET_LENGTH),
    MAX_ITEMS_PER_USER: z.coerce.number(),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  },
  runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    MAX_ITEMS_PER_USER: process.env.MAX_ITEMS_PER_USER,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
