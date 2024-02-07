"use client";

import { withNoSSR } from "@/lib/utils";
import { spotifyAuthResponseSchema } from "@/lib/schemas";

import { DataForm } from "@/ui/form";

/**
 * @returns /auth/callback page component
 */
function Page() {
  const params = spotifyAuthResponseSchema.parse(window.location.hash);

  if ("error" in params) {
    throw new Error(`Failed to authenticate: ${params.error}`);
  }

  const localState = localStorage.getItem("state");

  if (localState !== params.state) {
    throw new Error("Invalid state");
  }

  return (
    <main>
      You have been logged in. since we dont store your raw data, it will expire
      in 1 hour. Before showing your processed data, we will ask you a few
      questions:
      <DataForm accessToken={params.access_token} />
    </main>
  );
}

export default withNoSSR(Page);
