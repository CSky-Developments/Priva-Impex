import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CategoryIcon } from "@/components/icons";
import {
  Chip,
  Container,
  CtaBand,
  PageHero,
  SectionHead,
} from "@/components/ui";
import { categories } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hardware tool categories handled by Priva Impex — hand tools, power tool accessories, fasteners, abrasives, measuring tools, safety PPE, builders hardware and plumbing hardware.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Catalogue"
        title={
          <>
            Eight families.
            <br />
            <span className="text-signal-500">Full</span> specifications.
          </>
        }
        lead="We publish the material grades, standards and tolerances we work to — before you ask for them. Open any category for its complete specification sheet, or send a list and we will quote against your own."
      />

      {/* Category index */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <Reveal className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-graphite-800 pb-6">
            <span className="label-tech text-graphite-500">
              {categories.length} Product Families
            </span>
            <span className="label-tech text-graphite-500">
              Custom Specification Welcome
            </span>
          </Reveal>

          <ul className="space-y-px bg-graphite-800">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={Math.min(i * 60, 300)}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group relative grid gap-6 bg-graphite-950 p-7 transition-colors duration-400 hover:bg-graphite-900 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-9"
                >
                  <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-signal-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                  <div className="flex items-center gap-4 lg:col-span-2">
                    <div className="size-10 shrink-0 text-graphite-500 transition-colors duration-400 group-hover:text-signal-500">
                      <CategoryIcon slug={c.slug} />
                    </div>
                    <span className="font-mono text-sm text-signal-500">
                      {c.code}
                    </span>
                  </div>

                  <div className="lg:col-span-3">
                    <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-kraft-100 transition-colors group-hover:text-signal-400 lg:text-3xl">
                      {c.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.7rem] text-graphite-600">
                      HS {c.hsHint}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="leading-relaxed text-graphite-400">
                      {c.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.standards.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[0.65rem] text-graphite-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:col-span-2 lg:justify-end">
                    <span className="label-tech text-graphite-500 transition-colors group-hover:text-signal-400">
                      Open Spec
                    </span>
                    <span className="text-signal-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Custom sourcing */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-graphite-900 py-24 lg:py-32">
        <div className="grid-blueprint absolute inset-0" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead
                eyebrow="Beyond the Catalogue"
                title={
                  <>
                    Not listed?
                    <br />
                    Still sourceable.
                  </>
                }
                lead="The catalogue reflects what we move most often, not the limit of what we can find. If it is hardware and it is manufactured in India, we can usually get to it through our supplier network."
              />
            </div>

            <div className="space-y-px bg-graphite-800">
              {[
                {
                  t: "Private Label & OEM",
                  d: "Your brand, your packaging, your article numbers. We manage artwork approval, tooling for branded moulds and packaging production alongside the goods.",
                },
                {
                  t: "Custom Specification",
                  d: "Non-standard sizes, alternate material grades, specific plating systems or bespoke finishes — quoted against your drawing or sample.",
                },
                {
                  t: "Mixed Container Consolidation",
                  d: "Combine several product families and multiple suppliers into one FCL. We handle collection, consolidation and unified documentation.",
                },
                {
                  t: "Sample Development",
                  d: "Pre-production samples produced and couriered for approval before any mass production is released.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 90}>
                  <div className="bg-graphite-900 p-7">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-kraft-100">
                      {item.t}
                    </h3>
                    <p className="mt-3 leading-relaxed text-graphite-400">
                      {item.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160} className="mt-14 flex flex-wrap gap-2.5">
            {[
              "Drawing-based Quoting",
              "Sample Matching",
              "Tooling Development",
              "Artwork & Packaging",
              "Barcode & Labelling",
            ].map((t) => (
              <Chip key={t} tone="accent">
                {t}
              </Chip>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Send the list. Get the price."
        lead="Product descriptions, target specification, quantities and destination port. That is all we need to come back with a costed proposal."
      />
    </>
  );
}
