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
          average_listened_artists: number;
          average_loudness: number;
          district: Database["public"]["Enums"]["lima_districts"];
          percieved_favourite_gender:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety: Database["public"]["Enums"]["variety"];
          spotify_id: string;
          study_center: string | null;
        };
        Insert: {
          age?: number | null;
          average_danceability: number;
          average_listened_artists: number;
          average_loudness: number;
          district: Database["public"]["Enums"]["lima_districts"];
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety: Database["public"]["Enums"]["variety"];
          spotify_id: string;
          study_center?: string | null;
        };
        Update: {
          age?: number | null;
          average_danceability?: number;
          average_listened_artists?: number;
          average_loudness?: number;
          district?: Database["public"]["Enums"]["lima_districts"];
          percieved_favourite_gender?:
            | Database["public"]["Enums"]["genre"]
            | null;
          percieved_variety?: Database["public"]["Enums"]["variety"];
          spotify_id?: string;
          study_center?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      populate_users_table: {
        Args: {
          num_records?: number;
        };
        Returns: undefined;
      };
    };
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
        | "world_music";
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
      variety: "none" | "low" | "medium" | "high" | "very high";
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
