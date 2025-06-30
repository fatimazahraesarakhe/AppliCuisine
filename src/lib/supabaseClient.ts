// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "cthhbqosddsisuaelydz";
const supabaseAnonKey = "https://cthhbqosddsisuaelydz.supabase.co";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);