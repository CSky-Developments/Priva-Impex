import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, PageHero, SpecTable } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a quotation from Priva Impex — hardware tools import and export, Kharadi, Pune. Email ${site.email}.`,
};

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "It varies by category — typically 500 to 1,000 pieces per SKU for hand tools, and 100 kg per size for fasteners. For a mixed container we can combine several product families to reach a workable volume.",
  },
  {
    q: "How quickly will I get a quotation?",
    a: "Two working days for products in our regular catalogue. Custom specifications or drawing-based enquiries take five to seven days, since we need factory feedback on tooling and cost.",
  },
  {
    q: "Can I get samples before ordering?",
    a: "Yes. Samples are couriered at cost, and the sample charge is credited against your first production order. Pre-production samples are sealed and signed as the reference for the run.",
  },
  {
    q: "Do you handle private label orders?",
    a: "Regularly. We manage brand artwork approval, packaging production, barcode allocation and branded tooling where the volume justifies it.",
  },
  {
    q: "What payment terms do you work on?",
    a: "T/T with an advance against order and balance against shipping documents, or an irrevocable L/C at sight. Terms are negotiable for established repeat buyers.",
  },
  {
    q: "Can I appoint my own inspection agency?",
    a: "Absolutely, and we encourage it on first orders. We coordinate factory access and share the production schedule with whichever agency you nominate.",
  },
];

const responseInfo = [
  { label: "Quotation turnaround", value: "2 working days (standard items)" },
  { label: "Custom specification", value: "5 – 7 working days" },
  { label: "Sample dispatch", value: "7 – 14 days from spec freeze" },
  { label: "Working hours", value: "Mon – Sat · 10:00 – 19:00 IST" },
  { label: "Correspondence", value: "English · Hindi · Marathi" },
  { label: "Time zone", value: "IST (UTC +5:30)" },
];

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.mapsQuery,
  )}`;

  return (
    <>
      <PageHero
        index="07"
        eyebrow="Get In Touch"
        title={
          <>
            Send the spec.
            <br />
            Get a <span className="text-signal-500">real</span> price.
          </>
        }
        lead="Fill in the enquiry form and you will have a costed proposal in hand within two working days — with the specification, lead time and landed cost broken out line by line."
      />

      {/* Form + contact rail */}
      <section className="bg-graphite-950 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="ticks border border-graphite-700 bg-graphite-900 p-7 lg:p-10">
                  <div className="mb-8 flex items-center justify-between border-b border-graphite-800 pb-5">
                    <div>
                      <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-kraft-100">
                        Enquiry Form
                      </h2>
                      <p className="mt-1.5 font-mono text-xs text-graphite-500">
                        All fields marked * are required
                      </p>
                    </div>
                    <span className="font-mono text-[0.65rem] text-graphite-600">
                      RFQ / 01
                    </span>
                  </div>

                  <QuoteForm />
                </div>
              </Reveal>
            </div>

            {/* Rail */}
            <aside className="space-y-8 lg:col-span-5">
              {/* Direct contact */}
              <Reveal delay={90}>
                <div className="ticks border border-graphite-700 bg-graphite-900 p-7">
                  <Eyebrow>Direct Contact</Eyebrow>

                  <a
                    href={`mailto:${site.email}`}
                    className="group block border-b border-graphite-800 pb-5"
                  >
                    <span className="label-tech text-graphite-500">Email</span>
                    <span className="mt-2 block break-all font-mono text-base text-kraft-100 transition-colors group-hover:text-signal-400">
                      {site.email}
                    </span>
                  </a>

                  <div className="pt-5">
                    <span className="label-tech text-graphite-500">
                      Registered Office
                    </span>
                    <address className="mt-2.5 space-y-1 text-sm not-italic leading-relaxed text-graphite-300">
                      {site.addressLines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </address>

                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2.5 border border-graphite-600 px-4 py-2.5 transition-colors hover:border-signal-500 hover:bg-graphite-850"
                    >
                      <span className="label-tech text-kraft-100">
                        Open in Maps
                      </span>
                      <span className="text-signal-500 transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Response times */}
              <Reveal delay={160}>
                <div className="ticks border border-graphite-700 bg-graphite-900 p-7">
                  <div className="mb-5 flex items-center justify-between border-b border-graphite-800 pb-4">
                    <h3 className="label-tech text-signal-500">
                      What to Expect
                    </h3>
                    <span className="flex items-center gap-2">
                      <span className="anim-pulse-dot size-1.5 rounded-full bg-patina-400" />
                      <span className="label-tech text-patina-400">Open</span>
                    </span>
                  </div>
                  <SpecTable rows={responseInfo} />
                </div>
              </Reveal>

              {/* What to include */}
              <Reveal delay={230}>
                <div className="border border-signal-500/30 bg-signal-500/[0.06] p-7">
                  <h3 className="label-tech mb-4 text-signal-400">
                    Speed Up Your Quote
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-graphite-300">
                    Enquiries that include these get answered fastest:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Product description or drawing",
                      "Material grade and finish required",
                      "Quantity per size or SKU",
                      "Destination port and Incoterm",
                      "Any standard you must comply with",
                      "Target price, if you have one",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 size-1 shrink-0 bg-signal-500" />
                        <span className="text-sm leading-relaxed text-graphite-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="grain relative overflow-hidden border-y border-graphite-800 bg-graphite-900 py-24 lg:py-32">
        <div className="grid-blueprint absolute inset-0" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>Common Questions</Eyebrow>
                <h2 className="stencil text-[clamp(1.9rem,4vw,3rem)] text-kraft-100">
                  Before you
                  <br />
                  ask.
                </h2>
                <p className="mt-5 leading-relaxed text-graphite-400">
                  The six questions we field most often. Anything not covered
                  here, put it in the enquiry form and we will answer directly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <dl className="divide-y divide-graphite-800 border-y border-graphite-800">
                {faqs.map((f, i) => (
                  <Reveal key={f.q} delay={Math.min(i * 70, 280)}>
                    <div className="group py-7">
                      <dt className="flex items-start gap-4">
                        <span className="mt-1 font-mono text-xs text-graphite-600 transition-colors group-hover:text-signal-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-kraft-100">
                          {f.q}
                        </span>
                      </dt>
                      <dd className="mt-3 pl-9 leading-relaxed text-graphite-400">
                        {f.a}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
