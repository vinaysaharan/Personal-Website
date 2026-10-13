import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import { servicesFor, workByIndustry, getCaseStudy } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, FaqList, PageHero, SectionHeading, ServiceCard, WorkCard } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return buildMetadata({ title: i.metaTitle, description: i.metaDescription, path: `/industries/${i.slug}`, keywords: i.keywords, kicker: "Industry" });
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();
  const svc = servicesFor(i.services);
  const cases = i.caseStudy ? [getCaseStudy(i.caseStudy), ...workByIndustry(i.slug).filter((w) => w.slug !== i.caseStudy)].filter(Boolean) : workByIndustry(i.slug);

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Industries", path: "/industries" }, { name: i.title, path: `/industries/${i.slug}` }]), faqJsonLd(i.faqs)]} />
      <PageHero crumbs={[{ name: "Industries", href: "/industries" }, { name: i.title, href: `/industries/${i.slug}` }]} kicker={`Industry · ${i.title}`} title={i.h1} lead={i.intro}>
        <Link href="/contact" className="btn btn-primary">Talk to our {i.title.toLowerCase()} team</Link>
      </PageHero>

      <section className="container-x section-tight rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <h2 className="t-h2">What usually gets in the way</h2>
            <ul className="mt-8 grid gap-3">
              {i.challenges.map((c) => <li key={c} className="border-t border-haze pt-3 text-[1.02rem]">{c}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <h2 className="t-h2">How we approach it</h2>
            <ol className="mt-8 grid gap-6">
              {i.approach.map((a, n) => (
                <li key={a.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="t-mono text-klein pt-1">0{n + 1}</span>
                  <div><h3 className="t-h3">{a.title}</h3><p className="text-slate mt-2 text-[0.98rem]">{a.body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {cases.length ? (
        <section className="on-klein cv-auto">
          <div className="container-x section">
            <SectionHeading kicker="Case study" title={`${i.title} work with numbers attached`} />
            <div className="grid gap-10 md:grid-cols-2">
              {cases.slice(0, 2).map((w) => w && <WorkCard key={w.slug} slug={w.slug} client={w.client} title={w.title} hue={w.hue} services={w.services} />)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-x section cv-auto">
        <SectionHeading kicker="Services" title={`Services ${i.title.toLowerCase()} clients use most`} align="split" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {svc.map((s) => <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} group={s.group} />)}
        </div>
      </section>

      <section className="container-x section rule cv-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 className="t-h2">Common questions</h2></div>
          <div className="lg:col-span-8"><FaqList faqs={i.faqs} /></div>
        </div>
      </section>

      <Cta title={`Building something in ${i.title.toLowerCase()}?`} />
    </>
  );
}
