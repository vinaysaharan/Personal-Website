import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, getCaseStudy } from "@/data/work";
import { servicesFor, getIndustry } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArchTile, Breadcrumbs, Cta, SectionHeading, WorkCard } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) return {};
  return buildMetadata({ title: w.metaTitle, description: w.metaDescription, path: `/work/${w.slug}`, keywords: w.keywords, kicker: `Case study · ${w.client}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) notFound();
  const svc = servicesFor(w.services);
  const industry = getIndustry(w.industry);
  const idx = work.findIndex((x) => x.slug === w.slug);
  const next = work[(idx + 1) % work.length];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Work", path: "/work" }, { name: w.client, path: `/work/${w.slug}` }]), caseStudyJsonLd({ title: w.title, description: w.metaDescription, path: `/work/${w.slug}`, client: w.client, year: w.year })]} />

      <section className="container-x pt-10 md:pt-16">
        <div className="rise"><Breadcrumbs items={[{ name: "Work", href: "/work" }, { name: w.client, href: `/work/${w.slug}` }]} /></div>
        <div className="grid gap-10 lg:grid-cols-12 mt-10 items-end">
          <div className="lg:col-span-8">
            <p className="t-mono text-slate rise" style={{ ["--delay" as string]: "60ms" }}>{w.client} · {w.year}</p>
            <h1 className="t-display-lg mt-5 max-w-[16ch] rise" style={{ ["--delay" as string]: "120ms" }}>{w.title}</h1>
          </div>
          <dl className="lg:col-span-4 grid gap-2 t-meta rise" style={{ ["--delay" as string]: "220ms" }}>
            <div className="flex justify-between border-t border-haze pt-2"><dt className="text-slate">Industry</dt><dd>{industry ? <Link href={`/industries/${industry.slug}`} className="hover:underline">{industry.title}</Link> : w.industry}</dd></div>
            <div className="flex justify-between border-t border-haze pt-2"><dt className="text-slate">Services</dt><dd className="text-right">{svc.map((s, i) => <span key={s.slug}><Link href={`/services/${s.slug}`} className="hover:underline">{s.title}</Link>{i < svc.length - 1 ? ", " : ""}</span>)}</dd></div>
          </dl>
        </div>
        <div className="mt-12 wipe" style={{ ["--delay" as string]: "300ms" }}>
          <ArchTile hue={w.hue} className="!aspect-[16/8]" label={w.client} />
        </div>
      </section>

      <section className="container-x section">
        <dl className="grid gap-8 md:grid-cols-3 reveal">
          {w.results.map((r) => (
            <div key={r.label} className="border-t-2 border-klein pt-5">
              <dd className="t-display-lg">{r.value}</dd>
              <dt className="text-slate mt-2">{r.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x section-tight rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 reveal">
            <h2 className="t-h2">The challenge</h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 t-lead reveal">{w.challenge}</p>
        </div>
      </section>

      <section className="container-x section-tight rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 reveal"><h2 className="t-h2">What we did</h2></div>
          <ol className="lg:col-span-7 lg:col-start-6 grid gap-8">
            {w.approach.map((a, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 reveal">
                <span className="t-mono text-klein pt-1">0{i + 1}</span>
                <p className="text-[1.05rem]">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {w.quote ? (
        <section className="on-klein cv-auto">
          <div className="container-x section">
            <blockquote className="reveal">
              <p className="t-h2 max-w-[26ch]">“{w.quote.text}”</p>
              <footer className="mt-8 t-meta text-muted">{w.quote.name}, {w.quote.role}</footer>
            </blockquote>
          </div>
        </section>
      ) : null}

      <section className="container-x section cv-auto">
        <SectionHeading kicker="Next project" title={next.title} align="split" />
        <div className="max-w-3xl"><WorkCard slug={next.slug} client={next.client} title={next.title} hue={next.hue} services={next.services} /></div>
      </section>

      <Cta title="Want results like these?" />
    </>
  );
}
