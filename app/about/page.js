import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { buildMetadata } from "../../lib/seo";

const trustPoints = [
  {
    title: "Transparent Counseling",
    text: "We explain each step, requirement, and risk clearly so families can make confident decisions.",
  },
  {
    title: "Outcome-Focused Planning",
    text: "Every recommendation is linked to employability, affordability, and long-term academic progression.",
  },
  {
    title: "Detail-Driven Documentation",
    text: "Our team reviews documents for consistency, structure, and submission readiness before deadlines.",
  },
  {
    title: "Continuous Student Support",
    text: "From first counseling call to pre-departure briefing, students receive active guidance at each stage.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery Session",
    detail:
      "Profile, budget, and career intent are mapped to identify realistic destination pathways.",
  },
  {
    step: "02",
    title: "Application Strategy",
    detail:
      "University list, SOP structure, and document plan are prepared with timeline checkpoints.",
  },
  {
    step: "03",
    title: "Visa Readiness",
    detail:
      "Financial and academic files are checked, then interview responses are refined through mock practice.",
  },
  {
    step: "04",
    title: "Departure Support",
    detail:
      "Final orientation includes accommodation, travel checklist, and first-month settlement guidance.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title: "About",
    description:
      "Learn about Pokhara Future Minds Educational Consultancy, our counseling framework, and student-first values.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="About Pokhara Future Minds"
        accent="Consultancy"
        description="We combine practical counseling with transparent guidance so students can move from uncertainty to confident action."
      />

      <section className="section">
        <div className="container about-page-grid">
          <Reveal>
            <Image
              src="/images/about.jpg"
              alt="Consultancy discussion session"
              width={920}
              height={760}
              className="about-page-image"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Student-first advisory with <span>clear outcomes</span>
              </h2>
              <p>
                Pokhara Future Minds Educational Consultancy was built to solve one
                common challenge: students receive too much generic advice and too
                little practical direction. Our process is designed to convert plans
                into measurable progress.
              </p>
              <p>
                We support destination selection, university applications, visa file
                preparation, and pre-departure transition with realistic timelines and
                clear accountability at each milestone.
              </p>

              <div className="mini-card-grid">
                <article className="mini-card">
                  <h3>Our Mission</h3>
                  <p>Deliver reliable guidance and high-quality support at every stage.</p>
                </article>
                <article className="mini-card">
                  <h3>Our Vision</h3>
                  <p>Enable students to access global education and build lasting careers.</p>
                </article>
              </div>

              <Link href="/contact" className="btn-pill-gradient">
                Talk to an Advisor
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                Why students and families <span>trust us</span>
              </h2>
              <p>
                Our counseling model balances ambition with feasibility, ensuring students
                choose destinations and programs aligned with both career intent and budget.
              </p>
            </div>
          </Reveal>

          <div className="detail-grid detail-grid--two">
            {trustPoints.map((item, index) => (
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

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                Our advisory model in <span>four stages</span>
              </h2>
              <p>
                A structured process ensures students always know what happens next,
                what documents are needed, and how each decision affects future options.
              </p>
            </div>
          </Reveal>

          <div className="timeline-grid">
            {workflow.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <article className="timeline-card">
                  <span className="timeline-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
