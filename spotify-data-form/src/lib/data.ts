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
  "average" | "listened" | "spotify_id"
>;

type UserInferedData = Omit<UserCreation, keyof UserDefinedData>;

/**
 * @param accessToken - Spotify access token
 * @returns - User inferred data
 */
export async function getUserData(accessToken: string) {
  console.log("getUserData: ");

  const preferedSongs = await fetchSpotifyTopItems<"tracks">(
    accessToken,
    "tracks",
    "long_term",
  );

  const userInfo = await fetchUserInfo(accessToken);

  let danceability = 0;
  let trackCount = 0;
  let loudness = 0;

  for (const song of preferedSongs.items) {
    // eslint-disable-next-line no-await-in-loop
    const trackFeatures = await fetchTrackFeatures(accessToken, song.id);
    danceability += trackFeatures.danceability;
    loudness += trackFeatures.loudness;
    trackCount += 1;
  }

  console.log("trackCount: ", trackCount);

  let artistCount = 0;
  await fetchSpotifyTopItems(accessToken, "artists", "long_term").then(
    (data) => {
      artistCount = data.total;
    },
  );

  console.log("artistCount: ", artistCount);

  return {
    average_danceability: danceability / trackCount,
    average_loudness: loudness / trackCount,
    average_listened_artists: artistCount,
    spotify_id: userInfo.id,
  } satisfies UserInferedData;
}
