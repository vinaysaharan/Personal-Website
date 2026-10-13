import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossary, getTerm } from "@/data/glossary";
import { termsFor, getService } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, definedTermJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, Cta, ServiceCard } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) return {};
  return buildMetadata({ title: `What is ${t.term}? Definition & Why It Matters`, description: `${t.term}: ${t.short} ${t.definition[0]}`.slice(0, 158), path: `/glossary/${t.slug}`, keywords: t.keywords, kicker: "Glossary" });
}

export default async function TermPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) notFound();
  const related = termsFor(t.related);
  const service = t.service ? getService(t.service) : undefined;

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Glossary", path: "/glossary" }, { name: t.term, path: `/glossary/${t.slug}` }]), definedTermJsonLd({ term: t.term, definition: t.definition.join(" "), path: `/glossary/${t.slug}` })]} />
      <article className="container-x pt-10 md:pt-16 pb-16">
        <div className="rise"><Breadcrumbs items={[{ name: "Glossary", href: "/glossary" }, { name: t.term, href: `/glossary/${t.slug}` }]} /></div>
        <div className="grid gap-12 lg:grid-cols-12 mt-10">
          <div className="lg:col-span-7">
            <p className="t-mono text-slate rise" style={{ ["--delay" as string]: "60ms" }}>Definition</p>
            <h1 className="t-display-lg mt-4 rise" style={{ ["--delay" as string]: "120ms" }}>{t.term}</h1>
            <p className="t-lead mt-8 rise" style={{ ["--delay" as string]: "200ms" }}>{t.short}</p>
            <div className="mt-8 grid gap-5 rise" style={{ ["--delay" as string]: "280ms" }}>
              {t.definition.map((d, i) => <p key={i} className="text-[1.05rem]">{d}</p>)}
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            {service ? (
              <div className="mb-10">
                <h2 className="t-mono text-slate mb-4">Related service</h2>
                <ServiceCard slug={service.slug} title={service.title} short={service.short} />
              </div>
            ) : null}
            {related.length ? (
              <div>
                <h2 className="t-mono text-slate mb-4">Related terms</h2>
                <ul className="grid gap-2">
                  {related.map((r) => <li key={r.slug}><Link href={`/glossary/${r.slug}`} className="link-arc">{r.term}</Link></li>)}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </article>
      <Cta tone="ink" title="Need help with this in practice?" />
    </>
  );
}
