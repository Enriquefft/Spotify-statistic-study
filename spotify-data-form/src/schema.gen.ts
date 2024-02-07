export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      users: {
        Row: {
          age: number | null;
          average_danceability: number;
          average_duration_acoustic: number | null;
          average_duration_afrobeat: number | null;
          average_duration_alt_rock: number | null;
          average_duration_alternative: number | null;
          average_duration_ambient: number | null;
          average_duration_anime: number | null;
          average_duration_black_metal: number | null;
          average_duration_bluegrass: number | null;
          average_duration_blues: number | null;
          average_duration_bossanova: number | null;
          average_duration_brazil: number | null;
          average_duration_breakbeat: number | null;
          average_duration_british: number | null;
          average_duration_cantopop: number | null;
          average_duration_chicago_house: number | null;
          average_duration_children: number | null;
          average_duration_chill: number | null;
          average_duration_classical: number | null;
          average_duration_club: number | null;
          average_duration_comedy: number | null;
          average_duration_country: number | null;
          average_duration_dance: number | null;
          average_duration_dancehall: number | null;
          average_duration_death_metal: number | null;
          average_duration_deep_house: number | null;
          average_duration_detroit_techno: number | null;
          average_duration_disco: number | null;
          average_duration_disney: number | null;
          average_duration_drum_and_bass: number | null;
          average_duration_dub: number | null;
          average_duration_dubstep: number | null;
          average_duration_edm: number | null;
          average_duration_electro: number | null;
          average_duration_electronic: number | null;
          average_duration_emo: number | null;
          average_duration_folk: number | null;
          average_duration_forro: number | null;
          average_duration_french: number | null;
          average_duration_funk: number | null;
          average_duration_garage: number | null;
          average_duration_german: number | null;
          average_duration_gospel: number | null;
          average_duration_goth: number | null;
          average_duration_grindcore: number | null;
          average_duration_groove: number | null;
          average_duration_grunge: number | null;
          average_duration_guitar: number | null;
          average_duration_happy: number | null;
          average_duration_hard_rock: number | null;
          average_duration_hardcore: number | null;
          average_duration_hardstyle: number | null;
          average_duration_heavy_metal: number | null;
          average_duration_hip_hop: number | null;
          average_duration_holidays: number | null;
          average_duration_honky_tonk: number | null;
          average_duration_house: number | null;
          average_duration_idm: number | null;
          average_duration_indian: number | null;
          average_duration_indie: number | null;
          average_duration_indie_pop: number | null;
          average_duration_industrial: number | null;
          average_duration_iranian: number | null;
          average_duration_j_dance: number | null;
          average_duration_j_idol: number | null;
          average_duration_j_pop: number | null;
          average_duration_j_rock: number | null;
          average_duration_jazz: number | null;
          average_duration_k_pop: number | null;
          average_duration_kids: number | null;
          average_duration_latin: number | null;
          average_duration_latino: number | null;
          average_duration_malay: number | null;
          average_duration_mandopop: number | null;
          average_duration_metal: number | null;
          average_duration_metal_misc: number | null;
          average_duration_metalcore: number | null;
          average_duration_minimal_techno: number | null;
          average_duration_movies: number | null;
          average_duration_mpb: number | null;
          average_duration_new_age: number | null;
          average_duration_new_release: number | null;
          average_duration_opera: number | null;
          average_duration_pagode: number | null;
          average_duration_party: number | null;
          average_duration_philippines_opm: number | null;
          average_duration_piano: number | null;
          average_duration_pop: number | null;
          average_duration_pop_film: number | null;
          average_duration_post_dubstep: number | null;
          average_duration_power_pop: number | null;
          average_duration_progressive_house: number | null;
          average_duration_psych_rock: number | null;
          average_duration_punk: number | null;
          average_duration_punk_rock: number | null;
          average_duration_r_n_b: number | null;
          average_duration_rainy_day: number | null;
          average_duration_reggae: number | null;
          average_duration_reggaeton: number | null;
          average_duration_road_trip: number | null;
          average_duration_rock: number | null;
          average_duration_rock_n_roll: number | null;
          average_duration_rockabilly: number | null;
          average_duration_romance: number | null;
          average_duration_sad: number | null;
          average_duration_salsa: number | null;
          average_duration_samba: number | null;
          average_duration_sertanejo: number | null;
          average_duration_show_tunes: number | null;
          average_duration_singer_songwriter: number | null;
          average_duration_ska: number | null;
          average_duration_sleep: number | null;
          average_duration_songwriter: number | null;
          average_duration_soul: number | null;
          average_duration_soundtracks: number | null;
          average_duration_spanish: number | null;
          average_duration_study: number | null;
          average_duration_summer: number | null;
          average_duration_swedish: number | null;
          average_duration_synth_pop: number | null;
          average_duration_tango: number | null;
          average_duration_techno: number | null;
          average_duration_trance: number | null;
          average_duration_trip_hop: number | null;
          average_duration_turkish: number | null;
          average_duration_work_out: number | null;
          average_duration_world_music: number | null;
          average_listened_artists: number;
          district: Database["public"]["Enums"]["lima_districts"] | null;
          listened_acoustic_rate: number | null;
          listened_afrobeat_rate: number | null;
          listened_alt_rock_rate: number | null;
          listened_alternative_rate: number | null;
          listened_ambient_rate: number | null;
          listened_anime_rate: number | null;
          listened_black_metal_rate: number | null;
          listened_bluegrass_rate: number | null;
          listened_blues_rate: number | null;
          listened_bossanova_rate: number | null;
          listened_brazil_rate: number | null;
          listened_breakbeat_rate: number | null;
          listened_british_rate: number | null;
          listened_cantopop_rate: number | null;
          listened_chicago_house_rate: number | null;
          listened_children_rate: number | null;
          listened_chill_rate: number | null;
          listened_classical_rate: number | null;
          listened_club_rate: number | null;
          listened_comedy_rate: number | null;
          listened_country_rate: number | null;
          listened_dance_rate: number | null;
          listened_dancehall_rate: number | null;
          listened_death_metal_rate: number | null;
          listened_deep_house_rate: number | null;
          listened_detroit_techno_rate: number | null;
          listened_disco_rate: number | null;
          listened_disney_rate: number | null;
          listened_drum_and_bass_rate: number | null;
          listened_dub_rate: number | null;
          listened_dubstep_rate: number | null;
          listened_edm_rate: number | null;
          listened_electro_rate: number | null;
          listened_electronic_rate: number | null;
          listened_emo_rate: number | null;
          listened_folk_rate: number | null;
          listened_forro_rate: number | null;
          listened_french_rate: number | null;
          listened_funk_rate: number | null;
          listened_garage_rate: number | null;
          listened_german_rate: number | null;
          listened_gospel_rate: number | null;
          listened_goth_rate: number | null;
          listened_grindcore_rate: number | null;
          listened_groove_rate: number | null;
          listened_grunge_rate: number | null;
          listened_guitar_rate: number | null;
          listened_happy_rate: number | null;
          listened_hard_rock_rate: number | null;
          listened_hardcore_rate: number | null;
          listened_hardstyle_rate: number | null;
          listened_heavy_metal_rate: number | null;
          listened_hip_hop_rate: number | null;
          listened_holidays_rate: number | null;
          listened_honky_tonk_rate: number | null;
          listened_house_rate: number | null;
          listened_idm_rate: number | null;
          listened_indian_rate: number | null;
          listened_indie_pop_rate: number | null;
          listened_indie_rate: number | null;
          listened_industrial_rate: number | null;
          listened_iranian_rate: number | null;
          listened_j_dance_rate: number | null;
          listened_j_idol_rate: number | null;
          listened_j_pop_rate: number | null;
          listened_j_rock_rate: number | null;
          listened_jazz_rate: number | null;
          listened_k_pop_rate: number | null;
          listened_kids_rate: number | null;
          listened_latin_rate: number | null;
          listened_latino_rate: number | null;
          listened_malay_rate: number | null;
          listened_mandopop_rate: number | null;
          listened_metal_misc_rate: number | null;
          listened_metal_rate: number | null;
          listened_metalcore_rate: number | null;
          listened_minimal_techno_rate: number | null;
          listened_movies_rate: number | null;
          listened_mpb_rate: number | null;
          listened_new_age_rate: number | null;
          listened_new_release_rate: number | null;
          listened_opera_rate: number | null;
          listened_pagode_rate: number | null;
          listened_party_rate: number | null;
          listened_philippines_opm_rate: number | null;
          listened_piano_rate: number | null;
          listened_pop_film_rate: number | null;
          listened_pop_rate: number | null;
          listened_post_dubstep_rate: number | null;
          listened_power_pop_rate: number | null;
          listened_progressive_house_rate: number | null;
          listened_psych_rock_rate: number | null;
          listened_punk_rate: number | null;
          listened_punk_rock_rate: number | null;
          listened_r_n_b_rate: number | null;
          listened_rainy_day_rate: number | null;
          listened_reggae_rate: number | null;
          listened_reggaeton_rate: number | null;
          listened_road_trip_rate: number | null;
          listened_rock_n_roll_rate: number | null;
          listened_rock_rate: number | null;
          listened_rockabilly_rate: number | null;
          listened_romance_rate: number | null;
          listened_sad_rate: number | null;
          listened_salsa_rate: number | null;
          listened_samba_rate: number | null;
          listened_sertanejo_rate: number | null;
          listened_show_tunes_rate: number | null;
          listened_singer_songwriter_rate: number | null;
          listened_ska_rate: number | null;
          listened_sleep_rate: number | null;
          listened_songwriter_rate: number | null;
          listened_soul_rate: number | null;
          listened_soundtracks_rate: number | null;
          listened_spanish_rate: number | null;
          listened_study_rate: number | null;
          listened_summer_rate: number | null;
          listened_swedish_rate: number | null;
          listened_synth_pop_rate: number | null;
          listened_tango_rate: number | null;
          listened_techno_rate: number | null;
          listened_trance_rate: number | null;
          listened_trip_hop_rate: number | null;
          listened_turkish_rate: number | null;
          listened_work_out_rate: number | null;
          listened_world_music_rate: number | null;
          percieved_favourite_gender:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety: Database["public"]["Enums"]["Variety"];
          spotifyId: number;
          study_center: string | null;
        };
        Insert: {
          age?: number | null;
          average_danceability?: number;
          average_duration_acoustic?: number | null;
          average_duration_afrobeat?: number | null;
          average_duration_alt_rock?: number | null;
          average_duration_alternative?: number | null;
          average_duration_ambient?: number | null;
          average_duration_anime?: number | null;
          average_duration_black_metal?: number | null;
          average_duration_bluegrass?: number | null;
          average_duration_blues?: number | null;
          average_duration_bossanova?: number | null;
          average_duration_brazil?: number | null;
          average_duration_breakbeat?: number | null;
          average_duration_british?: number | null;
          average_duration_cantopop?: number | null;
          average_duration_chicago_house?: number | null;
          average_duration_children?: number | null;
          average_duration_chill?: number | null;
          average_duration_classical?: number | null;
          average_duration_club?: number | null;
          average_duration_comedy?: number | null;
          average_duration_country?: number | null;
          average_duration_dance?: number | null;
          average_duration_dancehall?: number | null;
          average_duration_death_metal?: number | null;
          average_duration_deep_house?: number | null;
          average_duration_detroit_techno?: number | null;
          average_duration_disco?: number | null;
          average_duration_disney?: number | null;
          average_duration_drum_and_bass?: number | null;
          average_duration_dub?: number | null;
          average_duration_dubstep?: number | null;
          average_duration_edm?: number | null;
          average_duration_electro?: number | null;
          average_duration_electronic?: number | null;
          average_duration_emo?: number | null;
          average_duration_folk?: number | null;
          average_duration_forro?: number | null;
          average_duration_french?: number | null;
          average_duration_funk?: number | null;
          average_duration_garage?: number | null;
          average_duration_german?: number | null;
          average_duration_gospel?: number | null;
          average_duration_goth?: number | null;
          average_duration_grindcore?: number | null;
          average_duration_groove?: number | null;
          average_duration_grunge?: number | null;
          average_duration_guitar?: number | null;
          average_duration_happy?: number | null;
          average_duration_hard_rock?: number | null;
          average_duration_hardcore?: number | null;
          average_duration_hardstyle?: number | null;
          average_duration_heavy_metal?: number | null;
          average_duration_hip_hop?: number | null;
          average_duration_holidays?: number | null;
          average_duration_honky_tonk?: number | null;
          average_duration_house?: number | null;
          average_duration_idm?: number | null;
          average_duration_indian?: number | null;
          average_duration_indie?: number | null;
          average_duration_indie_pop?: number | null;
          average_duration_industrial?: number | null;
          average_duration_iranian?: number | null;
          average_duration_j_dance?: number | null;
          average_duration_j_idol?: number | null;
          average_duration_j_pop?: number | null;
          average_duration_j_rock?: number | null;
          average_duration_jazz?: number | null;
          average_duration_k_pop?: number | null;
          average_duration_kids?: number | null;
          average_duration_latin?: number | null;
          average_duration_latino?: number | null;
          average_duration_malay?: number | null;
          average_duration_mandopop?: number | null;
          average_duration_metal?: number | null;
          average_duration_metal_misc?: number | null;
          average_duration_metalcore?: number | null;
          average_duration_minimal_techno?: number | null;
          average_duration_movies?: number | null;
          average_duration_mpb?: number | null;
          average_duration_new_age?: number | null;
          average_duration_new_release?: number | null;
          average_duration_opera?: number | null;
          average_duration_pagode?: number | null;
          average_duration_party?: number | null;
          average_duration_philippines_opm?: number | null;
          average_duration_piano?: number | null;
          average_duration_pop?: number | null;
          average_duration_pop_film?: number | null;
          average_duration_post_dubstep?: number | null;
          average_duration_power_pop?: number | null;
          average_duration_progressive_house?: number | null;
          average_duration_psych_rock?: number | null;
          average_duration_punk?: number | null;
          average_duration_punk_rock?: number | null;
          average_duration_r_n_b?: number | null;
          average_duration_rainy_day?: number | null;
          average_duration_reggae?: number | null;
          average_duration_reggaeton?: number | null;
          average_duration_road_trip?: number | null;
          average_duration_rock?: number | null;
          average_duration_rock_n_roll?: number | null;
          average_duration_rockabilly?: number | null;
          average_duration_romance?: number | null;
          average_duration_sad?: number | null;
          average_duration_salsa?: number | null;
          average_duration_samba?: number | null;
          average_duration_sertanejo?: number | null;
          average_duration_show_tunes?: number | null;
          average_duration_singer_songwriter?: number | null;
          average_duration_ska?: number | null;
          average_duration_sleep?: number | null;
          average_duration_songwriter?: number | null;
          average_duration_soul?: number | null;
          average_duration_soundtracks?: number | null;
          average_duration_spanish?: number | null;
          average_duration_study?: number | null;
          average_duration_summer?: number | null;
          average_duration_swedish?: number | null;
          average_duration_synth_pop?: number | null;
          average_duration_tango?: number | null;
          average_duration_techno?: number | null;
          average_duration_trance?: number | null;
          average_duration_trip_hop?: number | null;
          average_duration_turkish?: number | null;
          average_duration_work_out?: number | null;
          average_duration_world_music?: number | null;
          average_listened_artists?: number;
          district?: Database["public"]["Enums"]["lima_districts"] | null;
          listened_acoustic_rate?: number | null;
          listened_afrobeat_rate?: number | null;
          listened_alt_rock_rate?: number | null;
          listened_alternative_rate?: number | null;
          listened_ambient_rate?: number | null;
          listened_anime_rate?: number | null;
          listened_black_metal_rate?: number | null;
          listened_bluegrass_rate?: number | null;
          listened_blues_rate?: number | null;
          listened_bossanova_rate?: number | null;
          listened_brazil_rate?: number | null;
          listened_breakbeat_rate?: number | null;
          listened_british_rate?: number | null;
          listened_cantopop_rate?: number | null;
          listened_chicago_house_rate?: number | null;
          listened_children_rate?: number | null;
          listened_chill_rate?: number | null;
          listened_classical_rate?: number | null;
          listened_club_rate?: number | null;
          listened_comedy_rate?: number | null;
          listened_country_rate?: number | null;
          listened_dance_rate?: number | null;
          listened_dancehall_rate?: number | null;
          listened_death_metal_rate?: number | null;
          listened_deep_house_rate?: number | null;
          listened_detroit_techno_rate?: number | null;
          listened_disco_rate?: number | null;
          listened_disney_rate?: number | null;
          listened_drum_and_bass_rate?: number | null;
          listened_dub_rate?: number | null;
          listened_dubstep_rate?: number | null;
          listened_edm_rate?: number | null;
          listened_electro_rate?: number | null;
          listened_electronic_rate?: number | null;
          listened_emo_rate?: number | null;
          listened_folk_rate?: number | null;
          listened_forro_rate?: number | null;
          listened_french_rate?: number | null;
          listened_funk_rate?: number | null;
          listened_garage_rate?: number | null;
          listened_german_rate?: number | null;
          listened_gospel_rate?: number | null;
          listened_goth_rate?: number | null;
          listened_grindcore_rate?: number | null;
          listened_groove_rate?: number | null;
          listened_grunge_rate?: number | null;
          listened_guitar_rate?: number | null;
          listened_happy_rate?: number | null;
          listened_hard_rock_rate?: number | null;
          listened_hardcore_rate?: number | null;
          listened_hardstyle_rate?: number | null;
          listened_heavy_metal_rate?: number | null;
          listened_hip_hop_rate?: number | null;
          listened_holidays_rate?: number | null;
          listened_honky_tonk_rate?: number | null;
          listened_house_rate?: number | null;
          listened_idm_rate?: number | null;
          listened_indian_rate?: number | null;
          listened_indie_pop_rate?: number | null;
          listened_indie_rate?: number | null;
          listened_industrial_rate?: number | null;
          listened_iranian_rate?: number | null;
          listened_j_dance_rate?: number | null;
          listened_j_idol_rate?: number | null;
          listened_j_pop_rate?: number | null;
          listened_j_rock_rate?: number | null;
          listened_jazz_rate?: number | null;
          listened_k_pop_rate?: number | null;
          listened_kids_rate?: number | null;
          listened_latin_rate?: number | null;
          listened_latino_rate?: number | null;
          listened_malay_rate?: number | null;
          listened_mandopop_rate?: number | null;
          listened_metal_misc_rate?: number | null;
          listened_metal_rate?: number | null;
          listened_metalcore_rate?: number | null;
          listened_minimal_techno_rate?: number | null;
          listened_movies_rate?: number | null;
          listened_mpb_rate?: number | null;
          listened_new_age_rate?: number | null;
          listened_new_release_rate?: number | null;
          listened_opera_rate?: number | null;
          listened_pagode_rate?: number | null;
          listened_party_rate?: number | null;
          listened_philippines_opm_rate?: number | null;
          listened_piano_rate?: number | null;
          listened_pop_film_rate?: number | null;
          listened_pop_rate?: number | null;
          listened_post_dubstep_rate?: number | null;
          listened_power_pop_rate?: number | null;
          listened_progressive_house_rate?: number | null;
          listened_psych_rock_rate?: number | null;
          listened_punk_rate?: number | null;
          listened_punk_rock_rate?: number | null;
          listened_r_n_b_rate?: number | null;
          listened_rainy_day_rate?: number | null;
          listened_reggae_rate?: number | null;
          listened_reggaeton_rate?: number | null;
          listened_road_trip_rate?: number | null;
          listened_rock_n_roll_rate?: number | null;
          listened_rock_rate?: number | null;
          listened_rockabilly_rate?: number | null;
          listened_romance_rate?: number | null;
          listened_sad_rate?: number | null;
          listened_salsa_rate?: number | null;
          listened_samba_rate?: number | null;
          listened_sertanejo_rate?: number | null;
          listened_show_tunes_rate?: number | null;
          listened_singer_songwriter_rate?: number | null;
          listened_ska_rate?: number | null;
          listened_sleep_rate?: number | null;
          listened_songwriter_rate?: number | null;
          listened_soul_rate?: number | null;
          listened_soundtracks_rate?: number | null;
          listened_spanish_rate?: number | null;
          listened_study_rate?: number | null;
          listened_summer_rate?: number | null;
          listened_swedish_rate?: number | null;
          listened_synth_pop_rate?: number | null;
          listened_tango_rate?: number | null;
          listened_techno_rate?: number | null;
          listened_trance_rate?: number | null;
          listened_trip_hop_rate?: number | null;
          listened_turkish_rate?: number | null;
          listened_work_out_rate?: number | null;
          listened_world_music_rate?: number | null;
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety?: Database["public"]["Enums"]["Variety"];
          spotifyId: number;
          study_center?: string | null;
        };
        Update: {
          age?: number | null;
          average_danceability?: number;
          average_duration_acoustic?: number | null;
          average_duration_afrobeat?: number | null;
          average_duration_alt_rock?: number | null;
          average_duration_alternative?: number | null;
          average_duration_ambient?: number | null;
          average_duration_anime?: number | null;
          average_duration_black_metal?: number | null;
          average_duration_bluegrass?: number | null;
          average_duration_blues?: number | null;
          average_duration_bossanova?: number | null;
          average_duration_brazil?: number | null;
          average_duration_breakbeat?: number | null;
          average_duration_british?: number | null;
          average_duration_cantopop?: number | null;
          average_duration_chicago_house?: number | null;
          average_duration_children?: number | null;
          average_duration_chill?: number | null;
          average_duration_classical?: number | null;
          average_duration_club?: number | null;
          average_duration_comedy?: number | null;
          average_duration_country?: number | null;
          average_duration_dance?: number | null;
          average_duration_dancehall?: number | null;
          average_duration_death_metal?: number | null;
          average_duration_deep_house?: number | null;
          average_duration_detroit_techno?: number | null;
          average_duration_disco?: number | null;
          average_duration_disney?: number | null;
          average_duration_drum_and_bass?: number | null;
          average_duration_dub?: number | null;
          average_duration_dubstep?: number | null;
          average_duration_edm?: number | null;
          average_duration_electro?: number | null;
          average_duration_electronic?: number | null;
          average_duration_emo?: number | null;
          average_duration_folk?: number | null;
          average_duration_forro?: number | null;
          average_duration_french?: number | null;
          average_duration_funk?: number | null;
          average_duration_garage?: number | null;
          average_duration_german?: number | null;
          average_duration_gospel?: number | null;
          average_duration_goth?: number | null;
          average_duration_grindcore?: number | null;
          average_duration_groove?: number | null;
          average_duration_grunge?: number | null;
          average_duration_guitar?: number | null;
          average_duration_happy?: number | null;
          average_duration_hard_rock?: number | null;
          average_duration_hardcore?: number | null;
          average_duration_hardstyle?: number | null;
          average_duration_heavy_metal?: number | null;
          average_duration_hip_hop?: number | null;
          average_duration_holidays?: number | null;
          average_duration_honky_tonk?: number | null;
          average_duration_house?: number | null;
          average_duration_idm?: number | null;
          average_duration_indian?: number | null;
          average_duration_indie?: number | null;
          average_duration_indie_pop?: number | null;
          average_duration_industrial?: number | null;
          average_duration_iranian?: number | null;
          average_duration_j_dance?: number | null;
          average_duration_j_idol?: number | null;
          average_duration_j_pop?: number | null;
          average_duration_j_rock?: number | null;
          average_duration_jazz?: number | null;
          average_duration_k_pop?: number | null;
          average_duration_kids?: number | null;
          average_duration_latin?: number | null;
          average_duration_latino?: number | null;
          average_duration_malay?: number | null;
          average_duration_mandopop?: number | null;
          average_duration_metal?: number | null;
          average_duration_metal_misc?: number | null;
          average_duration_metalcore?: number | null;
          average_duration_minimal_techno?: number | null;
          average_duration_movies?: number | null;
          average_duration_mpb?: number | null;
          average_duration_new_age?: number | null;
          average_duration_new_release?: number | null;
          average_duration_opera?: number | null;
          average_duration_pagode?: number | null;
          average_duration_party?: number | null;
          average_duration_philippines_opm?: number | null;
          average_duration_piano?: number | null;
          average_duration_pop?: number | null;
          average_duration_pop_film?: number | null;
          average_duration_post_dubstep?: number | null;
          average_duration_power_pop?: number | null;
          average_duration_progressive_house?: number | null;
          average_duration_psych_rock?: number | null;
          average_duration_punk?: number | null;
          average_duration_punk_rock?: number | null;
          average_duration_r_n_b?: number | null;
          average_duration_rainy_day?: number | null;
          average_duration_reggae?: number | null;
          average_duration_reggaeton?: number | null;
          average_duration_road_trip?: number | null;
          average_duration_rock?: number | null;
          average_duration_rock_n_roll?: number | null;
          average_duration_rockabilly?: number | null;
          average_duration_romance?: number | null;
          average_duration_sad?: number | null;
          average_duration_salsa?: number | null;
          average_duration_samba?: number | null;
          average_duration_sertanejo?: number | null;
          average_duration_show_tunes?: number | null;
          average_duration_singer_songwriter?: number | null;
          average_duration_ska?: number | null;
          average_duration_sleep?: number | null;
          average_duration_songwriter?: number | null;
          average_duration_soul?: number | null;
          average_duration_soundtracks?: number | null;
          average_duration_spanish?: number | null;
          average_duration_study?: number | null;
          average_duration_summer?: number | null;
          average_duration_swedish?: number | null;
          average_duration_synth_pop?: number | null;
          average_duration_tango?: number | null;
          average_duration_techno?: number | null;
          average_duration_trance?: number | null;
          average_duration_trip_hop?: number | null;
          average_duration_turkish?: number | null;
          average_duration_work_out?: number | null;
          average_duration_world_music?: number | null;
          average_listened_artists?: number;
          district?: Database["public"]["Enums"]["lima_districts"] | null;
          listened_acoustic_rate?: number | null;
          listened_afrobeat_rate?: number | null;
          listened_alt_rock_rate?: number | null;
          listened_alternative_rate?: number | null;
          listened_ambient_rate?: number | null;
          listened_anime_rate?: number | null;
          listened_black_metal_rate?: number | null;
          listened_bluegrass_rate?: number | null;
          listened_blues_rate?: number | null;
          listened_bossanova_rate?: number | null;
          listened_brazil_rate?: number | null;
          listened_breakbeat_rate?: number | null;
          listened_british_rate?: number | null;
          listened_cantopop_rate?: number | null;
          listened_chicago_house_rate?: number | null;
          listened_children_rate?: number | null;
          listened_chill_rate?: number | null;
          listened_classical_rate?: number | null;
          listened_club_rate?: number | null;
          listened_comedy_rate?: number | null;
          listened_country_rate?: number | null;
          listened_dance_rate?: number | null;
          listened_dancehall_rate?: number | null;
          listened_death_metal_rate?: number | null;
          listened_deep_house_rate?: number | null;
          listened_detroit_techno_rate?: number | null;
          listened_disco_rate?: number | null;
          listened_disney_rate?: number | null;
          listened_drum_and_bass_rate?: number | null;
          listened_dub_rate?: number | null;
          listened_dubstep_rate?: number | null;
          listened_edm_rate?: number | null;
          listened_electro_rate?: number | null;
          listened_electronic_rate?: number | null;
          listened_emo_rate?: number | null;
          listened_folk_rate?: number | null;
          listened_forro_rate?: number | null;
          listened_french_rate?: number | null;
          listened_funk_rate?: number | null;
          listened_garage_rate?: number | null;
          listened_german_rate?: number | null;
          listened_gospel_rate?: number | null;
          listened_goth_rate?: number | null;
          listened_grindcore_rate?: number | null;
          listened_groove_rate?: number | null;
          listened_grunge_rate?: number | null;
          listened_guitar_rate?: number | null;
          listened_happy_rate?: number | null;
          listened_hard_rock_rate?: number | null;
          listened_hardcore_rate?: number | null;
          listened_hardstyle_rate?: number | null;
          listened_heavy_metal_rate?: number | null;
          listened_hip_hop_rate?: number | null;
          listened_holidays_rate?: number | null;
          listened_honky_tonk_rate?: number | null;
          listened_house_rate?: number | null;
          listened_idm_rate?: number | null;
          listened_indian_rate?: number | null;
          listened_indie_pop_rate?: number | null;
          listened_indie_rate?: number | null;
          listened_industrial_rate?: number | null;
          listened_iranian_rate?: number | null;
          listened_j_dance_rate?: number | null;
          listened_j_idol_rate?: number | null;
          listened_j_pop_rate?: number | null;
          listened_j_rock_rate?: number | null;
          listened_jazz_rate?: number | null;
          listened_k_pop_rate?: number | null;
          listened_kids_rate?: number | null;
          listened_latin_rate?: number | null;
          listened_latino_rate?: number | null;
          listened_malay_rate?: number | null;
          listened_mandopop_rate?: number | null;
          listened_metal_misc_rate?: number | null;
          listened_metal_rate?: number | null;
          listened_metalcore_rate?: number | null;
          listened_minimal_techno_rate?: number | null;
          listened_movies_rate?: number | null;
          listened_mpb_rate?: number | null;
          listened_new_age_rate?: number | null;
          listened_new_release_rate?: number | null;
          listened_opera_rate?: number | null;
          listened_pagode_rate?: number | null;
          listened_party_rate?: number | null;
          listened_philippines_opm_rate?: number | null;
          listened_piano_rate?: number | null;
          listened_pop_film_rate?: number | null;
          listened_pop_rate?: number | null;
          listened_post_dubstep_rate?: number | null;
          listened_power_pop_rate?: number | null;
          listened_progressive_house_rate?: number | null;
          listened_psych_rock_rate?: number | null;
          listened_punk_rate?: number | null;
          listened_punk_rock_rate?: number | null;
          listened_r_n_b_rate?: number | null;
          listened_rainy_day_rate?: number | null;
          listened_reggae_rate?: number | null;
          listened_reggaeton_rate?: number | null;
          listened_road_trip_rate?: number | null;
          listened_rock_n_roll_rate?: number | null;
          listened_rock_rate?: number | null;
          listened_rockabilly_rate?: number | null;
          listened_romance_rate?: number | null;
          listened_sad_rate?: number | null;
          listened_salsa_rate?: number | null;
          listened_samba_rate?: number | null;
          listened_sertanejo_rate?: number | null;
          listened_show_tunes_rate?: number | null;
          listened_singer_songwriter_rate?: number | null;
          listened_ska_rate?: number | null;
          listened_sleep_rate?: number | null;
          listened_songwriter_rate?: number | null;
          listened_soul_rate?: number | null;
          listened_soundtracks_rate?: number | null;
          listened_spanish_rate?: number | null;
          listened_study_rate?: number | null;
          listened_summer_rate?: number | null;
          listened_swedish_rate?: number | null;
          listened_synth_pop_rate?: number | null;
          listened_tango_rate?: number | null;
          listened_techno_rate?: number | null;
          listened_trance_rate?: number | null;
          listened_trip_hop_rate?: number | null;
          listened_turkish_rate?: number | null;
          listened_work_out_rate?: number | null;
          listened_world_music_rate?: number | null;
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety?: Database["public"]["Enums"]["Variety"];
          spotifyId?: number;
          study_center?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      genre:
        | "acoustic"
        | "afrobeat"
        | "alt-rock"
        | "alternative"
        | "ambient"
        | "anime"
        | "black-metal"
        | "bluegrass"
        | "blues"
        | "bossanova"
        | "brazil"
        | "breakbeat"
        | "british"
        | "cantopop"
        | "chicago-house"
        | "children"
        | "chill"
        | "classical"
        | "club"
        | "comedy"
        | "country"
        | "dance"
        | "dancehall"
        | "death-metal"
        | "deep-house"
        | "detroit-techno"
        | "disco"
        | "disney"
        | "drum-and-bass"
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
        | "hard-rock"
        | "hardcore"
        | "hardstyle"
        | "heavy-metal"
        | "hip-hop"
        | "holidays"
        | "honky-tonk"
        | "house"
        | "idm"
        | "indian"
        | "indie"
        | "indie-pop"
        | "industrial"
        | "iranian"
        | "j-dance"
        | "j-idol"
        | "j-pop"
        | "j-rock"
        | "jazz"
        | "k-pop"
        | "kids"
        | "latin"
        | "latino"
        | "malay"
        | "mandopop"
        | "metal"
        | "metal-misc"
        | "metalcore"
        | "minimal-techno"
        | "movies"
        | "mpb"
        | "new-age"
        | "new-release"
        | "opera"
        | "pagode"
        | "party"
        | "philippines-opm"
        | "piano"
        | "pop"
        | "pop-film"
        | "post-dubstep"
        | "power-pop"
        | "progressive-house"
        | "psych-rock"
        | "punk"
        | "punk-rock"
        | "r-n-b"
        | "rainy-day"
        | "reggae"
        | "reggaeton"
        | "road-trip"
        | "rock"
        | "rock-n-roll"
        | "rockabilly"
        | "romance"
        | "sad"
        | "salsa"
        | "samba"
        | "sertanejo"
        | "show-tunes"
        | "singer-songwriter"
        | "ska"
        | "sleep"
        | "songwriter"
        | "soul"
        | "soundtracks"
        | "spanish"
        | "study"
        | "summer"
        | "swedish"
        | "synth-pop"
        | "tango"
        | "techno"
        | "trance"
        | "trip-hop"
        | "turkish"
        | "work-out"
        | "world-music";
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
        | "Villa María del Triunfo";
      Variety: "none" | "low" | "medium" | "high" | "very high";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
