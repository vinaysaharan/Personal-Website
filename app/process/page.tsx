import type { Metadata } from "next";
import { processSteps } from "@/data/pages";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, PageHero, SectionHeading } from "@/components/ui";

const title = "Our Process | How Arcbig Runs a Project";
const description = "Arcbig's five-stage process: discover, define, design, build, launch and grow. Fixed-price after discovery, a staging site from the first sprint, and dates we keep.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/process", kicker: "Process", keywords: ["agency process", "web design process", "branding process", "how agencies work"] });

export default function ProcessPage() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Arcbig runs a brand or website project",
    description,
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
  };
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Process", path: "/process" }]), howTo]} />
      <PageHero crumbs={[{ name: "Process", href: "/process" }]} kicker="Process" title="Five stages, fixed price, dates we keep" lead="The same process for a brand, a website or a 3D launch. What changes is the depth of each stage, agreed with you in discovery." />

      <section className="container-x pb-8">
        <ol className="grid gap-px bg-haze border border-haze">
          {processSteps.map((s) => (
            <li key={s.n} className="bg-chalk grid gap-6 lg:grid-cols-12 p-6 md:p-10 reveal">
              <div className="lg:col-span-3">
                <span className="t-mono text-klein">{s.n}</span>
                <h2 className="t-h2 mt-4">{s.title}</h2>
                <p className="t-meta text-slate mt-2">{s.duration}</p>
              </div>
              <p className="lg:col-span-5 text-[1.05rem]">{s.body}</p>
              <div className="lg:col-span-4">
                <h3 className="t-mono text-slate mb-3">You get</h3>
                <ul className="grid gap-2">
                  {s.outputs.map((o) => <li key={o} className="border-t border-haze pt-2 text-[0.95rem]">{o}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="on-ink cv-auto">
        <div className="container-x section">
          <SectionHeading kicker="Principles" title="Rules that keep projects on time" />
          <ul className="grid gap-8 md:grid-cols-3 reveal">
            {[
              ["One decision-maker", "Every project names one person on your side who can say yes. Committees are welcome in reviews, not in approvals."],
              ["Weekly reviews, written decisions", "A short review each week, with decisions written down the same day. Nothing is relitigated a month later."],
              ["Prototype, do not describe", "Motion, 3D and interaction are prototyped so what you approve is what gets built."],
              ["Performance budget first", "Load time and frame rate targets are set before design starts, and checked in every sprint."],
              ["Content early", "Real content from the start. Lorem ipsum hides the hardest problems until it is too late."],
              ["Launch is a stage, not a day", "Redirects, analytics, search verification and thirty days of support are part of every project."],
            ].map(([t, b]) => (
              <li key={t}><h3 className="t-h3">{t}</h3><p className="text-muted mt-3 text-[0.98rem]">{b}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <Cta title="See it applied to your project" secondary={{ label: "View pricing", href: "/pricing" }} />
    </>
  );
}
