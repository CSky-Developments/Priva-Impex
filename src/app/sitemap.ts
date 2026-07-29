import type { MetadataRoute } from "next";
import { categories } from "@/lib/catalogue";
import { nav } from "@/lib/site";

const BASE = "https://priva-impex.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((n) => ({
    url: `${BASE}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const products = categories.map((c) => ({
    url: `${BASE}/products/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...products];
}
