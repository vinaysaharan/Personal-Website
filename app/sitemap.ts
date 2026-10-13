import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services, industries, work, articles, locations, team, glossary } from "@/lib/content";
import { careers } from "@/data/pages";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/process", priority: 0.7, changeFrequency: "yearly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/locations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/glossary", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/showreel", priority: 0.5, changeFrequency: "yearly" },
  { path: "/sitemap-page", priority: 0.3, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => `${site.url}${p}`;
  return [
    ...staticRoutes.map((r) => ({ url: url(r.path), lastModified: now, changeFrequency: r.changeFrequency, priority: r.priority })),
    ...services.map((s) => ({ url: url(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...industries.map((i) => ({ url: url(`/industries/${i.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...work.map((w) => ({ url: url(`/work/${w.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...articles.map((a) => ({ url: url(`/insights/${a.slug}`), lastModified: new Date(a.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...locations.map((l) => ({ url: url(`/locations/${l.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...team.map((p) => ({ url: url(`/team/${p.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 })),
    ...glossary.map((g) => ({ url: url(`/glossary/${g.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...careers.map((c) => ({ url: url(`/careers/${c.slug}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
  ];
}
