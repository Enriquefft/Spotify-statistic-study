/* eslint-disable @typescript-eslint/naming-convention */
import type { Database } from "@/schema.gen";
import type { OmitStarting } from "./utils";

import {
  fetchSpotifyTopItems,
  fetchTrackFeatures,
  fetchUserInfo,
  fetchArtistInfo,
} from "./spotify";

import { baseGenderDurations, type genders } from "./genders";

export type UserCreation = Database["public"]["Tables"]["users"]["Insert"];

export type UserDefinedData = OmitStarting<
  UserCreation,
  "average" | "listened" | "spotifyId"
>;

type UserInferedData = Omit<UserCreation, keyof UserDefinedData>;

type UserDurationData = OmitStarting<
  UserInferedData,
  | "spotifyId"
  | "average_listened_artists"
  | "average_loudness"
  | "average_danceability"
>;

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
  let loudness = 0;

  const genderDurations = structuredClone(baseGenderDurations);

  for await (const songs of preferedSongs) {
    for (const song of songs) {
      // Danceability value depends on the previous value, so we need to wait for the previous request to finish
      // eslint-disable-next-line no-await-in-loop
      const trackFeatures = await fetchTrackFeatures(accessToken, song.id);
      danceability += trackFeatures.danceability;
      loudness += trackFeatures.loudness;
      trackCount += 1;

      song.artists.forEach((artist) => {
        // eslint-disable-next-line no-await-in-loop
        fetchArtistInfo(accessToken, artist.id)
          .then((artistInfo) => {
            for (const genre of artistInfo.genres as (typeof genders)[number][]) {
              genderDurations[genre].duration += song.duration_ms;
              genderDurations[genre].count += 1;
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }

  const genderDurationEntries = Object.entries(genderDurations) as [
    (typeof genders)[number],
    { duration: number; count: number },
  ][];

  const averageGenderDurations = genderDurationEntries.reduce<UserDurationData>(
    (accum, currentGender) => {
      accum[`average_duration_${currentGender[0]}`] =
        currentGender[1].duration / currentGender[1].count;

      accum[`listened_${currentGender[0]}_rate`] =
        currentGender[1].count / trackCount;

      return accum;
    },
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    {} as UserDurationData,
  );

  let artistCount = 0;
  for await (const artists of preferedArtists) {
    artistCount += artists.length;
  }

  return {
    ...averageGenderDurations,
    average_danceability: danceability / trackCount,
    average_loudness: loudness / trackCount,
    average_listened_artists: artistCount,
    spotifyId: Number(userInfo.id),
  } satisfies UserInferedData;
}
