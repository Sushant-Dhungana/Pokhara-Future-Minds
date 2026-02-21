"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";

const swipeThreshold = 80;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) {
        return testimonials.length - 1;
      }
      if (next >= testimonials.length) {
        return 0;
      }
      return next;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const active = testimonials[index];

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Testimonials</p>
          <h2 id="testimonials-heading">
            What Students Say <span>About Us</span>
          </h2>
          <p>
            Real student stories from counseling, admissions, and visa support journeys.
          </p>
        </div>

        <div
          className="testimonial-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button
            type="button"
            className="slider-arrow left"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="slider-viewport">
            <AnimatePresence custom={direction} mode="wait">
              <motion.article
                key={active.id}
                className="testimonial-card"
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.9}
                onDragEnd={(_, info) => {
                  if (info.offset.x > swipeThreshold) {
                    paginate(-1);
                  }
                  if (info.offset.x < -swipeThreshold) {
                    paginate(1);
                  }
                }}
              >
                <div className="testimonial-photo-wrap">
                  <Image
                    src={active.image}
                    alt={active.name}
                    width={92}
                    height={92}
                    className="testimonial-photo"
                    loading="lazy"
                  />
                </div>
                <p className="testimonial-quote">“{active.quote}”</p>
                <h3>{active.name}</h3>
                <p className="testimonial-role">{active.role}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="slider-arrow right"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="slider-dots" role="tablist" aria-label="Select testimonial slide">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              className={dotIndex === index ? "dot is-active" : "dot"}
              onClick={() => {
                setDirection(dotIndex > index ? 1 : -1);
                setIndex(dotIndex);
              }}
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
