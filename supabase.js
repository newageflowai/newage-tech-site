import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const SUPABASE_URL = "https://ibruqozxdhwhyosdwkwz.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_dc8I8YlOtOUffajym4TTeg_UiBydybI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
