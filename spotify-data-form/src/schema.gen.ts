export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      users: {
        Row: {
          age: number | null
          average_danceability: number
          average_duration_acoustic: number
          average_duration_afrobeat: number
          average_duration_alt_rock: number
          average_duration_alternative: number
          average_duration_ambient: number
          average_duration_anime: number
          average_duration_black_metal: number
          average_duration_bluegrass: number
          average_duration_blues: number
          average_duration_bossanova: number
          average_duration_brazil: number
          average_duration_breakbeat: number
          average_duration_british: number
          average_duration_cantopop: number
          average_duration_chicago_house: number
          average_duration_children: number
          average_duration_chill: number
          average_duration_classical: number
          average_duration_club: number
          average_duration_comedy: number
          average_duration_country: number
          average_duration_dance: number
          average_duration_dancehall: number
          average_duration_death_metal: number
          average_duration_deep_house: number
          average_duration_detroit_techno: number
          average_duration_disco: number
          average_duration_disney: number
          average_duration_drum_and_bass: number
          average_duration_dub: number
          average_duration_dubstep: number
          average_duration_edm: number
          average_duration_electro: number
          average_duration_electronic: number
          average_duration_emo: number
          average_duration_folk: number
          average_duration_forro: number
          average_duration_french: number
          average_duration_funk: number
          average_duration_garage: number
          average_duration_german: number
          average_duration_gospel: number
          average_duration_goth: number
          average_duration_grindcore: number
          average_duration_groove: number
          average_duration_grunge: number
          average_duration_guitar: number
          average_duration_happy: number
          average_duration_hard_rock: number
          average_duration_hardcore: number
          average_duration_hardstyle: number
          average_duration_heavy_metal: number
          average_duration_hip_hop: number
          average_duration_holidays: number
          average_duration_honky_tonk: number
          average_duration_house: number
          average_duration_idm: number
          average_duration_indian: number
          average_duration_indie: number
          average_duration_indie_pop: number
          average_duration_industrial: number
          average_duration_iranian: number
          average_duration_j_dance: number
          average_duration_j_idol: number
          average_duration_j_pop: number
          average_duration_j_rock: number
          average_duration_jazz: number
          average_duration_k_pop: number
          average_duration_kids: number
          average_duration_latin: number
          average_duration_latino: number
          average_duration_malay: number
          average_duration_mandopop: number
          average_duration_metal: number
          average_duration_metal_misc: number
          average_duration_metalcore: number
          average_duration_minimal_techno: number
          average_duration_movies: number
          average_duration_mpb: number
          average_duration_new_age: number
          average_duration_new_release: number
          average_duration_opera: number
          average_duration_pagode: number
          average_duration_party: number
          average_duration_philippines_opm: number
          average_duration_piano: number
          average_duration_pop: number
          average_duration_pop_film: number
          average_duration_post_dubstep: number
          average_duration_power_pop: number
          average_duration_progressive_house: number
          average_duration_psych_rock: number
          average_duration_punk: number
          average_duration_punk_rock: number
          average_duration_r_n_b: number
          average_duration_rainy_day: number
          average_duration_reggae: number
          average_duration_reggaeton: number
          average_duration_road_trip: number
          average_duration_rock: number
          average_duration_rock_n_roll: number
          average_duration_rockabilly: number
          average_duration_romance: number
          average_duration_sad: number
          average_duration_salsa: number
          average_duration_samba: number
          average_duration_sertanejo: number
          average_duration_show_tunes: number
          average_duration_singer_songwriter: number
          average_duration_ska: number
          average_duration_sleep: number
          average_duration_songwriter: number
          average_duration_soul: number
          average_duration_soundtracks: number
          average_duration_spanish: number
          average_duration_study: number
          average_duration_summer: number
          average_duration_swedish: number
          average_duration_synth_pop: number
          average_duration_tango: number
          average_duration_techno: number
          average_duration_trance: number
          average_duration_trip_hop: number
          average_duration_turkish: number
          average_duration_work_out: number
          average_duration_world_music: number
          average_listened_artists: number
          average_loudness: number
          district: Database["public"]["Enums"]["lima_districts"]
          listened_acoustic_rate: number
          listened_afrobeat_rate: number
          listened_alt_rock_rate: number
          listened_alternative_rate: number
          listened_ambient_rate: number
          listened_anime_rate: number
          listened_black_metal_rate: number
          listened_bluegrass_rate: number
          listened_blues_rate: number
          listened_bossanova_rate: number
          listened_brazil_rate: number
          listened_breakbeat_rate: number
          listened_british_rate: number
          listened_cantopop_rate: number
          listened_chicago_house_rate: number
          listened_children_rate: number
          listened_chill_rate: number
          listened_classical_rate: number
          listened_club_rate: number
          listened_comedy_rate: number
          listened_country_rate: number
          listened_dance_rate: number
          listened_dancehall_rate: number
          listened_death_metal_rate: number
          listened_deep_house_rate: number
          listened_detroit_techno_rate: number
          listened_disco_rate: number
          listened_disney_rate: number
          listened_drum_and_bass_rate: number
          listened_dub_rate: number
          listened_dubstep_rate: number
          listened_edm_rate: number
          listened_electro_rate: number
          listened_electronic_rate: number
          listened_emo_rate: number
          listened_folk_rate: number
          listened_forro_rate: number
          listened_french_rate: number
          listened_funk_rate: number
          listened_garage_rate: number
          listened_german_rate: number
          listened_gospel_rate: number
          listened_goth_rate: number
          listened_grindcore_rate: number
          listened_groove_rate: number
          listened_grunge_rate: number
          listened_guitar_rate: number
          listened_happy_rate: number
          listened_hard_rock_rate: number
          listened_hardcore_rate: number
          listened_hardstyle_rate: number
          listened_heavy_metal_rate: number
          listened_hip_hop_rate: number
          listened_holidays_rate: number
          listened_honky_tonk_rate: number
          listened_house_rate: number
          listened_idm_rate: number
          listened_indian_rate: number
          listened_indie_pop_rate: number
          listened_indie_rate: number
          listened_industrial_rate: number
          listened_iranian_rate: number
          listened_j_dance_rate: number
          listened_j_idol_rate: number
          listened_j_pop_rate: number
          listened_j_rock_rate: number
          listened_jazz_rate: number
          listened_k_pop_rate: number
          listened_kids_rate: number
          listened_latin_rate: number
          listened_latino_rate: number
          listened_malay_rate: number
          listened_mandopop_rate: number
          listened_metal_misc_rate: number
          listened_metal_rate: number
          listened_metalcore_rate: number
          listened_minimal_techno_rate: number
          listened_movies_rate: number
          listened_mpb_rate: number
          listened_new_age_rate: number
          listened_new_release_rate: number
          listened_opera_rate: number
          listened_pagode_rate: number
          listened_party_rate: number
          listened_philippines_opm_rate: number
          listened_piano_rate: number
          listened_pop_film_rate: number
          listened_pop_rate: number
          listened_post_dubstep_rate: number
          listened_power_pop_rate: number
          listened_progressive_house_rate: number
          listened_psych_rock_rate: number
          listened_punk_rate: number
          listened_punk_rock_rate: number
          listened_r_n_b_rate: number
          listened_rainy_day_rate: number
          listened_reggae_rate: number
          listened_reggaeton_rate: number
          listened_road_trip_rate: number
          listened_rock_n_roll_rate: number
          listened_rock_rate: number
          listened_rockabilly_rate: number
          listened_romance_rate: number
          listened_sad_rate: number
          listened_salsa_rate: number
          listened_samba_rate: number
          listened_sertanejo_rate: number
          listened_show_tunes_rate: number
          listened_singer_songwriter_rate: number
          listened_ska_rate: number
          listened_sleep_rate: number
          listened_songwriter_rate: number
          listened_soul_rate: number
          listened_soundtracks_rate: number
          listened_spanish_rate: number
          listened_study_rate: number
          listened_summer_rate: number
          listened_swedish_rate: number
          listened_synth_pop_rate: number
          listened_tango_rate: number
          listened_techno_rate: number
          listened_trance_rate: number
          listened_trip_hop_rate: number
          listened_turkish_rate: number
          listened_work_out_rate: number
          listened_world_music_rate: number
          percieved_favourite_gender:
            | Database["public"]["Enums"]["genre"]
            | null
          percieved_variety: Database["public"]["Enums"]["variety"]
          spotifyId: string
          study_center: string | null
        }
        Insert: {
          age?: number | null
          average_danceability: number
          average_duration_acoustic: number
          average_duration_afrobeat: number
          average_duration_alt_rock: number
          average_duration_alternative: number
          average_duration_ambient: number
          average_duration_anime: number
          average_duration_black_metal: number
          average_duration_bluegrass: number
          average_duration_blues: number
          average_duration_bossanova: number
          average_duration_brazil: number
          average_duration_breakbeat: number
          average_duration_british: number
          average_duration_cantopop: number
          average_duration_chicago_house: number
          average_duration_children: number
          average_duration_chill: number
          average_duration_classical: number
          average_duration_club: number
          average_duration_comedy: number
          average_duration_country: number
          average_duration_dance: number
          average_duration_dancehall: number
          average_duration_death_metal: number
          average_duration_deep_house: number
          average_duration_detroit_techno: number
          average_duration_disco: number
          average_duration_disney: number
          average_duration_drum_and_bass: number
          average_duration_dub: number
          average_duration_dubstep: number
          average_duration_edm: number
          average_duration_electro: number
          average_duration_electronic: number
          average_duration_emo: number
          average_duration_folk: number
          average_duration_forro: number
          average_duration_french: number
          average_duration_funk: number
          average_duration_garage: number
          average_duration_german: number
          average_duration_gospel: number
          average_duration_goth: number
          average_duration_grindcore: number
          average_duration_groove: number
          average_duration_grunge: number
          average_duration_guitar: number
          average_duration_happy: number
          average_duration_hard_rock: number
          average_duration_hardcore: number
          average_duration_hardstyle: number
          average_duration_heavy_metal: number
          average_duration_hip_hop: number
          average_duration_holidays: number
          average_duration_honky_tonk: number
          average_duration_house: number
          average_duration_idm: number
          average_duration_indian: number
          average_duration_indie: number
          average_duration_indie_pop: number
          average_duration_industrial: number
          average_duration_iranian: number
          average_duration_j_dance: number
          average_duration_j_idol: number
          average_duration_j_pop: number
          average_duration_j_rock: number
          average_duration_jazz: number
          average_duration_k_pop: number
          average_duration_kids: number
          average_duration_latin: number
          average_duration_latino: number
          average_duration_malay: number
          average_duration_mandopop: number
          average_duration_metal: number
          average_duration_metal_misc: number
          average_duration_metalcore: number
          average_duration_minimal_techno: number
          average_duration_movies: number
          average_duration_mpb: number
          average_duration_new_age: number
          average_duration_new_release: number
          average_duration_opera: number
          average_duration_pagode: number
          average_duration_party: number
          average_duration_philippines_opm: number
          average_duration_piano: number
          average_duration_pop: number
          average_duration_pop_film: number
          average_duration_post_dubstep: number
          average_duration_power_pop: number
          average_duration_progressive_house: number
          average_duration_psych_rock: number
          average_duration_punk: number
          average_duration_punk_rock: number
          average_duration_r_n_b: number
          average_duration_rainy_day: number
          average_duration_reggae: number
          average_duration_reggaeton: number
          average_duration_road_trip: number
          average_duration_rock: number
          average_duration_rock_n_roll: number
          average_duration_rockabilly: number
          average_duration_romance: number
          average_duration_sad: number
          average_duration_salsa: number
          average_duration_samba: number
          average_duration_sertanejo: number
          average_duration_show_tunes: number
          average_duration_singer_songwriter: number
          average_duration_ska: number
          average_duration_sleep: number
          average_duration_songwriter: number
          average_duration_soul: number
          average_duration_soundtracks: number
          average_duration_spanish: number
          average_duration_study: number
          average_duration_summer: number
          average_duration_swedish: number
          average_duration_synth_pop: number
          average_duration_tango: number
          average_duration_techno: number
          average_duration_trance: number
          average_duration_trip_hop: number
          average_duration_turkish: number
          average_duration_work_out: number
          average_duration_world_music: number
          average_listened_artists: number
          average_loudness: number
          district: Database["public"]["Enums"]["lima_districts"]
          listened_acoustic_rate: number
          listened_afrobeat_rate: number
          listened_alt_rock_rate: number
          listened_alternative_rate: number
          listened_ambient_rate: number
          listened_anime_rate: number
          listened_black_metal_rate: number
          listened_bluegrass_rate: number
          listened_blues_rate: number
          listened_bossanova_rate: number
          listened_brazil_rate: number
          listened_breakbeat_rate: number
          listened_british_rate: number
          listened_cantopop_rate: number
          listened_chicago_house_rate: number
          listened_children_rate: number
          listened_chill_rate: number
          listened_classical_rate: number
          listened_club_rate: number
          listened_comedy_rate: number
          listened_country_rate: number
          listened_dance_rate: number
          listened_dancehall_rate: number
          listened_death_metal_rate: number
          listened_deep_house_rate: number
          listened_detroit_techno_rate: number
          listened_disco_rate: number
          listened_disney_rate: number
          listened_drum_and_bass_rate: number
          listened_dub_rate: number
          listened_dubstep_rate: number
          listened_edm_rate: number
          listened_electro_rate: number
          listened_electronic_rate: number
          listened_emo_rate: number
          listened_folk_rate: number
          listened_forro_rate: number
          listened_french_rate: number
          listened_funk_rate: number
          listened_garage_rate: number
          listened_german_rate: number
          listened_gospel_rate: number
          listened_goth_rate: number
          listened_grindcore_rate: number
          listened_groove_rate: number
          listened_grunge_rate: number
          listened_guitar_rate: number
          listened_happy_rate: number
          listened_hard_rock_rate: number
          listened_hardcore_rate: number
          listened_hardstyle_rate: number
          listened_heavy_metal_rate: number
          listened_hip_hop_rate: number
          listened_holidays_rate: number
          listened_honky_tonk_rate: number
          listened_house_rate: number
          listened_idm_rate: number
          listened_indian_rate: number
          listened_indie_pop_rate: number
          listened_indie_rate: number
          listened_industrial_rate: number
          listened_iranian_rate: number
          listened_j_dance_rate: number
          listened_j_idol_rate: number
          listened_j_pop_rate: number
          listened_j_rock_rate: number
          listened_jazz_rate: number
          listened_k_pop_rate: number
          listened_kids_rate: number
          listened_latin_rate: number
          listened_latino_rate: number
          listened_malay_rate: number
          listened_mandopop_rate: number
          listened_metal_misc_rate: number
          listened_metal_rate: number
          listened_metalcore_rate: number
          listened_minimal_techno_rate: number
          listened_movies_rate: number
          listened_mpb_rate: number
          listened_new_age_rate: number
          listened_new_release_rate: number
          listened_opera_rate: number
          listened_pagode_rate: number
          listened_party_rate: number
          listened_philippines_opm_rate: number
          listened_piano_rate: number
          listened_pop_film_rate: number
          listened_pop_rate: number
          listened_post_dubstep_rate: number
          listened_power_pop_rate: number
          listened_progressive_house_rate: number
          listened_psych_rock_rate: number
          listened_punk_rate: number
          listened_punk_rock_rate: number
          listened_r_n_b_rate: number
          listened_rainy_day_rate: number
          listened_reggae_rate: number
          listened_reggaeton_rate: number
          listened_road_trip_rate: number
          listened_rock_n_roll_rate: number
          listened_rock_rate: number
          listened_rockabilly_rate: number
          listened_romance_rate: number
          listened_sad_rate: number
          listened_salsa_rate: number
          listened_samba_rate: number
          listened_sertanejo_rate: number
          listened_show_tunes_rate: number
          listened_singer_songwriter_rate: number
          listened_ska_rate: number
          listened_sleep_rate: number
          listened_songwriter_rate: number
          listened_soul_rate: number
          listened_soundtracks_rate: number
          listened_spanish_rate: number
          listened_study_rate: number
          listened_summer_rate: number
          listened_swedish_rate: number
          listened_synth_pop_rate: number
          listened_tango_rate: number
          listened_techno_rate: number
          listened_trance_rate: number
          listened_trip_hop_rate: number
          listened_turkish_rate: number
          listened_work_out_rate: number
          listened_world_music_rate: number
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null
          percieved_variety: Database["public"]["Enums"]["variety"]
          spotifyId: string
          study_center?: string | null
        }
        Update: {
          age?: number | null
          average_danceability?: number
          average_duration_acoustic?: number
          average_duration_afrobeat?: number
          average_duration_alt_rock?: number
          average_duration_alternative?: number
          average_duration_ambient?: number
          average_duration_anime?: number
          average_duration_black_metal?: number
          average_duration_bluegrass?: number
          average_duration_blues?: number
          average_duration_bossanova?: number
          average_duration_brazil?: number
          average_duration_breakbeat?: number
          average_duration_british?: number
          average_duration_cantopop?: number
          average_duration_chicago_house?: number
          average_duration_children?: number
          average_duration_chill?: number
          average_duration_classical?: number
          average_duration_club?: number
          average_duration_comedy?: number
          average_duration_country?: number
          average_duration_dance?: number
          average_duration_dancehall?: number
          average_duration_death_metal?: number
          average_duration_deep_house?: number
          average_duration_detroit_techno?: number
          average_duration_disco?: number
          average_duration_disney?: number
          average_duration_drum_and_bass?: number
          average_duration_dub?: number
          average_duration_dubstep?: number
          average_duration_edm?: number
          average_duration_electro?: number
          average_duration_electronic?: number
          average_duration_emo?: number
          average_duration_folk?: number
          average_duration_forro?: number
          average_duration_french?: number
          average_duration_funk?: number
          average_duration_garage?: number
          average_duration_german?: number
          average_duration_gospel?: number
          average_duration_goth?: number
          average_duration_grindcore?: number
          average_duration_groove?: number
          average_duration_grunge?: number
          average_duration_guitar?: number
          average_duration_happy?: number
          average_duration_hard_rock?: number
          average_duration_hardcore?: number
          average_duration_hardstyle?: number
          average_duration_heavy_metal?: number
          average_duration_hip_hop?: number
          average_duration_holidays?: number
          average_duration_honky_tonk?: number
          average_duration_house?: number
          average_duration_idm?: number
          average_duration_indian?: number
          average_duration_indie?: number
          average_duration_indie_pop?: number
          average_duration_industrial?: number
          average_duration_iranian?: number
          average_duration_j_dance?: number
          average_duration_j_idol?: number
          average_duration_j_pop?: number
          average_duration_j_rock?: number
          average_duration_jazz?: number
          average_duration_k_pop?: number
          average_duration_kids?: number
          average_duration_latin?: number
          average_duration_latino?: number
          average_duration_malay?: number
          average_duration_mandopop?: number
          average_duration_metal?: number
          average_duration_metal_misc?: number
          average_duration_metalcore?: number
          average_duration_minimal_techno?: number
          average_duration_movies?: number
          average_duration_mpb?: number
          average_duration_new_age?: number
          average_duration_new_release?: number
          average_duration_opera?: number
          average_duration_pagode?: number
          average_duration_party?: number
          average_duration_philippines_opm?: number
          average_duration_piano?: number
          average_duration_pop?: number
          average_duration_pop_film?: number
          average_duration_post_dubstep?: number
          average_duration_power_pop?: number
          average_duration_progressive_house?: number
          average_duration_psych_rock?: number
          average_duration_punk?: number
          average_duration_punk_rock?: number
          average_duration_r_n_b?: number
          average_duration_rainy_day?: number
          average_duration_reggae?: number
          average_duration_reggaeton?: number
          average_duration_road_trip?: number
          average_duration_rock?: number
          average_duration_rock_n_roll?: number
          average_duration_rockabilly?: number
          average_duration_romance?: number
          average_duration_sad?: number
          average_duration_salsa?: number
          average_duration_samba?: number
          average_duration_sertanejo?: number
          average_duration_show_tunes?: number
          average_duration_singer_songwriter?: number
          average_duration_ska?: number
          average_duration_sleep?: number
          average_duration_songwriter?: number
          average_duration_soul?: number
          average_duration_soundtracks?: number
          average_duration_spanish?: number
          average_duration_study?: number
          average_duration_summer?: number
          average_duration_swedish?: number
          average_duration_synth_pop?: number
          average_duration_tango?: number
          average_duration_techno?: number
          average_duration_trance?: number
          average_duration_trip_hop?: number
          average_duration_turkish?: number
          average_duration_work_out?: number
          average_duration_world_music?: number
          average_listened_artists?: number
          average_loudness?: number
          district?: Database["public"]["Enums"]["lima_districts"]
          listened_acoustic_rate?: number
          listened_afrobeat_rate?: number
          listened_alt_rock_rate?: number
          listened_alternative_rate?: number
          listened_ambient_rate?: number
          listened_anime_rate?: number
          listened_black_metal_rate?: number
          listened_bluegrass_rate?: number
          listened_blues_rate?: number
          listened_bossanova_rate?: number
          listened_brazil_rate?: number
          listened_breakbeat_rate?: number
          listened_british_rate?: number
          listened_cantopop_rate?: number
          listened_chicago_house_rate?: number
          listened_children_rate?: number
          listened_chill_rate?: number
          listened_classical_rate?: number
          listened_club_rate?: number
          listened_comedy_rate?: number
          listened_country_rate?: number
          listened_dance_rate?: number
          listened_dancehall_rate?: number
          listened_death_metal_rate?: number
          listened_deep_house_rate?: number
          listened_detroit_techno_rate?: number
          listened_disco_rate?: number
          listened_disney_rate?: number
          listened_drum_and_bass_rate?: number
          listened_dub_rate?: number
          listened_dubstep_rate?: number
          listened_edm_rate?: number
          listened_electro_rate?: number
          listened_electronic_rate?: number
          listened_emo_rate?: number
          listened_folk_rate?: number
          listened_forro_rate?: number
          listened_french_rate?: number
          listened_funk_rate?: number
          listened_garage_rate?: number
          listened_german_rate?: number
          listened_gospel_rate?: number
          listened_goth_rate?: number
          listened_grindcore_rate?: number
          listened_groove_rate?: number
          listened_grunge_rate?: number
          listened_guitar_rate?: number
          listened_happy_rate?: number
          listened_hard_rock_rate?: number
          listened_hardcore_rate?: number
          listened_hardstyle_rate?: number
          listened_heavy_metal_rate?: number
          listened_hip_hop_rate?: number
          listened_holidays_rate?: number
          listened_honky_tonk_rate?: number
          listened_house_rate?: number
          listened_idm_rate?: number
          listened_indian_rate?: number
          listened_indie_pop_rate?: number
          listened_indie_rate?: number
          listened_industrial_rate?: number
          listened_iranian_rate?: number
          listened_j_dance_rate?: number
          listened_j_idol_rate?: number
          listened_j_pop_rate?: number
          listened_j_rock_rate?: number
          listened_jazz_rate?: number
          listened_k_pop_rate?: number
          listened_kids_rate?: number
          listened_latin_rate?: number
          listened_latino_rate?: number
          listened_malay_rate?: number
          listened_mandopop_rate?: number
          listened_metal_misc_rate?: number
          listened_metal_rate?: number
          listened_metalcore_rate?: number
          listened_minimal_techno_rate?: number
          listened_movies_rate?: number
          listened_mpb_rate?: number
          listened_new_age_rate?: number
          listened_new_release_rate?: number
          listened_opera_rate?: number
          listened_pagode_rate?: number
          listened_party_rate?: number
          listened_philippines_opm_rate?: number
          listened_piano_rate?: number
          listened_pop_film_rate?: number
          listened_pop_rate?: number
          listened_post_dubstep_rate?: number
          listened_power_pop_rate?: number
          listened_progressive_house_rate?: number
          listened_psych_rock_rate?: number
          listened_punk_rate?: number
          listened_punk_rock_rate?: number
          listened_r_n_b_rate?: number
          listened_rainy_day_rate?: number
          listened_reggae_rate?: number
          listened_reggaeton_rate?: number
          listened_road_trip_rate?: number
          listened_rock_n_roll_rate?: number
          listened_rock_rate?: number
          listened_rockabilly_rate?: number
          listened_romance_rate?: number
          listened_sad_rate?: number
          listened_salsa_rate?: number
          listened_samba_rate?: number
          listened_sertanejo_rate?: number
          listened_show_tunes_rate?: number
          listened_singer_songwriter_rate?: number
          listened_ska_rate?: number
          listened_sleep_rate?: number
          listened_songwriter_rate?: number
          listened_soul_rate?: number
          listened_soundtracks_rate?: number
          listened_spanish_rate?: number
          listened_study_rate?: number
          listened_summer_rate?: number
          listened_swedish_rate?: number
          listened_synth_pop_rate?: number
          listened_tango_rate?: number
          listened_techno_rate?: number
          listened_trance_rate?: number
          listened_trip_hop_rate?: number
          listened_turkish_rate?: number
          listened_work_out_rate?: number
          listened_world_music_rate?: number
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null
          percieved_variety?: Database["public"]["Enums"]["variety"]
          spotifyId?: string
          study_center?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      genre:
        | "acoustic"
        | "afrobeat"
        | "alt_rock"
        | "alternative"
        | "ambient"
        | "anime"
        | "black_metal"
        | "bluegrass"
        | "blues"
        | "bossanova"
        | "brazil"
        | "breakbeat"
        | "british"
        | "cantopop"
        | "chicago_house"
        | "children"
        | "chill"
        | "classical"
        | "club"
        | "comedy"
        | "country"
        | "dance"
        | "dancehall"
        | "death_metal"
        | "deep_house"
        | "detroit_techno"
        | "disco"
        | "disney"
        | "drum_and_bass"
        | "dub"
        | "dubstep"
        | "edm"
        | "electro"
        | "electronic"
        | "emo"
        | "folk"
        | "forro"
        | "french"
        | "funk"
        | "garage"
        | "german"
        | "gospel"
        | "goth"
        | "grindcore"
        | "groove"
        | "grunge"
        | "guitar"
        | "happy"
        | "hard_rock"
        | "hardcore"
        | "hardstyle"
        | "heavy_metal"
        | "hip_hop"
        | "holidays"
        | "honky_tonk"
        | "house"
        | "idm"
        | "indian"
        | "indie"
        | "indie_pop"
        | "industrial"
        | "iranian"
        | "j_dance"
        | "j_idol"
        | "j_pop"
        | "j_rock"
        | "jazz"
        | "k_pop"
        | "kids"
        | "latin"
        | "latino"
        | "malay"
        | "mandopop"
        | "metal"
        | "metal_misc"
        | "metalcore"
        | "minimal_techno"
        | "movies"
        | "mpb"
        | "new_age"
        | "new_release"
        | "opera"
        | "pagode"
        | "party"
        | "philippines_opm"
        | "piano"
        | "pop"
        | "pop_film"
        | "post_dubstep"
        | "power_pop"
        | "progressive_house"
        | "psych_rock"
        | "punk"
        | "punk_rock"
        | "r_n_b"
        | "rainy_day"
        | "reggae"
        | "reggaeton"
        | "road_trip"
        | "rock"
        | "rock_n_roll"
        | "rockabilly"
        | "romance"
        | "sad"
        | "salsa"
        | "samba"
        | "sertanejo"
        | "show_tunes"
        | "singer_songwriter"
        | "ska"
        | "sleep"
        | "songwriter"
        | "soul"
        | "soundtracks"
        | "spanish"
        | "study"
        | "summer"
        | "swedish"
        | "synth_pop"
        | "tango"
        | "techno"
        | "trance"
        | "trip_hop"
        | "turkish"
        | "work_out"
        | "world_music"
      lima_districts:
        | "Ancón"
        | "Ate"
        | "Barranco"
        | "Breña"
        | "Carabayllo"
        | "Chaclacayo"
        | "Chorrillos"
        | "Cieneguilla"
        | "Comas"
        | "El Agustino"
        | "Independencia"
        | "Jesús María"
        | "La Molina"
        | "La Victoria"
        | "Lima"
        | "Lince"
        | "Los Olivos"
        | "Lurigancho"
        | "Lurín"
        | "Magdalena del Mar"
        | "Miraflores"
        | "Pachacamac"
        | "Pucusana"
        | "Pueblo Libre"
        | "Puente Piedra"
        | "Punta Hermosa"
        | "Punta Negra"
        | "Rímac"
        | "San Bartolo"
        | "San Borja"
        | "San Isidro"
        | "San Juan de Lurigancho"
        | "San Juan de Miraflores"
        | "San Luis"
        | "San Martín de Porres"
        | "San Miguel"
        | "Santa Anita"
        | "Santa María del Mar"
        | "Santa Rosa"
        | "Santiago de Surco"
        | "Surquillo"
        | "Villa El Salvador"
        | "Villa María del Triunfo"
      variety: "none" | "low" | "medium" | "high" | "very high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
