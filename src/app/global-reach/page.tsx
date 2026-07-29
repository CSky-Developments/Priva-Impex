import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TradeMap from "@/components/TradeMap";
import {
  Chip,
  Container,
  CtaBand,
  PageHero,
  SectionHead,
  SpecTable,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Global Reach",
  description:
    "Priva Impex ships hardware tools from Indian gateway ports to buyers across the Middle East, Africa, Europe, South East Asia, the Americas and Oceania.",
};

const regions = [
  {
    code: "ME",
    name: "Middle East",
    markets: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain"],
    transit: "6 – 12 days",
    note: "Our shortest and highest-frequency lane. Weekly sailings from Nhava Sheva to Jebel Ali make small, frequent replenishment orders practical.",
  },
  {
    code: "AF",
    name: "Africa",
    markets: ["Kenya", "Tanzania", "Nigeria", "Ghana", "South Africa", "Ethiopia"],
    transit: "18 – 30 days",
    note: "Strong demand for hand tools and builders hardware. We consolidate mixed containers to keep landed cost workable for distributors building range.",
  },
  {
    code: "EU",
    name: "Europe & UK",
    markets: ["Germany", "United Kingdom", "Netherlands", "Poland", "Italy", "Spain"],
    transit: "22 – 32 days",
    note: "Compliance-led market. CE marking, EN standards conformity and REACH declarations are prepared as standard, not as an afterthought.",
  },
  {
    code: "SEA",
    name: "South East Asia",
    markets: ["Singapore", "Malaysia", "Vietnam", "Thailand", "Indonesia", "Philippines"],
    transit: "10 – 18 days",
    note: "Competitive on price and quick to sample. Useful lane for buyers testing a new range before committing to volume.",
  },
  {
    code: "AM",
    name: "Americas",
    markets: ["United States", "Canada", "Mexico", "Brazil", "Chile", "Colombia"],
    transit: "30 – 45 days",
    note: "Longer transit, so specification discipline matters most here. ANSI-standard products and imperial sizing handled throughout.",
  },
  {
    code: "OC",
    name: "Oceania",
    markets: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    transit: "20 – 28 days",
    note: "AS/NZS conformity and strict biosecurity requirements. Fumigation and treatment certification handled at origin as routine.",
  },
];

const gateways = [
  { label: "Primary sea port", value: "JNPT / Nhava Sheva, Navi Mumbai" },
  { label: "Alternate sea port", value: "Mundra, Gujarat" },
  { label: "West coast option", value: "Kandla / Deendayal Port" },
  { label: "Air gateway", value: "Pune (PNQ) · Mumbai (BOM)" },
  { label: "Inland container depot", value: "Talegaon & Dighi ICD, Pune" },
  { label: "Container types", value: "20' GP · 40' GP · 40' HQ · LCL groupage" },
  { label: "Typical booking notice", value: "7 – 10 days before sailing" },
  { label: "Cargo insurance", value: "Marine all-risk, 110% of CIF value" },
];

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Markets Served"
        title={
          <>
            Pune to
            <br />
            <span className="text-signal-500">anywhere</span> it docks.
          </>
        }
        lead="We ship from Indian west-coast gateways to buyers across six regions. Each lane carries its own compliance requirements, transit reality and documentation set — and we handle all three."
      />

      {/* Route schematic */}
      <section className="grain relative overflow-hidden border-b border-graphite-800 bg-graphite-950 py-16 lg:py-20">
        <div className="grid-blueprint-fine absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <div className="ticks border border-graphite-700 bg-graphite-900/60 p-4 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-graphite-800 pb-4">
                <span className="label-tech text-signal-500">
                  Route Schematic
                </span>
                <span className="font-mono text-[0.65rem] text-graphite-600">
                  ORIGIN — NHAVA SHEVA (INNSA)
                </span>
              </div>
              <TradeMap />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Region grid */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <Reveal className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-graphite-800 pb-6">
            <span className="label-tech text-graphite-500">
              6 Regions · 20+ Destination Markets
            </span>
            <span className="label-tech text-graphite-500">
              Transit From Nhava Sheva
            </span>
          </Reveal>

          <div className="grid gap-px bg-graphite-800 lg:grid-cols-2">
            {regions.map((r, i) => (
              <Reveal key={r.code} delay={(i % 2) * 90}>
                <article className="group relative h-full bg-graphite-950 p-8 transition-colors duration-400 hover:bg-graphite-900 lg:p-10">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-signal-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm text-signal-500">
                        {r.code}
                      </span>
                      <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-kraft-100">
                        {r.name}
                      </h2>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="label-tech block text-graphite-600">
                        Transit
                      </span>
                      <span className="font-mono text-sm text-patina-400">
                        {r.transit}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-relaxed text-graphite-400">
                    {r.note}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {r.markets.map((m) => (
                      <Chip key={m}>{m}</Chip>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gateways + compliance */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-graphite-900 py-24 lg:py-32">
        <div className="grid-blueprint absolute inset-0" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHead
                eyebrow="Logistics Profile"
                title={
                  <>
                    Ports, routes
                    <br />
                    and realities.
                  </>
                }
                lead="Kharadi sits within a short inland haul of India's busiest container gateway. That proximity is a genuine operational advantage — shorter inland legs, fewer handling points, tighter cut-off control."
              />

              <Reveal delay={130} className="mt-9">
                <div className="ticks border border-graphite-700 bg-graphite-950 p-7 lg:p-9">
                  <div className="mb-6 flex items-center justify-between border-b border-graphite-800 pb-4">
                    <h3 className="label-tech text-signal-500">
                      Gateway Detail
                    </h3>
                    <span className="font-mono text-[0.65rem] text-graphite-600">
                      LOG / 05
                    </span>
                  </div>
                  <SpecTable rows={gateways} />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <SectionHead
                eyebrow="Market Compliance"
                title="Every lane has rules."
                lead="A product that is perfectly legal in one market is unsellable in another. We match the specification to the destination before production starts, not after the goods land."
              />

              <div className="mt-10 space-y-px bg-graphite-800">
                {[
                  {
                    t: "European Union & UK",
                    d: "CE / UKCA marking, EN standards conformity, REACH and RoHS declarations, EUDR-compliant packaging where applicable.",
                  },
                  {
                    t: "United States & Canada",
                    d: "ANSI and ASTM specifications, imperial sizing, FCC where relevant, CPSIA compliance on consumer-facing lines.",
                  },
                  {
                    t: "Gulf Cooperation Council",
                    d: "GCC conformity marking, SASO certification for Saudi Arabia, Arabic labelling and ESMA registration for UAE.",
                  },
                  {
                    t: "Australia & New Zealand",
                    d: "AS/NZS standards conformity, biosecurity treatment certification, ISPM-15 heat-treated timber packaging.",
                  },
                  {
                    t: "Africa Pre-Shipment",
                    d: "PVoC and SONCAP style pre-export verification programmes coordinated with the appointed inspection agency.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.t} delay={i * 80}>
                    <div className="bg-graphite-900 p-7">
                      <h3 className="font-display text-base font-bold uppercase tracking-tight text-kraft-100">
                        {item.t}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-graphite-400">
                        {item.d}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Where are you importing to?"
        lead="Tell us the destination port and the product family. We will confirm the compliance route, realistic transit and indicative freight in one reply."
      />
    </>
  );
}
