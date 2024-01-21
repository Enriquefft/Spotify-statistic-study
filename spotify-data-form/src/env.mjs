/* eslint-disable @typescript-eslint/naming-convention */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const SPOTIFY_SECRET_LENGTH = 32;

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string().length(SPOTIFY_SECRET_LENGTH),
    SPOTIFY_CLIENT_SECRET: z.string().length(SPOTIFY_SECRET_LENGTH),
  },
  runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
});