"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "../../data/gallery";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const open = (index) => setLightbox(index);
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const active = lightbox !== null ? galleryImages[lightbox] : null;

  return (
    <>
      {/* Grid */}
      <div className="gallery-grid" role="list">
        {galleryImages.map((img, index) => (
          <button
            key={img.id}
            type="button"
            className="gallery-item"
            onClick={() => open(index)}
            aria-label={`Open image: ${img.alt}`}
            role="listitem"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={280}
              className="gallery-img"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <span className="gallery-overlay">
              <span className="gallery-zoom-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5"/>
                  <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="gallery-caption">{img.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          {/* Prevent click-through on the content */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

            {/* Close button */}
            <button className="lightbox-close" onClick={close} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Prev */}
            <button className="lightbox-arrow lightbox-prev" onClick={prev} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Image */}
            <div className="lightbox-img-wrap">
              <Image
                src={active.src}
                alt={active.alt}
                width={1200}
                height={800}
                className="lightbox-img"
                priority
                sizes="(max-width: 768px) 100vw, 85vw"
              />
            </div>

            {/* Next */}
            <button className="lightbox-arrow lightbox-next" onClick={next} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Caption + counter */}
            <div className="lightbox-footer">
              <p className="lightbox-caption">{active.caption}</p>
              <span className="lightbox-counter">
                {lightbox + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="lightbox-dots">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`lightbox-dot${i === lightbox ? " active" : ""}`}
                  onClick={() => setLightbox(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
