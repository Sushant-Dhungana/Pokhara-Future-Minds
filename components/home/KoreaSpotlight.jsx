import Link from "next/link";
import Reveal from "../motion/Reveal";

const koreaHighlights = [
  {
    icon: "🎓",
    title: "GKS Government Scholarship",
    text: "100% tuition waiver + monthly stipend + round-trip airfare. Nepal is eligible. We help you apply.",
  },
  {
    icon: "🇰🇷",
    title: "Korean Language Classes",
    text: "TOPIK I & II preparation from Hangul basics to exam-ready fluency — right here in Pokhara.",
  },
  {
    icon: "💼",
    title: "Work While You Study",
    text: "D-2 student visa holders can work 20 hrs/week. Graduate with an E-7 skilled work visa pathway.",
  },
  {
    icon: "💰",
    title: "Affordable Tuition",
    text: "Korean university tuition is 60–70% cheaper than Australia or the UK for equivalent programs.",
  },
];

export default function KoreaSpotlight() {
  return (
    <section
      className="section korea-spotlight"
      aria-labelledby="korea-spotlight-heading"
    >
      <div className="container">
        <Reveal>
          <div className="korea-spotlight-head">
            <p className="section-kicker">Featured Destination · 2026</p>
            <h2 id="korea-spotlight-heading">
              Why South Korea is Pokhara&apos;s
              <span> #1 Rising Study Destination</span>
            </h2>
            <p>
              Hundreds of Nepali students are now choosing Korea every year — for
              its government scholarships, safe campuses, growing tech industry, and the
              fastest path from TOPIK classes to a global career.
            </p>
          </div>
        </Reveal>

        <div className="korea-highlights-grid">
          {koreaHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="korea-highlight-card">
                <span className="korea-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="korea-spotlight-actions">
            <Link href="/destinations/korea" className="btn-pill-gradient">
              Explore Korea Programs
            </Link>
            <Link href="/contact" className="btn-pill-gray">
              Book Korean Language Class
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
