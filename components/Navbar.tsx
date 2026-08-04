"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-2 md:px-4 lg:px-6 py-4 lg:py-6">
      {/* main navbar row */}
      <div className="flex justify-evenly items-center gap-2 md:gap-4 lg:gap-6">
        {/* logo and location */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <Link href="/">
            <img src="/fleet-logo.png" className="w-24 md:w-28 lg:w-36" />
          </Link>
          <Link
            href=""
            className="hidden md:block text-black text-sm lg:text-base hover:text-[#DC2126] hover:underline"
          >
            Glencoe
          </Link>
        </div>

        {/* search bar — always visible */}
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-xl">
          <SearchBar />
        </div>

        {/* desktop nav links — hidden on mobile */}
        <div className="hidden md:flex gap-2 lg:gap-6 text-sm lg:text-base">
          <Link
            href="/shop"
            className="text-black hover:text-[#DC2126] hover:underline"
          >
            Shop All
          </Link>
          <Link
            href="/promotions"
            className="text-black hover:text-[#DC2126] hover:underline"
          >
            Promotions
          </Link>
          <Link
            href="/cart"
            className="text-black hover:text-[#DC2126] hover:underline"
          >
            Cart
          </Link>
          <Link
            href="/login"
            className="text-black hover:text-[#DC2126] hover:underline"
          >
            Log In
          </Link>
        </div>

        {/* hamburger — only on mobile */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black block"></span>
          <span className="w-6 h-0.5 bg-black block"></span>
          <span className="w-6 h-0.5 bg-black block"></span>
        </button>
      </div>

      {/* mobile dropdown — links only, no search bar since it's already visible */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200">
          <Link
            href="/shop"
            className="text-black hover:text-[#DC2126]"
            onClick={() => setIsOpen(false)}
          >
            Shop All
          </Link>
          <Link
            href="/promotions"
            className="text-black hover:text-[#DC2126]"
            onClick={() => setIsOpen(false)}
          >
            Promotions
          </Link>
          <Link
            href="/cart"
            className="text-black hover:text-[#DC2126]"
            onClick={() => setIsOpen(false)}
          >
            Cart
          </Link>
          <Link
            href="/login"
            className="text-black hover:text-[#DC2126]"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
