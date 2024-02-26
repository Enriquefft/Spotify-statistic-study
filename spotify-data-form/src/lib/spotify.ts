/* eslint-disable @typescript-eslint/naming-convention */

import { env } from "@/env.mjs";

const BASE_SPOTIFY_API_URL = "https://api.spotify.com/v1";
const BASE_SPOTIFY_TOP_ITEMS_URL = `${BASE_SPOTIFY_API_URL}/me/top`;
const BASE_SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SPOTIFY_REDIRECT_URI = env.NEXT_PUBLIC_REDIRECT_URI;

/**
 * @param accessToken - Spotify access token
 * @param artistId - Spotify artist id
 * @returns - Spotify artist info
 */
export async function fetchArtistInfo(accessToken: string, artistId: string) {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const url = `${BASE_SPOTIFY_API_URL}/artists/${artistId}`;
  return fetch(url, { headers }).then(
    async (res) => res.json() as Promise<SpotifyApi.ArtistObjectFull>,
  );
}

/**
 * @param accessToken - Spotify access token
 * @param trackId - Spotify track id
 * @returns - Spotify track features
 */
export async function fetchTrackFeatures(accessToken: string, trackId: string) {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const url = `${BASE_SPOTIFY_API_URL}/audio-features/${trackId}`;

  return fetch(url, { headers }).then(
    async (res) => res.json() as Promise<SpotifyApi.AudioFeaturesObject>,
  );
}

/**
 * @param accessToken - Spotify access token
 * @returns - Spotify user info
 */
export async function fetchUserInfo(accessToken: string) {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const url = `${BASE_SPOTIFY_API_URL}/me`;
  return fetch(url, { headers }).then(
    async (res) => res.json() as Promise<SpotifyApi.UserObjectPrivate>,
  );
}

const LIMIT = 50;

type ItemType = "artists" | "tracks";
type TimeRange = "long_term" | "medium_term" | "short_term";

type SpotifyResponse<T extends ItemType> =
  | (T extends "artists"
      ? SpotifyApi.UsersTopArtistsResponse
      : SpotifyApi.UsersTopTracksResponse)
  | { error: SpotifyApi.ErrorObject };
type SpotifyItem<T extends ItemType> = T extends "artists"
  ? SpotifyApi.ArtistObjectFull
  : SpotifyApi.TrackObjectFull;

/**
 * @param accessToken - Spotify access token
 * @param itemType - artists | tracks
 * @param timeRange - long_term | medium_term | short_term
 * @returns - Spotify response items
 */
export async function fetchSpotifyTopItems<T extends ItemType>(
  accessToken: string,
  itemType: T,
  timeRange: TimeRange = "long_term",
) {
  console.log("fetchSpotifyTopItems");

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const url = `${BASE_SPOTIFY_TOP_ITEMS_URL}/${itemType}?time_range=${timeRange}&limit=${LIMIT}`;

  // eslint-disable-next-line no-await-in-loop
  const data = await fetch(url, { headers }).then(
    async (res) => res.json() as Promise<SpotifyResponse<T>>,
  );

  console.log("fetched in fetchSpotifyTopItems: ");

  if ("error" in data || data.items.length === 0) {
    return [];
  }

  return data.items as SpotifyItem<T>[];
}

const authParams = new URLSearchParams({
  response_type: "token",
  client_id: env.SPOTIFY_CLIENT_ID,
  redirect_uri: SPOTIFY_REDIRECT_URI,
  scope: "user-top-read",
});

/**
 * @param state - state to be passed to spotify
 * @returns - spotify auth url
 */
export async function getRedirectURL(state: string) {
  authParams.set("state", state);

  return `${BASE_SPOTIFY_AUTH_URL}?${authParams.toString()}` as const;
}
