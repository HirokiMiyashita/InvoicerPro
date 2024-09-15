// // lib/auth.ts
// import { supabase } from "./supabase";
// import { SignUpData, LoginData } from "./types";

// // ユーザー登録関数 (Sign Up)
// export const signUpUser = async ({
//   name,
//   email,
//   password,
//   business_name,
//   address,
//   phone,
// }: SignUpData) => {
//   // Supabaseのauth機能でユーザー登録
//   console.log(email);
//   console.log(password);
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   if (error) {
//     console.error("Error signing up:", error.message);
//     return { error };
//   }

//   // ユーザー登録が成功した場合に追加のユーザー情報を保存
//   const { error: insertError } = await supabase.from("users").insert([
//     {
//       id: data?.user?.id,
//       name,
//       business_name,
//       address,
//       phone,
//     },
//   ]);

//   if (insertError) {
//     console.error("Error inserting user data:", insertError.message);
//     return { error: insertError };
//   }

//   return { data };
// };

// // ユーザーログイン関数 (Login)
// export const loginUser = async ({ email, password }: LoginData) => {
//   // Supabaseのauth機能でログイン
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     console.error("Error logging in:", error.message);
//     return { error };
//   }

//   return { data };
// };

// // ログインしているユーザーの情報を取得
// export const getUser = async () => {
//   const { data, error } = await supabase.auth.getUser();

//   if (error) {
//     console.error("Error fetching user:", error.message);
//     return { error };
//   }

//   return { data };
// };
