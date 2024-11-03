"use client";

import { useState, useEffect, FormEvent } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createClient();

  // ユーザーがログイン状態かどうかを確認
  useEffect(() => {
    const checkUserSession = async () => {
      const session = supabase.auth.getSession();
      if (await session) {
        router.push("/"); // すでにログイン済みの場合はダッシュボードにリダイレクト
      }
    };
    checkUserSession();
  }, [router, supabase]);

  const handleSignin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setSuccess(null);
      } else {
        setSuccess("ログインに成功しました。");
        setError(null);
        // ダッシュボードにリダイレクト
        router.push("/dashboard");
      }
    } catch (err) {
      setError("エラーが発生しました。もう一度お試しください。");
      setSuccess(null);
    }
  };

  return (
    <div className="signin-form mt-20">
      <h1>ログイン</h1>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSignin}>
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

        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          ログイン
        </button>
      </form>
    </div>
  );
}
