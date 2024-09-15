// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// SupabaseのURLとキーを環境変数から取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
console.log(supabaseUrl);
console.log(supabaseKey);
// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseKey);
