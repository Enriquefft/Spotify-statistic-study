# Temas evaluados

## Gustos musicales de alumnos universitarios de Lima segun Spotify

### Relevancia de estudio

- Aplicaciónes de la data en IA
  ...
- Aplicaciónes de la data en marketing
  ...

### Obtención de data:

Cada entrada del dataset correspondera al userid de un alumno, y tendra como valor una lista de los artistas que escucha, la cantidad de veces que los escucha, entre otros. La data se obtendra de la API de Spotify, con el siguiente codigo (simplificado):

```python
# LOG IN

from spotipy import Spoify
user_id: Const = '1234567890'
user_data: Const = spotify.user(user_id)
top_artists: Const = spotify.current_user_top_artists()
top_tracks: Const = spotify.current_user_top_tracks()

```

Para obtener los userid y data de los se debera crear un sistema de autenticación que nos permita obtener la data de las personas. Además, tendremos un data pipeline que extraiga la data relevante de la API de spotify y la almecene en un google sheets, esta podra ser exportada a un csv y luego a un dataframe de R.

### Factibilidad de estudio

- ¿Cuantos alumnos hay en la universidad utec? (facil acceso)
- ¿Cuantos de ellos usan spotify?
- ¿Cuantos responderan la encuesta?
