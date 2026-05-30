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
            alt="Students and families receiving expert counseling at Pokhara Future Minds"
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
              Expert Guidance for an
              <span> Error-Free Visa</span>
            </h2>
            <p className="about-copy">
              With visa rules getting stricter, small mistakes cost big. We double-check
              every detail — from your bank sources to mock interview preparation — so you
              apply with 100% confidence and a clear PR pathway ahead.
            </p>

            <div className="about-highlight-row">
              <Image
                src="/images/about-thumb.jpg"
                alt="Visa file review at Pokhara Future Minds"
                width={160}
                height={110}
                className="about-thumb"
                loading="lazy"
              />
              <p>
                We combine strategic profile mapping with ethical guidance — moving students
                from confusion to a confident visa grant.
              </p>
              <Link href="/about" aria-label="Read more about Pokhara Future Minds" className="about-mini-cta">
                →
              </Link>
            </div>

            <div className="mini-card-grid">
              <article className="mini-card">
                <h3>Our Mission</h3>
                <p>Expert, error-free mentorship ensuring your high-success study abroad journey.</p>
              </article>
              <article className="mini-card">
                <h3>Our Vision</h3>
                <p>Building global leaders through high-success visa pathways and sustainable careers.</p>
              </article>
            </div>

            <div className="about-actions">
              <Link href="/about" className="btn-pill-gradient">
                More About Us
              </Link>
              <Link href="/contact" className="btn-pill-gray">
                Speak to an Advisor
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
