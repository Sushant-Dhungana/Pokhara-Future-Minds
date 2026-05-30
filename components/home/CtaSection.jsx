import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function CtaSection() {
  return (
    <section className="section cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal>
          <article className="cta-card">
            <p className="section-kicker">Ready to Start Your Journey?</p>
            <h2 id="cta-heading">
              Book Your Free Counseling <span>Session Today</span>
            </h2>
            <p>
              Get a clear study plan covering destination options, Korean language or IELTS/PTE
              preparation, and a personalized visa strategy — all in one session.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-pill-gradient">
                Book Free Consultation
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
