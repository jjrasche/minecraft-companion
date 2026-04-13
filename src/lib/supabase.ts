import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://127.0.0.1:54421'
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_placeholder'

// factoredui client — queries factoredui schema for behavioral capture
// This app has no app-level data in Supabase; it's factoredui-only
export const auxiSupabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: 'factoredui' as 'public' },
})
