"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(name: string) {
    setOpenDropdown(openDropdown === name ? null : name);
  }

  function closeDropdown() {
    setOpenDropdown(null);
  }

  return (
    <header className="navbar">
      <Link href="/" className="navbar-logo" onClick={closeDropdown}>
        Zainab Alam
      </Link>

      <nav className="navbar-links">
        <div className={`dropdown ${openDropdown === "singing" ? "open" : ""}`}>
          <button
            type="button"
            className="dropdown-label"
            onClick={() => toggleDropdown("singing")}
            aria-expanded={openDropdown === "singing"}
          >
            Singing
          </button>

          <div className="dropdown-menu">
            <Link href="/singing" onClick={closeDropdown}>
              Singing Overview
            </Link>
            <Link href="/singing/rock-band" onClick={closeDropdown}>
              Rock Band
            </Link>
            <Link href="/singing/solo-performance" onClick={closeDropdown}>
              Solo Performances
            </Link>
          </div>
        </div>

        <div className={`dropdown ${openDropdown === "podcasting" ? "open" : ""}`}>
          <button
            type="button"
            className="dropdown-label"
            onClick={() => toggleDropdown("podcasting")}
            aria-expanded={openDropdown === "podcasting"}
          >
            Podcasting
          </button>

          <div className="dropdown-menu">
            <Link href="/podcasting/when_we_speak" onClick={closeDropdown}>
              When We Speak
            </Link>
            <Link href="/podcasting/one-note-at-a-time" onClick={closeDropdown}>
              One Note at a Time
            </Link>
          </div>
        </div>

        <Link href="/speaking" onClick={closeDropdown}>
          Speaking
        </Link>
        <Link href="/web-development" onClick={closeDropdown}>
          Web Development
        </Link>
        <Link href="/teen-vocal-initiative" onClick={closeDropdown}>
          Teen Vocal Initiative
        </Link>
        <Link href="/contact" onClick={closeDropdown}>
          Contact
        </Link>
      </nav>
    </header>
  );
}