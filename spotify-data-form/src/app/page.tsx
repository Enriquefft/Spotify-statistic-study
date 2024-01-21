"use client";

import { spotifyAuthRedirect } from "@/lib/actions";

/**
 *
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
      <button onClick={login}>LOGIN</button>
    </main>
  );
}
