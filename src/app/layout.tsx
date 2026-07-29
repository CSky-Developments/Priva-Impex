import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// Variable weight + the wdth axis, so `font-stretch: expanded`
// in the .stencil utility actually resolves.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priva-impex.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "hardware tools importer",
    "hardware tools exporter",
    "hand tools export India",
    "fasteners exporter Pune",
    "abrasives supplier India",
    "power tool accessories sourcing",
    "Priva Impex",
    "import export Pune",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
  width: "device-width",
  initialScale: 1,
};

/** Organization schema — helps the business surface in local/B2B search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  email: site.email,
  url: "https://priva-impex.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.landmark}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sora.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-signal-500 focus:px-5 focus:py-3 focus:font-mono focus:text-sm focus:text-graphite-950"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
