"use client";

import { useState } from "react";
import { faqItems } from "../../data/faq";
import Reveal from "../motion/Reveal";

export default function FaqSection() {
  const [openId, setOpenId] = useState(faqItems[0]?.id || null);

  return (
    <section className="section section--muted faq-section" aria-labelledby="faq-heading">
      <div className="container faq-wrap">
        <Reveal>
          <div className="section-head">
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-heading">
              Frequently Asked <span>Questions</span>
            </h2>
            <p>Quick answers to common questions from students and parents.</p>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={index * 0.03}>
                <article className={isOpen ? "faq-item is-open" : "faq-item"}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      id={`${item.id}-button`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      {item.question}
                      <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                  </h3>
                  <div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-button`}
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
