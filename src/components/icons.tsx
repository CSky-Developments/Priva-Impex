import type { ReactNode } from "react";

/**
 * Line-art tool glyphs, one per catalogue category.
 *
 * These are drawn on a 48×48 grid with a shared stroke treatment so they read
 * as a set. Animation is driven by the parent card's `group-hover`, using the
 * `.icon-draw` / `.icon-spin` classes defined in globals.css — no JS, and the
 * whole set costs less than a single icon font request.
 */

type IconProps = { className?: string };

const wrap = (children: ReactNode, className = "") => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    className={`icon-draw size-full ${className}`}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

/** HT — crossed spanner and wrench. */
export const IconHandTools = ({ className }: IconProps) =>
  wrap(
    <>
      <path
        d="M30.5 8.5a7.5 7.5 0 0 0-9.9 9.4L9 29.5a3.5 3.5 0 0 0 5 5l11.6-11.6a7.5 7.5 0 0 0 9.4-9.9L31.5 17 27 16l-1-4.5z"
        strokeWidth="1.75"
      />
      <circle cx="11.5" cy="32" r="1.4" fill="currentColor" stroke="none" />
      <path d="M28 30l10 10M25 33l10 10" strokeWidth="1.75" opacity="0.55" />
    </>,
    className,
  );

/** PA — drill bit with helical flutes. */
export const IconPowerAccessories = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M24 4v10" strokeWidth="1.75" />
      <path d="M20 14h8v20l-4 10-4-10z" strokeWidth="1.75" />
      <path
        d="M20 19h8M20 24h8M20 29h8M20 34h8"
        strokeWidth="1.4"
        opacity="0.6"
      />
      <path d="M18 8h12" strokeWidth="1.75" />
    </>,
    className,
  );

/** FS — hex bolt, front and side. */
export const IconFasteners = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M16 10.5 24 6l8 4.5v9L24 24l-8-4.5z" strokeWidth="1.75" />
      <path d="M20 12.8 24 10.5l4 2.3v4.4L24 19.5l-4-2.3z" strokeWidth="1.4" opacity="0.6" />
      <path d="M21.5 24v14M26.5 24v14" strokeWidth="1.75" />
      <path
        d="M21.5 27h5M21.5 30h5M21.5 33h5M21.5 36h5"
        strokeWidth="1.2"
        opacity="0.55"
      />
    </>,
    className,
  );

/** AB — cutting disc with radial sparks. */
export const IconAbrasives = ({ className }: IconProps) =>
  wrap(
    <>
      <circle cx="24" cy="24" r="15" strokeWidth="1.75" className="icon-spin" />
      <circle cx="24" cy="24" r="4" strokeWidth="1.75" />
      <path
        d="M24 9v4M24 35v4M9 24h4M35 24h4M13.4 13.4l2.8 2.8M31.8 31.8l2.8 2.8M34.6 13.4l-2.8 2.8M16.2 31.8l-2.8 2.8"
        strokeWidth="1.5"
        opacity="0.65"
      />
    </>,
    className,
  );

/** MT — vernier calliper. */
export const IconMeasuring = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M8 16h32v6H8z" strokeWidth="1.75" />
      <path d="M12 22v10l4 4V22M32 22v14l4-4V22" strokeWidth="1.75" />
      <path
        d="M13 16v-3M18 16v-4M23 16v-3M28 16v-4M33 16v-3"
        strokeWidth="1.4"
        opacity="0.65"
      />
      <path d="M24 22v8" strokeWidth="1.5" opacity="0.5" />
    </>,
    className,
  );

/** SE — safety helmet. */
export const IconSafety = ({ className }: IconProps) =>
  wrap(
    <>
      <path
        d="M8 32a16 16 0 0 1 32 0z"
        strokeWidth="1.75"
      />
      <path d="M5 32h38" strokeWidth="1.75" />
      <path d="M19 17.5V13a5 5 0 0 1 10 0v4.5" strokeWidth="1.6" opacity="0.7" />
      <path d="M24 16v16" strokeWidth="1.4" opacity="0.5" />
    </>,
    className,
  );

/** BH — door hinge. */
export const IconBuilders = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M10 8h9v32h-9z" strokeWidth="1.75" />
      <path d="M29 8h9v32h-9z" strokeWidth="1.75" />
      <path d="M24 6v36" strokeWidth="1.75" />
      <circle cx="24" cy="14" r="2.4" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2.4" strokeWidth="1.5" />
      <circle cx="24" cy="34" r="2.4" strokeWidth="1.5" />
      <path d="M14 16h1M14 32h1M33 16h1M33 32h1" strokeWidth="2" opacity="0.6" />
    </>,
    className,
  );

/** PH — pipe valve with handle. */
export const IconPlumbing = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M6 26h10M32 26h10" strokeWidth="1.75" />
      <path d="M16 20h16v12H16z" strokeWidth="1.75" />
      <path d="M24 20v-8" strokeWidth="1.75" />
      <path d="M17 12h14" strokeWidth="1.75" />
      <path d="M6 22v8M42 22v8" strokeWidth="1.5" opacity="0.65" />
      <circle cx="24" cy="26" r="3" strokeWidth="1.4" opacity="0.6" />
    </>,
    className,
  );

/** Slug → icon lookup used by the catalogue grids. */
export const categoryIcons: Record<
  string,
  (p: IconProps) => ReactNode
> = {
  "hand-tools": IconHandTools,
  "power-tool-accessories": IconPowerAccessories,
  fasteners: IconFasteners,
  abrasives: IconAbrasives,
  "measuring-tools": IconMeasuring,
  "safety-equipment": IconSafety,
  "builders-hardware": IconBuilders,
  "plumbing-hardware": IconPlumbing,
};

export function CategoryIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = categoryIcons[slug];
  return Icon ? <>{Icon({ className })}</> : null;
}

/* ── Service / process glyphs ─────────────────────────────── */

export const IconAudit = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M10 6h20l8 8v28H10z" strokeWidth="1.75" />
      <path d="M30 6v8h8" strokeWidth="1.75" />
      <path d="M16 24l4 4 9-9" strokeWidth="2" />
      <path d="M16 34h16" strokeWidth="1.5" opacity="0.55" />
    </>,
    className,
  );

export const IconShip = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M8 30h32l-4 10H12z" strokeWidth="1.75" />
      <path d="M14 30V18h20v12" strokeWidth="1.75" />
      <path d="M19 18v-6h10v6" strokeWidth="1.6" opacity="0.7" />
      <path d="M6 40c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2" strokeWidth="1.5" opacity="0.6" />
    </>,
    className,
  );

export const IconGlobe = ({ className }: IconProps) =>
  wrap(
    <>
      <circle cx="24" cy="24" r="16" strokeWidth="1.75" />
      <ellipse cx="24" cy="24" rx="7" ry="16" strokeWidth="1.5" opacity="0.7" />
      <path d="M8 24h32M11 15h26M11 33h26" strokeWidth="1.4" opacity="0.6" />
    </>,
    className,
  );

export const IconShield = ({ className }: IconProps) =>
  wrap(
    <>
      <path d="M24 5l15 6v13c0 10-6.5 16-15 19-8.5-3-15-9-15-19V11z" strokeWidth="1.75" />
      <path d="M17 24l5 5 10-10" strokeWidth="2" />
    </>,
    className,
  );
