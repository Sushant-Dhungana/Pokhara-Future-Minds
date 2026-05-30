import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/motion/Reveal";
import { destinations, getDestinationBySlug } from "../../../data/destinations";
import { buildMetadata, siteConfig } from "../../../lib/seo";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return buildMetadata({ title: "Destination Not Found", path: `/destinations/${slug}` });
  }

  const isKorea = slug === "korea";

  return buildMetadata({
    title: isKorea
      ? "Study in South Korea from Nepal 2026 — GKS Scholarship, Korean Language, D-2 Visa"
      : `Study in ${destination.name} from Nepal — Admissions, Visa & Scholarships`,
    description: isKorea
      ? "Complete guide for Nepali students: how to study in South Korea, GKS NIIED scholarship, Korean language TOPIK classes in Pokhara, D-2 visa requirements, and top universities."
      : `${destination.intro} Pokhara Future Minds provides expert admissions, visa, and scholarship guidance for ${destination.name}.`,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
  });
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) notFound();

  const isKorea = slug === "korea";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Destinations", item: `${siteConfig.url}/destinations` },
      { "@type": "ListItem", position: 3, name: `Study in ${destination.name}`, item: `${siteConfig.url}/destinations/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="section destination-detail">
        <div className="container destination-detail-grid">
          <Reveal>
            <div className="destination-image-wrap">
              <Image
                src={destination.image}
                alt={`Study in ${destination.name} from Nepal — Pokhara Future Minds`}
                width={940}
                height={760}
                className="destination-detail-image"
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              {destination.featured && (
                <span className="destination-featured-badge">{destination.badge}</span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <p className="section-kicker">
                {isKorea ? "🇰🇷 Featured Destination · 2026" : "Study Destination"}
              </p>
              <h1 className="brand-heading">
                Study in {destination.name} <span>from Nepal</span>
              </h1>
              <p>{destination.intro}</p>

              <ul className="check-list">
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="hero-actions">
                <Link href="/contact" className="btn-pill-gradient">
                  {isKorea ? "Book Korean Language Class" : "Free Counseling Session"}
                </Link>
                <Link href="/services" className="btn-pill-gray">
                  View All Services
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted" aria-label="Destination key facts">
        <div className="container detail-grid detail-grid--three">
          <Reveal>
            <article className="detail-card">
              <h3>Tuition Range</h3>
              <p>{destination.tuitionRange}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="detail-card">
              <h3>Major Intakes</h3>
              <p>{destination.intakes}</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="detail-card">
              <h3>Work &amp; PR Pathway</h3>
              <p>{destination.workPathway}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Programs and requirements">
        <div className="container detail-grid-wrap">
          <Reveal>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Popular programs in <span>{destination.name}</span>
              </h2>
              <div className="pill-group">
                {destination.popularPrograms.map((program) => (
                  <span key={program} className="pill-chip">
                    {program}
                  </span>
                ))}
              </div>
              <p>
                Choose programs aligned with your career goals and the destination&apos;s
                high-demand industries — not just current trends. Our counselors
                match your profile to the best-fit programs.
              </p>
              {isKorea && (
                <p>
                  <strong>Note:</strong> Korean language proficiency (TOPIK) significantly
                  improves your admission and scholarship chances at Korean universities.
                  We offer TOPIK preparation classes in Pokhara.
                </p>
              )}
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Document requirements <span>at a glance</span>
              </h2>
              <ul className="check-list compact-check">
                {destination.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {isKorea && (
                <Link href="/contact" className="btn-pill-gradient" style={{ marginTop: "1rem", display: "inline-block" }}>
                  Start TOPIK Preparation
                </Link>
              )}
            </article>
          </Reveal>
        </div>
      </section>

      {destination.whyChoose && (
        <section className="section section--muted" aria-label={`Why choose ${destination.name}`}>
          <div className="container">
            <Reveal>
              <article className="surface-card surface-card--wide">
                <h2 className="brand-heading-sm">
                  Why Nepali students choose <span>{destination.name}</span>
                </h2>
                <p>{destination.whyChoose}</p>
                <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
                  <Link href="/contact" className="btn-pill-gradient">
                    Start My Application
                  </Link>
                  <Link href="/destinations" className="btn-pill-gray">
                    Compare Destinations
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" aria-label="Best cities">
        <div className="container">
          <Reveal>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Top student cities in <span>{destination.name}</span>
              </h2>
              <div className="pill-group">
                {destination.bestCities.map((city) => (
                  <span key={city} className="pill-chip">
                    {city}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
