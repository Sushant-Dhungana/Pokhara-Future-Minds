import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { services } from "../../data/services";
import { buildMetadata } from "../../lib/seo";

const commonInclusions = [
  "Dedicated counselor assigned per student profile.",
  "Application timeline planning with milestone reminders.",
  "Document quality checks before each submission.",
  "Strategic decision support for offers and final selection.",
];

const supportTracks = [
  {
    title: "Foundation Track",
    detail:
      "For students starting from destination confusion and needing full profile-direction clarity.",
  },
  {
    title: "Application Track",
    detail:
      "For students who already selected destination and need high-quality admission execution.",
  },
  {
    title: "Visa Track",
    detail:
      "For students with offers who need structured visa file preparation and interview readiness.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title: "Services",
    description:
      "Explore counseling, admission, documentation, and visa support services at Pokhara Future Minds Educational Consultancy.",
    path: "/services",
  });
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="End-to-End Student"
        accent="Services"
        description="Our advisory model covers each stage of studying abroad with practical, action-focused support."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                Service modules built for <span>real outcomes</span>
              </h2>
              <p>
                Each module is designed to solve a specific problem in your study-abroad
                journey, from early planning and profile direction to final visa execution.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="service-card service-card--detail">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <p className="service-best-for">
                    <strong>Best for:</strong> {service.bestFor}
                  </p>
                  <ul className="service-list">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact">Get Support</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container detail-grid-wrap">
          <Reveal>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                What every student gets <span>by default</span>
              </h2>
              <ul className="check-list compact-check">
                {commonInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Choose your support <span>track</span>
              </h2>
              <div className="detail-stack">
                {supportTracks.map((track) => (
                  <div key={track.title} className="detail-row">
                    <h3>{track.title}</h3>
                    <p>{track.detail}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-pill-gradient">
                Book Service Consultation
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
