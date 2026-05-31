import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blog & Guides" },
  { href: "/contact", label: "Contact" },
];

const destinationLinks = [
  { href: "/destinations/korea", label: "South Korea ⭐" },
  { href: "/destinations/japan", label: "Japan" },
  { href: "/destinations/australia", label: "Australia" },
  { href: "/destinations/canada", label: "Canada" },
  { href: "/destinations/uk", label: "United Kingdom" },
  { href: "/destinations/usa", label: "United States" },
];

const guidanceTags = [
  "Korean Language",
  "IELTS Coaching",
  "PTE Coaching",
  "Visa Guidance",
  "Admissions",
  "Scholarships",
];

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
              aria-label="Pokhara Future Minds — Go to homepage"
            >
              <Image
                src="/logo.png"
                alt="Pokhara Future Minds Educational Consultancy"
                width={260}
                height={84}
                className="footer-brand-logo"
              />
            </Link>

            <h3 className="brand-heading-sm">
              Pokhara Future Minds <span>Educational Consultancy</span>
            </h3>

            <p className="footer-brand-copy">
              Pokhara&apos;s trusted study abroad consultancy — offering Korean language
              (TOPIK) classes, IELTS &amp; PTE coaching, GKS scholarship guidance, and
              expert student visa support for Korea, Australia, Canada, UK, and more.
            </p>

            <div className="footer-color-rails" aria-hidden="true">
              <span className="rail-blue" />
              <span className="rail-purple" />
              <span className="rail-magenta" />
              <span className="rail-green" />
            </div>

            <div className="footer-chip-row" aria-label="Core services offered">
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
                <strong>200+</strong>
                <span>Offers Secured</span>
              </article>
              <article className="footer-metric">
                <strong>2+</strong>
                <span>Years of Expertise</span>
              </article>
            </div>

            <div className="footer-cta-row">
              <Link href="/contact" className="btn-pill-gradient">
                Book Free Counselling
              </Link>
              <Link href="/destinations/korea" className="btn-pill-gray">
                Explore Korea
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
              <h4>Study Destinations</h4>
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
                <p>New Road, Ward No. 8, Pokhara, Nepal</p>
                <a href="tel:+97761585653">061-585653</a>
                <a href="tel:+9779705488335">+977-9705488335</a>
                <a href="mailto:pkrfutureminds@gmail.com">
                  pkrfutureminds@gmail.com
                </a>
              </div>
              <p className="footer-contact-note">
                Office Hours: Sunday – Friday, 10:00 AM – 6:00 PM
              </p>
              <div className="footer-contact-actions">
                <Link href="/contact" className="btn-pill-gradient">
                  Contact Team
                </Link>
                <Link href="/services" className="footer-inline-link">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Pokhara Future Minds Educational Consultancy.
              All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/blogs">Korea Study Guide</Link>
              <span>•</span>
              <Link href="/destinations/korea">Korea Programs</Link>
              <span>•</span>
              <Link href="/contact">Free Counselling</Link>
            </div>
          </div>
          <p className="footer-credit">
            Designed &amp; Developed by <strong>Sushant Dhungana</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
