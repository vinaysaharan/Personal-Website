import type { Metadata } from "next";
import { services, serviceGroups } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero, ServiceCard } from "@/components/ui";

const title = "Services | Branding, Web Design, 3D, Motion & Growth";
const description = "Explore Arcbig's agency services: brand identity, web design and development, e-commerce, 3D web experiences, motion design, SEO, content, paid media and more.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/services", kicker: "Services", keywords: ["agency services", "creative agency services", "digital agency services"] });

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Services", path: "/services" }]), collectionJsonLd({ name: "Services", description, path: "/services", items: services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} kicker="Services" title="Everything a brand needs to be seen, understood and chosen" lead="Sixteen services across four disciplines. Pick one, or let us assemble the team a project actually needs." />
      <section className="container-x pb-8 grid gap-16">
        {serviceGroups.map((g) => (
          <div key={g} className="grid gap-6 lg:grid-cols-12 reveal">
            <div className="lg:col-span-3">
              <h2 className="t-h2">{g}</h2>
              <p className="text-slate mt-3 max-w-[28ch]">{groupBlurb[g]}</p>
            </div>
            <div className="lg:col-span-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.filter((s) => s.group === g).map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className="mt-16"><Cta /></div>
    </>
  );
}

const groupBlurb: Record<string, string> = {
  Brand: "Strategy, identity and voice that make a company recognisable.",
  Build: "Websites, stores, products and the engineering behind them.",
  Grow: "Search, content, media and experimentation that compound.",
  Motion: "Animation, video and real-time 3D that earn attention.",
};
