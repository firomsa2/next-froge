import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser Supabase client using the public anon key.
 *
 * Configure these in `.env.local` (see SUPABASE_SETUP.md):
 *   NEXT_PUBLIC_SUPABASE_URL=...
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
 *
 * Inserts into `contact_messages` are allowed by a Row-Level-Security
 * INSERT policy for the `anon` role. No reads are permitted from the client.
 *
 * `supabase` is null until env vars are set, so the form falls back to a
 * friendly error instead of crashing the build.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
