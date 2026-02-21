import Reveal from "../motion/Reveal";
import { stats } from "../../data/stats";

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Consultancy impact statistics">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="stat-card">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
