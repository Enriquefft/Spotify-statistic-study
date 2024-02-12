# Musical preference for Lima college students according to Spotify data

Project made for the Statistics II course @Utec

## Relevance

- Applications of data in AI: The use of Artificial Intelligence (AI) in Spotify includes emotion recognition in songs, which serves to enhance personalized playlists and the overall user experience. By analyzing elements such as the tone, tempo, and lyrics of a song, Spotify can determine the mood it conveys and suggest music that aligns with the user's emotions or mental state. For example, if a user tends to listen to calming and melodic songs at night, Spotify can identify this trend and recommend similar songs during that time of day. Furthermore, Spotify uses machine learning algorithms in its recommendation system. These algorithms consider factors such as song popularity, current music trends, and what users with similar tastes are listening to. This allows Spotify to offer highly personalized recommendations.

- Applications of data in marketing: How does statistical analysis of music data contribute to today's marketing? Music is part of people's daily lives, and companies are interested in meeting the primary needs of their users. Considering Spotify as one of the most well-known music applications today, harvesting its data presents an interesting source of information for company marketing, especially since it is public data. Companies often use data from Spotify to focus on analyzing user behaviors and preferences to create more effective strategies. This could include audience segmentation and personalizing advertising messages, collaborations with popular musicians (or trending), or probabilistic analysis of both current and future trends.

## Objectives

This is a study which gathers data from multiple college students from lima with the goal of finding patterns in their musical preferences.

- [ ] Preferred genres according to the university/institute and district in which they study
- [ ] Relationship between 'danceability' and age
  - Hypothesis: Danceability is greater in people between the ages of 15 and 25
- [ ] Relationship between song duration and artist genre
- [ ] How varied is the music that people listen to according to their age and district
- [ ] How has the average song intenstity evolved over time (age of listener)

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
| Average loudness of prefered songs          | Continuous | [-60, 0] DB    |
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

## Members

<table>
 <tr>
   <td>
     <img src="https://avatars.githubusercontent.com/u/104233007?v=4" alt="Arturo Magno" width="200"/>
     <br/>
     <a href="https://github.com/xkal1bur">Arturo Magno</a>
   </td>
   <td>
     <img src="https://avatars.githubusercontent.com/u/91209653?v=4" alt="Valentin Quezada" width="200"/>
     <br/>
     <a href="https://github.com/ValentinQuezada">Valentin Quezada</a>
   </td>
   <td>
     <img src="https://avatars.githubusercontent.com/u/60308719?v=4" alt="Enrique Flores" width="200"/>
     <br/>
     <a href="https://github.com/Enriquefft">Enrique Flores</a>
   </td>
 </tr>
</table>

## Refereces

- Hujran, O., Alikaj, A., Durrani, U., & Al-Dmour, N. A. (2020). Big Data and its Effect on the Music Industry. ACM. https://doi.org/10.1145/3378936.3378957
- Álvarez, P., De Quirós, J. G., & Baldassarri, S. (2023). RIADA: a Machine-Learning based infrastructure for recognising the emotions of Spotify songs. International Journal of Interactive Multimedia and Artificial Intelligence, 8(2), 168. https://doi.org/10.9781/ijimai.2022.04.002
- Spotify for Developers. (18 de enero de 2024).
  https://developer.spotify.com/
