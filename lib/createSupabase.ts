import { createClient } from "@supabase/supabase-js"

const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  options
)

export function createSupabaseClient() {
  return supabase
}
