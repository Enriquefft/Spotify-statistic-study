/* eslint-disable @typescript-eslint/naming-convention */
"use server";

import { env } from "@/env.mjs";
import { redirect } from "next/navigation";

const BASE_SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/auth/callback";

const authParams = new URLSearchParams({
  response_type: "token",
  client_id: env.SPOTIFY_CLIENT_ID,
  redirect_uri: SPOTIFY_REDIRECT_URI,
  scope: "user-top-read",
});

/**
 * @param {string} state - The state to pass to the Spotify auth endpoint to avoid CSRF.
 * @returns {string} The URL to redirect the user to for authentication.
 */
export async function spotifyAuthRedirect(state: string) {
  authParams.set("state", state);
  redirect(`${BASE_SPOTIFY_AUTH_URL}?${authParams.toString()}`);
}
