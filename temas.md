# Temas evaluados

## Gustos musicales de alumnos universitarios de Lima segun Spotify

### Relevancia de estudio

- Aplicaciónes de la data en IA
  ...
- Aplicaciónes de la data en marketing
  ...

### Objectives

- [ ] Preferred genres according to the university/institute and district in which they study
- [ ] Relationship between 'danceability' and age
  - Hypothesis: Danceability is greater in people between the ages of 15 and 25
- [ ] Relationship between song duration and artist genre
- [ ] How varied is the music that people listen to according to their age and district

### Obtención de data:

Each entry in the dataset will correspond to the user ID of a student, and will have as its value a list of artists they listen to, the number of times they listen to them, among others. The data will be obtained from the Spotify API, with the following (simplified) code:

```python

# Authorize and Authenticate
# ...

from spotipy import Spoify

top_artists: Const = spotify.current_user_top_artists()
top_tracks: Const = spotify.current_user_top_tracks()

listened_artists: Spotify.Artist[] = []

# Extra data
for track in top_tracks["items"]:
    features = spotify.audio_features(track["id"])
    analysis = spotify.audio_analysis(track["id"])
    listened_artists.merge(track["artists"]['items'])

```

In order to obtain the user IDs and data, we will need to create an authentication system that allows us to obtain people's data. In addition, we will have a data pipeline that extracts relevant data from the Spotify API and stores it in a Google Sheets, which can then be exported to a CSV and finally to an R dataframe."

### Variables used in the study

#### Primary

| Variable                   | Type     | Restrictions           |
| -------------------------- | -------- | ---------------------- |
| Study center               | Nominal  | None                   |
| Age                        | Discrete | ~ [15, 40]             |
| District                   | Nominal  | Lima districts         |
| Percieved musical variety  | Ordinal  | [1, 5]                 |
| Percieved prefered genders | Nominal  | Spotify artist genders |

#### Secondary

| Variable                                    | Type       | Restrictions   |
| ------------------------------------------- | ---------- | -------------- |
| Average danceability of prefered songs      | Continuous | [0, 1]         |
| Average number of artists listened per year | Continuous | $\mathbb{R}^+$ |
| Average duration of prefered Pop songs      | Continuous | [0, 60000] ms  |
| ... of Rock songs                           | Continuous | [0, 60000] ms  |
| ... of Reggaeton songs                      | Continuous | [0, 60000] ms  |
| ... of blues songs                          | Continuous | [0, 60000] ms  |
| Rate of prefered Pop artists                | Continuous | [0, 1]         |
| ... of Rock songs                           | Continuous | [0, 1]         |
| ... of Reggaeton songs                      | Continuous | [0, 1]         |
| ... of blues songs                          | Continuous | [0, 1]         |

### Factibilidad de estudio

This study requires the users to provide their Spotify data, which might be a problem for some people. We will need to make sure that the data is anonymized and that the users are aware of what data we are collecting and how we are using it. With all this considered, we expect that an atractive web app will help us get a good amount of data.
Regerding the target population, we expect to get a good amount of data from UTEC students as well as from other universities in Lima, specially if we consider that almost all university students use Spotify.

The minimum amount of data we need is 200 entries, but for a more robust study, we would need at least 500 entries, considering the amoun of students in UTEC, this will be attainable, at worst, the data will be mostly from utec which will generate bias on the first objective.

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

#### Audio analysis

This is usefull in the context of AI

```json
{
  "meta": {
    "analyzer_version": "4.0.0",
    "platform": "Linux",
    "detailed_status": "OK",
    "status_code": 0,
    "timestamp": 1495193577,
    "analysis_time": 6.93906,
    "input_process": "libvorbisfile L+R 44100->22050"
  },
  "track": {
    "num_samples": 4585515,
    "duration": 207.95985,
    "sample_md5": "string",
    "offset_seconds": 0,
    "window_seconds": 0,
    "analysis_sample_rate": 22050,
    "analysis_channels": 1,
    "end_of_fade_in": 0,
    "start_of_fade_out": 201.13705,
    "loudness": -5.883,
    "tempo": 118.211,
    "tempo_confidence": 0.73,
    "time_signature": 4,
    "time_signature_confidence": 0.994,
    "key": 9,
    "key_confidence": 0.408,
    "mode": 0,
    "mode_confidence": 0.485,
    "codestring": "string",
    "code_version": 3.15,
    "echoprintstring": "string",
    "echoprint_version": 4.15,
    "synchstring": "string",
    "synch_version": 1,
    "rhythmstring": "string",
    "rhythm_version": 1
  },
  "bars": [
    {
      "start": 0.49567,
      "duration": 2.18749,
      "confidence": 0.925
    }
  ],
  "beats": [
    {
      "start": 0.49567,
      "duration": 2.18749,
      "confidence": 0.925
    }
  ],
  "sections": [
    {
      "start": 0,
      "duration": 6.97092,
      "confidence": 1,
      "loudness": -14.938,
      "tempo": 113.178,
      "tempo_confidence": 0.647,
      "key": 9,
      "key_confidence": 0.297,
      "mode": -1,
      "mode_confidence": 0.471,
      "time_signature": 4,
      "time_signature_confidence": 1
    }
  ],
  "segments": [
    {
      "start": 0.70154,
      "duration": 0.19891,
      "confidence": 0.435,
      "loudness_start": -23.053,
      "loudness_max": -14.25,
      "loudness_max_time": 0.07305,
      "loudness_end": 0,
      "pitches": [0.212, 0.141, 0.294],
      "timbre": [42.115, 64.373, -0.233]
    }
  ],
  "tatums": [
    {
      "start": 0.49567,
      "duration": 2.18749,
      "confidence": 0.925
    }
  ]
}
```
