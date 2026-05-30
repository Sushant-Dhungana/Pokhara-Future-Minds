import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { destinations } from "../../data/destinations";
import { buildMetadata, siteConfig } from "../../lib/seo";

const selectionGuides = [
  {
    title: "Career Alignment",
    text: "Choose a country where your target industry has strong graduate pathways. Korea excels in tech, engineering, and healthcare.",
  },
  {
    title: "Scholarship First",
    text: "Always check government scholarships before calculating tuition. GKS (Korea), MEXT (Japan), and Chevening (UK) can cover everything.",
  },
  {
    title: "Language Preparation",
    text: "Korean universities require TOPIK Level 2. Australian, Canadian, and UK universities require IELTS 6.0+. Start early.",
  },
  {
    title: "Post-Study Pathways",
    text: "Review work permit and PR pathways before committing. Korea's E-7 visa, Canada's PGWP, and Australia's 485 visa all offer different routes.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title: "Study in Korea, Australia, Canada, UK, USA & Japan | Destinations",
    description:
      "Explore study destinations for Nepali students — South Korea (GKS scholarship), Australia, Canada, UK, USA, and Japan. Expert guidance from Pokhara Future Minds.",
    path: "/destinations",
  });
}

const destinationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Study Destinations",
      item: `${siteConfig.url}/destinations`,
    },
  ],
};

export default function DestinationsPage() {
  const [featured, ...others] = destinations;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationBreadcrumb) }}
      />

      <PageHero
        kicker="Study Destinations"
        title="Find Your Perfect Study"
        accent="Destination"
        description="From South Korea's government scholarships to Australia's post-study work visas — we match you with the destination that fits your career goals and budget."
      />

      {/* Korea Featured Card */}
      <section className="section" aria-label="Featured destination: South Korea">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Featured Destination · Most Popular 2026</p>
          </Reveal>
          <Reveal delay={0.04}>
            <article className="destination-featured-card">
              <div className="destination-featured-image-wrap">
                <Image
                  src={featured.image}
                  alt="Study in South Korea — GKS Scholarship and Korean Language Classes"
                  width={800}
                  height={500}
                  className="destination-featured-image"
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <span className="destination-featured-badge">{featured.badge}</span>
              </div>
              <div className="destination-featured-body">
                <h2 className="brand-heading-sm">
                  🇰🇷 Study in <span>South Korea</span>
                </h2>
                <p>{featured.intro}</p>
                <ul className="check-list compact-check">
                  {featured.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="destination-featured-meta">
                  <span>
                    <strong>Tuition:</strong> {featured.tuitionRange}
                  </span>
                  <span>
                    <strong>Intakes:</strong> {featured.intakes}
                  </span>
                </div>
                <div className="hero-actions">
                  <Link href="/destinations/korea" className="btn-pill-gradient">
                    Full Korea Guide
                  </Link>
                  <Link href="/contact" className="btn-pill-gray">
                    Book Korean Language Class
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="section section--muted" aria-labelledby="all-destinations-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="all-destinations-heading" className="brand-heading-md">
                All study destinations with strong <span>student outcomes</span>
              </h2>
              <p>
                Compare countries based on program quality, tuition cost, scholarship
                availability, and post-study work or PR pathways.
              </p>
            </div>
          </Reveal>

          <div className="destination-grid destination-grid--wide">
            {others.map((destination, index) => (
              <Reveal key={destination.slug} delay={index * 0.04}>
                <article className="destination-card">
                  <Image
                    src={destination.image}
                    alt={`Study in ${destination.name} from Nepal`}
                    width={640}
                    height={420}
                    className="destination-card-image"
                    loading="lazy"
                  />
                  <div className="destination-card-body">
                    <h3 className="brand-heading-xs">{destination.name}</h3>
                    <p>{destination.intro}</p>
                    <p className="destination-meta">
                      <strong>Tuition:</strong> {destination.tuitionRange}
                    </p>
                    <p className="destination-meta">
                      <strong>Intakes:</strong> {destination.intakes}
                    </p>
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="btn-pill-gradient"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="selection-guide-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="selection-guide-heading" className="brand-heading-md">
                How to shortlist the <span>right country</span>
              </h2>
              <p>
                Our counselors use a four-factor framework to match your profile,
                budget, and goals with the destination most likely to give you
                the best long-term outcome.
              </p>
            </div>
          </Reveal>

          <div className="detail-grid detail-grid--four">
            {selectionGuides.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="detail-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
