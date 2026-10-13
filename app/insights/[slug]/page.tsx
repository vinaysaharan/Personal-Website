import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/insights";
import { articlesFor, getPerson, formatDate } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArticleCard, Breadcrumbs, Cta } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const author = getPerson(a.author);
  return buildMetadata({ title: a.metaTitle ?? a.title, description: a.excerpt, path: `/insights/${a.slug}`, keywords: a.keywords, kicker: a.category, type: "article", publishedTime: a.date, authors: author ? [author.name] : undefined });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const author = getPerson(a.author);
  const related = articlesFor(a.related);

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }]), articleJsonLd({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, date: a.date, author: { name: author?.name ?? "Arcbig", path: author ? `/team/${author.slug}` : "/team" }, keywords: a.keywords })]} />

      <article>
        <header className="container-x pt-10 md:pt-16 pb-12">
          <div className="rise"><Breadcrumbs items={[{ name: "Insights", href: "/insights" }, { name: a.category, href: "/insights" }]} /></div>
          <p className="t-mono text-slate mt-10 rise" style={{ ["--delay" as string]: "60ms" }}>{a.category} · {a.readTime} min read</p>
          <h1 className="t-display-lg mt-5 max-w-[18ch] rise" style={{ ["--delay" as string]: "120ms" }}>{a.title}</h1>
          <p className="t-lead text-slate mt-8 rise" style={{ ["--delay" as string]: "220ms" }}>{a.excerpt}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 t-meta text-slate rise" style={{ ["--delay" as string]: "300ms" }}>
            {author ? <Link href={`/team/${author.slug}`} className="text-ink hover:underline">{author.name}, {author.role}</Link> : null}
            <time dateTime={a.date}>{formatDate(a.date)}</time>
          </div>
        </header>

        <div className="container-x grid gap-12 lg:grid-cols-12 pb-16">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
            <h2 className="t-mono text-slate mb-4">In this article</h2>
            <ol className="grid gap-2 text-[0.95rem]">
              {a.sections.map((s, i) => <li key={s.heading}><a href={`#s${i + 1}`} className="hover:underline">{s.heading}</a></li>)}
            </ol>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5 prose-arc">
            {a.sections.map((s, i) => (
              <section key={s.heading} id={`s${i + 1}`} className="reveal">
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </section>
            ))}
            <div className="mt-12 flex flex-wrap gap-2">
              {a.keywords.map((k) => <span key={k} className="border border-haze rounded-full px-3 py-1 t-meta text-slate">{k}</span>)}
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="container-x section rule cv-auto">
          <h2 className="t-mono text-slate mb-8">Keep reading</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((r) => <ArticleCard key={r.slug} slug={r.slug} title={r.title} excerpt={r.excerpt} category={r.category} date={r.date} readTime={r.readTime} />)}
          </div>
        </section>
      ) : null}

      <Cta tone="ink" title="Want this applied to your project?" />
    </>
  );
}
