/* eslint-disable @typescript-eslint/naming-convention */
import type { Database } from "@/schema.gen";
import type { OmitStarting } from "./utils";

import {
  fetchSpotifyTopItems,
  fetchTrackFeatures,
  fetchUserInfo,
} from "./spotify";

export type UserCreation = Database["public"]["Tables"]["users"]["Insert"];

export type UserDefinedData = OmitStarting<
  UserCreation,
  "average" | "listened" | "spotifyId"
>;

type UserInferedData = Omit<UserCreation, keyof UserDefinedData>;

/**
 * @param accessToken - Spotify access token
 * @returns - User inferred data
 */
export async function getUserData(accessToken: string) {
  const preferedSongs = fetchSpotifyTopItems(
    accessToken,
    "tracks",
    "long_term",
  );
  const preferedArtists = fetchSpotifyTopItems(
    accessToken,
    "artists",
    "long_term",
  );

  const userInfo = await fetchUserInfo(accessToken);

  let danceability = 0;
  let trackCount = 0;
  let artistCount = 0;

  for await (const songs of preferedSongs) {
    for (const song of songs) {
      // Danceability value depends on the previous value, so we need to wait for the previous request to finish
      // eslint-disable-next-line no-await-in-loop
      const trackFeatures = await fetchTrackFeatures(accessToken, song.id);
      danceability += trackFeatures.danceability;
      trackCount += 1;
    }
  }

  for await (const artists of preferedArtists) {
    // TODO: make use of the artists data
    for (const _ of artists) {
      artistCount += 1;
    }
  }

  return {
    average_danceability: danceability / trackCount,
    average_listened_artists: artistCount,
    spotifyId: Number(userInfo.id),
  } satisfies UserInferedData;
}
