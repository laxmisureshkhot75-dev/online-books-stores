// Supabase connection settings
// The publishable key is safe to use in a browser because Row Level Security is on.
const SUPABASE_URL = "https://dwlaavqnwpbsrollkdbh.supabase.co";
const SUPABASE_KEY = "sb_publishable_6v0mwuUaK9wLtb7bIqum5w_5i1rBcz-";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
