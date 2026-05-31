"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const featuredDest = {
  href: "/destinations/korea",
  flag: "🇰🇷",
  name: "South Korea",
  badge: "Featured · 2026",
  tagline: "GKS Scholarship · Korean Language Classes · D-2 Visa",
  cta: "Explore Korea",
};

const otherDests = [
  { href: "/destinations/japan",     flag: "🇯🇵", name: "Japan",          sub: "MEXT Scholarship · Tech & Robotics" },
  { href: "/destinations/australia", flag: "🇦🇺", name: "Australia",      sub: "Graduate Visa 485 · Nursing & IT" },
  { href: "/destinations/canada",    flag: "🇨🇦", name: "Canada",         sub: "PGWP · Express Entry PR" },
  { href: "/destinations/uk",        flag: "🇬🇧", name: "United Kingdom", sub: "Graduate Route · 1-Year Masters" },
  { href: "/destinations/usa",       flag: "🇺🇸", name: "United States",  sub: "OPT · STEM Extension" },
];

const quickServices = [
  { href: "/contact", icon: "🇰🇷", label: "Korean Language Classes" },
  { href: "/contact", icon: "📝", label: "IELTS & PTE Coaching" },
  { href: "/services", icon: "🎓", label: "Admissions & Visa Help" },
  { href: "/contact", icon: "📅", label: "Book Free Counseling" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestsOpen, setMobileDestsOpen] = useState(false);
  const megaRef = useRef(null);
  const hoverTimer = useRef(null);

  const destinationsActive = pathname.startsWith("/destinations");

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileDestsOpen(false);
  };

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mega on route change
  useEffect(() => { closeAll(); }, [pathname]);

  function handleDestMouseEnter() {
    clearTimeout(hoverTimer.current);
    setMegaOpen(true);
  }

  function handleDestMouseLeave() {
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* Logo */}
        <Link href="/" className="brand" onClick={closeAll} aria-label="Pokhara Future Minds — Home">
          <Image
            src="/logo.png"
            alt="Pokhara Future Minds Educational Consultancy"
            width={280}
            height={88}
            className="brand-logo"
            sizes="(max-width: 900px) 180px, 280px"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "nav-link is-active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}

          {/* Destinations mega trigger */}
          <div
            className="nav-mega-wrap"
            ref={megaRef}
            onMouseEnter={handleDestMouseEnter}
            onMouseLeave={handleDestMouseLeave}
          >
            <button
              type="button"
              className={`nav-link nav-mega-trigger${destinationsActive ? " is-active" : ""}${megaOpen ? " mega-is-open" : ""}`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              aria-controls="mega-menu"
              onClick={() => setMegaOpen((v) => !v)}
            >
              Destinations
              <svg
                className="mega-chevron"
                width="12" height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* ── Mega Menu Panel ── */}
            <div
              id="mega-menu"
              className={`mega-menu${megaOpen ? " mega-menu--open" : ""}`}
              role="region"
              aria-label="Study destinations"
              onMouseEnter={handleDestMouseEnter}
              onMouseLeave={handleDestMouseLeave}
            >
              <div className="mega-inner">

                {/* Featured: Korea */}
                <div className="mega-featured">
                  <p className="mega-section-label">⭐ Featured Destination</p>
                  <Link
                    href={featuredDest.href}
                    className="mega-featured-card"
                    onClick={closeAll}
                  >
                    <span className="mega-featured-flag">{featuredDest.flag}</span>
                    <span className="mega-featured-badge">{featuredDest.badge}</span>
                    <strong className="mega-featured-name">{featuredDest.name}</strong>
                    <span className="mega-featured-tagline">{featuredDest.tagline}</span>
                    <span className="mega-featured-cta">
                      {featuredDest.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </div>

                {/* Other destinations */}
                <div className="mega-destinations">
                  <p className="mega-section-label">All Destinations</p>
                  <div className="mega-dest-grid">
                    {otherDests.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className="mega-dest-item"
                        onClick={closeAll}
                      >
                        <span className="mega-dest-flag">{d.flag}</span>
                        <span className="mega-dest-info">
                          <strong>{d.name}</strong>
                          <span>{d.sub}</span>
                        </span>
                      </Link>
                    ))}
                    <Link href="/destinations" className="mega-all-link" onClick={closeAll}>
                      View all destinations →
                    </Link>
                  </div>
                </div>

                {/* Quick services */}
                <div className="mega-services">
                  <p className="mega-section-label">Quick Access</p>
                  <div className="mega-service-list">
                    {quickServices.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="mega-service-item"
                        onClick={closeAll}
                      >
                        <span className="mega-service-icon">{s.icon}</span>
                        <span>{s.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => { setMobileOpen((v) => !v); setMegaOpen(false); }}
        >
          <span className={mobileOpen ? "toggle-line line-1 open" : "toggle-line line-1"} />
          <span className={mobileOpen ? "toggle-line line-2 open" : "toggle-line line-2"} />
          <span className={mobileOpen ? "toggle-line line-3 open" : "toggle-line line-3"} />
        </button>
      </div>

      {/* ── Mobile panel ── */}
      {mobileOpen && (
        <div id="mobile-nav-panel" className="mobile-panel" aria-label="Mobile navigation">
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

            {/* Mobile destinations accordion */}
            <div className="mobile-dest-section">
              <button
                type="button"
                className={`mobile-link mobile-dest-toggle${destinationsActive ? " is-active" : ""}`}
                onClick={() => setMobileDestsOpen((v) => !v)}
                aria-expanded={mobileDestsOpen}
              >
                Destinations
                <svg
                  className={`mega-chevron${mobileDestsOpen ? " mega-chevron--up" : ""}`}
                  width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {mobileDestsOpen && (
                <div className="mobile-dest-list">
                  <Link href={featuredDest.href} className="mobile-dest-item mobile-dest-featured" onClick={closeAll}>
                    <span>{featuredDest.flag}</span>
                    <span>
                      <strong>{featuredDest.name}</strong>
                      <em>Featured</em>
                    </span>
                  </Link>
                  {otherDests.map((d) => (
                    <Link key={d.href} href={d.href} className="mobile-dest-item" onClick={closeAll}>
                      <span>{d.flag}</span>
                      <strong>{d.name}</strong>
                    </Link>
                  ))}
                  <Link href="/destinations" className="mobile-dest-all" onClick={closeAll}>
                    View all destinations →
                  </Link>
                </div>
              )}
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
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
