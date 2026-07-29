import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Constrained page gutter used by every section. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1400px] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Monospace eyebrow with a leading rule — the repeating section marker. */
export function Eyebrow({
  children,
  tone = "signal",
}: {
  children: ReactNode;
  tone?: "signal" | "graphite";
}) {
  return (
    <span className="mb-6 flex items-center gap-3">
      <span
        className={`h-px w-10 ${
          tone === "signal" ? "bg-signal-500" : "bg-graphite-500"
        }`}
      />
      <span
        className={`label-tech ${
          tone === "signal" ? "text-signal-500" : "text-graphite-500"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

/** Standard interior page hero. */
export function PageHero({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-graphite-800 bg-graphite-900">
      <div className="grid-blueprint absolute inset-0" />
      <div
        className="absolute -right-40 -top-40 size-[34rem] rounded-full opacity-[0.13] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-signal-500), transparent 68%)",
        }}
      />

      <Container className="relative py-20 lg:py-28">
        <div className="flex items-start gap-6 lg:gap-10">
          <span className="anim-rise hidden font-display text-7xl font-extrabold leading-none text-graphite-800 lg:block">
            {index}
          </span>

          <div className="max-w-3xl">
            <div className="anim-rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1
              className="stencil anim-rise text-[clamp(2.5rem,7vw,5rem)] text-kraft-100"
              style={{ animationDelay: "80ms" }}
            >
              {title}
            </h1>
            <p
              className="anim-rise mt-7 max-w-2xl text-lg leading-relaxed text-graphite-400"
              style={{ animationDelay: "170ms" }}
            >
              {lead}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Section heading pair used inside page bodies. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`stencil text-[clamp(1.9rem,4.4vw,3.25rem)] ${
          tone === "light" ? "text-graphite-900" : "text-kraft-100"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed lg:text-lg ${
            tone === "light" ? "text-graphite-600" : "text-graphite-400"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/** Primary / secondary action button. Renders as Link or anchor. */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  external?: boolean;
}) {
  const base =
    "ticks group inline-flex items-center gap-3 px-7 py-4 transition-all duration-300";

  const styles = {
    primary:
      "bg-signal-500 text-graphite-950 hover:bg-signal-400 hover:-translate-y-0.5",
    ghost:
      "border border-graphite-600 text-kraft-100 hover:border-signal-500 hover:bg-graphite-850",
    light:
      "border border-graphite-900 text-graphite-900 hover:bg-graphite-900 hover:text-kraft-100",
  }[variant];

  const inner = (
    <>
      <span className="label-tech">{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {inner}
    </Link>
  );
}

/** Spec-sheet style key/value table. */
export function SpecTable({
  rows,
  tone = "dark",
}: {
  rows: { label: string; value: string }[];
  tone?: "dark" | "light";
}) {
  return (
    <dl
      className={`divide-y ${
        tone === "light" ? "divide-kraft-300" : "divide-graphite-800"
      }`}
    >
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6"
        >
          <dt
            className={`label-tech pt-0.5 ${
              tone === "light" ? "text-graphite-500" : "text-graphite-500"
            }`}
          >
            {row.label}
          </dt>
          <dd
            className={`font-mono text-sm ${
              tone === "light" ? "text-graphite-800" : "text-graphite-300"
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Small pill for standards, materials, certifications. */
export function Chip({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "accent";
}) {
  const styles = {
    dark: "border-graphite-700 bg-graphite-850 text-graphite-300",
    light: "border-kraft-300 bg-kraft-100 text-graphite-700",
    accent: "border-signal-500/40 bg-signal-500/10 text-signal-400",
  }[tone];

  return (
    <span
      className={`inline-flex items-center border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}

/** Full-bleed CTA band closing most pages. */
export function CtaBand({
  title,
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-y border-graphite-700 bg-graphite-900">
      <div className="grid-blueprint absolute inset-0" />
      <div
        className="absolute inset-x-0 bottom-0 h-64 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, var(--color-signal-500), transparent 70%)",
        }}
      />

      <Container className="relative py-20 text-center lg:py-28">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>Start a Conversation</Eyebrow>
          </div>
          <h2 className="stencil mx-auto max-w-4xl text-[clamp(2rem,5.5vw,4rem)] text-kraft-100">
            {title ?? (
              <>
                Send us your <span className="text-signal-500">spec.</span>
                <br />
                We&apos;ll send back a price.
              </>
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-graphite-400">
            {lead ??
              "Share your product list, target specification and destination port. You will have a costed, documented proposal in hand — typically within two working days."}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Request a Quotation</Button>
            <Button href="/products" variant="ghost">
              Browse Catalogue
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
