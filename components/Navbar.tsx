'use client'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-6">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop All</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/login">Log In</Link>
    </nav>
  );
}
