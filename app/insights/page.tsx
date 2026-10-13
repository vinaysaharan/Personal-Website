import type { Metadata } from "next";
import { categories } from "@/data/insights";
import { sortedArticles } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArticleCard, Cta, PageHero } from "@/components/ui";

const title = "Insights | Design, 3D, SEO & Growth Guides";
const description = "Practical guides from Arcbig on web design trends, Three.js performance, Remotion video, technical SEO, AI search, branding strategy and conversion optimisation.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/insights", kicker: "Insights", keywords: ["web design blog", "agency insights", "seo guides", "3d web development blog"] });

export default function InsightsPage() {
  const list = sortedArticles();
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Insights", path: "/insights" }]), collectionJsonLd({ name: "Insights", description, path: "/insights", items: list.map((a) => ({ name: a.title, path: `/insights/${a.slug}` })) })]} />
      <PageHero crumbs={[{ name: "Insights", href: "/insights" }]} kicker="Insights" title="What we have learned, written down" lead="Guides and opinions from the people doing the work. No listicles, no filler." />
      <section className="container-x pb-8">
        {categories.map((c) => {
          const items = list.filter((a) => a.category === c);
          if (!items.length) return null;
          return (
            <div key={c} className="grid gap-6 lg:grid-cols-12 py-12 border-t border-haze reveal">
              <h2 className="t-h3 lg:col-span-3">{c}</h2>
              <div className="lg:col-span-9 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map((a) => <ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} category={a.category} date={a.date} readTime={a.readTime} />)}
              </div>
            </div>
          );
        })}
      </section>
      <Cta tone="ink" />
    </>
  );
}
