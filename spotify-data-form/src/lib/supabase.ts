import { createClient } from "@supabase/supabase-js";
import { env } from "@/env.mjs";

import type { Database } from "@/schema.gen";

export const supabaseClient = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
