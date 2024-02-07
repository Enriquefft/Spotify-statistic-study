"use server";

import { redirect } from "next/navigation";
import { getRedirectURL } from "@/lib/spotify";
import {
  getUserData,
  type UserDefinedData,
  type UserCreation,
} from "@/lib/data";
import { supabaseClient } from "@/lib/supabase";

/**
 * @param state - The state to pass to the Spotify auth endpoint to avoid CSRF.
 * @returns The URL to redirect the user to for authentication.
 */
export async function spotifyAuthRedirect(state: string) {
  redirect(await getRedirectURL(state));
}

/**
 * @param accessToken - The access token to use to query the Spotify API.
 * @param userDefinedData - The user's defined data to insert into the DB.
 * @returns The user's inserted Spotify ID.
 */
export async function populateDB(
  accessToken: string,
  userDefinedData: UserDefinedData,
) {
  console.log("populateDB: ", userDefinedData);

  const newUserEntry: UserCreation = Object.assign(
    userDefinedData,
    await getUserData(accessToken),
  );

  console.log("new user: ", newUserEntry.spotifyId);

  const { data, error } = await supabaseClient
    .from("users")
    .insert(newUserEntry)
    .select();

  if (error) {
    console.error(error);
  }

  return data?.at(0)?.spotifyId;
}
