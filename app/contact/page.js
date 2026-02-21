import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { buildMetadata } from "../../lib/seo";

const officeHours = [
  "Sunday - Friday: 10:00 AM to 6:00 PM",
  "Saturday: By prior appointment",
  "Online counseling available on request",
];

const checklist = [
  "Latest academic transcripts and certificates.",
  "Preferred destination and intake timeline.",
  "Budget range and scholarship interest.",
  "Passport details (if already available).",
];

export function generateMetadata() {
  return buildMetadata({
    title: "Contact",
    description:
      "Contact Pokhara Future Minds Educational Consultancy to book counseling and start your study plan.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s Plan Your Study"
        accent="Journey"
        description="Share your goals and timeline. Our team will help you build a practical, destination-ready plan."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <form className="surface-card contact-form" aria-label="Contact form">
              <h2 className="brand-heading-sm">
                Send a <span>message</span>
              </h2>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your full name" />

              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+977" />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" />

              <label htmlFor="destination">Preferred Destination</label>
              <input id="destination" name="destination" type="text" placeholder="Australia, Canada, UK..." />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us your preferred country, intake, and program..."
              />

              <button type="button" className="btn-pill-gradient">
                Send Inquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.06}>
            <aside className="surface-card contact-info">
              <h2 className="brand-heading-sm">
                Office <span>details</span>
              </h2>
              <p>Pokhara, Nepal</p>
              <p>+977-9800000000</p>
              <p>info@pokharafutureminds.com</p>

              <div className="contact-tip">
                <h3>Office Hours</h3>
                <ul className="check-list compact-check">
                  {officeHours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              <div className="contact-tip">
                <h3>Before Your Session</h3>
                <ul className="check-list compact-check">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
