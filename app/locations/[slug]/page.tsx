import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import { industriesFor, workFor, teamByLocation } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero, SectionHeading, ServiceCard, WorkCard } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return buildMetadata({ title: l.metaTitle, description: l.metaDescription, path: `/locations/${l.slug}`, keywords: l.keywords, kicker: `${l.city} studio` });
}

const coreServices = ["branding", "web-design", "3d-web-experiences", "seo", "motion-design", "ecommerce"];

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const sectors = industriesFor(l.sectors);
  const cases = workFor(l.clients);
  const people = teamByLocation(l.slug);
  const svc = services.filter((s) => coreServices.includes(s.slug));

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Locations", path: "/locations" }, { name: l.city, path: `/locations/${l.slug}` }]), localBusinessJsonLd({ city: l.city, country: l.country, countryCode: l.countryCode, path: `/locations/${l.slug}`, lat: l.lat, lng: l.lng, neighbourhood: l.neighbourhood })]} />
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }, { name: l.city, href: `/locations/${l.slug}` }]} kicker={`${l.neighbourhood}, ${l.city} · ${l.country}`} title={l.h1} lead={l.intro}>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">Talk to the {l.city} team</Link>
          <span className="btn btn-ghost pointer-events-none">Hours 09:00 to 18:00, {l.timezone.split("/")[1]?.replace("_", " ")}</span>
        </div>
      </PageHero>

      <section className="container-x section-tight rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <h2 className="t-h2">Who we work with in {l.city}</h2>
            <ul className="mt-8 grid gap-3">
              {l.local.map((x) => <li key={x} className="border-t border-haze pt-3 text-[1.02rem]">{x}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <h2 className="t-mono text-slate">Sectors with local depth</h2>
            <ul className="mt-5 grid gap-3">
              {sectors.map((i) => (
                <li key={i.slug}><Link href={`/industries/${i.slug}`} className="flex justify-between gap-4 border-b border-haze py-3 group"><span className="t-h3 group-hover:text-klein transition-colors">{i.title}</span><span className="t-meta text-slate text-right max-w-[26ch] hidden sm:block">{i.short}</span></Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {cases.length ? (
        <section className="on-klein cv-auto">
          <div className="container-x section">
            <SectionHeading kicker="Work from this studio" title={`Projects led from ${l.city}`} />
            <div className="grid gap-10 md:grid-cols-2">
              {cases.slice(0, 2).map((w) => <WorkCard key={w.slug} slug={w.slug} client={w.client} title={w.title} hue={w.hue} services={w.services} />)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-x section cv-auto">
        <SectionHeading kicker="Services" title={`Web design, branding and growth in ${l.city}`} align="split" lead="Every service is available locally, with the full studio network behind it." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {svc.map((s) => <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} group={s.group} />)}
        </div>
      </section>

      {people.length ? (
        <section className="container-x section-tight rule cv-auto">
          <h2 className="t-mono text-slate mb-6">Based here</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p) => (
              <li key={p.slug}><Link href={`/team/${p.slug}`} className="card block p-5"><span className="t-h3 block">{p.name}</span><span className="t-meta text-slate">{p.role}</span></Link></li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="container-x section-tight rule cv-auto">
        <h2 className="t-mono text-slate mb-5">Other studios</h2>
        <ul className="flex flex-wrap gap-2">
          {locations.filter((x) => x.slug !== l.slug).map((x) => <li key={x.slug}><Link href={`/locations/${x.slug}`} className="inline-block border border-haze hover:border-ink rounded-full px-4 py-2 text-[0.95rem]">{x.city}</Link></li>)}
        </ul>
      </section>

      <Cta title={`Working in ${l.city}?`} body={`Our ${l.neighbourhood} studio replies within one business day, in your time zone.`} />
    </>
  );
}
