import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/data/glossary";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero } from "@/components/ui";

const title = "Glossary | Design, Web & Marketing Terms Explained";
const description = "Plain-English definitions of the terms that come up in agency work: Core Web Vitals, headless CMS, structured data, generative engine optimisation, WebGL, programmatic video and more.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/glossary", kicker: "Glossary", keywords: ["web design glossary", "digital marketing glossary", "seo terms explained"] });

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Glossary", path: "/glossary" }]), collectionJsonLd({ name: "Glossary", description, path: "/glossary", items: sorted.map((t) => ({ name: t.term, path: `/glossary/${t.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Glossary", href: "/glossary" }]} kicker="Glossary" title="The words we use, explained plainly" lead="If a term shows up in a proposal or a meeting with us, it is defined here." />
      <section className="container-x pb-8">
        <ul className="grid gap-px bg-haze border border-haze md:grid-cols-2">
          {sorted.map((t) => (
            <li key={t.slug} className="bg-chalk reveal">
              <Link href={`/glossary/${t.slug}`} className="block p-6 h-full group hover:bg-chalk-2 transition-colors">
                <h2 className="t-h3 group-hover:text-klein transition-colors">{t.term}</h2>
                <p className="text-slate mt-2 text-[0.95rem]">{t.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-16"><Cta tone="ink" /></div>
    </>
  );
}
