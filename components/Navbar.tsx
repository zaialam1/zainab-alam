import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="navbar-logo">
        Zainab Alam
      </Link>

      <nav className="navbar-links">
        <div className="dropdown">
          <span className="dropdown-label">Singing</span>
          <div className="dropdown-menu">
            <Link href="/singing">Singing Overview</Link>
            <Link href="/singing/rock-band">Rock Band</Link>
            <Link href="/singing/solo-performance">Solo Performances</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-label">Podcasting</span>
          <div className="dropdown-menu">
            <Link href="/podcasting/when_we_speak">When We Speak</Link>
            <Link href="/podcasting/one-note-at-a-time">One Note at a Time</Link>
          </div>
        </div>

        <Link href="/speaking">Speaking</Link>
        <Link href="/web-development">Web Development</Link>
        <Link href="/teen-vocal-initiative">Teen Vocal Initiative</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}