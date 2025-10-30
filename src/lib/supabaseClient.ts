import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dwoljjivmavmdwjtfjlx.supabase.co"; // Replace with your Supabase project URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3b2xqaml2bWF2bWR3anRmamx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NTUwNjUsImV4cCI6MjA3NzMzMTA2NX0.iZJ-Nr-OYQhF1W02q6_uMs6zXPdLmnR2ALd5yVw7GmM"; // Replace with your anon key from API settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
