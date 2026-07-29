/**
 * Single source of truth for company details.
 * Update here and it propagates across every page, the footer, and JSON-LD.
 */

export const site = {
  name: "Priva Impex",
  tagline: "Hardware Tools. Sourced, Verified, Delivered.",
  description:
    "Priva Impex is a Pune-based import and export house specialising in hardware tools — hand tools, power tool accessories, fasteners, abrasives and industrial hardware — connecting verified manufacturers with buyers worldwide.",
  founded: "Pune, Maharashtra",
  email: "privaimpex@gmail.com",
  nature: "Import & Export",

  address: {
    line1: "603, Gold Fusion Society",
    line2: "Tulja Bhawani Nagar",
    landmark: "Behind Bank of Baroda, Kharadi",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411014",
    country: "India",
    countryCode: "IN",
  },

  /** Convenience one-liner used in the footer and contact card. */
  get addressLines(): string[] {
    const a = this.address;
    return [
      a.line1,
      a.line2,
      a.landmark,
      `${a.city} — ${a.postalCode}`,
      `${a.state}, ${a.country}`,
    ];
  },

  get addressOneLine(): string {
    const a = this.address;
    return `${a.line1}, ${a.line2}, ${a.landmark}, ${a.city} ${a.postalCode}, ${a.state}, ${a.country}`;
  },

  mapsQuery:
    "Gold Fusion Society, Tulja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014",
} as const;

export const nav = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/products", label: "Products", index: "03" },
  { href: "/services", label: "Services", index: "04" },
  { href: "/global-reach", label: "Global Reach", index: "05" },
  { href: "/quality", label: "Quality", index: "06" },
  { href: "/contact", label: "Contact", index: "07" },
] as const;

/** Headline operating figures shown in the hero ledger. */
export const metrics = [
  { value: "18+", label: "Product Families", note: "Hand tools to abrasives" },
  { value: "20+", label: "Destination Markets", note: "Across 5 continents" },
  { value: "3", label: "Gateway Ports", note: "JNPT · Mundra · Nhava Sheva" },
  { value: "100%", label: "Pre-Shipment QC", note: "Every consignment" },
] as const;
