interface WwLogoProps {
  className?: string;
  /* "dark" = ink-on-card | "light" = ink-on-dark-bg */
  variant?: "dark" | "light";
}

export default function WwLogo({ className, variant = "light" }: WwLogoProps) {
  const inkColor   = variant === "dark" ? "oklch(0.20 0.025 45)" : "currentColor";
  const ropeColor  = variant === "dark" ? "oklch(0.44 0.040 45)" : "currentColor";
  const labelColor = variant === "dark" ? "oklch(0.44 0.025 50)" : "oklch(0.55 0.012 80)";

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wyld West — WW lasso monogram"
      role="img"
    >
      {/* ── Lasso rope oval ── */}
      {/* Main loop — slightly irregular to read as rope */}
      <ellipse
        cx="100"
        cy="112"
        rx="84"
        ry="72"
        stroke={ropeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="9 5"
        opacity="0.75"
      />

      {/* Rope tail going up to the honda (knot) */}
      <line
        x1="100" y1="40"
        x2="100" y2="14"
        stroke={ropeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="9 5"
        opacity="0.75"
      />

      {/* Honda / lasso knot — small teardrop loop where rope meets the tail */}
      <path
        d="M100,40 C94,32 86,30 83,35 C80,40 84,47 91,46 C97,45 100,40 100,40 Z"
        stroke={ropeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.75"
      />

      {/* ── WW monogram ── */}
      {/*
        Hand-constructed W paths using a serif display style.
        Left W: starts at x=22, right W: mirrors + offset to x=105
        Each W uses a classic double-V with slight weight contrast
        on the downstrokes (thicker) vs upstrokes (thinner).
      */}

      {/* Left W */}
      <path
        d="M 22,54
           L 36,112
           L 50,76
           L 64,112
           L 78,54"
        stroke={inkColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left W — inner thin strokes for display-serif feel */}
      <path
        d="M 36,112 L 50,76 L 64,112"
        stroke={inkColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.3"
      />

      {/* Right W */}
      <path
        d="M 105,54
           L 119,112
           L 133,76
           L 147,112
           L 161,54"
        stroke={inkColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right W — inner thin strokes */}
      <path
        d="M 119,112 L 133,76 L 147,112"
        stroke={inkColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.3"
      />

      {/* ── Wordmark below ── */}
      <text
        x="100"
        y="170"
        textAnchor="middle"
        fontSize="13"
        letterSpacing="6"
        fill={labelColor}
        fontFamily="'Barlow', system-ui, sans-serif"
        fontWeight="400"
      >
        WYLD WEST
      </text>
    </svg>
  );
}
