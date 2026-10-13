import type { Metadata } from "next";
import { work } from "@/data/work";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero, WorkCard } from "@/components/ui";

const title = "Work | Case Studies in Branding, Web Design & 3D";
const description = "Case studies from Arcbig: rebrands, website redesigns, 3D configurators and growth programmes across SaaS, fintech, real estate, e-commerce and more, each with measured results.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/work", kicker: "Work", keywords: ["agency case studies", "web design case studies", "branding case studies", "3d website examples"] });

export default function WorkPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Work", path: "/work" }]), collectionJsonLd({ name: "Work", description, path: "/work", items: work.map((w) => ({ name: w.title, path: `/work/${w.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Work", href: "/work" }]} kicker="Work" title="Twelve projects, each with the number that mattered" lead="Brands, websites, 3D experiences and growth programmes across nine countries. Every case study opens with the result." />
      <section className="container-x pb-8">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {work.map((w, i) => (
            <div key={w.slug} className={i % 2 === 1 ? "md:translate-y-16" : ""}>
              <WorkCard slug={w.slug} client={w.client} title={w.title} hue={w.hue} services={w.services} large={i % 4 === 0} />
            </div>
          ))}
        </div>
      </section>
      <div className="mt-32"><Cta /></div>
    </>
  );
}
