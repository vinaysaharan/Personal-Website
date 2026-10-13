import type { Metadata } from "next";
import Link from "next/link";
import { careers, values } from "@/data/pages";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero, SectionHeading } from "@/components/ui";

const title = "Careers | Design, Engineering & Growth Roles";
const description = "Open roles at Arcbig for brand designers, creative technologists, SEO strategists, motion designers and product designers across our twelve studios and remote.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/careers", kicker: "Careers", keywords: ["creative agency jobs", "web design jobs", "three.js jobs", "motion design jobs", "remote agency jobs"] });

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Careers", path: "/careers" }])} />
      <PageHero crumbs={[{ name: "Careers", href: "/careers" }]} kicker="Careers" title="Work on the whole thing, not a slice of it" lead="Designers who ship, engineers who care about type, strategists who read the code. If that sounds like you, read on." />
      <section className="container-x pb-8">
        <h2 className="t-mono text-slate mb-6">Open roles</h2>
        <ul className="border-t border-haze">
          {careers.map((c) => (
            <li key={c.slug} className="border-b border-haze reveal">
              <Link href={`/careers/${c.slug}`} className="grid gap-2 md:grid-cols-12 py-6 group items-baseline">
                <span className="md:col-span-6 t-h3 group-hover:text-klein transition-colors">{c.title}</span>
                <span className="md:col-span-3 text-slate">{c.location}</span>
                <span className="md:col-span-2 text-slate">{c.type}</span>
                <span className="md:col-span-1 link-arc text-right hidden md:block">Apply</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="How we work" title="What it is like here" align="split" lead="Four-day in-studio weeks, real ownership, and budgets for the tools you need." />
        <ul className="grid gap-8 md:grid-cols-3 reveal">
          {values.slice(0, 6).map((v) => <li key={v.title}><h3 className="t-h3">{v.title}</h3><p className="text-slate mt-3 text-[0.98rem]">{v.body}</p></li>)}
        </ul>
      </section>
      <Cta tone="ink" title="No role that fits?" body="Send us your work anyway. Half our team joined through unsolicited portfolios." primary={{ label: "Send your portfolio", href: "/contact" }} secondary={{ label: "Meet the team", href: "/team" }} />
    </>
  );
}
