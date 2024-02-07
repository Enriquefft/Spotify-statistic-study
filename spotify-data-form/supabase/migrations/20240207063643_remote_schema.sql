create type "public"."variety" as enum ('none', 'low', 'medium', 'high', 'very high');

alter table "public"."users" drop constraint "users_id_key";

drop index if exists "public"."users_id_key";

alter table "public"."users" add column "average_loudness" real not null;

alter table "public"."users" alter column "average_danceability" drop default;

alter table "public"."users" alter column "average_duration_acoustic" set not null;

alter table "public"."users" alter column "average_duration_afrobeat" set not null;

alter table "public"."users" alter column "average_duration_alt_rock" set not null;

alter table "public"."users" alter column "average_duration_alternative" set not null;

alter table "public"."users" alter column "average_duration_ambient" set not null;

alter table "public"."users" alter column "average_duration_anime" set not null;

alter table "public"."users" alter column "average_duration_black_metal" set not null;

alter table "public"."users" alter column "average_duration_bluegrass" set not null;

alter table "public"."users" alter column "average_duration_blues" set not null;

alter table "public"."users" alter column "average_duration_bossanova" set not null;

alter table "public"."users" alter column "average_duration_brazil" set not null;

alter table "public"."users" alter column "average_duration_breakbeat" set not null;

alter table "public"."users" alter column "average_duration_british" set not null;

alter table "public"."users" alter column "average_duration_cantopop" set not null;

alter table "public"."users" alter column "average_duration_chicago_house" set not null;

alter table "public"."users" alter column "average_duration_children" set not null;

alter table "public"."users" alter column "average_duration_chill" set not null;

alter table "public"."users" alter column "average_duration_classical" set not null;

alter table "public"."users" alter column "average_duration_club" set not null;

alter table "public"."users" alter column "average_duration_comedy" set not null;

alter table "public"."users" alter column "average_duration_country" set not null;

alter table "public"."users" alter column "average_duration_dance" set not null;

alter table "public"."users" alter column "average_duration_dancehall" set not null;

alter table "public"."users" alter column "average_duration_death_metal" set not null;

alter table "public"."users" alter column "average_duration_deep_house" set not null;

alter table "public"."users" alter column "average_duration_detroit_techno" set not null;

alter table "public"."users" alter column "average_duration_disco" set not null;

alter table "public"."users" alter column "average_duration_disney" set not null;

alter table "public"."users" alter column "average_duration_drum_and_bass" set not null;

alter table "public"."users" alter column "average_duration_dub" set not null;

alter table "public"."users" alter column "average_duration_dubstep" set not null;

alter table "public"."users" alter column "average_duration_edm" set not null;

alter table "public"."users" alter column "average_duration_electro" set not null;

alter table "public"."users" alter column "average_duration_electronic" set not null;

alter table "public"."users" alter column "average_duration_emo" set not null;

alter table "public"."users" alter column "average_duration_folk" set not null;

alter table "public"."users" alter column "average_duration_forro" set not null;

alter table "public"."users" alter column "average_duration_french" set not null;

alter table "public"."users" alter column "average_duration_funk" set not null;

alter table "public"."users" alter column "average_duration_garage" set not null;

alter table "public"."users" alter column "average_duration_german" set not null;

alter table "public"."users" alter column "average_duration_gospel" set not null;

alter table "public"."users" alter column "average_duration_goth" set not null;

alter table "public"."users" alter column "average_duration_grindcore" set not null;

alter table "public"."users" alter column "average_duration_groove" set not null;

alter table "public"."users" alter column "average_duration_grunge" set not null;

alter table "public"."users" alter column "average_duration_guitar" set not null;

alter table "public"."users" alter column "average_duration_happy" set not null;

alter table "public"."users" alter column "average_duration_hard_rock" set not null;

alter table "public"."users" alter column "average_duration_hardcore" set not null;

alter table "public"."users" alter column "average_duration_hardstyle" set not null;

alter table "public"."users" alter column "average_duration_heavy_metal" set not null;

alter table "public"."users" alter column "average_duration_hip_hop" set not null;

alter table "public"."users" alter column "average_duration_holidays" set not null;

alter table "public"."users" alter column "average_duration_honky_tonk" set not null;

alter table "public"."users" alter column "average_duration_house" set not null;

alter table "public"."users" alter column "average_duration_idm" set not null;

alter table "public"."users" alter column "average_duration_indian" set not null;

alter table "public"."users" alter column "average_duration_indie" set not null;

alter table "public"."users" alter column "average_duration_indie_pop" set not null;

alter table "public"."users" alter column "average_duration_industrial" set not null;

alter table "public"."users" alter column "average_duration_iranian" set not null;

alter table "public"."users" alter column "average_duration_j_dance" set not null;

alter table "public"."users" alter column "average_duration_j_idol" set not null;

alter table "public"."users" alter column "average_duration_j_pop" set not null;

alter table "public"."users" alter column "average_duration_j_rock" set not null;

alter table "public"."users" alter column "average_duration_jazz" set not null;

alter table "public"."users" alter column "average_duration_k_pop" set not null;

alter table "public"."users" alter column "average_duration_kids" set not null;

alter table "public"."users" alter column "average_duration_latin" set not null;

alter table "public"."users" alter column "average_duration_latino" set not null;

alter table "public"."users" alter column "average_duration_malay" set not null;

alter table "public"."users" alter column "average_duration_mandopop" set not null;

alter table "public"."users" alter column "average_duration_metal" set not null;

alter table "public"."users" alter column "average_duration_metal_misc" set not null;

alter table "public"."users" alter column "average_duration_metalcore" set not null;

alter table "public"."users" alter column "average_duration_minimal_techno" set not null;

alter table "public"."users" alter column "average_duration_movies" set not null;

alter table "public"."users" alter column "average_duration_mpb" set not null;

alter table "public"."users" alter column "average_duration_new_age" set not null;

alter table "public"."users" alter column "average_duration_new_release" set not null;

alter table "public"."users" alter column "average_duration_opera" set not null;

alter table "public"."users" alter column "average_duration_pagode" set not null;

alter table "public"."users" alter column "average_duration_party" set not null;

alter table "public"."users" alter column "average_duration_philippines_opm" set not null;

alter table "public"."users" alter column "average_duration_piano" set not null;

alter table "public"."users" alter column "average_duration_pop" set not null;

alter table "public"."users" alter column "average_duration_pop_film" set not null;

alter table "public"."users" alter column "average_duration_post_dubstep" set not null;

alter table "public"."users" alter column "average_duration_power_pop" set not null;

alter table "public"."users" alter column "average_duration_progressive_house" set not null;

alter table "public"."users" alter column "average_duration_psych_rock" set not null;

alter table "public"."users" alter column "average_duration_punk" set not null;

alter table "public"."users" alter column "average_duration_punk_rock" set not null;

alter table "public"."users" alter column "average_duration_r_n_b" set not null;

alter table "public"."users" alter column "average_duration_rainy_day" set not null;

alter table "public"."users" alter column "average_duration_reggae" set not null;

alter table "public"."users" alter column "average_duration_reggaeton" set not null;

alter table "public"."users" alter column "average_duration_road_trip" set not null;

alter table "public"."users" alter column "average_duration_rock" set not null;

alter table "public"."users" alter column "average_duration_rock_n_roll" set not null;

alter table "public"."users" alter column "average_duration_rockabilly" set not null;

alter table "public"."users" alter column "average_duration_romance" set not null;

alter table "public"."users" alter column "average_duration_sad" set not null;

alter table "public"."users" alter column "average_duration_salsa" set not null;

alter table "public"."users" alter column "average_duration_samba" set not null;

alter table "public"."users" alter column "average_duration_sertanejo" set not null;

alter table "public"."users" alter column "average_duration_show_tunes" set not null;

alter table "public"."users" alter column "average_duration_singer_songwriter" set not null;

alter table "public"."users" alter column "average_duration_ska" set not null;

alter table "public"."users" alter column "average_duration_sleep" set not null;

alter table "public"."users" alter column "average_duration_songwriter" set not null;

alter table "public"."users" alter column "average_duration_soul" set not null;

alter table "public"."users" alter column "average_duration_soundtracks" set not null;

alter table "public"."users" alter column "average_duration_spanish" set not null;

alter table "public"."users" alter column "average_duration_study" set not null;

alter table "public"."users" alter column "average_duration_summer" set not null;

alter table "public"."users" alter column "average_duration_swedish" set not null;

alter table "public"."users" alter column "average_duration_synth_pop" set not null;

alter table "public"."users" alter column "average_duration_tango" set not null;

alter table "public"."users" alter column "average_duration_techno" set not null;

alter table "public"."users" alter column "average_duration_trance" set not null;

alter table "public"."users" alter column "average_duration_trip_hop" set not null;

alter table "public"."users" alter column "average_duration_turkish" set not null;

alter table "public"."users" alter column "average_duration_work_out" set not null;

alter table "public"."users" alter column "average_duration_world_music" set not null;

alter table "public"."users" alter column "average_listened_artists" drop default;

alter table "public"."users" alter column "listened_acoustic_rate" set not null;

alter table "public"."users" alter column "listened_afrobeat_rate" set not null;

alter table "public"."users" alter column "listened_alt_rock_rate" set not null;

alter table "public"."users" alter column "listened_alternative_rate" set not null;

alter table "public"."users" alter column "listened_ambient_rate" set not null;

alter table "public"."users" alter column "listened_anime_rate" set not null;

alter table "public"."users" alter column "listened_black_metal_rate" set not null;

alter table "public"."users" alter column "listened_bluegrass_rate" set not null;

alter table "public"."users" alter column "listened_blues_rate" set not null;

alter table "public"."users" alter column "listened_bossanova_rate" set not null;

alter table "public"."users" alter column "listened_brazil_rate" set not null;

alter table "public"."users" alter column "listened_breakbeat_rate" set not null;

alter table "public"."users" alter column "listened_british_rate" set not null;

alter table "public"."users" alter column "listened_cantopop_rate" set not null;

alter table "public"."users" alter column "listened_chicago_house_rate" set not null;

alter table "public"."users" alter column "listened_children_rate" set not null;

alter table "public"."users" alter column "listened_chill_rate" set not null;

alter table "public"."users" alter column "listened_classical_rate" set not null;

alter table "public"."users" alter column "listened_club_rate" set not null;

alter table "public"."users" alter column "listened_comedy_rate" set not null;

alter table "public"."users" alter column "listened_country_rate" set not null;

alter table "public"."users" alter column "listened_dance_rate" set not null;

alter table "public"."users" alter column "listened_dancehall_rate" set not null;

alter table "public"."users" alter column "listened_death_metal_rate" set not null;

alter table "public"."users" alter column "listened_deep_house_rate" set not null;

alter table "public"."users" alter column "listened_detroit_techno_rate" set not null;

alter table "public"."users" alter column "listened_disco_rate" set not null;

alter table "public"."users" alter column "listened_disney_rate" set not null;

alter table "public"."users" alter column "listened_drum_and_bass_rate" set not null;

alter table "public"."users" alter column "listened_dub_rate" set not null;

alter table "public"."users" alter column "listened_dubstep_rate" set not null;

alter table "public"."users" alter column "listened_edm_rate" set not null;

alter table "public"."users" alter column "listened_electro_rate" set not null;

alter table "public"."users" alter column "listened_electronic_rate" set not null;

alter table "public"."users" alter column "listened_emo_rate" set not null;

alter table "public"."users" alter column "listened_folk_rate" set not null;

alter table "public"."users" alter column "listened_forro_rate" set not null;

alter table "public"."users" alter column "listened_french_rate" set not null;

alter table "public"."users" alter column "listened_funk_rate" set not null;

alter table "public"."users" alter column "listened_garage_rate" set not null;

alter table "public"."users" alter column "listened_german_rate" set not null;

alter table "public"."users" alter column "listened_gospel_rate" set not null;

alter table "public"."users" alter column "listened_goth_rate" set not null;

alter table "public"."users" alter column "listened_grindcore_rate" set not null;

alter table "public"."users" alter column "listened_groove_rate" set not null;

alter table "public"."users" alter column "listened_grunge_rate" set not null;

alter table "public"."users" alter column "listened_guitar_rate" set not null;

alter table "public"."users" alter column "listened_happy_rate" set not null;

alter table "public"."users" alter column "listened_hard_rock_rate" set not null;

alter table "public"."users" alter column "listened_hardcore_rate" set not null;

alter table "public"."users" alter column "listened_hardstyle_rate" set not null;

alter table "public"."users" alter column "listened_heavy_metal_rate" set not null;

alter table "public"."users" alter column "listened_hip_hop_rate" set not null;

alter table "public"."users" alter column "listened_holidays_rate" set not null;

alter table "public"."users" alter column "listened_honky_tonk_rate" set not null;

alter table "public"."users" alter column "listened_house_rate" set not null;

alter table "public"."users" alter column "listened_idm_rate" set not null;

alter table "public"."users" alter column "listened_indian_rate" set not null;

alter table "public"."users" alter column "listened_indie_pop_rate" set not null;

alter table "public"."users" alter column "listened_indie_rate" set not null;

alter table "public"."users" alter column "listened_industrial_rate" set not null;

alter table "public"."users" alter column "listened_iranian_rate" set not null;

alter table "public"."users" alter column "listened_j_dance_rate" set not null;

alter table "public"."users" alter column "listened_j_idol_rate" set not null;

alter table "public"."users" alter column "listened_j_pop_rate" set not null;

alter table "public"."users" alter column "listened_j_rock_rate" set not null;

alter table "public"."users" alter column "listened_jazz_rate" set not null;

alter table "public"."users" alter column "listened_k_pop_rate" set not null;

alter table "public"."users" alter column "listened_kids_rate" set not null;

alter table "public"."users" alter column "listened_latin_rate" set not null;

alter table "public"."users" alter column "listened_latino_rate" set not null;

alter table "public"."users" alter column "listened_malay_rate" set not null;

alter table "public"."users" alter column "listened_mandopop_rate" set not null;

alter table "public"."users" alter column "listened_metal_misc_rate" set not null;

alter table "public"."users" alter column "listened_metal_rate" set not null;

alter table "public"."users" alter column "listened_metalcore_rate" set not null;

alter table "public"."users" alter column "listened_minimal_techno_rate" set not null;

alter table "public"."users" alter column "listened_movies_rate" set not null;

alter table "public"."users" alter column "listened_mpb_rate" set not null;

alter table "public"."users" alter column "listened_new_age_rate" set not null;

alter table "public"."users" alter column "listened_new_release_rate" set not null;

alter table "public"."users" alter column "listened_opera_rate" set not null;

alter table "public"."users" alter column "listened_pagode_rate" set not null;

alter table "public"."users" alter column "listened_party_rate" set not null;

alter table "public"."users" alter column "listened_philippines_opm_rate" set not null;

alter table "public"."users" alter column "listened_piano_rate" set not null;

alter table "public"."users" alter column "listened_pop_film_rate" set not null;

alter table "public"."users" alter column "listened_pop_rate" set not null;

alter table "public"."users" alter column "listened_post_dubstep_rate" set not null;

alter table "public"."users" alter column "listened_power_pop_rate" set not null;

alter table "public"."users" alter column "listened_progressive_house_rate" set not null;

alter table "public"."users" alter column "listened_psych_rock_rate" set not null;

alter table "public"."users" alter column "listened_punk_rate" set not null;

alter table "public"."users" alter column "listened_punk_rock_rate" set not null;

alter table "public"."users" alter column "listened_r_n_b_rate" set not null;

alter table "public"."users" alter column "listened_rainy_day_rate" set not null;

alter table "public"."users" alter column "listened_reggae_rate" set not null;

alter table "public"."users" alter column "listened_reggaeton_rate" set not null;

alter table "public"."users" alter column "listened_road_trip_rate" set not null;

alter table "public"."users" alter column "listened_rock_n_roll_rate" set not null;

alter table "public"."users" alter column "listened_rock_rate" set not null;

alter table "public"."users" alter column "listened_rockabilly_rate" set not null;

alter table "public"."users" alter column "listened_romance_rate" set not null;

alter table "public"."users" alter column "listened_sad_rate" set not null;

alter table "public"."users" alter column "listened_salsa_rate" set not null;

alter table "public"."users" alter column "listened_samba_rate" set not null;

alter table "public"."users" alter column "listened_sertanejo_rate" set not null;

alter table "public"."users" alter column "listened_show_tunes_rate" set not null;

alter table "public"."users" alter column "listened_singer_songwriter_rate" set not null;

alter table "public"."users" alter column "listened_ska_rate" set not null;

alter table "public"."users" alter column "listened_sleep_rate" set not null;

alter table "public"."users" alter column "listened_songwriter_rate" set not null;

alter table "public"."users" alter column "listened_soul_rate" set not null;

alter table "public"."users" alter column "listened_soundtracks_rate" set not null;

alter table "public"."users" alter column "listened_spanish_rate" set not null;

alter table "public"."users" alter column "listened_study_rate" set not null;

alter table "public"."users" alter column "listened_summer_rate" set not null;

alter table "public"."users" alter column "listened_swedish_rate" set not null;

alter table "public"."users" alter column "listened_synth_pop_rate" set not null;

alter table "public"."users" alter column "listened_tango_rate" set not null;

alter table "public"."users" alter column "listened_techno_rate" set not null;

alter table "public"."users" alter column "listened_trance_rate" set not null;

alter table "public"."users" alter column "listened_trip_hop_rate" set not null;

alter table "public"."users" alter column "listened_turkish_rate" set not null;

alter table "public"."users" alter column "listened_work_out_rate" set not null;

alter table "public"."users" alter column "listened_world_music_rate" set not null;

alter table "public"."users" alter column "percieved_variety" drop default;

alter table "public"."users" alter column "percieved_variety" set data type variety using "percieved_variety"::text::variety;

alter table "public"."users" disable row level security;

drop type "public"."Variety";


