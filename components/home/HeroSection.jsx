import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="home-hero-heading">
      <Image
        src="/images/hero.png"
        alt="Students preparing for international education"
        fill
        className="hero-bg"
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="container">
          <Reveal className="hero-content">
            <div className="hero-copy">
              <p className="hero-kicker">
                Trusted Educational Consultancy in Pokhara
              </p>
              <h1 id="home-hero-heading">
                Your Global Education Journey Starts with
                <span className="subspan"> Right Guidance</span>
              </h1>
              <p>
                Get strategic counseling for destinations, universities,
                admissions, and visa success from a team focused on your
                long-term goals.
              </p>
            </div>

            <div className="hero-actions">
              <Link href="/contact" className="hero-btn hero-btn-primary">
                Book Free Counselling
              </Link>
              <Link
                href="/destinations"
                className="hero-btn hero-btn-secondary"
              >
                Explore Destinations
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
