"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change. Adjusting state during render is the
  // sanctioned pattern here — an effect would cause a cascading re-render.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility strip */}
      <div className="relative z-50 hidden border-b border-graphite-800 bg-graphite-950 md:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-10">
          <p className="label-tech text-graphite-500">
            Pune, Maharashtra · India
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="anim-pulse-dot size-1.5 rounded-full bg-patina-400" />
              <span className="label-tech text-graphite-400">
                Accepting Enquiries
              </span>
            </span>
            <a
              href={`mailto:${site.email}`}
              className="label-tech text-graphite-400 transition-colors hover:text-signal-400"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-graphite-800 bg-graphite-950/88 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.slice(1, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`group relative px-3.5 py-2 text-[0.8rem] font-medium tracking-tight transition-colors ${
                  isActive(item.href)
                    ? "text-kraft-100"
                    : "text-graphite-400 hover:text-kraft-100"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-0.5 h-px origin-left bg-signal-500 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="ticks group hidden items-center gap-2.5 border border-graphite-600 bg-graphite-900/60 px-5 py-2.5 transition-colors duration-300 hover:border-signal-500 hover:bg-signal-500 sm:flex"
            >
              <span className="label-tech text-kraft-100 transition-colors group-hover:text-graphite-950">
                Request Quote
              </span>
              <span className="text-signal-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-graphite-950">
                →
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-11 flex-col items-center justify-center gap-[5px] border border-graphite-700 lg:hidden"
            >
              <span
                className={`h-px w-5 bg-kraft-100 transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-kraft-100 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-kraft-100 transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-graphite-950/80 backdrop-blur-sm transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute inset-x-0 top-[70px] grid-blueprint-fine border-b border-graphite-700 bg-graphite-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="divide-y divide-graphite-800">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-baseline gap-4 px-6 py-4 transition-colors hover:bg-graphite-850"
                >
                  <span className="label-tech text-signal-500">
                    {item.index}
                  </span>
                  <span
                    className={`font-display text-lg font-bold uppercase tracking-tight ${
                      isActive(item.href)
                        ? "text-signal-400"
                        : "text-kraft-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="hazard block py-1 text-center"
          >
            <span className="block bg-graphite-900 py-3 label-tech text-kraft-100">
              {site.email}
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
