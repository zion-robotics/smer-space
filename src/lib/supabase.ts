import { createClient } from "@supabase/supabase-js";

// These two values come from the Supabase dashboard (Project Settings, then API).
// They are set in a local .env file and in the Vercel project settings.
// The anon key is meant to be public. Its limits come from the Row Level Security
// policies in schema.sql, not from keeping it secret. Never put the service role
// key anywhere in this project.
const supabaseUrl = import.meta.env["VITE_SUPABASE_URL"] as string | undefined;
const supabaseAnonKey = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string | undefined;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
