import Link from "next/link";
import { services } from "../../data/services";
import Reveal from "../motion/Reveal";

export default function ServicesGrid() {
  return (
    <section className="section" aria-labelledby="home-services-heading">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">Our Core Services</p>
            <h2 id="home-services-heading">
              Comprehensive Student <span>Support</span>
            </h2>
            <p>
              From profile analysis to final visa preparation, we support every milestone
              with a structured, practical process.
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
