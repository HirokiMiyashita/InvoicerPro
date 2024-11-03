"use client";

import { MyBarChart } from "@/components/Chart";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);

  return (
    <div className="mt-[120px] flex flex-col md:flex-row">
      <div className="md:w-[30%] w-full p-4">
        <div className="bg-[#4BBF85] bg-opacity-45 border-b-2 border-[#2F855A] w-[90%] md:w-[60%] ml-4 rounded-md pl-2 mb-4">
          <p className="text-lg font-bold">今年の年収</p>
          <p className="ml-4">０円</p>
        </div>

        <div className="bg-[#4BBF85] bg-opacity-45 border-b-2 border-[#2F855A] w-[90%] md:w-[60%] ml-4 rounded-md pl-2 mt-4 mb-4">
          <p className="text-lg font-bold">今年の使用済み経費</p>
          <p className="ml-4">０円</p>
        </div>

        <div className="bg-[#070807] bg-opacity-45 border-b-2 border-[#2F855A] w-[90%] md:w-[60%] ml-4 rounded-md pl-2 mt-4 mb-4">
          <p className="text-lg font-bold">9月末振込予定金額</p>
          <p className="ml-4">０円</p>
        </div>
      </div>

      <div className="md:w-[70%] w-full mt-4 md:mt-0 md:mx-auto flex flex-col items-center">
        <div className="w-full h-[400px] p-4 mt-4 text-xl">
          {" "}
          {/* w-fullに変更 */}
          <p className="border-b-2 border-[#2F855A] w-full mb-4">
            {" "}
            {/* w-fullに変更 */}
            過去分グラフ
          </p>
          <MyBarChart />
        </div>
      </div>
    </div>
  );
}
