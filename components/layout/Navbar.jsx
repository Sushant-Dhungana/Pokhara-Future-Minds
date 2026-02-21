"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const destinationLinks = [
  { href: "/destinations/australia", label: "Australia" },
  { href: "/destinations/canada", label: "Canada" },
  { href: "/destinations/uk", label: "UK" },
  { href: "/destinations/usa", label: "USA" },
  { href: "/destinations/korea", label: "Korea" },
  { href: "/destinations/japan", label: "Japan" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const destinationsActive = pathname.startsWith("/destinations");

  const closeAll = () => {
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={closeAll}>
          <Image
            src="/logo.png"
            alt="Pokhara Future Minds"
            width={240}
            height={76}
            className="brand-logo"
            sizes="(max-width: 900px) 180px, 240px"
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "nav-link is-active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={destinationsActive ? "nav-link is-active" : "nav-link"}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              aria-controls="destinations-menu"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Destinations
              <span aria-hidden="true">▾</span>
            </button>

            {dropdownOpen ? (
              <div id="destinations-menu" className="dropdown-menu" role="menu">
                {destinationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="dropdown-item"
                    role="menuitem"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "nav-link is-active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-pill-gradient nav-cta">
          Book Consultation
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => {
            setMobileOpen((open) => !open);
            setDropdownOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav-panel" className="mobile-panel" aria-label="Mobile menu">
          <div className="container mobile-panel-inner">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(pathname, item.href) ? "mobile-link is-active" : "mobile-link"}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}

            <div className="mobile-destinations">
              <p className="mobile-destination-title">Destinations</p>
              <div className="mobile-destination-grid">
                {destinationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-destination-link"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(pathname, item.href) ? "mobile-link is-active" : "mobile-link"}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact" className="btn-pill-gradient mobile-cta" onClick={closeAll}>
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
