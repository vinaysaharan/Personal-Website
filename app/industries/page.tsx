import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero } from "@/components/ui";

const title = "Industries We Serve | Sector-Specific Creative & Digital";
const description = "Arcbig works across SaaS, fintech, healthcare, real estate, e-commerce, hospitality, education, architecture, fashion, nonprofit, automotive and legal sectors.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/industries", kicker: "Industries", keywords: ["industry marketing agency", "sector specialist agency"] });

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Industries", path: "/industries" }]), collectionJsonLd({ name: "Industries", description, path: "/industries", items: industries.map((i) => ({ name: i.title, path: `/industries/${i.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Industries", href: "/industries" }]} kicker="Industries" title="Twelve sectors we know well enough to argue with" lead="Enough experience to know the constraints, enough range to avoid the sector's clichés." />
      <section className="container-x pb-8">
        <ul className="grid gap-px bg-haze border border-haze md:grid-cols-2 xl:grid-cols-3">
          {industries.map((i, n) => (
            <li key={i.slug} className="bg-chalk reveal">
              <Link href={`/industries/${i.slug}`} className="block p-7 h-full group hover:bg-chalk-2 transition-colors">
                <span className="t-mono text-slate">{String(n + 1).padStart(2, "0")}</span>
                <h2 className="t-h2 mt-8 group-hover:text-klein transition-colors">{i.title}</h2>
                <p className="text-slate mt-4">{i.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-16"><Cta /></div>
    </>
  );
}
