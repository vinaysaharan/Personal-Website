import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/data/team";
import { getLocation } from "@/data/locations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArchTile, Cta, PageHero } from "@/components/ui";

const title = "Team | The People Behind Arcbig";
const description = "Meet the creative directors, engineers, strategists and 3D specialists who lead Arcbig's work across twelve cities.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/team", kicker: "Team", keywords: ["agency team", "creative agency leadership"] });

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Team", path: "/team" }])} />
      <PageHero crumbs={[{ name: "Team", href: "/team" }]} kicker="Team" title="Leaders who still do the work" lead="Eighty people across twelve studios. These are the ones you will meet first." />
      <section className="container-x pb-8">
        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => {
            const loc = getLocation(p.location);
            return (
              <li key={p.slug} className="reveal">
                <Link href={`/team/${p.slug}`} className="group block">
                  <ArchTile hue={p.hue} tall />
                  <h2 className="t-h3 mt-5 group-hover:text-klein transition-colors">{p.name}</h2>
                  <p className="text-slate mt-1 text-[0.95rem]">{p.role}</p>
                  {loc ? <p className="t-meta text-slate mt-2">{loc.city}</p> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="mt-16"><Cta title="Want to join the team?" body="We hire designers, engineers and strategists who want to build the whole thing, not a slice of it." primary={{ label: "See open roles", href: "/careers" }} secondary={{ label: "About the studio", href: "/about" }} tone="ink" /></div>
    </>
  );
}
