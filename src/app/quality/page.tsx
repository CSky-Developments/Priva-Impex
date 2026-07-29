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

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Priva Impex quality process — supplier auditing, master sample control, AQL 2.5 pre-shipment inspection, laboratory testing and full documentation traceability.",
};

const stages = [
  {
    no: "01",
    title: "Supplier Audit",
    when: "Before first order",
    body: "We visit the plant. Forging capacity, heat-treatment control, plating line, in-house testing equipment, worker safety and export history all get reviewed against a fixed checklist before a supplier is approved.",
    checks: [
      "Machinery and capacity verification",
      "Heat treatment and furnace records",
      "In-house testing equipment audit",
      "Existing certifications reviewed",
      "Reference checks with prior buyers",
    ],
  },
  {
    no: "02",
    title: "Master Sample Control",
    when: "Before production",
    body: "Pre-production samples are produced, tested and physically sealed. Both parties sign the sample and it becomes the reference for every subsequent run — no verbal specification, no interpretation.",
    checks: [
      "Dimensional verification to drawing",
      "Material grade confirmation",
      "Hardness and finish approval",
      "Packing and labelling sign-off",
      "Retained sealed sample held on file",
    ],
  },
  {
    no: "03",
    title: "In-Line Monitoring",
    when: "During production",
    body: "Checks during the run, not only at the end. Catching a plating problem at 20% completion costs a day; catching it at final inspection costs the shipment.",
    checks: [
      "First-article inspection at run start",
      "Periodic dimensional sampling",
      "Coating thickness spot checks",
      "Assembly and function testing",
      "Progress photographs to the buyer",
    ],
  },
  {
    no: "04",
    title: "Pre-Shipment Inspection",
    when: "Before container sealing",
    body: "AQL 2.5 sampling to ISO 2859-1 across the finished lot. Anything outside tolerance is held, and the buyer is informed before a decision is made — never after the goods have sailed.",
    checks: [
      "AQL 2.5 general inspection level II",
      "Full dimensional measurement",
      "Hardness and torque verification",
      "Packing integrity and drop testing",
      "Photographic inspection report issued",
    ],
  },
  {
    no: "05",
    title: "Documentation Trail",
    when: "At dispatch",
    body: "Every consignment ships with its evidence. Mill certificates, test reports, inspection photographs and conformity declarations are compiled and archived against the shipment reference.",
    checks: [
      "Mill test certificates per heat number",
      "Third-party test reports where required",
      "Inspection report with photographs",
      "Declaration of conformity",
      "Records retained for traceability",
    ],
  },
];

const testing = [
  { label: "Hardness testing", value: "Rockwell HRC / Brinell HB" },
  { label: "Dimensional", value: "Vernier, micrometer, CMM where specified" },
  { label: "Torque testing", value: "To DIN / ANSI category requirement" },
  { label: "Salt spray", value: "ASTM B117 — 24 to 480 hrs" },
  { label: "Coating thickness", value: "Magnetic and eddy-current gauge" },
  { label: "Tensile & proof load", value: "Per ISO 898-1 for fasteners" },
  { label: "Burst speed (abrasives)", value: "EN 12413 certified test" },
  { label: "Sampling standard", value: "ISO 2859-1 · AQL 2.5 level II" },
];

const partners = [
  "SGS",
  "Bureau Veritas",
  "Intertek",
  "TÜV",
  "Client-nominated agency",
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Quality Assurance"
        title={
          <>
            Inspected,
            <br />
            not <span className="text-signal-500">assumed.</span>
          </>
        }
        lead="Quality claims are cheap. Evidence is not. Every consignment we ship carries a documented trail from supplier audit through to the final AQL report — and we hold goods back when the numbers do not hold."
      />

      {/* Stages */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <SectionHead
            eyebrow="The Process"
            title="Five checkpoints, in order."
            lead="Each stage has a defined output. If a stage fails, the order does not advance to the next one — that is the entire point of having them."
          />

          <div className="mt-16 space-y-px bg-graphite-800">
            {stages.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 80}>
                <article className="group grid gap-8 bg-graphite-950 p-8 transition-colors duration-400 hover:bg-graphite-900 lg:grid-cols-12 lg:gap-14 lg:p-12">
                  <div className="lg:col-span-2">
                    <span className="font-display text-5xl font-extrabold leading-none text-graphite-800 transition-colors duration-400 group-hover:text-signal-500">
                      {s.no}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-kraft-100 lg:text-2xl">
                        {s.title}
                      </h3>
                      <span className="label-tech border border-graphite-700 px-2.5 py-1 text-graphite-500">
                        {s.when}
                      </span>
                    </div>
                    <p className="mt-4 leading-relaxed text-graphite-400">
                      {s.body}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <h4 className="label-tech mb-4 text-graphite-600">
                      Checks Performed
                    </h4>
                    <ul className="space-y-2.5">
                      {s.checks.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <span className="mt-2 size-1 shrink-0 bg-signal-500" />
                          <span className="text-sm leading-relaxed text-graphite-300">
                            {c}
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

      {/* Testing capability */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-kraft-200 py-24 lg:py-32">
        <div className="grid-kraft absolute inset-0" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="Testing & Verification"
                title="What we actually measure."
                lead="Testing is carried out at the supplier's in-house laboratory, at an accredited third-party lab, or both — depending on the product category and what the destination market requires."
                tone="light"
              />

              <Reveal delay={140} className="mt-9">
                <h3 className="label-tech mb-4 text-graphite-500">
                  Third-Party Inspection Partners
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {partners.map((p) => (
                    <Chip key={p} tone="light">
                      {p}
                    </Chip>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-graphite-600">
                  Buyers are welcome to appoint their own inspection agency. We
                  coordinate access, share production schedules and act on the
                  findings without argument.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="border border-kraft-400/60 bg-kraft-100 p-8 lg:p-10">
                  <div className="mb-6 flex items-center justify-between border-b border-kraft-300 pb-4">
                    <h3 className="label-tech text-signal-600">
                      Test Methods
                    </h3>
                    <span className="font-mono text-[0.65rem] text-graphite-500">
                      QA / METHODS
                    </span>
                  </div>
                  <SpecTable rows={testing} tone="light" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Non-conformance */}
      <section className="bg-graphite-950 py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead
                eyebrow="When Something Fails"
                title={
                  <>
                    Our problem,
                    <br />
                    not yours.
                  </>
                }
                lead="Manufacturing produces defects — pretending otherwise is not a quality policy. What matters is what happens next, and how fast you hear about it."
              />
            </div>

            <div>
              <ul className="space-y-px bg-graphite-800">
                {[
                  {
                    t: "Lot held immediately",
                    d: "A failed AQL result stops the shipment. Nothing ships on the assumption it will probably be fine.",
                  },
                  {
                    t: "You hear within 24 hours",
                    d: "Findings, photographs and the proposed remedy reach you the next working day — before we have committed to a course of action.",
                  },
                  {
                    t: "Rework, replace or refund",
                    d: "You choose the remedy. We carry the cost of the failure with the supplier, not with your order.",
                  },
                  {
                    t: "Root cause on record",
                    d: "Every non-conformance is logged against the supplier scorecard. Repeat failures end the relationship.",
                  },
                ].map((item, i) => (
                  <Reveal as="li" key={item.t} delay={i * 90}>
                    <div className="bg-graphite-950 p-7">
                      <h3 className="font-display text-base font-bold uppercase tracking-tight text-kraft-100">
                        {item.t}
                      </h3>
                      <p className="mt-2.5 leading-relaxed text-graphite-400">
                        {item.d}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ask us for the inspection report."
        lead="We are happy to share a sample pre-shipment report so you can see exactly what documentation arrives with your goods."
      />
    </>
  );
}
