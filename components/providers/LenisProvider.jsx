"use client";

import { useEffect } from "react";

const LENIS_CDN = "https://unpkg.com/lenis@1.1.20/dist/lenis.min.js";

export default function LenisProvider({ children }) {
  useEffect(() => {
    let rafId = null;
    let lenis = null;
    let script = null;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchPointer = window.matchMedia("(pointer: coarse)").matches;
    const isSmallViewport = window.matchMedia("(max-width: 1024px)").matches;

    // Native scrolling is smoother on touch/smaller devices.
    if (reduceMotion || isTouchPointer || isSmallViewport) {
      return undefined;
    }

    const startLenis = () => {
      if (!window.Lenis || lenis) {
        return;
      }

      lenis = new window.Lenis({
        autoRaf: false,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.16,
        wheelMultiplier: 1,
      });

      const raf = (time) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    };

    if (window.Lenis) {
      startLenis();
    } else {
      script = document.createElement("script");
      script.src = LENIS_CDN;
      script.async = true;
      script.onload = startLenis;
      document.body.appendChild(script);
    }

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
      if (script) {
        script.onload = null;
        script.remove();
      }
    };
  }, []);

  return children;
}
