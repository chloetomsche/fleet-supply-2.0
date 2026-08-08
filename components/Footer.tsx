"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col py-4 gap-4 bg-[#DC2126] text-white">
      <div className="flex justify-around py-12 ">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">FLEET SUPPLY</h3>
          <nav className="flex flex-col gap-3">
            <a>Farm & Ranch</a>
            <a>Promotions</a>
            <a>Services</a>
            <a>About Us</a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">HELP</h3>
          <nav className="flex flex-col gap-3">
            <Link href="">Contact Us</Link>
            <Link href="">Terms and Conditions</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Cookie Policy</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">CONNECT</h3>
          <nav className="flex flex-col gap-3">
            <Link href="">Facebook</Link>

            <a>Locations</a>

            <Link href="">Email Sign-up</Link>
          </nav>
        </div>
      </div>
      <div className="border border-white m-auto px-2">
        <p>© 2025 FLEET SUPPLY. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
