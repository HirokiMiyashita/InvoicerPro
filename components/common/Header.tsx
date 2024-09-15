"use client";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2F855A] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <img src={"common/logo.png"} width={50} height={50} alt={""} />

        {/* ハンバーガーメニュー */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-gray-300">
            ダッシュボード
          </a>
          <a href="#" className="hover:text-gray-300">
            請求書
          </a>
          <a href="#" className="hover:text-gray-300">
            経費
          </a>
          <a href="#" className="hover:text-gray-300">
            設定
          </a>
        </nav>
      </div>

      {/* モバイルメニュー - 右から左にスライド */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#2F855A] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            {/* Xボタン */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="#" className="block hover:text-gray-300">
              ダッシュボード
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              請求書
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              経費
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">
              設定
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
