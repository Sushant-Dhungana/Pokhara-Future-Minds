import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import ContactForm from "../../components/contact/ContactForm";
import { buildMetadata, siteConfig } from "../../lib/seo";

const officeHours = [
  "Sunday – Friday: 10:00 AM to 6:00 PM",
  "Saturday: By prior appointment only",
  "Online counseling available on request",
];

const checklist = [
  "Latest academic transcripts and certificates.",
  "Preferred destination and target intake (e.g., Korea March 2027).",
  "Budget range and scholarship interest.",
  "Whether you need Korean language / IELTS / PTE classes.",
  "Passport details (if already available).",
];

export function generateMetadata() {
  return buildMetadata({
    title: "Book Free Counseling | Korean Language & Study Abroad Consultancy Pokhara",
    description:
      "Contact Pokhara Future Minds to book a free counseling session. We help with Korean language classes, IELTS/PTE coaching, university admissions, and student visa guidance.",
    path: "/contact",
  });
}

const contactBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />

      <PageHero
        kicker="Get in Touch"
        title="Let's Plan Your Study"
        accent="Journey Together"
        description="Tell us your goals and timeline. Our counselors will help you build a realistic, destination-ready study plan — including Korean language, IELTS, or PTE preparation if needed."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.06}>
            <aside className="surface-card contact-info">
              <h2 className="brand-heading-sm">
                Office <span>Details</span>
              </h2>
              <address style={{ fontStyle: "normal" }}>
                <p>New Road, Ward No. 8, Pokhara, Nepal</p>
                <p><a href="tel:+97761585653">061-585653</a></p>
                <p><a href="tel:+9779705488335">+977-9705488335</a></p>
                <p><a href="mailto:pkrfutureminds@gmail.com">pkrfutureminds@gmail.com</a></p>
              </address>

              <div className="contact-tip">
                <h3>Office Hours</h3>
                <ul className="check-list compact-check">
                  {officeHours.map((line) => (<li key={line}>{line}</li>))}
                </ul>
              </div>

              <div className="contact-tip">
                <h3>What to Bring to Your Session</h3>
                <ul className="check-list compact-check">
                  {checklist.map((item) => (<li key={item}>{item}</li>))}
                </ul>
              </div>

              <div className="contact-tip">
                <h3>Most Popular Inquiry</h3>
                <p>
                  🇰🇷 <strong>Korean Language Classes + Korea Visa Guidance</strong> —
                  our most booked service combination. Book a free session to get your
                  TOPIK preparation plan and Korea admission roadmap in one meeting.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
