import Image from "next/image";
import { processSteps } from "../../data/process";
import Reveal from "../motion/Reveal";

export default function ProcessSteps() {
  return (
    <section className="section process-section" aria-labelledby="process-heading">
      <div className="container">
        <Reveal>
          <div className="process-head">
            <h2 id="process-heading">
              Your visa sorted in just 4 super simple <span>Steps</span>
            </h2>
          </div>
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.05}>
              <article className="process-item">
                <div className="process-image-wrap">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={300}
                    className="process-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 220px, 260px"
                  />
                  <span className="process-overlay-number">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
