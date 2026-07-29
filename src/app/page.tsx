import Link from "next/link";
import Counter from "@/components/Counter";
import HeroBlueprint from "@/components/HeroBlueprint";
import Reveal from "@/components/Reveal";
import TradeMap from "@/components/TradeMap";
import { CategoryIcon } from "@/components/icons";
import {
  Button,
  Chip,
  Container,
  CtaBand,
  Eyebrow,
  SectionHead,
} from "@/components/ui";
import { categories } from "@/lib/catalogue";
import { metrics, site } from "@/lib/site";

const capabilities = [
  {
    no: "01",
    title: "Supplier Qualification",
    body: "We audit the plant, not the brochure. Machinery, heat-treatment records, in-house testing and export history are verified before a supplier enters our panel.",
  },
  {
    no: "02",
    title: "Specification Control",
    body: "Material grade, hardness, finish, plating thickness and packing are locked against a signed master sample so run two matches run one.",
  },
  {
    no: "03",
    title: "Pre-Shipment Inspection",
    body: "AQL sampling on every consignment, with dimensional checks, functional testing and photographic reporting before the container is sealed.",
  },
  {
    no: "04",
    title: "Documentation & Clearance",
    body: "Invoice, packing list, certificate of origin, mill certificates and inspection reports prepared correctly the first time. No demurrage from paperwork.",
  },
];

const steps = [
  { no: "01", title: "Enquiry", body: "You send a product list, target spec and destination port." },
  { no: "02", title: "Sourcing", body: "We shortlist qualified plants and negotiate landed cost." },
  { no: "03", title: "Sampling", body: "Pre-production samples approved and sealed as reference." },
  { no: "04", title: "Production", body: "Progress tracked with in-line checks against the master sample." },
  { no: "05", title: "Inspection", body: "AQL inspection with a photographic report issued to you." },
  { no: "06", title: "Shipment", body: "Booking, stuffing, documentation and door-to-port delivery." },
];

const marqueeItems = [
  "Hand Tools",
  "Fasteners",
  "Abrasives",
  "Drill Bits",
  "Cutting Discs",
  "Safety PPE",
  "Measuring Tools",
  "Builders Hardware",
  "Brass Fittings",
  "Power Tool Accessories",
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="grain relative overflow-hidden border-b border-graphite-800 bg-graphite-950">
        <div className="grid-blueprint absolute inset-0" />

        {/* Warm glow anchoring the composition bottom-left */}
        <div
          className="absolute -bottom-52 -left-40 size-[46rem] rounded-full opacity-[0.16] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-signal-500), transparent 65%)",
          }}
        />
        {/* Cool counterweight top-right */}
        <div
          className="absolute -right-52 -top-52 size-[38rem] rounded-full opacity-[0.09] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-patina-400), transparent 68%)",
          }}
        />

        {/* Blueprint drawing, bleeding off the right edge behind the docket */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-4 hidden w-[30rem] opacity-[0.28] xl:block"
        >
          <HeroBlueprint />
        </div>

        <Container className="relative pb-20 pt-20 lg:pb-28 lg:pt-28">
          <div className="grid items-end gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="anim-rise">
                <Eyebrow>Est. Pune · Maharashtra · India</Eyebrow>
              </div>

              <h1 className="stencil text-[clamp(2.9rem,9.5vw,8.2rem)] text-kraft-100">
                <span
                  className="anim-rise block"
                  style={{ animationDelay: "60ms" }}
                >
                  Hardware
                </span>
                <span
                  className="anim-rise block text-signal-500"
                  style={{ animationDelay: "150ms" }}
                >
                  Tools,
                </span>
                <span
                  className="anim-rise block"
                  style={{ animationDelay: "240ms" }}
                >
                  Moved Right.
                </span>
              </h1>

              <div
                className="anim-line mt-9 h-px w-full max-w-xl bg-gradient-to-r from-signal-500 via-graphite-600 to-transparent"
                style={{ animationDelay: "330ms" }}
              />

              <p
                className="anim-rise mt-8 max-w-xl text-lg leading-relaxed text-graphite-400"
                style={{ animationDelay: "400ms" }}
              >
                {site.name} is an import and export house for industrial
                hardware. We qualify the factory, control the specification and
                inspect the goods — so what leaves the port is what you
                actually ordered.
              </p>

              <div
                className="anim-rise mt-10 flex flex-wrap gap-4"
                style={{ animationDelay: "480ms" }}
              >
                <Button href="/contact">Request a Quotation</Button>
                <Button href="/products" variant="ghost">
                  View Catalogue
                </Button>
              </div>
            </div>

            {/* Consignment docket — the "spec sheet" object */}
            <aside
              className="anim-rise lg:col-span-4"
              style={{ animationDelay: "560ms" }}
            >
              <div className="ticks relative border border-graphite-700 bg-graphite-900/70 backdrop-blur-sm">
                {/* Scanning highlight */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="anim-sweep absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-signal-500/8 to-transparent" />
                </div>

                <div className="flex items-center justify-between border-b border-graphite-700 px-5 py-3.5">
                  <span className="label-tech text-graphite-500">
                    Consignment Docket
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="anim-pulse-dot size-1.5 rounded-full bg-patina-400" />
                    <span className="label-tech text-patina-400">Live</span>
                  </span>
                </div>

                <dl className="relative divide-y divide-graphite-800 px-5">
                  {[
                    { k: "Origin", v: "Pune, IN" },
                    { k: "Gateway", v: "JNPT / Nhava Sheva" },
                    { k: "Incoterms", v: "FOB · CIF · CFR · EXW" },
                    { k: "Inspection", v: "AQL 2.5 · Pre-shipment" },
                    { k: "Lead Time", v: "21 – 45 days" },
                    { k: "Payment", v: "T/T · L/C at sight" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between gap-4 py-3.5"
                    >
                      <dt className="label-tech text-graphite-500">{row.k}</dt>
                      <dd className="font-mono text-xs text-kraft-100">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/services"
                  className="group flex items-center justify-between border-t border-graphite-700 bg-graphite-850 px-5 py-4 transition-colors hover:bg-graphite-800"
                >
                  <span className="label-tech text-kraft-100">
                    How We Operate
                  </span>
                  <span className="text-signal-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </Container>

        {/* Metric ledger */}
        <div className="relative border-t border-graphite-800 bg-graphite-900/50">
          <Container>
            <dl className="grid grid-cols-2 divide-graphite-800 lg:grid-cols-4 lg:divide-x">
              {metrics.map((m, i) => (
                <Reveal
                  key={m.label}
                  delay={i * 90}
                  className={`px-2 py-8 lg:px-8 ${
                    i % 2 === 0 ? "border-r border-graphite-800 lg:border-r-0" : ""
                  } ${i < 2 ? "border-b border-graphite-800 lg:border-b-0" : ""}`}
                >
                  <dt className="label-tech text-graphite-500">{m.label}</dt>
                  <dd className="mt-2.5 font-display text-4xl font-extrabold text-kraft-100 lg:text-5xl">
                    <Counter value={m.value} />
                  </dd>
                  <p className="mt-1.5 font-mono text-[0.7rem] text-graphite-600">
                    {m.note}
                  </p>
                </Reveal>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* ══════════════ MARQUEE ══════════════ */}
      <div className="overflow-hidden border-b border-graphite-800 bg-signal-500 py-3.5">
        <div className="anim-marquee flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="label-tech flex items-center gap-10 whitespace-nowrap text-graphite-950"
            >
              {item}
              <span className="text-graphite-950/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════ CAPABILITY ══════════════ */}
      <section className="relative bg-graphite-950 py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHead
                  eyebrow="What We Actually Do"
                  title={
                    <>
                      Trade is easy.
                      <br />
                      <span className="text-signal-500">Consistency</span> is
                      the job.
                    </>
                  }
                  lead="Anyone can put a container on a ship. The difference shows up in the second order — whether the goods match the first. Our process exists to make that boring and repeatable."
                />
                <Reveal delay={140} className="mt-9">
                  <Button href="/services" variant="ghost">
                    Full Service Detail
                  </Button>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-graphite-800 border-y border-graphite-800">
                {capabilities.map((c, i) => (
                  <Reveal as="li" key={c.no} delay={i * 90}>
                    <div className="group flex gap-6 py-8 transition-colors lg:gap-10">
                      <span className="font-mono text-sm text-graphite-600 transition-colors duration-300 group-hover:text-signal-500">
                        {c.no}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-kraft-100 lg:text-2xl">
                          {c.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-graphite-400">
                          {c.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════ CATALOGUE ══════════════ */}
      <section className="grain relative border-y border-graphite-800 bg-graphite-900 py-24 lg:py-32">
        <div className="grid-blueprint absolute inset-0" />

        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="Product Families"
              title={
                <>
                  Eight categories.
                  <br />
                  One standard.
                </>
              }
              lead="Every family below is sourced from audited plants against declared material grades and international standards. Open any category for the full specification sheet."
            />
            <Reveal delay={120}>
              <Button href="/products" variant="ghost">
                All Products
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-8 bg-graphite-900 p-7 transition-colors duration-400 hover:bg-graphite-850"
                >
                  {/* Accent bar that draws on hover */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-signal-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-signal-500">
                        {c.code}
                      </span>
                      <span className="font-mono text-[0.65rem] text-graphite-600">
                        HS {c.hsHint.split(" · ")[0]}
                      </span>
                    </div>

                    <div className="mt-6 size-11 text-graphite-500 transition-colors duration-400 group-hover:text-signal-500">
                      <CategoryIcon slug={c.slug} />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-kraft-100">
                      {c.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-graphite-400">
                      {c.summary}
                    </p>
                  </div>

                  <span className="flex items-center gap-2 label-tech text-graphite-500 transition-colors group-hover:text-signal-400">
                    Open Spec
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════ PROCESS (kraft/light break) ══════════════ */}
      <section className="grain relative overflow-hidden bg-kraft-200 py-24 lg:py-32">
        <div className="grid-kraft absolute inset-0" />

        <Container className="relative">
          <SectionHead
            eyebrow="Order Lifecycle"
            title={
              <>
                From enquiry to
                <br />
                port of discharge.
              </>
            }
            lead="Six stages, each with a defined output and a named owner. You always know where the order stands without having to chase it."
            tone="light"
          />

          <ol className="mt-16 grid gap-px border border-kraft-400/50 bg-kraft-400/50 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.no} delay={(i % 3) * 90}>
                <div className="group relative h-full bg-kraft-100 p-8 transition-colors duration-400 hover:bg-white">
                  <span className="font-display text-5xl font-extrabold leading-none text-kraft-300 transition-colors duration-400 group-hover:text-signal-500">
                    {s.no}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-graphite-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-graphite-600">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200} className="mt-12 flex flex-wrap gap-3">
            {["FOB", "CIF", "CFR", "EXW", "DDP", "T/T", "L/C at Sight"].map(
              (t) => (
                <Chip key={t} tone="light">
                  {t}
                </Chip>
              ),
            )}
          </Reveal>
        </Container>
      </section>

      {/* ══════════════ TRADE ROUTES ══════════════ */}
      <section className="grain relative overflow-hidden border-b border-graphite-800 bg-graphite-950 py-24 lg:py-32">
        <div className="grid-blueprint-fine absolute inset-0" />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="Trade Lanes"
                title={
                  <>
                    One origin.
                    <br />
                    <span className="text-signal-500">Six</span> regions.
                  </>
                }
                lead="Everything routes through India's west-coast gateways. Kharadi sits a short inland haul from Nhava Sheva — fewer handling points, tighter cut-off control."
              />

              <Reveal delay={140} className="mt-9">
                <Button href="/global-reach" variant="ghost">
                  Lane Detail
                </Button>
              </Reveal>
            </div>

            <Reveal delay={100} className="lg:col-span-8">
              <div className="ticks border border-graphite-700 bg-graphite-900/60 p-4 sm:p-7">
                <TradeMap />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════ POSITIONING SPLIT ══════════════ */}
      <section className="relative bg-graphite-950 py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="ticks relative border border-graphite-700 bg-graphite-900 p-9 lg:p-12">
                <div className="grid-blueprint-fine absolute inset-0 opacity-60" />
                <div className="relative">
                  <span className="label-tech text-signal-500">
                    Operating Principle
                  </span>
                  <blockquote className="mt-7 font-display text-2xl font-bold leading-snug tracking-tight text-kraft-100 lg:text-3xl">
                    &ldquo;A shipment is only as good as the last inspection
                    nobody skipped.&rdquo;
                  </blockquote>
                  <p className="mt-7 leading-relaxed text-graphite-400">
                    We would rather lose a week holding a lot back than lose a
                    client explaining why the hardness was short. Every
                    consignment is checked, photographed and signed off before
                    it moves.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-2.5">
                    {["AQL 2.5 Sampling", "Retained Samples", "Photo Reports"].map(
                      (t) => (
                        <Chip key={t} tone="accent">
                          {t}
                        </Chip>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHead
                eyebrow="Why Buyers Stay"
                title={
                  <>
                    A partner, not
                    <br />
                    a middleman.
                  </>
                }
              />

              <ul className="mt-10 space-y-7">
                {[
                  {
                    t: "One accountable point of contact",
                    d: "No handoffs between departments. The person who quotes your order is the person who reports on it.",
                  },
                  {
                    t: "Transparent landed cost",
                    d: "Ex-works price, inland freight, documentation and margin shown separately. You see exactly what you are paying for.",
                  },
                  {
                    t: "Documentation that clears",
                    d: "Correct HS classification, complete certificates and clean paperwork — filed before the vessel sails, not after.",
                  },
                ].map((item, i) => (
                  <Reveal as="li" key={item.t} delay={i * 100}>
                    <div className="flex gap-4">
                      <span className="mt-2 h-px w-7 shrink-0 bg-signal-500" />
                      <div>
                        <h3 className="font-display text-base font-bold uppercase tracking-tight text-kraft-100">
                          {item.t}
                        </h3>
                        <p className="mt-2 leading-relaxed text-graphite-400">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
