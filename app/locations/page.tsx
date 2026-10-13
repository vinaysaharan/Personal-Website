import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero } from "@/components/ui";

const title = "Locations | Creative Agency Studios in 12 Cities";
const description = "Arcbig has studios in San Francisco, New York, Los Angeles, Austin, Toronto, London, Berlin, Amsterdam, Dubai, Singapore, Sydney and Mumbai. Find your local team.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/locations", kicker: "Locations", keywords: ["creative agency near me", "web design agency locations", "global creative agency"] });

export default function LocationsPage() {
  const regions = [...new Set(locations.map((l) => l.region))];
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Locations", path: "/locations" }]), collectionJsonLd({ name: "Locations", description, path: "/locations", items: locations.map((l) => ({ name: l.city, path: `/locations/${l.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }]} kicker="Locations" title="Twelve studios, one team, your time zone" lead="Local teams who know the market, backed by specialists everywhere else." />
      <section className="container-x pb-8 grid gap-12">
        {regions.map((r) => (
          <div key={r} className="grid gap-6 lg:grid-cols-12 border-t border-haze pt-8 reveal">
            <h2 className="t-h3 lg:col-span-3">{r}</h2>
            <ul className="lg:col-span-9 grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
              {locations.filter((l) => l.region === r).map((l) => (
                <li key={l.slug} className="border-b border-haze py-4">
                  <Link href={`/locations/${l.slug}`} className="group block">
                    <span className="t-h2 group-hover:text-klein transition-colors">{l.city}</span>
                    <span className="block t-meta text-slate mt-1">{l.neighbourhood} · {l.country}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <div className="mt-16"><Cta /></div>
    </>
  );
}
