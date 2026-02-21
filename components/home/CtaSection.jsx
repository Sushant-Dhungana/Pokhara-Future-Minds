import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function CtaSection() {
  return (
    <section className="section cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal>
          <article className="cta-card">
            <p className="section-kicker">Ready to Start?</p>
            <h2 id="cta-heading">
              Book Your Free Counseling <span>Session Today</span>
            </h2>
            <p>
              Get a clear study plan with destination options, timeline, and personalized
              application guidance.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-pill-gradient">
                Book Consultation
              </Link>
              <Link href="/destinations" className="btn-pill-gray">
                Explore Destinations
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
