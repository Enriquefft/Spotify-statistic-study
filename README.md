# Musical preference for Lima college students according to Spotify data

Project made for the Statistics II course @Utec

## Relevance

- Aplicaciónes de la data en IA
  El uso de la Inteligencia Artificial (IA) en Spotify incluye el reconocimiento de emociones en las canciones, lo que sirve para mejorar las listas de reproducción personalizadas y la experiencia general del usuario. Al analizar elementos como el tono, el ritmo y la letra de una canción, Spotify puede determinar el estado de ánimo que transmite y sugerir música que se alinea con las emociones o el estado mental del usuario. Por ejemplo, si un usuario tiende a escuchar canciones más tranquilas y melódicas por la noche, Spotify puede identificar esta tendencia y recomendar canciones similares durante ese periodo del día.
  Además, Spotify utiliza algoritmos de machine learning en su sistema de recomendación. Estos algoritmos consideran factores como la popularidad de las canciones, las tendencias musicales actuales, y lo que escuchan usuarios con gustos similares. Esto permite a Spotify ofrecer recomendaciones altamente personalizadas.

- Aplicaciónes de la data en marketing
  ¿En qué medida contribuye el análisis estadístico de data musical en el marketing de hoy en día? La música es el día a día de las personas y las empresas están interesadas en satisfacer las necesidades primarias de sus usuarios. Considerando Spotify como una de las aplicaciones musicales más conocida de la actualidad, la recuperación de sus datos resulta una caza interesante de información para el marketing de empresas, más aún siendo de carácter público. El marketing de empresas usando datos de Spotify suelen centrarse en el análisis de comportamientos y preferencias de los usuarios para crear estrategias más efectivas. Esto puede incluir la segmentación de audiencia y personalización de mensajes publicitarios, las colaboraciones musicales con artistas populares (o en tendencia) o el análisis probabilístico de tendencias, tanto las presentes como las futuras.

## Objectives

This is a study which gathers data from multiple college students from lima with the goal of finding patterns in their musical preferences.

- [ ] Preferred genres according to the university/institute and district in which they study
- [ ] Relationship between 'danceability' and age
  - Hypothesis: Danceability is greater in people between the ages of 15 and 25
- [ ] Relationship between song duration and artist genre
- [ ] How varied is the music that people listen to according to their age and district

## Data obtention

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

In order to obtain the user IDs and data, we will need to create an authentication system that allows us to obtain people's data. In addition, we will have a data pipeline that extracts relevant data from the Spotify API and stores it in a Google Sheets, which can then be exported to a CSV and finally to an R dataframe.

### Study Variables

This study requires the users to provide their Spotify data, which might be a problem for some people. We will need to make sure that the data is anonymized and that the users are aware of what data we are collecting and how we are using it. With all this considered, we expect that an atractive web app will help us get a good amount of data.
Regerding the target population, we expect to get a good amount of data from UTEC students as well as from other universities in Lima, specially if we consider that almost all university students use Spotify.

The minimum amount of data we need is 200 entries, but for a more robust study, we would need at least 500 entries, considering the amoun of students in UTEC, this will be attainable, at worst, the data will be mostly from utec which will generate bias on the first objective.

## Variables used in the study

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
| Rate of prefered artists genre for Pop      | Continuous | [0, 1]         |
| ... for Rock                                | Continuous | [0, 1]         |
| ... for Reggaeton                           | Continuous | [0, 1]         |
| ... for blues                               | Continuous | [0, 1]         |

## Sample data

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

## Refereces

- Hujran, O., Alikaj, A., Durrani, U., & Al-Dmour, N. A. (2020). Big Data and its Effect on the Music Industry. ACM. https://doi.org/10.1145/3378936.3378957
- Álvarez, P., De Quirós, J. G., & Baldassarri, S. (2023). RIADA: a Machine-Learning based infrastructure for recognising the emotions of Spotify songs. International Journal of Interactive Multimedia and Artificial Intelligence, 8(2), 168. https://doi.org/10.9781/ijimai.2022.04.002
- Spotify for Developers. (18 de enero de 2024).
  https://developer.spotify.com/
