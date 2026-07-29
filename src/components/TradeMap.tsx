/**
 * Stylised trade-route diagram. Not a geographic map — a schematic showing
 * Nhava Sheva as the hub with animated flow lines to each destination region.
 * Rendered as inline SVG so the routes animate and the labels stay selectable.
 */

const HUB = { x: 300, y: 210 };

const nodes = [
  { id: "EU", label: "Europe & UK", x: 165, y: 78, delay: 0 },
  { id: "ME", label: "Middle East", x: 205, y: 168, delay: 0.6 },
  { id: "AF", label: "Africa", x: 155, y: 285, delay: 1.2 },
  { id: "AM", label: "Americas", x: 62, y: 175, delay: 1.8 },
  { id: "SEA", label: "South East Asia", x: 432, y: 232, delay: 2.4 },
  { id: "OC", label: "Oceania", x: 470, y: 330, delay: 3.0 },
];

/** Quadratic curve from the hub to a node, bowed away from the straight line. */
function curve(x: number, y: number) {
  const mx = (HUB.x + x) / 2;
  const my = (HUB.y + y) / 2;
  const dx = x - HUB.x;
  const dy = y - HUB.y;
  // Perpendicular offset gives every route a consistent arc.
  const cx = mx - dy * 0.18;
  const cy = my + dx * 0.18;
  return `M${HUB.x} ${HUB.y} Q${cx} ${cy} ${x} ${y}`;
}

export default function TradeMap() {
  return (
    <svg
      viewBox="0 0 540 400"
      fill="none"
      role="img"
      aria-label="Schematic of shipping routes from Nhava Sheva, India to Europe, the Middle East, Africa, the Americas, South East Asia and Oceania."
      className="size-full"
    >
      {/* Backing grid */}
      <g stroke="var(--color-graphite-600)" strokeWidth="0.5" opacity="0.28">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="540" y2={i * 40} />
        ))}
      </g>

      {/* Routes */}
      <g fill="none" strokeWidth="1.4">
        {nodes.map((n) => (
          <g key={n.id}>
            <path
              d={curve(n.x, n.y)}
              stroke="var(--color-graphite-600)"
              opacity="0.55"
            />
            <path
              d={curve(n.x, n.y)}
              stroke="var(--color-signal-500)"
              className="anim-route"
              opacity="0.75"
              style={{ animationDelay: `${n.delay}s` }}
            />
          </g>
        ))}
      </g>

      {/* Destination nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="var(--color-patina-400)"
          />
          <circle
            cx={n.x}
            cy={n.y}
            fill="none"
            stroke="var(--color-patina-400)"
            strokeWidth="1"
            className="anim-ping"
            style={{ animationDelay: `${n.delay}s` }}
          />
          <text
            x={n.x}
            y={n.y - 12}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9.5"
            letterSpacing="0.1em"
            fill="var(--color-graphite-300)"
          >
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Hub */}
      <g>
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="7"
          fill="var(--color-signal-500)"
        />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          fill="none"
          stroke="var(--color-signal-500)"
          strokeWidth="1.4"
          className="anim-ping"
        />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="15"
          fill="none"
          stroke="var(--color-signal-500)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.7"
        />
        <text
          x={HUB.x}
          y={HUB.y + 32}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="0.12em"
          fill="var(--color-kraft-100)"
        >
          NHAVA SHEVA · IN
        </text>
        <text
          x={HUB.x}
          y={HUB.y + 46}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="8.5"
          letterSpacing="0.14em"
          fill="var(--color-graphite-500)"
        >
          ORIGIN GATEWAY
        </text>
      </g>

      {/* Frame ticks */}
      <g stroke="var(--color-graphite-500)" strokeWidth="1.2" opacity="0.6">
        <path d="M10 26V10h16M530 26V10h-16M10 374v16h16M530 374v16h-16" />
      </g>
    </svg>
  );
}
