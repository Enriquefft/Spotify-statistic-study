"use client";

import { spotifyAuthRedirect } from "@/lib/actions";

/**
 * @returns Home page component
 */
export default function Home() {
  /**
   *
   */
  async function login() {
    const state = crypto.randomUUID();
    localStorage.setItem("state", state);
    await spotifyAuthRedirect(state);
  }

  return (
    <main>
      <button onClick={login}>LOGIN HERE TO CONTRIBUTE</button>
    </main>
  );
}
