"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    /* Immediately hide elements before first paint so the transition has a start state */
    elements.forEach((el) => el.classList.add("ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay ?? "0", 10);

          setTimeout(() => {
            el.classList.remove("ready");
            el.classList.add("visible");
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
