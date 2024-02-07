export const genders = [
  "acoustic",
  "afrobeat",
  "alt_rock",
  "alternative",
  "ambient",
  "anime",
  "black_metal",
  "bluegrass",
  "blues",
  "bossanova",
  "brazil",
  "breakbeat",
  "british",
  "cantopop",
  "chicago_house",
  "children",
  "chill",
  "classical",
  "club",
  "comedy",
  "country",
  "dance",
  "dancehall",
  "death_metal",
  "deep_house",
  "detroit_techno",
  "disco",
  "disney",
  "drum_and_bass",
  "dub",
  "dubstep",
  "edm",
  "electro",
  "electronic",
  "emo",
  "folk",
  "forro",
  "french",
  "funk",
  "garage",
  "german",
  "gospel",
  "goth",
  "grindcore",
  "groove",
  "grunge",
  "guitar",
  "happy",
  "hard_rock",
  "hardcore",
  "hardstyle",
  "heavy_metal",
  "hip_hop",
  "holidays",
  "honky_tonk",
  "house",
  "idm",
  "indian",
  "indie",
  "indie_pop",
  "industrial",
  "iranian",
  "j_dance",
  "j_idol",
  "j_pop",
  "j_rock",
  "jazz",
  "k_pop",
  "kids",
  "latin",
  "latino",
  "malay",
  "mandopop",
  "metal",
  "metal_misc",
  "metalcore",
  "minimal_techno",
  "movies",
  "mpb",
  "new_age",
  "new_release",
  "opera",
  "pagode",
  "party",
  "philippines_opm",
  "piano",
  "pop",
  "pop_film",
  "post_dubstep",
  "power_pop",
  "progressive_house",
  "psych_rock",
  "punk",
  "punk_rock",
  "r_n_b",
  "rainy_day",
  "reggae",
  "reggaeton",
  "road_trip",
  "rock",
  "rock_n_roll",
  "rockabilly",
  "romance",
  "sad",
  "salsa",
  "samba",
  "sertanejo",
  "show_tunes",
  "singer_songwriter",
  "ska",
  "sleep",
  "songwriter",
  "soul",
  "soundtracks",
  "spanish",
  "study",
  "summer",
  "swedish",
  "synth_pop",
  "tango",
  "techno",
  "trance",
  "trip_hop",
  "turkish",
  "work_out",
] as const;

export type BaseGenderDurations = Record<
  (typeof genders)[number],
  { duration: number; count: number }
>;
export const baseGenderDurations = genders.reduce<BaseGenderDurations>(
  (accum, currentGender) => {
    accum[currentGender] = { duration: 0, count: 0 };
    return accum;
  },
  {} as BaseGenderDurations,
);
