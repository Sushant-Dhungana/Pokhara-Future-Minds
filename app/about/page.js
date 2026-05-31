import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { buildMetadata, siteConfig } from "../../lib/seo";
import { teamMembers } from "../../data/team";

const trustPoints = [
  {
    title: "Transparent Counseling",
    text: "We clarify the latest 2026 visa rules, financial requirements, and real risks — so students and families make confident, fully informed decisions from day one.",
  },
  {
    title: "Outcome-Focused Planning",
    text: "Every recommendation we make is linked to high-demand career paths, destination affordability, and long-term PR or work visa opportunities.",
  },
  {
    title: "Detail-Driven Documentation",
    text: "Our team reviews every document for consistency, structure, and submission readiness — before deadlines, not after problems arise.",
  },
  {
    title: "Active Student Mentorship",
    text: "From your first call to intensive mock interview preparation, students receive personal, one-on-one guidance to handle strict 2026 embassy scrutiny.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Global Success Mapping",
    detail:
      "We conduct a deep profile audit to align your academic background, budget, and career goals with high-success 2026 visa pathways and regional PR opportunities.",
  },
  {
    step: "02",
    title: "Strategic Application Design",
    detail:
      "Our experts build a tailored university list and SOP framework that highlights your academic intent — for the best admission outcomes at your target institutions.",
  },
  {
    step: "03",
    title: "High-Success Visa Compliance",
    detail:
      "We audit your financial files for Genuine Student (GS) compliance and refine your confidence through intensive embassy mock interviews based on the latest trends.",
  },
  {
    step: "04",
    title: "Post-Visa Arrival Mentorship",
    detail:
      "Beyond the visa grant, we provide pre-departure briefings covering accommodation, part-time work rights, and initial settlement guidance in your new city.",
  },
];

export function generateMetadata() {
  return buildMetadata({
    title: "About Pokhara Future Minds | Expert Study Abroad Consultancy Since 2016",
    description:
      "Learn about Pokhara Future Minds — our student-first counseling approach, 100+ students guided, and expert visa guidance for Korea, Australia, Canada, UK, USA & Japan.",
    path: "/about",
  });
}

const aboutBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${siteConfig.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />

      <PageHero
        kicker="About Us"
        title="Why Students Trust"
        accent="Future Minds Pokhara"
        description="We combine strategic profile mapping with ethical guidance — helping students move from confusion to a confident visa grant and a global career."
      />

      {/* ── Who We Are ── */}
      <section className="section">
        <div className="container about-page-grid">
          <Reveal>
            <Image
              src="/images/aboutus.jpeg"
              alt="Expert counseling session at Pokhara Future Minds Educational Consultancy"
              width={920}
              height={1060}
              className="about-page-image"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <article className="surface-card">
              <h2 className="brand-heading-sm">
                Expert visas and <span>proven PR pathways</span>
              </h2>
              <p>
                Getting an offer letter is the easy part. Securing a student visa in 2026
                requires a high-intent strategy — and that&apos;s what we specialize in.
                We&apos;ve guided over 100 students through admissions, documentation,
                and visa processes for Korea, Australia, Canada, UK, USA, and Japan.
              </p>
              <p>
                Our focus is not just on your departure. We align your profile with
                skill-shortage career fields and PR-ready programs — so your study
                abroad journey leads somewhere, not just anywhere.
              </p>

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

              <Link href="/contact" className="btn-pill-gradient">
                Book Free Counseling
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── Message from the Director ── */}
      <section className="section section--muted" aria-labelledby="director-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="section-kicker">Leadership</p>
              <h2 id="director-heading" className="brand-heading-md">
                Message from the <span>Director</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="director-card">
              {/* Director image — add your photo at /public/images/team/director.jpg */}
              <div className="director-image-wrap">
                  <Image
                    src="/images/sushila.jpeg"
                    alt="Director — Pokhara Future Minds"
                    width={340}
                    height={420}
                    className="director-photo"
                  />
               
                <div className="director-name-tag">
                  <strong>Sushila Giri</strong>
                  <span>Pokhara Future Minds Educational Consultancy</span>
                </div>
              </div>

              <blockquote className="director-message">
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <p>
                  When I started Pokhara Future Minds, I had one simple goal — to make quality
                  international education accessible to every student in Pokhara, regardless of
                  their background or financial situation. Over the years, I have seen firsthand
                  how a well-planned study abroad journey can transform a student&apos;s life and
                  their family&apos;s future.
                </p>
                <p>
                  Our focus on Korea has been a deliberate choice. The GKS scholarship, affordable
                  tuition, and strong post-study work pathways make Korea one of the highest-ROI
                  destinations for Nepali students today. We also offer Korean language (TOPIK)
                  classes, IELTS and PTE coaching right here in Pokhara, so students don&apos;t
                  have to travel to Kathmandu to prepare.
                </p>
                <p>
                  Every student who walks through our door receives honest, transparent counseling.
                  We do not promise what we cannot deliver — and that commitment to integrity is
                  what has built the trust of 100+ students and families across Pokhara and
                  Gandaki Province.
                </p>
                <footer className="director-footer">
                  <strong>— Director</strong>
                  <span>Pokhara Future Minds Educational Consultancy</span>
                  <span>New Road, Ward No. 8, Pokhara, Nepal</span>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Trust Us ── */}
      <section className="section" aria-labelledby="trust-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="trust-heading" className="brand-heading-md">
                Why students and families <span>trust us</span>
              </h2>
              <p>
                We prioritize your Return on Investment (ROI) by aligning top-tier
                career goals with affordable, high-success study pathways that
                deliver real long-term global outcomes.
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

      {/* ── 4-Stage Roadmap ── */}
      <section className="section section--muted" aria-labelledby="roadmap-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="roadmap-heading" className="brand-heading-md">
                Our 4-stage roadmap to <span>visa success</span>
              </h2>
              <p>
                Navigating strict 2026 Genuine Student (GS) requirements
                with precision documentation and proven interview strategies.
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

      {/* ── Our Team ── */}
      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="section-kicker">The People Behind It</p>
              <h2 id="team-heading" className="brand-heading-md">
                Meet our <span>team</span>
              </h2>
              <p>
                A dedicated group of counselors, visa specialists, and language
                coaches committed to your study abroad success.
              </p>
            </div>
          </Reveal>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.06}>
                <article className="team-card">
                  <div className="team-photo-wrap">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="team-photo"
                        loading="lazy"
                      />
                    ) : (
                      <div className="team-photo-placeholder">
                        <span>{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
