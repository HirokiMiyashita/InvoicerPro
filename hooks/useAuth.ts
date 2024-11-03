"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js"; // Sessionの型をインポート

export const useAuth = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createClient();

  useEffect(() => {
    // 初回マウント時にセッションを取得
    const getSession = async () => {
      const session = supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    // 認証状態の変化を監視
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    getSession();

    // クリーンアップ
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return { session, loading };
};
