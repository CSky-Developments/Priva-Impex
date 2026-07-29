import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  IconAudit,
  IconGlobe,
  IconHandTools,
  IconMeasuring,
  IconShield,
  IconShip,
} from "@/components/icons";
import {
  Chip,
  Container,
  CtaBand,
  PageHero,
  SectionHead,
  SpecTable,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Export, import, sourcing, quality inspection, logistics and documentation services from Priva Impex — a Pune-based hardware tools trading house.",
};

const services = [
  {
    no: "01",
    Icon: IconShip,
    title: "Export Services",
    lead: "Indian hardware, delivered to your port.",
    body: "We consolidate hand tools, fasteners, abrasives and builders hardware from audited Indian plants into single documented shipments — handling everything from supplier negotiation to bill of lading.",
    points: [
      "Supplier identification and plant audit",
      "Price negotiation and landed cost modelling",
      "Pre-production sampling and approval",
      "AQL inspection with photographic reporting",
      "Container stuffing supervision",
      "Complete export documentation set",
    ],
  },
  {
    no: "02",
    Icon: IconGlobe,
    title: "Import Services",
    lead: "Bringing specialist tooling into India.",
    body: "For Indian distributors and industrial buyers who need reliable overseas supply — precision tooling, branded power tool accessories, certified PPE and measuring equipment.",
    points: [
      "Overseas supplier vetting and correspondence",
      "Import licensing and HS classification",
      "Customs clearance coordination",
      "Duty optimisation and FTA benefit assessment",
      "Bonded warehousing arrangement",
      "Last-mile distribution across India",
    ],
  },
  {
    no: "03",
    Icon: IconHandTools,
    title: "Contract Sourcing",
    lead: "Your procurement desk in India.",
    body: "For buyers running an ongoing programme rather than a one-off order. We hold the supplier relationships, manage the calendar and keep a second qualified source ready on every critical line.",
    points: [
      "Dedicated category sourcing",
      "Multi-supplier price benchmarking",
      "Dual-sourcing for supply security",
      "Rolling production scheduling",
      "Vendor performance scorecards",
      "Annual rate contract negotiation",
    ],
  },
  {
    no: "04",
    Icon: IconShield,
    title: "Quality Assurance",
    lead: "Verification before the container seals.",
    body: "Inspection is a separate discipline from buying, and we treat it that way. Every consignment is sampled against the approved master before it is released for shipment.",
    points: [
      "Incoming raw material verification",
      "In-line production monitoring",
      "AQL 2.5 pre-shipment sampling",
      "Dimensional and hardness testing",
      "Salt spray and coating verification",
      "Third-party inspection coordination (SGS, BV, Intertek)",
    ],
  },
  {
    no: "05",
    Icon: IconMeasuring,
    title: "Logistics & Freight",
    lead: "Sea, air and multimodal movement.",
    body: "Booked through established forwarders at negotiated rates, with the routing chosen for your actual priority — whether that is cost, transit time or schedule reliability.",
    points: [
      "FCL and LCL sea freight booking",
      "Air freight for urgent consignments",
      "Multi-supplier cargo consolidation",
      "Marine cargo insurance",
      "Door-to-port and door-to-door options",
      "Live shipment tracking updates",
    ],
  },
  {
    no: "06",
    Icon: IconAudit,
    title: "Documentation & Compliance",
    lead: "Paperwork that clears the first time.",
    body: "Most demurrage is a documentation failure, not a shipping one. We prepare the full set correctly before the vessel sails and keep copies on file for your records.",
    points: [
      "Commercial invoice and packing list",
      "Certificate of Origin (incl. preferential)",
      "Mill test and material certificates",
      "Fumigation and phytosanitary certificates",
      "Letter of credit document negotiation",
      "Customs and DGFT filings",
    ],
  },
];

const terms = [
  { label: "Incoterms 2020", value: "EXW · FOB · CFR · CIF · DDP" },
  { label: "Payment terms", value: "T/T advance · L/C at sight · D/P" },
  { label: "Sample lead time", value: "7 – 14 days from spec freeze" },
  { label: "Production lead time", value: "21 – 45 days depending on volume" },
  { label: "Inspection standard", value: "ISO 2859-1 · AQL 2.5 general II" },
  { label: "Container options", value: "20' FCL · 40' FCL · 40' HQ · LCL" },
  { label: "Gateway ports", value: "JNPT · Nhava Sheva · Mundra" },
  { label: "Documentation", value: "Full export set within 3 working days" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Capabilities"
        title={
          <>
            Six services.
            <br />
            One <span className="text-signal-500">chain</span> of custody.
          </>
        }
        lead="From identifying the right factory to handing over a clean document set — we cover the full span of a hardware trade, and we stay accountable for it end to end."
      />

      {/* Service blocks */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <div className="space-y-px bg-graphite-800">
            {services.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 80}>
                <article className="group grid gap-8 bg-graphite-950 p-8 transition-colors duration-400 hover:bg-graphite-900 lg:grid-cols-12 lg:gap-14 lg:p-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm text-signal-500">
                        {s.no}
                      </span>
                      <div>
                        <div className="mb-4 size-11 text-graphite-500 transition-colors duration-400 group-hover:text-signal-500">
                          <s.Icon />
                        </div>
                        <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-kraft-100 lg:text-3xl">
                          {s.title}
                        </h2>
                        <p className="mt-2 font-mono text-sm text-signal-400">
                          {s.lead}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 leading-relaxed text-graphite-400 lg:pl-10">
                      {s.body}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-2.5 size-1 shrink-0 bg-signal-500" />
                          <span className="text-sm leading-relaxed text-graphite-300">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Trading terms */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-kraft-200 py-24 lg:py-32">
        <div className="grid-kraft absolute inset-0" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="Trading Terms"
                title="The commercial basics."
                lead="Standard terms we work to. Anything here is negotiable against volume and relationship — but this is the honest starting point."
                tone="light"
              />

              <Reveal delay={140} className="mt-9 flex flex-wrap gap-2.5">
                {["FOB", "CIF", "CFR", "EXW", "DDP", "LCL", "FCL"].map((t) => (
                  <Chip key={t} tone="light">
                    {t}
                  </Chip>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="border border-kraft-400/60 bg-kraft-100 p-8 lg:p-10">
                  <div className="mb-6 flex items-center justify-between border-b border-kraft-300 pb-4">
                    <h3 className="label-tech text-signal-600">
                      Standard Terms
                    </h3>
                    <span className="font-mono text-[0.65rem] text-graphite-500">
                      REV / 2026
                    </span>
                  </div>
                  <SpecTable rows={terms} tone="light" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Which part do you need?"
        lead="Whether it is a single sourcing project or an ongoing supply programme, tell us the scope and we will scope the engagement honestly."
      />
    </>
  );
}
