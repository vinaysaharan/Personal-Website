import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { servicesFor, workByService, industriesByService, articles } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, FaqList, PageHero, SectionHeading, ServiceCard, WorkCard, ArticleCard, Pill } from "@/components/ui";

type Params = { slug: string };

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}`, keywords: s.keywords, kicker: s.group });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = servicesFor(s.related);
  const cases = workByService(s.slug).slice(0, 2);
  const sectors = industriesByService(s.slug);
  const reading = articles.filter((a) => a.keywords.some((k) => s.keywords.some((sk) => k.includes(sk.split(" ")[0])))).slice(0, 3);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]),
        serviceJsonLd({ title: s.title, description: s.metaDescription, path: `/services/${s.slug}`, startingAt: s.startingAt }),
        faqJsonLd(s.faqs),
      ]} />

      <PageHero crumbs={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${s.slug}` }]} kicker={`${s.group} · ${s.title}`} title={s.h1} lead={s.intro}>
        <div className="flex flex-wrap gap-3 items-center">
          <Link href="/contact" className="btn btn-primary">Discuss {s.title.toLowerCase()}</Link>
          <Pill>From {s.startingAt}</Pill>
          <Pill>{s.timeline}</Pill>
        </div>
      </PageHero>

      <section className="container-x section-tight rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <h2 className="t-h2">What you get</h2>
            <ul className="mt-8 grid gap-4">
              {s.outcomes.map((o) => (
                <li key={o} className="flex gap-4 items-start text-[1.05rem]">
                  <span className="mt-2 inline-block w-3 h-3 rounded-t-full border-2 border-b-0 border-klein shrink-0" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <h2 className="t-mono text-slate">Deliverables</h2>
            <ul className="mt-5 grid gap-px bg-haze border border-haze sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="bg-chalk p-4 text-[0.98rem]">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="on-klein cv-auto">
        <div className="container-x section">
          <SectionHeading kicker="Process" title={`How we approach ${s.title.toLowerCase()}`} />
          <ol className="grid gap-px bg-[var(--line)] border border-line md:grid-cols-4">
            {s.process.map((p, i) => (
              <li key={p.title} className="bg-klein p-6 reveal">
                <span className="t-mono text-muted">0{i + 1}</span>
                <h3 className="t-h3 mt-6">{p.title}</h3>
                <p className="text-muted mt-3 text-[0.95rem]">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {cases.length ? (
        <section className="container-x section cv-auto">
          <SectionHeading kicker="Related work" title={`${s.title} in practice`} align="split" />
          <div className="grid gap-10 md:grid-cols-2">
            {cases.map((w) => <WorkCard key={w.slug} slug={w.slug} client={w.client} title={w.title} hue={w.hue} services={w.services} />)}
          </div>
        </section>
      ) : null}

      <section className="container-x section rule cv-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="t-h2">Questions about {s.title.toLowerCase()}</h2>
            <p className="text-slate mt-4">Answers from the team that does the work.</p>
          </div>
          <div className="lg:col-span-8"><FaqList faqs={s.faqs} /></div>
        </div>
      </section>

      {sectors.length ? (
        <section className="container-x section-tight rule cv-auto">
          <h2 className="t-mono text-slate mb-5">Industries we apply this to</h2>
          <ul className="flex flex-wrap gap-2">
            {sectors.map((i) => <li key={i.slug}><Link href={`/industries/${i.slug}`} className="inline-block border border-haze hover:border-ink rounded-full px-4 py-2 text-[0.95rem]">{i.title}</Link></li>)}
          </ul>
        </section>
      ) : null}

      {reading.length ? (
        <section className="container-x section-tight rule cv-auto">
          <h2 className="t-mono text-slate mb-8">Further reading</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reading.map((a) => <ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} category={a.category} date={a.date} readTime={a.readTime} />)}
          </div>
        </section>
      ) : null}

      <section className="container-x section-tight rule cv-auto">
        <h2 className="t-mono text-slate mb-6">Often combined with</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {related.map((r) => <ServiceCard key={r.slug} slug={r.slug} title={r.title} short={r.short} group={r.group} />)}
        </div>
      </section>

      <Cta title={`Need ${s.title.toLowerCase()}?`} body={`Tell us about the project. We will reply within one business day with a point of view and a budget range. ${s.title} projects start at ${s.startingAt}.`} />
    </>
  );
}
