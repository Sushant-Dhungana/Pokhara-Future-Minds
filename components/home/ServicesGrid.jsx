import Link from "next/link";
import { services } from "../../data/services";
import Reveal from "../motion/Reveal";

export default function ServicesGrid() {
  return (
    <section className="section" aria-labelledby="home-services-heading">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">What We Offer</p>
            <h2 id="home-services-heading">
              All-in-One Admission, Visa &amp; <span>Language Support</span>
            </h2>
            <p>
              From Korean language classes and IELTS/PTE coaching to complete visa guidance —
              we provide 360° support for every stage of your study abroad journey.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <article className="service-card">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href="/contact">Talk to us</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
