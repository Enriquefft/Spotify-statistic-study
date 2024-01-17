# Temas evaluados

## Gustos musicales de alumnos universitarios de Lima segun Spotify

### Relevancia de estudio

- Aplicaciónes de la data en IA
  ...
- Aplicaciónes de la data en marketing
  ...

### Obtención de data:

Each entry in the dataset will correspond to the user ID of a student, and will have as its value a list of artists they listen to, the number of times they listen to them, among others. The data will be obtained from the Spotify API, with the following (simplified) code:

```python

# Authorize and Authenticate
# ...

from spotipy import Spoify

top_artists: Const = spotify.current_user_top_artists()
top_tracks: Const = spotify.current_user_top_tracks()

# Extra data
for track in top_tracks["items"]:
    features = spotify.audio_features(track["id"])
    analysis = spotify.audio_analysis(track["id"])
```

In order to obtain the user IDs and data, we will need to create an authentication system that allows us to obtain people's data. In addition, we will have a data pipeline that extracts relevant data from the Spotify API and stores it in a Google Sheets, which can then be exported to a CSV and finally to an R dataframe."

### Sample data

#### Track data

```json
{
  "album": {
    "album_type": "SINGLE",
    "total_tracks": 1,
    "available_markets": [...]
    "external_urls": {
      "spotify": "https://open.spotify.com/album/26wRfIX4WqKLKHll9O3KnF"
    },
    "href": "https://api.spotify.com/v1/albums/26wRfIX4WqKLKHll9O3KnF",
    "id": "26wRfIX4WqKLKHll9O3KnF",
    "images": [...],
    "name": "Rara Vez",
    "release_date": "2023-02-08",
    "release_date_precision": "day",
    "type": "album",
    "uri": "spotify:album:26wRfIX4WqKLKHll9O3KnF",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5szJHKg5xeUlQ9pTqzdpic"
        },
        "href": "https://api.spotify.com/v1/artists/5szJHKg5xeUlQ9pTqzdpic",
        "id": "5szJHKg5xeUlQ9pTqzdpic",
        "name": "Taiu",
        "type": "artist",
        "uri": "spotify:artist:5szJHKg5xeUlQ9pTqzdpic"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/19HM5j0ULGSmEoRcrSe5x3"
        },
        "href": "https://api.spotify.com/v1/artists/19HM5j0ULGSmEoRcrSe5x3",
        "id": "19HM5j0ULGSmEoRcrSe5x3",
        "name": "Milo j",
        "type": "artist",
        "uri": "spotify:artist:19HM5j0ULGSmEoRcrSe5x3"
      }
    ]
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/5szJHKg5xeUlQ9pTqzdpic"
      },
      "href": "https://api.spotify.com/v1/artists/5szJHKg5xeUlQ9pTqzdpic",
      "id": "5szJHKg5xeUlQ9pTqzdpic",
      "name": "Taiu",
      "type": "artist",
      "uri": "spotify:artist:5szJHKg5xeUlQ9pTqzdpic"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/19HM5j0ULGSmEoRcrSe5x3"
      },
      "href": "https://api.spotify.com/v1/artists/19HM5j0ULGSmEoRcrSe5x3",
      "id": "19HM5j0ULGSmEoRcrSe5x3",
      "name": "Milo j",
      "type": "artist",
      "uri": "spotify:artist:19HM5j0ULGSmEoRcrSe5x3"
    }
  ],
  "available_markets": [...],
  "disc_number": 1,
  "duration_ms": 128677,
  "explicit": false,
  "external_ids": { "isrc": "ARUM72300004" },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/7MVIfkyzuUmQ716j8U7yGR"
  },
  "href": "https://api.spotify.com/v1/tracks/7MVIfkyzuUmQ716j8U7yGR",
  "id": "7MVIfkyzuUmQ716j8U7yGR",
  "name": "Rara Vez",
  "popularity": 87,
  "preview_url": "https://p.scdn.co/mp3-preview/803366478f0973a8fb4f981688e2e033e8c1964a?cid=18e0f578df9841ea9abfa4c71c019167",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:7MVIfkyzuUmQ716j8U7yGR",
  "is_local": false
}
```

#### Artist data

```json
{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
  },
  "followers": { "href": null, "total": 0 },
  "genres": ["pop"],
  "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
  "id": "06HL4z0CvFAxyc27GXpf02",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4",
      "height": 640,
      "width": 640
    },
    {
      "url": "https://i.scdn.co/image/ab67616100005174859e4c14fa59296c8649e0e4",
      "height": 320,
      "width": 320
    },
    {
      "url": "https://i.scdn.co/image/ab6761610000f178859e4c14fa59296c8649e0e4",
      "height": 160,
      "width": 160
    }
  ],
  "name": "Taylor Swift",
  "popularity": 100,
  "type": "artist",
  "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
}
```

#### Audio features

```json
{
  "acousticness": 0.00242,
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B",
  "danceability": 0.585,
  "duration_ms": 237040,
  "energy": 0.842,
  "id": "2takcwOaAZWiXQijPHIx7B",
  "instrumentalness": 0.00686,
  "key": 9,
  "liveness": 0.0866,
  "loudness": -5.883,
  "mode": 0,
  "speechiness": 0.0556,
  "tempo": 118.211,
  "time_signature": 4,
  "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
  "type": "audio_features",
  "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
  "valence": 0.428
}
```

### Factibilidad de estudio

- ¿Cuantos alumnos hay en la universidad utec? (facil acceso)
- ¿Cuantos de ellos usan spotify?
- ¿Cuantos responderan la encuesta?
