"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  function toggleDropdown(name: string) {
    setOpenDropdown((current) => (current === name ? null : name));
  }

  function closeDropdown() {
    setOpenDropdown(null);
  }

  useEffect(() => {
    closeDropdown();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        navbarRef.current &&
        event.target instanceof Node &&
        !navbarRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
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
            aria-label="Open singing menu"
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
            aria-label="Open podcasting menu"
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