/**
 * Decorative technical drawing of a spanner, rendered as an animated
 * blueprint with dimension lines. Pure SVG/CSS — sits behind the hero
 * headline on large screens and self-draws on page load.
 */
export default function HeroBlueprint() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className="size-full"
    >
      <defs>
        <linearGradient id="bp-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-signal-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-patina-400)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Construction circles */}
      <g stroke="var(--color-graphite-600)" strokeWidth="1" opacity="0.5">
        <circle cx="200" cy="200" r="150" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="110" strokeDasharray="2 6" />
        <line x1="20" y1="200" x2="380" y2="200" strokeDasharray="10 6" />
        <line x1="200" y1="20" x2="200" y2="380" strokeDasharray="10 6" />
      </g>

      {/* Rotating outer tick ring */}
      <g
        className="icon-spin"
        stroke="var(--color-graphite-500)"
        strokeWidth="1.2"
        opacity="0.55"
        style={{ animation: "slow-spin 48s linear infinite", transformOrigin: "center" }}
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const long = i % 3 === 0;
          const r1 = long ? 158 : 163;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * r1}
              y1={200 + Math.sin(a) * r1}
              x2={200 + Math.cos(a) * 170}
              y2={200 + Math.sin(a) * 170}
            />
          );
        })}
      </g>

      {/* Spanner body */}
      <g
        stroke="url(#bp-fade)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="anim-float"
      >
        <path
          d="M258 108a38 38 0 0 0-50 47.5L131 232a17.5 17.5 0 0 0 25 25l76.5-77a38 38 0 0 0 47.5-50l-25 25-22.5-5-5-22.5z"
          style={{
            strokeDasharray: 620,
            animation: "stroke-draw 2.4s var(--ease-mech) both",
            animationDelay: "300ms",
          }}
        />
        <circle
          cx="145"
          cy="243"
          r="6"
          fill="var(--color-signal-500)"
          stroke="none"
          opacity="0.85"
        />
      </g>

      {/* Dimension callouts */}
      <g
        stroke="var(--color-signal-500)"
        strokeWidth="1"
        opacity="0.6"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-signal-500)"
      >
        <line x1="110" y1="300" x2="290" y2="300" />
        <line x1="110" y1="294" x2="110" y2="306" />
        <line x1="290" y1="294" x2="290" y2="306" />
        <text x="200" y="316" textAnchor="middle" stroke="none">
          Cr-V 6150
        </text>

        <line x1="330" y1="110" x2="330" y2="230" />
        <line x1="324" y1="110" x2="336" y2="110" />
        <line x1="324" y1="230" x2="336" y2="230" />
        <text
          x="344"
          y="174"
          textAnchor="middle"
          stroke="none"
          transform="rotate(90 344 174)"
        >
          HRC 48
        </text>
      </g>

      {/* Corner registration marks */}
      <g stroke="var(--color-graphite-500)" strokeWidth="1.5" opacity="0.7">
        <path d="M24 40V24h16M376 40V24h-16M24 360v16h16M376 360v16h-16" />
      </g>
    </svg>
  );
}
