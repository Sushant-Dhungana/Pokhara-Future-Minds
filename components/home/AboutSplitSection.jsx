import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function AboutSplitSection() {
  return (
    <section className="section" aria-labelledby="home-about-heading">
      <div className="container about-layout">
        <Reveal className="about-media-wrap">
          <Image
            src="/images/about.jpg"
            alt="Students and parents receiving counseling"
            width={900}
            height={1040}
            className="about-photo"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </Reveal>

        <Reveal className="about-card-wrap" delay={0.08}>
          <article className="about-card">
            <p className="eyebrow-line">
              <span>About Us</span>
            </p>
            <h2 id="home-about-heading">
              An expert advisory for great
              <span> Value For Visa</span>
            </h2>
            <p className="about-copy">
              Pokhara Future Minds Educational Consultancy guides students with practical,
              transparent planning across admissions, documentation, and destination strategy.
            </p>

            <div className="about-highlight-row">
              <Image
                src="/images/about-thumb.jpg"
                alt="Visa file review"
                width={160}
                height={110}
                className="about-thumb"
                loading="lazy"
              />
              <p>We have been counseling students for education in foreign countries.</p>
              <Link href="/about" aria-label="Read more about us" className="about-mini-cta">
                →
              </Link>
            </div>

            <div className="mini-card-grid">
              <article className="mini-card">
                <h3>Our Mission</h3>
                <p>Deliver reliable and effective guidance that improves admission outcomes.</p>
              </article>
              <article className="mini-card">
                <h3>Our Vision</h3>
                <p>Empower students to build globally relevant and sustainable careers.</p>
              </article>
            </div>

            <div className="about-actions">
              <Link href="/about" className="btn-pill-gradient">
                More About Us
              </Link>
              <Link href="/contact" className="btn-pill-gray">
                Speak to Advisor
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
