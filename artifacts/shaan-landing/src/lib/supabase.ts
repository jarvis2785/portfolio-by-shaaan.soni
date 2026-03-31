import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bcqqdvybqqofhhfzbgnn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_BZIaOC454Bg50oPrBZRLOQ_cOsOFb2K";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
