"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isShopActive = pathname === "/shop";
  const isServicesActive = pathname === "/services";
  const isPromosActive = pathname === "/promotions";
  const isLoginActive = pathname === "/login";

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
          <Link href="/shop">
            <div className="group flex flex-col items-center cursor-pointer">
              <img
                src={
                  isShopActive
                    ? "/shopping-bag-filled.png"
                    : "/shopping-bag-black.png"
                }
                className={`w-6 h-6 ${!isShopActive && "group-hover:hidden"}`}
              />
              <img
                src="/shopping-bag-red.png"
                className={`w-6 h-6 ${
                  !isShopActive ? "hidden group-hover:block" : "hidden"
                }`}
              />
              <p
                className={`group-hover:text-[#DC2126] ${
                  isShopActive ? "text-[#DC2126]" : "text-black"
                }`}
              >
                Shop All
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="group flex flex-col items-center cursor-pointer">
              <img
                src={
                  isServicesActive
                    ? "/services-filled.png"
                    : "/services-black.png"
                }
                className={`w-6 h-6 ${
                  !isServicesActive && "group-hover:hidden"
                }`}
              />
              <img
                src="/services-red.png"
                className={`w-6 h-6 ${
                  !isServicesActive ? "hidden group-hover:block" : "hidden"
                }`}
              />
              <p
                className={`group-hover:text-[#DC2126] ${
                  isServicesActive ? "text-[#DC2126]" : "text-black"
                }`}
              >
                Services
              </p>
            </div>
          </Link>
          <Link href="/promotions">
            <div className="group flex flex-col items-center cursor-pointer">
              <img
                src={
                  isPromosActive ? "/promos-filled.png" : "/promos-black.png"
                }
                className={`w-6 h-6 ${!isPromosActive && "group-hover:hidden"}`}
              />
              <img
                src="/promos-red.png"
                className={`w-6 h-6 ${
                  !isPromosActive ? "hidden group-hover:block" : "hidden"
                }`}
              />
              <p
                className={`group-hover:text-[#DC2126] ${
                  isPromosActive ? "text-[#DC2126]" : "text-black"
                }`}
              >
                Promotions
              </p>
            </div>
          </Link>
          <Link href="/login">
            <div className="group flex flex-col items-center cursor-pointer">
              <img
                src={isLoginActive ? "/user-filled.png" : "/user-black.png"}
                className={`w-6 h-6 ${!isLoginActive && "group-hover:hidden"}`}
              />
              <img
                src="/user-red.png"
                className={`w-6 h-6 ${
                  !isLoginActive ? "hidden group-hover:block" : "hidden"
                }`}
              />
              <p
                className={`group-hover:text-[#DC2126] ${
                  isLoginActive ? "text-[#DC2126]" : "text-black"
                }`}
              >
                Log In
              </p>
            </div>
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
        <div className="md:hidden flex justify-around gap-4 mt-6 py-4 border-b border-t border-gray-200">
          <Link
            href="/shop"
            className="text-black hover:text-[#DC2126]"
            
          >
            <img
              src={
                isShopActive
                  ? "/shopping-bag-filled.png"
                  : "/shopping-bag-black.png"
              }
              className="w-6 h-6"
            />
          </Link>
          <Link
            href="/services"
            className="text-black hover:text-[#DC2126]"
            
          >
            <img
              src={
                isServicesActive
                  ? "/services-filled.png"
                  : "/services-black.png"
              }
              className="w-6 h-6"
            />
          </Link>
          <Link
            href="/promotions"
            className="text-black hover:text-[#DC2126]"
       
          >
            <img
              src={isPromosActive ? "/promos-filled.png" : "/promos-black.png"}
              className="w-6 h-6"
            />
          </Link>
          <Link
            href="/login"
            className="text-black hover:text-[#DC2126]"
        
          >
            <img
              src={isLoginActive ? "/user-filled.png" : "/user-black.png"}
              className="w-6 h-6"
            />
          </Link>
        </div>
      )}
    </nav>
  );
}
