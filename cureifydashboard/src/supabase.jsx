
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://absjixzelkgmnktueokh.supabase.co'
const supabaseKey = 'sb_publishable_sX-JcC95I3AUufIOhIsYew_6NIixcSX'
export const supabase = createClient(supabaseUrl, supabaseKey)