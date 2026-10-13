import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team, getPerson } from "@/data/team";
import { getLocation } from "@/data/locations";
import { articlesByAuthor } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArchTile, ArticleCard, Breadcrumbs, Cta } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return team.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.name}, ${p.role}`, description: p.bio, path: `/team/${p.slug}`, kicker: "Team" });
}

export default async function PersonPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();
  const loc = getLocation(p.location);
  const posts = articlesByAuthor(p.slug);

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Team", path: "/team" }, { name: p.name, path: `/team/${p.slug}` }]), personJsonLd({ name: p.name, role: p.role, path: `/team/${p.slug}`, bio: p.bio })]} />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <div className="rise"><Breadcrumbs items={[{ name: "Team", href: "/team" }, { name: p.name, href: `/team/${p.slug}` }]} /></div>
        <div className="grid gap-12 lg:grid-cols-12 mt-10">
          <div className="lg:col-span-4 wipe"><ArchTile hue={p.hue} tall /></div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="t-mono text-slate rise" style={{ ["--delay" as string]: "80ms" }}>{p.role}{loc ? ` · ${loc.city}` : ""}</p>
            <h1 className="t-display-lg mt-4 rise" style={{ ["--delay" as string]: "140ms" }}>{p.name}</h1>
            <p className="t-lead text-slate mt-8 rise" style={{ ["--delay" as string]: "220ms" }}>{p.bio}</p>
            <div className="mt-10 grid gap-5 rise" style={{ ["--delay" as string]: "300ms" }}>
              {p.long.map((para, i) => <p key={i} className="text-[1.05rem]">{para}</p>)}
            </div>
            <h2 className="t-mono text-slate mt-12 mb-4">Expertise</h2>
            <ul className="flex flex-wrap gap-2">
              {p.expertise.map((e) => <li key={e} className="border border-haze rounded-full px-4 py-2 text-[0.95rem]">{e}</li>)}
            </ul>
            {loc ? <p className="mt-10 t-meta text-slate">Based at our <Link href={`/locations/${loc.slug}`} className="text-ink hover:underline">{loc.city} studio</Link>.</p> : null}
          </div>
        </div>
      </section>

      {posts.length ? (
        <section className="container-x section rule cv-auto">
          <h2 className="t-mono text-slate mb-8">Written by {p.name.split(" ")[0]}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((a) => <ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} category={a.category} date={a.date} readTime={a.readTime} />)}
          </div>
        </section>
      ) : null}

      <Cta tone="ink" />
    </>
  );
}
