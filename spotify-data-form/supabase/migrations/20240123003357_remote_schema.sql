
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE SCHEMA IF NOT EXISTS "supabase_migrations";

ALTER SCHEMA "supabase_migrations" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."Variety" AS ENUM (
    'none',
    'low',
    'medium',
    'high',
    'very high'
);

ALTER TYPE "public"."Variety" OWNER TO "postgres";

CREATE TYPE "public"."genre" AS ENUM (
    'acoustic',
    'afrobeat',
    'alt-rock',
    'alternative',
    'ambient',
    'anime',
    'black-metal',
    'bluegrass',
    'blues',
    'bossanova',
    'brazil',
    'breakbeat',
    'british',
    'cantopop',
    'chicago-house',
    'children',
    'chill',
    'classical',
    'club',
    'comedy',
    'country',
    'dance',
    'dancehall',
    'death-metal',
    'deep-house',
    'detroit-techno',
    'disco',
    'disney',
    'drum-and-bass',
    'dub',
    'dubstep',
    'edm',
    'electro',
    'electronic',
    'emo',
    'folk',
    'forro',
    'french',
    'funk',
    'garage',
    'german',
    'gospel',
    'goth',
    'grindcore',
    'groove',
    'grunge',
    'guitar',
    'happy',
    'hard-rock',
    'hardcore',
    'hardstyle',
    'heavy-metal',
    'hip-hop',
    'holidays',
    'honky-tonk',
    'house',
    'idm',
    'indian',
    'indie',
    'indie-pop',
    'industrial',
    'iranian',
    'j-dance',
    'j-idol',
    'j-pop',
    'j-rock',
    'jazz',
    'k-pop',
    'kids',
    'latin',
    'latino',
    'malay',
    'mandopop',
    'metal',
    'metal-misc',
    'metalcore',
    'minimal-techno',
    'movies',
    'mpb',
    'new-age',
    'new-release',
    'opera',
    'pagode',
    'party',
    'philippines-opm',
    'piano',
    'pop',
    'pop-film',
    'post-dubstep',
    'power-pop',
    'progressive-house',
    'psych-rock',
    'punk',
    'punk-rock',
    'r-n-b',
    'rainy-day',
    'reggae',
    'reggaeton',
    'road-trip',
    'rock',
    'rock-n-roll',
    'rockabilly',
    'romance',
    'sad',
    'salsa',
    'samba',
    'sertanejo',
    'show-tunes',
    'singer-songwriter',
    'ska',
    'sleep',
    'songwriter',
    'soul',
    'soundtracks',
    'spanish',
    'study',
    'summer',
    'swedish',
    'synth-pop',
    'tango',
    'techno',
    'trance',
    'trip-hop',
    'turkish',
    'work-out',
    'world-music'
);

ALTER TYPE "public"."genre" OWNER TO "postgres";

CREATE TYPE "public"."lima_districts" AS ENUM (
    'Ancón',
    'Ate',
    'Barranco',
    'Breña',
    'Carabayllo',
    'Chaclacayo',
    'Chorrillos',
    'Cieneguilla',
    'Comas',
    'El Agustino',
    'Independencia',
    'Jesús María',
    'La Molina',
    'La Victoria',
    'Lima',
    'Lince',
    'Los Olivos',
    'Lurigancho',
    'Lurín',
    'Magdalena del Mar',
    'Miraflores',
    'Pachacamac',
    'Pucusana',
    'Pueblo Libre',
    'Puente Piedra',
    'Punta Hermosa',
    'Punta Negra',
    'Rímac',
    'San Bartolo',
    'San Borja',
    'San Isidro',
    'San Juan de Lurigancho',
    'San Juan de Miraflores',
    'San Luis',
    'San Martín de Porres',
    'San Miguel',
    'Santa Anita',
    'Santa María del Mar',
    'Santa Rosa',
    'Santiago de Surco',
    'Surquillo',
    'Villa El Salvador',
    'Villa María del Triunfo'
);

ALTER TYPE "public"."lima_districts" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" bigint NOT NULL,
    "study_center" character varying,
    "age" smallint,
    "district" "public"."lima_districts",
    "percieved_variety" "public"."Variety" DEFAULT 'none'::"public"."Variety" NOT NULL,
    "percieved_favourite_genders" "public"."genre"[] NOT NULL,
    "average_danceability" real DEFAULT '0'::real NOT NULL,
    "average_listened_artists" real DEFAULT '0'::real NOT NULL,
    "average_duration_acoustic" real,
    "listened_acoustic_rate" real,
    "average_duration_afrobeat" real,
    "listened_afrobeat_rate" real,
    "average_duration_alt_rock" real,
    "listened_alt_rock_rate" real,
    "average_duration_alternative" real,
    "listened_alternative_rate" real,
    "average_duration_ambient" real,
    "listened_ambient_rate" real,
    "average_duration_anime" real,
    "listened_anime_rate" real,
    "average_duration_black_metal" real,
    "listened_black_metal_rate" real,
    "average_duration_bluegrass" real,
    "listened_bluegrass_rate" real,
    "average_duration_blues" real,
    "listened_blues_rate" real,
    "average_duration_bossanova" real,
    "listened_bossanova_rate" real,
    "average_duration_brazil" real,
    "listened_brazil_rate" real,
    "average_duration_breakbeat" real,
    "listened_breakbeat_rate" real,
    "average_duration_british" real,
    "listened_british_rate" real,
    "average_duration_cantopop" real,
    "listened_cantopop_rate" real,
    "average_duration_chicago_house" real,
    "listened_chicago_house_rate" real,
    "average_duration_children" real,
    "listened_children_rate" real,
    "average_duration_chill" real,
    "listened_chill_rate" real,
    "average_duration_classical" real,
    "listened_classical_rate" real,
    "average_duration_club" real,
    "listened_club_rate" real,
    "average_duration_comedy" real,
    "listened_comedy_rate" real,
    "average_duration_country" real,
    "listened_country_rate" real,
    "average_duration_dance" real,
    "listened_dance_rate" real,
    "average_duration_dancehall" real,
    "listened_dancehall_rate" real,
    "average_duration_death_metal" real,
    "listened_death_metal_rate" real,
    "average_duration_deep_house" real,
    "listened_deep_house_rate" real,
    "average_duration_detroit_techno" real,
    "listened_detroit_techno_rate" real,
    "average_duration_disco" real,
    "listened_disco_rate" real,
    "average_duration_disney" real,
    "listened_disney_rate" real,
    "average_duration_drum_and_bass" real,
    "listened_drum_and_bass_rate" real,
    "average_duration_dub" real,
    "listened_dub_rate" real,
    "average_duration_dubstep" real,
    "listened_dubstep_rate" real,
    "average_duration_edm" real,
    "listened_edm_rate" real,
    "average_duration_electro" real,
    "listened_electro_rate" real,
    "average_duration_electronic" real,
    "listened_electronic_rate" real,
    "average_duration_emo" real,
    "listened_emo_rate" real,
    "average_duration_folk" real,
    "listened_folk_rate" real,
    "average_duration_forro" real,
    "listened_forro_rate" real,
    "average_duration_french" real,
    "listened_french_rate" real,
    "average_duration_funk" real,
    "listened_funk_rate" real,
    "average_duration_garage" real,
    "listened_garage_rate" real,
    "average_duration_german" real,
    "listened_german_rate" real,
    "average_duration_gospel" real,
    "listened_gospel_rate" real,
    "average_duration_goth" real,
    "listened_goth_rate" real,
    "average_duration_grindcore" real,
    "listened_grindcore_rate" real,
    "average_duration_groove" real,
    "listened_groove_rate" real,
    "average_duration_grunge" real,
    "listened_grunge_rate" real,
    "average_duration_guitar" real,
    "listened_guitar_rate" real,
    "average_duration_happy" real,
    "listened_happy_rate" real,
    "average_duration_hard_rock" real,
    "listened_hard_rock_rate" real,
    "average_duration_hardcore" real,
    "listened_hardcore_rate" real,
    "average_duration_hardstyle" real,
    "listened_hardstyle_rate" real,
    "average_duration_heavy_metal" real,
    "listened_heavy_metal_rate" real,
    "average_duration_hip_hop" real,
    "listened_hip_hop_rate" real,
    "average_duration_holidays" real,
    "listened_holidays_rate" real,
    "average_duration_honky_tonk" real,
    "listened_honky_tonk_rate" real,
    "average_duration_house" real,
    "listened_house_rate" real,
    "average_duration_idm" real,
    "listened_idm_rate" real,
    "average_duration_indian" real,
    "listened_indian_rate" real,
    "average_duration_indie" real,
    "listened_indie_rate" real,
    "average_duration_indie_pop" real,
    "listened_indie_pop_rate" real,
    "average_duration_industrial" real,
    "listened_industrial_rate" real,
    "average_duration_iranian" real,
    "listened_iranian_rate" real,
    "average_duration_j_dance" real,
    "listened_j_dance_rate" real,
    "average_duration_j_idol" real,
    "listened_j_idol_rate" real,
    "average_duration_j_pop" real,
    "listened_j_pop_rate" real,
    "average_duration_j_rock" real,
    "listened_j_rock_rate" real,
    "average_duration_jazz" real,
    "listened_jazz_rate" real,
    "average_duration_k_pop" real,
    "listened_k_pop_rate" real,
    "average_duration_kids" real,
    "listened_kids_rate" real,
    "average_duration_latin" real,
    "listened_latin_rate" real,
    "average_duration_latino" real,
    "listened_latino_rate" real,
    "average_duration_malay" real,
    "listened_malay_rate" real,
    "average_duration_mandopop" real,
    "listened_mandopop_rate" real,
    "average_duration_metal" real,
    "listened_metal_rate" real,
    "average_duration_metal_misc" real,
    "listened_metal_misc_rate" real,
    "average_duration_metalcore" real,
    "listened_metalcore_rate" real,
    "average_duration_minimal_techno" real,
    "listened_minimal_techno_rate" real,
    "average_duration_movies" real,
    "listened_movies_rate" real,
    "average_duration_mpb" real,
    "listened_mpb_rate" real,
    "average_duration_new_age" real,
    "listened_new_age_rate" real,
    "average_duration_new_release" real,
    "listened_new_release_rate" real,
    "average_duration_opera" real,
    "listened_opera_rate" real,
    "average_duration_pagode" real,
    "listened_pagode_rate" real,
    "average_duration_party" real,
    "listened_party_rate" real,
    "average_duration_philippines_opm" real,
    "listened_philippines_opm_rate" real,
    "average_duration_piano" real,
    "listened_piano_rate" real,
    "average_duration_pop" real,
    "listened_pop_rate" real,
    "average_duration_pop_film" real,
    "listened_pop_film_rate" real,
    "average_duration_post_dubstep" real,
    "listened_post_dubstep_rate" real,
    "average_duration_power_pop" real,
    "listened_power_pop_rate" real,
    "average_duration_progressive_house" real,
    "listened_progressive_house_rate" real,
    "average_duration_psych_rock" real,
    "listened_psych_rock_rate" real,
    "average_duration_punk" real,
    "listened_punk_rate" real,
    "average_duration_punk_rock" real,
    "listened_punk_rock_rate" real,
    "average_duration_r_n_b" real,
    "listened_r_n_b_rate" real,
    "average_duration_rainy_day" real,
    "listened_rainy_day_rate" real,
    "average_duration_reggae" real,
    "listened_reggae_rate" real,
    "average_duration_reggaeton" real,
    "listened_reggaeton_rate" real,
    "average_duration_road_trip" real,
    "listened_road_trip_rate" real,
    "average_duration_rock" real,
    "listened_rock_rate" real,
    "average_duration_rock_n_roll" real,
    "listened_rock_n_roll_rate" real,
    "average_duration_rockabilly" real,
    "listened_rockabilly_rate" real,
    "average_duration_romance" real,
    "listened_romance_rate" real,
    "average_duration_sad" real,
    "listened_sad_rate" real,
    "average_duration_salsa" real,
    "listened_salsa_rate" real,
    "average_duration_samba" real,
    "listened_samba_rate" real,
    "average_duration_sertanejo" real,
    "listened_sertanejo_rate" real,
    "average_duration_show_tunes" real,
    "listened_show_tunes_rate" real,
    "average_duration_singer_songwriter" real,
    "listened_singer_songwriter_rate" real,
    "average_duration_ska" real,
    "listened_ska_rate" real,
    "average_duration_sleep" real,
    "listened_sleep_rate" real,
    "average_duration_songwriter" real,
    "listened_songwriter_rate" real,
    "average_duration_soul" real,
    "listened_soul_rate" real,
    "average_duration_soundtracks" real,
    "listened_soundtracks_rate" real,
    "average_duration_spanish" real,
    "listened_spanish_rate" real,
    "average_duration_study" real,
    "listened_study_rate" real,
    "average_duration_summer" real,
    "listened_summer_rate" real,
    "average_duration_swedish" real,
    "listened_swedish_rate" real,
    "average_duration_synth_pop" real,
    "listened_synth_pop_rate" real,
    "average_duration_tango" real,
    "listened_tango_rate" real,
    "average_duration_techno" real,
    "listened_techno_rate" real,
    "average_duration_trance" real,
    "listened_trance_rate" real,
    "average_duration_trip_hop" real,
    "listened_trip_hop_rate" real,
    "average_duration_turkish" real,
    "listened_turkish_rate" real,
    "average_duration_work_out" real,
    "listened_work_out_rate" real,
    "average_duration_world_music" real,
    "listened_world_music_rate" real
);

ALTER TABLE "public"."users" OWNER TO "postgres";

ALTER TABLE "public"."users" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "supabase_migrations"."schema_migrations" (
    "version" "text" NOT NULL,
    "statements" "text"[],
    "name" "text"
);

ALTER TABLE "supabase_migrations"."schema_migrations" OWNER TO "postgres";

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "supabase_migrations"."schema_migrations"
    ADD CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version");

ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role";

GRANT ALL ON SEQUENCE "public"."users_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."users_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."users_id_seq" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
