import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/motion/Reveal";
import { destinations, getDestinationBySlug } from "../../../data/destinations";
import { buildMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return buildMetadata({
      title: "Destination Not Found",
      path: `/destinations/${slug}`,
    });
  }

  return buildMetadata({
    title: `Study in ${destination.name}`,
    description: destination.intro,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
  });
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <section className="section destination-detail">
        <div className="container destination-detail-grid">
          <Reveal>
            <Image
              src={destination.image}
              alt={destination.name}
              width={940}
              height={760}
              className="destination-detail-image"
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <p className="section-kicker">Study Destination</p>
              <h1 className="brand-heading">
                Study in {destination.name} <span>Guide</span>
              </h1>
              <p>{destination.intro}</p>

              <ul className="check-list">
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="hero-actions">
                <Link href="/contact" className="btn-pill-gradient">
                  Free Counseling
                </Link>
                <Link href="/services" className="btn-pill-gray">
                  See Services
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
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
              <h3>Work Pathway</h3>
              <p>{destination.workPathway}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid-wrap">
          <Reveal>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Popular program clusters in <span>{destination.name}</span>
              </h2>
              <div className="pill-group">
                {destination.popularPrograms.map((program) => (
                  <span key={program} className="pill-chip">
                    {program}
                  </span>
                ))}
              </div>
              <p>
                Program selection should match your academic background and long-term
                employability plan, not only current trend popularity.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Core document requirements <span>snapshot</span>
              </h2>
              <ul className="check-list compact-check">
                {destination.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Recommended student cities in <span>{destination.name}</span>
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
