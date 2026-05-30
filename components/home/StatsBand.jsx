"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/stats";

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ item, animate }) {
  const count = useCountUp(item.value, 1800, animate);

  return (
    <article className="stat-card">
      <p className="stat-value">
        {animate ? count : 0}{item.suffix}
      </p>
      <p className="stat-label">{item.label}</p>
    </article>
  );
}

export default function StatsBand() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="stats-band"
      aria-label="Consultancy impact statistics"
    >
      <div className="container stats-grid">
        {stats.map((item) => (
          <StatCard key={item.id} item={item} animate={animate} />
        ))}
      </div>
    </section>
  );
}
