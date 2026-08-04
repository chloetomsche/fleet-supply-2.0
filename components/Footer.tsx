"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="">
          <h3>FLEET SUPPLY</h3>
          <nav className="flex flex-col">
            <a>Farm & Ranch</a>
            <a>Promotions</a>
            <a>Services</a>
            <a>About Us</a>
          </nav>
        </div>

        <div>
          <h3>HELP</h3>
          <nav className="flex flex-col">
            <Link href="">Contact Us</Link>
            <Link href="">Terms and Conditions</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Cookie Policy</Link>
          </nav>
        </div>

        <div>
          <h3>CONNECT</h3>
          <nav className="flex flex-col">
            <Link href="">Facebook</Link>

            <a>Locations</a>

            <Link href="">Email Sign-up</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
