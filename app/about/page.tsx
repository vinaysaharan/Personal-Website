import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { values } from "@/data/pages";
import { team } from "@/data/team";
import { locations } from "@/data/locations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArchTile, Cta, PageHero, SectionHeading, StatRow } from "@/components/ui";

const title = "About Arcbig | A Creative Agency That Builds What It Designs";
const description = "Arcbig was founded in 2016 to close the gap between beautiful work and measurable results. Eighty people across twelve studios, one team for brand, build, growth and motion.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/about", kicker: "About", keywords: ["about arcbig", "creative agency story", "full service creative agency"] });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHero crumbs={[{ name: "About", href: "/about" }]} kicker={`About · Est. ${site.founded}`} title="We started Arcbig because big ideas kept dying in the handoff" lead="Agencies made beautiful work nobody could measure. Consultancies measured everything and made nothing beautiful. We built one team that does both, from the first workshop to the last deploy." />

      <section className="container-x section-tight">
        <div className="grid gap-8 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7 wipe"><ArchTile hue={228} label="San Francisco, 2016" /></div>
          <div className="lg:col-span-5 lg:pb-10 reveal">
            <p className="t-lead">Nine years later we are eighty people in twelve cities. We still run discovery ourselves, still set performance budgets before layouts, and still turn down work we do not believe we can make better.</p>
          </div>
        </div>
      </section>

      <section className="container-x section"><StatRow stats={site.stats} /></section>

      <section className="on-klein cv-auto">
        <div className="container-x section">
          <SectionHeading kicker="What we believe" title="Six things we will not compromise on" />
          <ul className="grid gap-px bg-[var(--line)] border border-line md:grid-cols-2 xl:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="bg-klein p-7 reveal">
                <h3 className="t-h3">{v.title}</h3>
                <p className="text-muted mt-3 text-[0.98rem]">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x section cv-auto">
        <SectionHeading kicker="Leadership" title="The people you will meet first" align="split" lead="Every engagement is led by a director who stays on it from kickoff to launch." />
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.slice(0, 4).map((p) => (
            <li key={p.slug} className="reveal">
              <Link href={`/team/${p.slug}`} className="group block">
                <ArchTile hue={p.hue} tall />
                <h3 className="t-h3 mt-4 group-hover:text-klein transition-colors">{p.name}</h3>
                <p className="t-meta text-slate mt-1">{p.role}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10"><Link href="/team" className="link-arc">Meet the whole leadership team</Link></div>
      </section>

      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="Studios" title="Twelve cities, one time zone away from you" align="split" />
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 reveal">
          {locations.map((l) => (
            <li key={l.slug} className="border-t border-haze py-3">
              <Link href={`/locations/${l.slug}`} className="flex justify-between gap-4 group"><span className="t-h3 group-hover:text-klein transition-colors">{l.city}</span><span className="t-meta text-slate">{l.countryCode}</span></Link>
            </li>
          ))}
        </ul>
      </section>

      <Cta title="Curious whether we are the right fit?" body="The fastest way to find out is a thirty-minute call. We will tell you honestly, including if the answer is no." />
    </>
  );
}
