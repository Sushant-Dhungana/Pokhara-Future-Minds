import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
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

const guidanceTags = ["Admissions", "Visa Guidance", "Scholarships"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-glow footer-glow--left" aria-hidden="true" />
      <span className="footer-glow footer-glow--right" aria-hidden="true" />

      <div className="container">
        <div className="footer-shell">
          <article className="footer-brand-panel">
            <Link
              href="/"
              className="footer-brand-link"
              aria-label="Go to homepage"
            >
              <Image
                src="/logo.png"
                alt="Pokhara Future Minds"
                width={260}
                height={84}
                className="footer-brand-logo"
              />
            </Link>

            <h3 className="brand-heading-sm">
              Pokhara Future Minds <span>Educational Consultancy</span>
            </h3>

            <p className="footer-brand-copy">
              Strategic educational counseling for destination planning,
              admission execution, visa preparation, and successful student
              transitions.
            </p>

            <div className="footer-color-rails" aria-hidden="true">
              <span className="rail-blue" />
              <span className="rail-purple" />
              <span className="rail-magenta" />
              <span className="rail-green" />
            </div>

            <div className="footer-chip-row" aria-label="Core support areas">
              {guidanceTags.map((tag) => (
                <span key={tag} className="footer-chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="footer-metrics">
              <article className="footer-metric">
                <strong>100+</strong>
                <span>Students Guided</span>
              </article>
              <article className="footer-metric">
                <strong>6</strong>
                <span>Top Destinations</span>
              </article>
              <article className="footer-metric">
                <strong>1:1</strong>
                <span>Mentored Support</span>
              </article>
            </div>

            <div className="footer-cta-row">
              <Link href="/contact" className="btn-pill-gradient">
                Book Free Counselling
              </Link>
              <Link href="/destinations" className="btn-pill-gray">
                Explore Destinations
              </Link>
            </div>
          </article>

          <div className="footer-links-board">
            <div className="footer-link-card">
              <h4>Quick Links</h4>
              <ul className="footer-link-list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-link-card">
              <h4>Top Destinations</h4>
              <ul className="footer-link-list">
                {destinationLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-link-card footer-contact-card">
              <h4>Contact Desk</h4>
              <div className="footer-contact-list">
                <p>Pokhara, Nepal</p>
                <a href="tel:+9779800000000">+977-9800000000</a>
                <a href="mailto:info@pokharafutureminds.com">
                  info@pokharafutureminds.com
                </a>
              </div>
              <p className="footer-contact-note">
                Office Hours: Sunday - Friday, 10:00 AM to 6:00 PM
              </p>
              <div className="footer-contact-actions">
                <Link href="/contact" className="btn-pill-gradient">
                  Contact Team
                </Link>
                <Link href="/services" className="footer-inline-link">
                  View Full Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Pokhara Future Minds. All rights
              reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/blogs">Latest Blogs</Link>
              <span>•</span>
              <Link href="/destinations">Destinations</Link>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
