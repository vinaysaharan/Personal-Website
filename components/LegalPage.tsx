import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui";

export function LegalPage({ title, path, updated, intro, sections }: { title: string; path: string; updated: string; intro: string; sections: { heading: string; body: string[] }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: title, path }])} />
      <PageHero crumbs={[{ name: title, href: path }]} kicker={`Last updated ${updated}`} title={title} lead={intro} />
      <section className="container-x pb-16 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
          <h2 className="t-mono text-slate mb-4">Contents</h2>
          <ol className="grid gap-2 text-[0.95rem]">
            {sections.map((s, i) => <li key={s.heading}><a href={`#s${i + 1}`} className="hover:underline">{s.heading}</a></li>)}
          </ol>
        </aside>
        <div className="lg:col-span-8 lg:col-start-5 prose-arc">
          {sections.map((s, i) => (
            <section key={s.heading} id={`s${i + 1}`}>
              <h2>{s.heading}</h2>
              {s.body.map((p, j) => <p key={j}>{p}</p>)}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
