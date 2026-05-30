"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPathname = useRef(pathname);
  const timer = useRef(null);

  // Hide loader when the new page pathname is set
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      clearTimeout(timer.current);
      // Small delay so the loader is visible even on fast transitions
      timer.current = setTimeout(() => setLoading(false), 300);
    }
  }, [pathname]);

  // Intercept all internal link clicks to show loader
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only trigger for internal page links (not anchors, external, or current page)
      const isInternal = href.startsWith("/") && !href.startsWith("//");
      const isSamePage = href === pathname || href === pathname + "/";
      const isHash = href.startsWith("#");

      if (isInternal && !isSamePage && !isHash) {
        setLoading(true);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Safety fallback — hide after 5s no matter what
  useEffect(() => {
    if (loading) {
      timer.current = setTimeout(() => setLoading(false), 5000);
    }
    return () => clearTimeout(timer.current);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="page-loader" aria-label="Loading page" role="status">
      <div className="loader-logo">
        <Image
          src="/favicon-icon.png"
          alt="Pokhara Future Minds"
          width={72}
          height={72}
          priority
        />
      </div>
      <div className="loader-ring" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
