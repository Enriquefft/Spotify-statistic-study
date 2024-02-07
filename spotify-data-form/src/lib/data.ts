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
  console.log("getUserData: ");

  const preferedSongs = fetchSpotifyTopItems<"tracks">(
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

  const errors: string[] = [];

  for await (const songs of preferedSongs) {
    for (const song of songs) {
      // eslint-disable-next-line no-await-in-loop
      const trackFeatures = await fetchTrackFeatures(accessToken, song.id);
      danceability += trackFeatures.danceability;
      loudness += trackFeatures.loudness;
      trackCount += 1;

      for (const artist of song.artists) {
        // eslint-disable-next-line no-await-in-loop
        await fetchArtistInfo(accessToken, artist.id).then((artistInfo) => {
          for (const genre of artistInfo.genres) {
            const lowerGenre = genre.replace(
              / /gu,
              "_",
            ) as (typeof genders)[number];

            try {
              genderDurations[lowerGenre].duration += song.duration_ms;
              genderDurations[lowerGenre].count += 1;
            } catch (err) {
              errors.push(lowerGenre);
            }
          }
        });
      }
    }
  }

  console.log("trackCount: ", trackCount);

  const genderDurationEntries = Object.entries(genderDurations) as [
    (typeof genders)[number],
    { duration: number; count: number },
  ][];

  const averageGenderDurations = genderDurationEntries.reduce<UserDurationData>(
    (accum, currentGender) => {
      accum[`average_duration_${currentGender[0]}`] =
        currentGender[1].duration / (currentGender[1].count || 1);

      accum[`listened_${currentGender[0]}_rate`] =
        currentGender[1].count / (trackCount || 1);

      return accum;
    },
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    {} as UserDurationData,
  );

  console.log(
    "averageGenderDurations - acoutstic: ",
    averageGenderDurations.average_duration_acoustic,
  );

  let artistCount = 0;
  for await (const artists of preferedArtists) {
    artistCount += artists.length;
  }

  console.log("spotifyId: ", userInfo.id);

  return {
    ...averageGenderDurations,
    average_danceability: danceability / trackCount,
    average_loudness: loudness / trackCount,
    average_listened_artists: artistCount,
    spotifyId: userInfo.id,
  } satisfies UserInferedData;
}
