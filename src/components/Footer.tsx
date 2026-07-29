import Link from "next/link";
import { categories } from "@/lib/catalogue";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-graphite-700 bg-graphite-900">
      <div className="hazard h-1.5 opacity-70" />

      <div className="grid-blueprint">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand block */}
            <div className="lg:col-span-4">
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-400">
                {site.description}
              </p>

              <a
                href={`mailto:${site.email}`}
                className="ticks group mt-7 inline-flex items-center gap-3 border border-graphite-600 px-4 py-3 transition-colors hover:border-signal-500"
              >
                <span className="label-tech text-graphite-400 group-hover:text-signal-400">
                  Email
                </span>
                <span className="font-mono text-sm text-kraft-100">
                  {site.email}
                </span>
              </a>
            </div>

            {/* Navigate */}
            <div className="lg:col-span-2">
              <h3 className="label-tech mb-5 text-signal-500">Navigate</h3>
              <ul className="space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-graphite-400 transition-colors hover:text-kraft-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catalogue */}
            <div className="lg:col-span-3">
              <h3 className="label-tech mb-5 text-signal-500">Catalogue</h3>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/products/${c.slug}`}
                      className="group flex items-center gap-2 text-sm text-graphite-400 transition-colors hover:text-kraft-100"
                    >
                      <span className="font-mono text-[0.65rem] text-graphite-600 transition-colors group-hover:text-signal-500">
                        {c.code}
                      </span>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registered office */}
            <div className="lg:col-span-3">
              <h3 className="label-tech mb-5 text-signal-500">
                Registered Office
              </h3>
              <address className="space-y-1 text-sm not-italic leading-relaxed text-graphite-400">
                {site.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>

              <dl className="mt-6 space-y-2 border-t border-graphite-800 pt-5">
                <div className="flex justify-between gap-4">
                  <dt className="label-tech text-graphite-600">Business</dt>
                  <dd className="font-mono text-xs text-graphite-300">
                    {site.nature}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="label-tech text-graphite-600">Hours</dt>
                  <dd className="font-mono text-xs text-graphite-300">
                    Mon–Sat · 10:00–19:00 IST
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Baseline */}
          <div className="mt-14 flex flex-col gap-4 border-t border-graphite-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="label-tech text-graphite-600">
              © {year} {site.name} — All Rights Reserved
            </p>
            <p className="label-tech text-graphite-600">
              Pune · India — Shipping Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
