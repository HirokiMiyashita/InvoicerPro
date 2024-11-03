"use client"; // クライアントサイドで実行

import { createClient } from "@/utils/supabase/client";
import { useState, FormEvent } from "react";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const supabase = createClient();

  // ユーザー登録処理
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault(); // フォームのデフォルト動作を無効化

    try {
      // SupabaseのsignUpメソッドでユーザーをauthに登録
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            business_name: businessName,
            address,
            phone,
          },
        },
      });

      if (authError) {
        setError(authError.message);
        setSuccess(null);
      } else {
        // auth登録が成功したらusersテーブルにデータを挿入
        const { user } = authData;

        const { data: insertData, error: insertError } = await supabase
          .from("users") // usersテーブルにデータを挿入
          .insert([
            {
              id: user?.id, // authで作成されたユーザーIDを関連付ける
              email: user?.email,
              business_name: businessName,
              address,
              phone,
              created_at: new Date(),
            },
          ]);

        if (insertError) {
          setError(insertError.message);
          setSuccess(null);
        } else {
          setSuccess(
            "ユーザー登録が完了しました。確認メールをご確認ください。"
          );
          setError(null);
          // フォームをクリア
          setEmail("");
          setPassword("");
          setBusinessName("");
          setAddress("");
          setPhone("");
        }
      }
    } catch (err) {
      setError("エラーが発生しました。もう一度お試しください。");
      setSuccess(null);
    }
  };

  return (
    <div className="signup-form mt-20">
      <h1>ユーザー登録</h1>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSignup}>
        <div>
          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2"
          />
        </div>

        <div>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2"
          />
        </div>

        <div>
          <label>事業名</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            className="border p-2"
          />
        </div>

        <div>
          <label>住所</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border p-2"
          />
        </div>

        <div>
          <label>電話番号</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          登録
        </button>
      </form>
    </div>
  );
}
