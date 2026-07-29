import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { CategoryIcon } from "@/components/icons";
import {
  Button,
  Chip,
  Container,
  CtaBand,
  Eyebrow,
  SpecTable,
} from "@/components/ui";
import { categories, getCategory } from "@/lib/catalogue";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Product Not Found" };

  return {
    title: category.name,
    description: category.summary,
    openGraph: { title: category.name, description: category.summary },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const index = categories.findIndex((c) => c.slug === slug);
  const next = categories[(index + 1) % categories.length];
  const prev = categories[(index - 1 + categories.length) % categories.length];

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden border-b border-graphite-800 bg-graphite-900">
        <div className="grid-blueprint absolute inset-0" />
        <div
          className="absolute -right-40 -top-52 size-[38rem] rounded-full opacity-[0.14] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-signal-500), transparent 66%)",
          }}
        />

        <Container className="relative py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="anim-rise mb-10 flex items-center gap-2.5 font-mono text-[0.7rem] text-graphite-500"
          >
            <Link href="/" className="transition-colors hover:text-signal-400">
              Home
            </Link>
            <span className="text-graphite-700">/</span>
            <Link
              href="/products"
              className="transition-colors hover:text-signal-400"
            >
              Products
            </Link>
            <span className="text-graphite-700">/</span>
            <span className="text-graphite-300">{category.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="anim-rise anim-float mb-7 size-16 text-signal-500 lg:size-20">
                <CategoryIcon slug={category.slug} />
              </div>

              <div className="anim-rise">
                <Eyebrow>Category {category.code}</Eyebrow>
              </div>
              <h1
                className="stencil anim-rise text-[clamp(2.4rem,6.5vw,4.75rem)] text-kraft-100"
                style={{ animationDelay: "70ms" }}
              >
                {category.name}
              </h1>
              <p
                className="anim-rise mt-7 max-w-2xl text-lg leading-relaxed text-graphite-400"
                style={{ animationDelay: "150ms" }}
              >
                {category.intro}
              </p>

              <div
                className="anim-rise mt-9 flex flex-wrap gap-2.5"
                style={{ animationDelay: "230ms" }}
              >
                {category.standards.map((s) => (
                  <Chip key={s} tone="accent">
                    {s}
                  </Chip>
                ))}
              </div>
            </div>

            {/* At-a-glance panel */}
            <aside
              className="anim-rise lg:col-span-5"
              style={{ animationDelay: "300ms" }}
            >
              <div className="ticks border border-graphite-700 bg-graphite-950/70 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-graphite-700 px-5 py-3.5">
                  <span className="label-tech text-graphite-500">
                    At a Glance
                  </span>
                  <span className="font-mono text-[0.65rem] text-signal-500">
                    {category.code}
                  </span>
                </div>

                <dl className="divide-y divide-graphite-800 px-5">
                  <div className="flex items-start justify-between gap-6 py-3.5">
                    <dt className="label-tech text-graphite-500">HS Codes</dt>
                    <dd className="text-right font-mono text-xs text-kraft-100">
                      {category.hsHint}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6 py-3.5">
                    <dt className="label-tech text-graphite-500">SKU Lines</dt>
                    <dd className="font-mono text-xs text-kraft-100">
                      {category.items.length}+ product types
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6 py-3.5">
                    <dt className="label-tech text-graphite-500">Materials</dt>
                    <dd className="text-right font-mono text-xs text-kraft-100">
                      {category.materials.length} grades
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6 py-3.5">
                    <dt className="label-tech text-graphite-500">Inspection</dt>
                    <dd className="font-mono text-xs text-patina-400">
                      AQL 2.5 · Pre-shipment
                    </dd>
                  </div>
                </dl>

                <div className="border-t border-graphite-700 p-5">
                  <Button href="/contact">Quote This Category</Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Range + specification */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Product range */}
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Product Range</Eyebrow>
                <h2 className="stencil text-[clamp(1.7rem,3.6vw,2.5rem)] text-kraft-100">
                  What we supply
                </h2>
              </Reveal>

              <ul className="mt-9 divide-y divide-graphite-800 border-y border-graphite-800">
                {category.items.map((item, i) => (
                  <Reveal as="li" key={item} delay={Math.min(i * 45, 300)}>
                    <div className="group flex items-center gap-4 py-3.5">
                      <span className="font-mono text-[0.65rem] text-graphite-600 transition-colors group-hover:text-signal-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-graphite-300 transition-colors group-hover:text-kraft-100">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={140} className="mt-8">
                <p className="text-sm leading-relaxed text-graphite-500">
                  Sizes, finishes and packing configurations beyond this list
                  are available on request. Send a drawing or a sample and we
                  will quote against it directly.
                </p>
              </Reveal>
            </div>

            {/* Specification */}
            <div className="lg:col-span-6">
              <Reveal delay={90}>
                <div className="ticks border border-graphite-700 bg-graphite-900 p-7 lg:sticky lg:top-28 lg:p-9">
                  <div className="mb-6 flex items-center justify-between border-b border-graphite-800 pb-4">
                    <h2 className="label-tech text-signal-500">
                      Specification Sheet
                    </h2>
                    <span className="font-mono text-[0.65rem] text-graphite-600">
                      {category.code} / SPEC
                    </span>
                  </div>

                  <SpecTable rows={category.specs} />

                  <div className="mt-8 border-t border-graphite-800 pt-6">
                    <h3 className="label-tech mb-4 text-graphite-500">
                      Materials Handled
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.materials.map((m) => (
                        <Chip key={m}>{m}</Chip>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-graphite-800 pt-6">
                    <h3 className="label-tech mb-4 text-graphite-500">
                      Standards Referenced
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.standards.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Prev / next */}
      <section className="border-y border-graphite-800 bg-graphite-900">
        <Container>
          <div className="grid divide-graphite-800 sm:grid-cols-2 sm:divide-x">
            <Link
              href={`/products/${prev.slug}`}
              className="group flex flex-col gap-2 border-b border-graphite-800 py-8 transition-colors hover:bg-graphite-850 sm:border-b-0 sm:pr-8"
            >
              <span className="label-tech flex items-center gap-2 text-graphite-500">
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Previous
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-tight text-kraft-100 transition-colors group-hover:text-signal-400">
                {prev.name}
              </span>
            </Link>

            <Link
              href={`/products/${next.slug}`}
              className="group flex flex-col items-start gap-2 py-8 transition-colors hover:bg-graphite-850 sm:items-end sm:pl-8"
            >
              <span className="label-tech flex items-center gap-2 text-graphite-500">
                Next
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-tight text-kraft-100 transition-colors group-hover:text-signal-400 sm:text-right">
                {next.name}
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Quoting ${category.name.toLowerCase()}?`}
        lead="Send quantities, target specification and destination port. We will come back with a costed proposal and a realistic production timeline."
      />
    </>
  );
}
