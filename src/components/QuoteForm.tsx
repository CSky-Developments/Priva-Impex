"use client";

import { useState } from "react";
import { categories } from "@/lib/catalogue";
import { site } from "@/lib/site";

/**
 * There is no backend on this site yet, so the form composes a structured
 * enquiry and hands it to the visitor's mail client. Every field the sales
 * team needs is pre-formatted, so nothing has to be chased in a second email.
 *
 * To move this to a real endpoint later, replace `handleSubmit` with a POST
 * and keep the field names as they are.
 */

const inputBase =
  "w-full border border-graphite-700 bg-graphite-950 px-4 py-3 font-mono text-sm text-kraft-100 " +
  "placeholder:text-graphite-600 transition-colors duration-300 " +
  "hover:border-graphite-600 focus:border-signal-500 focus:outline-none";

const labelBase = "label-tech mb-2.5 block text-graphite-400";

const incoterms = ["FOB", "CIF", "CFR", "EXW", "DDP", "Not sure yet"];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (name: string) =>
    setPicked((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const body = [
      "NEW ENQUIRY — PRIVA IMPEX",
      "══════════════════════════════",
      "",
      `Name:         ${get("name")}`,
      `Company:      ${get("company") || "—"}`,
      `Email:        ${get("email")}`,
      `Phone:        ${get("phone") || "—"}`,
      `Country:      ${get("country")}`,
      "",
      "── REQUIREMENT ──",
      `Direction:    ${get("direction")}`,
      `Categories:   ${picked.length ? picked.join(", ") : "—"}`,
      `Destination:  ${get("port") || "—"}`,
      `Incoterm:     ${get("incoterm")}`,
      `Quantity:     ${get("quantity") || "—"}`,
      "",
      "── DETAILS ──",
      get("message") || "—",
      "",
      "══════════════════════════════",
      "Sent from priva-impex.com",
    ].join("\n");

    const subject = `Enquiry — ${picked.length ? picked.join(", ") : "Hardware Tools"} — ${get("company") || get("name")}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Contact block */}
      <fieldset>
        <legend className="label-tech mb-5 flex items-center gap-3 text-signal-500">
          <span className="h-px w-8 bg-signal-500" />
          01 — Your Details
        </legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelBase}>
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Jane Fernandes"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelBase}>
              Company
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Fernandes Tools Ltd."
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelBase}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+00 000 000 0000"
              className={inputBase}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="country" className={labelBase}>
              Country *
            </label>
            <input
              id="country"
              name="country"
              required
              autoComplete="country-name"
              placeholder="United Arab Emirates"
              className={inputBase}
            />
          </div>
        </div>
      </fieldset>

      {/* Requirement block */}
      <fieldset className="border-t border-graphite-800 pt-7">
        <legend className="label-tech mb-5 flex items-center gap-3 text-signal-500">
          <span className="h-px w-8 bg-signal-500" />
          02 — Requirement
        </legend>

        <div className="space-y-5">
          <div>
            <span className={labelBase}>Direction *</span>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { v: "Import to my country (you export)", s: "Import" },
                { v: "Export from my country to India", s: "Export" },
                { v: "Sourcing / consultancy", s: "Sourcing" },
              ].map((opt, i) => (
                <label
                  key={opt.s}
                  className="group flex cursor-pointer items-center gap-3 border border-graphite-700 bg-graphite-950 px-4 py-3 transition-colors hover:border-graphite-600 has-checked:border-signal-500 has-checked:bg-signal-500/10"
                >
                  <input
                    type="radio"
                    name="direction"
                    value={opt.v}
                    defaultChecked={i === 0}
                    required
                    className="size-3.5 shrink-0 accent-signal-500"
                  />
                  <span className="font-mono text-xs text-graphite-300">
                    {opt.s}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <span className={labelBase}>Product Categories</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const on = picked.includes(c.name);
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => toggle(c.name)}
                    aria-pressed={on}
                    className={`border px-3.5 py-2 font-mono text-xs transition-all duration-300 ${
                      on
                        ? "border-signal-500 bg-signal-500 text-graphite-950"
                        : "border-graphite-700 bg-graphite-950 text-graphite-400 hover:border-graphite-600 hover:text-kraft-100"
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="port" className={labelBase}>
                Destination Port / City
              </label>
              <input
                id="port"
                name="port"
                placeholder="Jebel Ali, UAE"
                className={inputBase}
              />
            </div>

            <div>
              <label htmlFor="incoterm" className={labelBase}>
                Preferred Incoterm
              </label>
              <select
                id="incoterm"
                name="incoterm"
                defaultValue="FOB"
                className={inputBase}
              >
                {incoterms.map((t) => (
                  <option key={t} value={t} className="bg-graphite-900">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="quantity" className={labelBase}>
                Indicative Quantity / Order Value
              </label>
              <input
                id="quantity"
                name="quantity"
                placeholder="1 x 40' HQ container, or approx. USD 25,000"
                className={inputBase}
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Detail block */}
      <fieldset className="border-t border-graphite-800 pt-7">
        <legend className="label-tech mb-5 flex items-center gap-3 text-signal-500">
          <span className="h-px w-8 bg-signal-500" />
          03 — Specification
        </legend>

        <label htmlFor="message" className={labelBase}>
          Product list, target specification, or anything else *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={
            "e.g. 5,000 pcs combination spanner set 8–24mm, Cr-V, mirror polish, blister packed.\nAlso need 200 kg M10 hex bolts, 8.8 grade, hot-dip galvanised."
          }
          className={`${inputBase} resize-y leading-relaxed`}
        />
      </fieldset>

      {/* Submit */}
      <div className="border-t border-graphite-800 pt-7">
        <button
          type="submit"
          className="ticks group inline-flex w-full items-center justify-center gap-3 bg-signal-500 px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-400 sm:w-auto"
        >
          <span className="label-tech text-graphite-950">Send Enquiry</span>
          <span className="text-graphite-950 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {sent ? (
          <p
            role="status"
            className="mt-5 flex items-start gap-3 border border-patina-600/50 bg-patina-600/10 px-4 py-3 font-mono text-xs leading-relaxed text-patina-400"
          >
            <span className="mt-0.5">✓</span>
            <span>
              Your mail client should now be open with the enquiry drafted. If
              nothing happened, email us directly at{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </span>
          </p>
        ) : (
          <p className="mt-5 font-mono text-[0.7rem] leading-relaxed text-graphite-600">
            This opens your email client with the enquiry pre-filled — nothing
            is sent until you press send there.
          </p>
        )}
      </div>
    </form>
  );
}
