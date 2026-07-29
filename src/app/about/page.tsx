import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  Chip,
  Container,
  CtaBand,
  PageHero,
  SectionHead,
  SpecTable,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a Pune-based import and export house for hardware tools, built around supplier auditing, specification control and pre-shipment inspection.`,
};

const values = [
  {
    no: "01",
    title: "Verify, Then Trust",
    body: "A supplier earns a place on our panel by passing an audit, not by quoting the lowest number. We look at machinery, heat-treatment records and rejection history before we look at price.",
  },
  {
    no: "02",
    title: "Say the Real Lead Time",
    body: "An optimistic date helps nobody. We quote the timeline the factory can actually hold, and we tell you the moment it slips rather than the week it was due.",
  },
  {
    no: "03",
    title: "Price What It Costs",
    body: "Costs are broken out line by line — ex-works, inland, documentation, margin. A quote you can interrogate is a quote you can rely on.",
  },
  {
    no: "04",
    title: "Own the Problem",
    body: "If a lot fails inspection, that is our issue to solve, not yours to chase. Rework, replacement or refund gets decided quickly and communicated plainly.",
  },
];

const facts = [
  { label: "Legal name", value: "Priva Impex" },
  { label: "Nature of business", value: "Import & Export" },
  { label: "Sector focus", value: "Hardware tools & industrial hardware" },
  { label: "Registered office", value: "Kharadi, Pune — 411014, Maharashtra, India" },
  { label: "Gateway ports", value: "JNPT · Nhava Sheva · Mundra" },
  { label: "Air gateway", value: "Pune (PNQ) · Mumbai (BOM)" },
  { label: "Incoterms handled", value: "EXW · FOB · CFR · CIF · DDP" },
  { label: "Payment terms", value: "T/T advance · L/C at sight · negotiable" },
  { label: "Correspondence", value: site.email },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Who We Are"
        title={
          <>
            A trading house
            <br />
            built on <span className="text-signal-500">checks.</span>
          </>
        }
        lead="Priva Impex operates out of Kharadi, Pune, moving hardware tools between Indian manufacturing clusters and buyers abroad — and bringing specialist tooling into India for distributors who need a reliable import partner."
      />

      {/* Narrative */}
      <section className="bg-graphite-950 py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHead
                eyebrow="The Position"
                title={
                  <>
                    Between the factory
                    <br />
                    floor and the port.
                  </>
                }
              />

              <div className="mt-9 space-y-6 text-base leading-relaxed text-graphite-400 lg:text-lg">
                <p>
                  India makes excellent hardware tools. It also makes plenty of
                  mediocre ones, and from a product photograph the two look
                  identical. The gap between them is not visible in a catalogue
                  — it sits in the heat-treatment log, the plating bath, the
                  rejection rate nobody publishes.
                </p>
                <p>
                  That gap is the reason we exist. Priva Impex sits between the
                  manufacturing cluster and the buyer, doing the unglamorous
                  work that decides whether a shipment is worth receiving:
                  auditing the plant, fixing the specification against a signed
                  sample, pulling AQL samples before the container is sealed,
                  and preparing documentation that clears customs without a
                  phone call.
                </p>
                <p>
                  We work both directions. Outbound, we consolidate hand tools,
                  fasteners, abrasives and builders hardware from Punjab,
                  Gujarat and Maharashtra clusters for distributors and
                  retail chains overseas. Inbound, we import specialist
                  tooling, precision measuring equipment and certified PPE for
                  Indian distributors and industrial buyers.
                </p>
                <p>
                  We are deliberately not the cheapest route to a container. We
                  are the route where the second order matches the first.
                </p>
              </div>

              <Reveal delay={120} className="mt-10 flex flex-wrap gap-2.5">
                {[
                  "Supplier Auditing",
                  "Specification Control",
                  "AQL Inspection",
                  "Export Documentation",
                  "Consolidated Shipping",
                  "Private Label",
                ].map((t) => (
                  <Chip key={t} tone="accent">
                    {t}
                  </Chip>
                ))}
              </Reveal>
            </div>

            {/* Company record */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="ticks border border-graphite-700 bg-graphite-900 p-7 lg:sticky lg:top-28 lg:p-9">
                  <div className="mb-6 flex items-center justify-between border-b border-graphite-800 pb-4">
                    <h3 className="label-tech text-signal-500">
                      Company Record
                    </h3>
                    <span className="font-mono text-[0.65rem] text-graphite-600">
                      REF / PI-01
                    </span>
                  </div>
                  <SpecTable rows={facts} />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values — kraft break */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-kraft-200 py-24 lg:py-32">
        <div className="grid-kraft absolute inset-0" />

        <Container className="relative">
          <SectionHead
            eyebrow="How We Work"
            title="Four commitments we keep."
            lead="These are not aspirations on a wall. They are the rules we use to decide what to ship and what to hold back."
            tone="light"
          />

          <div className="mt-16 grid gap-px border border-kraft-400/50 bg-kraft-400/50 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.no} delay={(i % 2) * 100}>
                <div className="group h-full bg-kraft-100 p-8 transition-colors duration-400 hover:bg-white lg:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-signal-600">
                      {v.no}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-graphite-900">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-graphite-600">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sourcing map */}
      <section className="bg-graphite-950 py-24 lg:py-32">
        <Container>
          <SectionHead
            eyebrow="Sourcing Footprint"
            title="Where the goods come from."
            lead="We buy from established manufacturing clusters where the supporting trade — forging, heat treatment, plating, tooling — already exists at depth."
          />

          <div className="mt-16 grid gap-px border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                city: "Jalandhar & Ludhiana",
                state: "Punjab",
                focus: "Hand tools, forged spanners, hammers, agricultural tools",
              },
              {
                city: "Rajkot & Jamnagar",
                state: "Gujarat",
                focus: "Brass fittings, fasteners, machined components, valves",
              },
              {
                city: "Pune & Nashik",
                state: "Maharashtra",
                focus: "Precision tooling, abrasives, engineering hardware",
              },
              {
                city: "Aligarh & Ghaziabad",
                state: "Uttar Pradesh",
                focus: "Builders hardware, locks, hinges, door furniture",
              },
            ].map((loc, i) => (
              <Reveal key={loc.city} delay={(i % 4) * 90}>
                <div className="group h-full bg-graphite-900 p-7 transition-colors duration-400 hover:bg-graphite-850">
                  <span className="label-tech text-signal-500">
                    {loc.state}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight tracking-tight text-kraft-100">
                    {loc.city}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-400">
                    {loc.focus}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Work with a partner who checks."
        lead="Tell us what you buy today and where it falls short. We will tell you honestly whether we can do better on it."
      />
    </>
  );
}
