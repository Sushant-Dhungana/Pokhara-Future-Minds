import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const heroBadges = [
  { label: "Korean Language" },
  { label: "IELTS & PTE" },
  { label: "Study in Korea" },
];



export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="home-hero-heading">
      <Image
        src="/images/hero.png"
        alt="Students at Pokhara Future Minds preparing for international education"
        fill
        className="hero-bg"
        priority
        sizes="150vw"
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="container">
          <Reveal className="hero-content">

            {/* Badge chips row */}
            <div className="hero-badges" aria-label="Services offered">
              {heroBadges.map((b) => (
                <span key={b.label} className="hero-badge">{b.label}</span>
              ))}
            </div>

            <div className="hero-copy">
              <h1 id="home-hero-heading">
                Your Bridge to
                <br />
                World-Class Universities
              </h1>
              <p className="hero-sub">
                Don&apos;t just apply —{" "}
                <em>plan your future.</em>
              </p>
              <p className="hero-desc">
                Expert counseling for Korean language classes, IELTS &amp; PTE
                coaching, university admissions, and student visa success —
                right here in Pokhara.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <Link href="/contact" className="hero-btn hero-btn-primary">
                Book Free Counselling
                <span className="hero-btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/destinations/korea" className="hero-btn hero-btn-secondary">
                Explore Korea Programs
              </Link>
            </div>

            {/* Trust strip */}
            {/* <div className="hero-trust" aria-label="Key statistics">
              {trustItems.map((item, i) => (
                <span key={item.label} className="hero-trust-item">
                  {i > 0 && <span className="hero-trust-divider" aria-hidden="true" />}
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </span>
              ))}
            </div> */}

          </Reveal>
        </div>
      </div>
    </section>
  );
}
