import type { Metadata } from "next";
import Link from "next/link";
import { services, industries, work, locations, team, glossary, sortedArticles } from "@/lib/content";
import { careers } from "@/data/pages";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/ui";

const title = "Sitemap | Every Page on Arcbig";
const description = "A complete index of Arcbig's pages: services, industries, case studies, insights, locations, team, glossary and company information.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/sitemap-page", kicker: "Sitemap" });

export default function HtmlSitemap() {
  const groups: { name: string; items: { label: string; href: string }[] }[] = [
    { name: "Company", items: [["Home", "/"], ["About", "/about"], ["Process", "/process"], ["Pricing", "/pricing"], ["Team", "/team"], ["Careers", "/careers"], ["FAQ", "/faq"], ["Showreel", "/showreel"], ["Contact", "/contact"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"], ["Accessibility", "/accessibility"]].map(([label, href]) => ({ label, href })) },
    { name: "Services", items: [{ label: "All services", href: "/services" }, ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))] },
    { name: "Industries", items: [{ label: "All industries", href: "/industries" }, ...industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))] },
    { name: "Work", items: [{ label: "All work", href: "/work" }, ...work.map((w) => ({ label: w.client, href: `/work/${w.slug}` }))] },
    { name: "Insights", items: [{ label: "All insights", href: "/insights" }, ...sortedArticles().map((a) => ({ label: a.title, href: `/insights/${a.slug}` }))] },
    { name: "Locations", items: [{ label: "All locations", href: "/locations" }, ...locations.map((l) => ({ label: l.city, href: `/locations/${l.slug}` }))] },
    { name: "Team", items: team.map((p) => ({ label: p.name, href: `/team/${p.slug}` })) },
    { name: "Glossary", items: [{ label: "All terms", href: "/glossary" }, ...glossary.map((g) => ({ label: g.term, href: `/glossary/${g.slug}` }))] },
    { name: "Open roles", items: careers.map((c) => ({ label: c.title, href: `/careers/${c.slug}` })) },
  ];
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Sitemap", path: "/sitemap-page" }])} />
      <PageHero crumbs={[{ name: "Sitemap", href: "/sitemap-page" }]} kicker={`Sitemap · ${total} pages`} title="Every page, in one place" />
      <section className="container-x pb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.name} className="reveal">
            <h2 className="t-h3 mb-4">{g.name}</h2>
            <ul className="grid gap-1.5 text-[0.95rem]">
              {g.items.map((it) => <li key={it.href}><Link href={it.href} className="hover:underline">{it.label}</Link></li>)}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
