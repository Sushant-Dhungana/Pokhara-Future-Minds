import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { destinations } from "../../data/destinations";
import { buildMetadata } from "../../lib/seo";

const selectionGuides = [
  {
    title: "Career Alignment",
    text: "Choose countries where your target industry has strong internship and graduate pathways.",
  },
  {
    title: "Cost Planning",
    text: "Compare tuition, accommodation, transport, insurance, and emergency buffer costs together.",
  },
  {
    title: "Visa Feasibility",
    text: "Evaluate visa documentation complexity, timelines, and interview requirements in advance.",
  },
  {
    title: "Post-Study Options",
    text: "Review available work pathways and practical opportunities after course completion.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title: "Destinations",
    description:
      "Browse popular study destinations supported by Pokhara Future Minds Educational Consultancy.",
    path: "/destinations",
  });
}

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        kicker="Destinations"
        title="Choose Your Study"
        accent="Destination"
        description="Compare countries with the right balance of program quality, budget, and post-study opportunities."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                Popular destinations with strong <span>student outcomes</span>
              </h2>
              <p>
                Explore countries with high-quality institutions, practical career options,
                and student-friendly ecosystems for international applicants.
              </p>
            </div>
          </Reveal>

          <div className="destination-grid destination-grid--wide">
            {destinations.map((destination, index) => (
              <Reveal key={destination.slug} delay={index * 0.04}>
                <article className="destination-card">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={640}
                    height={420}
                    className="destination-card-image"
                    loading="lazy"
                  />
                  <div className="destination-card-body">
                    <h2 className="brand-heading-xs">{destination.name}</h2>
                    <p>{destination.intro}</p>
                    <p className="destination-meta">
                      <strong>Tuition:</strong> {destination.tuitionRange}
                    </p>
                    <p className="destination-meta">
                      <strong>Intakes:</strong> {destination.intakes}
                    </p>
                    <Link href={`/destinations/${destination.slug}`} className="btn-pill-gradient">
                      View Details
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                How to shortlist the <span>right country</span>
              </h2>
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
