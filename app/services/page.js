import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { services } from "../../data/services";
import { buildMetadata, siteConfig } from "../../lib/seo";

const commonInclusions = [
  "Dedicated counselor assigned to your profile from day one.",
  "Application timeline planning with milestone reminders and deadline tracking.",
  "Document quality checks and consistency review before each submission.",
  "Strategic decision support for offer comparisons and final university selection.",
];

const supportTracks = [
  {
    title: "Language & Exam Track",
    detail:
      "For students who need Korean language (TOPIK), IELTS, or PTE preparation before applying to universities. Structured classes with mock tests and score targeting.",
  },
  {
    title: "Foundation Track",
    detail:
      "For students starting from scratch — destination confusion, profile gaps, or no clear intake target. We map your goals and build a realistic roadmap.",
  },
  {
    title: "Application Track",
    detail:
      "For students who have chosen their destination and need high-quality admission execution — university applications, SOP writing, and offer management.",
  },
  {
    title: "Visa Track",
    detail:
      "For students with offers who need structured visa file preparation, GS compliance review, and intensive embassy mock interview coaching.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title:
      "Korean Language, IELTS, PTE Classes & Visa Services | Pokhara Future Minds",
    description:
      "Korean language (TOPIK) classes, IELTS & PTE coaching, university admissions, SOP writing, scholarship guidance, and student visa support — all under one roof in Pokhara.",
    path: "/services",
  });
}

const servicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }}
      />

      <PageHero
        kicker="Our Services"
        title="A Results-Focused Roadmap for Your"
        accent="Study Abroad Journey"
        description="From Korean language classes and IELTS/PTE coaching to complete visa guidance — our structured service modules are designed to deliver real, measurable outcomes."
      />

      <section className="section" aria-labelledby="services-modules-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="services-modules-heading" className="brand-heading-md">
                Strategic success pillars for <span>student visa approvals</span>
              </h2>
              <p>
                Rather than offering generic advice, we focus on structured modules
                designed to improve student visa success rates. Your academic background,
                career goals, and study plan are aligned with global education opportunities
                and high-demand career pathways.
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
                  <Link href="/contact">Get Started</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="service-tracks-heading">
        <div className="container detail-grid-wrap">
          <Reveal>
            <article className="surface-card">
              <h2 id="service-tracks-heading" className="brand-heading-sm">
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
                Book a Free Consultation
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
