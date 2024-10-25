"use client"; // Mark as a client component because we're using hooks and Link

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <Link href="/">
        Logo
      </Link>

      <div style={navMiddle}>
        <Link href="/about">
          About
        </Link>

        <Link href="/upload">
          Upload
        </Link>
      </div>

      <Link href="/account">
        Profile
      </Link>  
    </nav>
  );
}

let navStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100vw",
  padding: "1rem",
  color: "black",
  fontWeight: "bold",
}

let navMiddle = {
  width: "20vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
}