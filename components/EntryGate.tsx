"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import WwLogo from "./WwLogo";

/* Wax seal SVG with animated crack lines */
function WaxSeal({ sealRef, crackGroupRef }: {
  sealRef: React.MutableRefObject<SVGCircleElement | null>;
  crackGroupRef: React.MutableRefObject<SVGGElement | null>;
}) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Drop shadow */}
      <filter id="seal-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="oklch(0 0 0 / 0.6)" />
      </filter>

      {/* Seal body */}
      <circle
        ref={sealRef}
        cx="50"
        cy="50"
        r="44"
        fill="oklch(0.62 0.14 35)"
        filter="url(#seal-shadow)"
      />

      {/* Embossed outer ring */}
      <circle cx="50" cy="50" r="38" stroke="oklch(0.72 0.11 38)" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* Embossed inner ring */}
      <circle cx="50" cy="50" r="32" stroke="oklch(0.72 0.11 38)" strokeWidth="0.8" fill="none" opacity="0.35" />

      {/* WW stamp in seal */}
      <path
        d="M 28,42 L 34,60 L 40,48 L 46,60 L 52,42"
        stroke="oklch(0.88 0.06 60)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M 48,42 L 54,60 L 60,48 L 66,60 L 72,42"
        stroke="oklch(0.88 0.06 60)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />

      {/* Crack lines — initially hidden via strokeDashoffset, animated by GSAP */}
      <g ref={crackGroupRef} opacity="0">
        {/* 8 irregular cracks radiating from center */}
        <line x1="50" y1="50" x2="50"  y2="2"   stroke="oklch(0.88 0.06 60)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <line x1="50" y1="50" x2="88"  y2="14"  stroke="oklch(0.88 0.06 60)" strokeWidth="1"   strokeLinecap="round" opacity="0.7" />
        <line x1="50" y1="50" x2="98"  y2="52"  stroke="oklch(0.88 0.06 60)" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        <line x1="50" y1="50" x2="82"  y2="88"  stroke="oklch(0.88 0.06 60)" strokeWidth="1"   strokeLinecap="round" opacity="0.7" />
        <line x1="50" y1="50" x2="50"  y2="98"  stroke="oklch(0.88 0.06 60)" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        <line x1="50" y1="50" x2="14"  y2="84"  stroke="oklch(0.88 0.06 60)" strokeWidth="1"   strokeLinecap="round" opacity="0.65" />
        <line x1="50" y1="50" x2="4"   y2="52"  stroke="oklch(0.88 0.06 60)" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        <line x1="50" y1="50" x2="18"  y2="14"  stroke="oklch(0.88 0.06 60)" strokeWidth="1"   strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  );
}

export default function EntryGate() {
  const [gone, setGone] = useState(false);
  const [mounted, setMounted] = useState(false);

  const overlayRef  = useRef<HTMLDivElement | null>(null);
  const cardRef     = useRef<HTMLDivElement | null>(null);
  const sealZoneRef = useRef<HTMLButtonElement | null>(null);
  const sealRef     = useRef<SVGCircleElement | null>(null);
  const crackRef    = useRef<SVGGElement | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const handleSealClick = useCallback(async () => {
    if (!overlayRef.current || !cardRef.current || !sealZoneRef.current) return;

    /* Disable repeated clicks */
    sealZoneRef.current.disabled = true;

    const { gsap } = await import("gsap");
    const tl = gsap.timeline({ onComplete: () => setGone(true) });

    /* 1. Flash the crack group visible */
    if (crackRef.current) {
      tl.to(crackRef.current, {
        opacity: 1,
        duration: 0.05,
      });
    }

    /* 2. Seal: pulse then collapse */
    if (sealRef.current) {
      tl.to(
        sealRef.current,
        { scale: 1.1, transformOrigin: "50px 50px", duration: 0.14, ease: "power2.out" },
        "<0.04"
      ).to(sealRef.current, {
        scale: 0,
        opacity: 0,
        transformOrigin: "50px 50px",
        duration: 0.22,
        ease: "power3.in",
      });
    }

    /* 3. Card: tilt and fade */
    tl.to(
      cardRef.current,
      {
        y: -24,
        rotation: 3,
        opacity: 0,
        duration: 0.55,
        ease: "power3.inOut",
      },
      "<0.08"
    );

    /* 4. Overlay: fade out */
    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.4, ease: "power2.out" },
      "<0.2"
    );
  }, []);

  /* Keyboard: Enter / Space triggers the seal */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSealClick();
      }
    },
    [handleSealClick]
  );

  if (gone) return null;

  return (
    <div ref={overlayRef} className="entry-overlay" role="dialog" aria-modal="true" aria-label="Wyld West — enter site">
      <div className="entry-grain" aria-hidden="true" />

      <div className="entry-card-wrap">
        <div ref={cardRef} className="entry-card">
          <div className="entry-card-grain" aria-hidden="true" />

          {/* Logo mark */}
          <WwLogo className="entry-card-logo" variant="dark" />

          <div className="entry-card-rule" aria-hidden="true" />

          <p className="entry-card-name">Wyld West</p>
          <p className="entry-card-tagline">Health-Forward Brands</p>
        </div>

        {/* Wax seal — overlaps the card bottom edge */}
        <button
          ref={sealZoneRef}
          className="entry-seal-zone"
          onClick={handleSealClick}
          onKeyDown={handleKeyDown}
          aria-label="Break the seal and enter the site"
          tabIndex={mounted ? 0 : -1}
        >
          <WaxSeal sealRef={sealRef} crackGroupRef={crackRef} />
        </button>
      </div>

      <p className="entry-hint" aria-hidden="true">
        Break the seal to enter
      </p>
    </div>
  );
}
