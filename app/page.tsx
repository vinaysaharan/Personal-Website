import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";
import { services, serviceGroups } from "@/data/services";
import { work } from "@/data/work";
import { processSteps, generalFaqs } from "@/data/pages";
import { industries } from "@/data/industries";
import { sortedArticles } from "@/lib/content";
import { HeroScene } from "@/components/three/HeroScene";
import { ShowreelPlayer } from "@/components/ShowreelPlayer";
import { JsonLd } from "@/components/JsonLd";
import { absolute, faqJsonLd } from "@/lib/seo";
import { Cta, FaqList, Marquee, SectionHeading, ServiceCard, StatRow, WorkCard, ArticleCard } from "@/components/ui";

export const metadata: Metadata = {
  title: `${site.name} | Creative Agency for Branding, Web Design, 3D & Growth`,
  description: site.description,
  alternates: { canonical: absolute("/") },
};

export default function HomePage() {
  const featured = work.filter((w) => w.featured);
  const latest = sortedArticles().slice(0, 3);
  const homeFaqs = generalFaqs.slice(0, 5);

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* Hero: one orchestrated moment. Copy in HTML, 3D behind it. */}
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
        <HeroScene className="absolute top-[30%] right-0 w-full h-[48%] lg:top-0 lg:h-full lg:w-[62%] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_0%,transparent_58%,var(--chalk)_76%)] lg:bg-[linear-gradient(90deg,var(--chalk)_0%,var(--chalk)_38%,transparent_62%)]" aria-hidden="true" />
        <div className="container-x relative pt-16 pb-24 md:pt-24 md:pb-32 min-h-[calc(100svh-72px)] flex flex-col justify-between">
          <div className="relative z-10">
            <p className="t-mono text-slate rise" style={{ ["--delay" as string]: "0ms" }}>Creative agency · Est. {site.founded}</p>
            <h1 className="t-display mt-6 max-w-[9ch]">
              <span className="block wipe" style={{ ["--delay" as string]: "80ms" }}>Ideas,</span>
              <span className="block wipe text-klein" style={{ ["--delay" as string]: "220ms" }}>built big.</span>
            </h1>
          </div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-end mt-16">
            <p className="t-lead lg:col-span-6 text-slate rise" style={{ ["--delay" as string]: "420ms" }}>
              {site.tagline} We design brands, build websites with 3D and motion, and grow them with search, content and media.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end rise" style={{ ["--delay" as string]: "520ms" }}>
              <Link href="/work" className="btn btn-primary">See the work</Link>
              <Link href="/contact" className="btn btn-ghost">Start a project</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="rule">
        <Marquee items={["Branding", "Web design", "3D experiences", "Motion", "SEO", "E-commerce", "Content", "Paid media"]} />
      </div>

      {/* Services */}
      <section className="container-x section cv-auto">
        <SectionHeading kicker="What we do" title="Four disciplines, one team, no handoffs" lead="Brand, build, grow and motion sit at the same table from the first workshop. That is why the work holds together." align="split" />
        <div className="grid gap-12">
          {serviceGroups.map((g) => (
            <div key={g} className="grid gap-6 lg:grid-cols-12 reveal">
              <h3 className="t-mono text-slate lg:col-span-2 pt-6">{g}</h3>
              <div className="lg:col-span-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {services.filter((s) => s.group === g).map((s) => (
                  <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="Selected work" title="Results you can point to" lead="Every case study leads with the number that mattered to the client." align="split" />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((w, i) => (
            <div key={w.slug} className={i % 2 === 1 ? "md:translate-y-16" : ""}>
              <WorkCard slug={w.slug} client={w.client} title={w.title} hue={w.hue} services={w.services} large={i === 0} />
            </div>
          ))}
        </div>
        <div className="mt-24 reveal">
          <Link href="/work" className="btn btn-ghost">All case studies</Link>
        </div>
      </section>

      {/* Showreel */}
      <section className="on-klein cv-auto">
        <div className="container-x section">
          <SectionHeading kicker="Showreel" title="Motion rendered from code, not exported from a timeline" lead="This reel is a React component rendered live by Remotion. The same file renders our MP4s." align="split" />
          <div className="reveal"><ShowreelPlayer /></div>
          <p className="mt-6 t-meta text-muted">Built with Remotion. Press play. Respects your reduced-motion setting on the rest of the page.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="container-x section cv-auto">
        <StatRow stats={site.stats} />
      </section>

      {/* Process */}
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="How we work" title="A process with dates on it" lead="Five stages, fixed price after discovery, and a staging site you can click from the first sprint." align="split" />
        <ol className="grid gap-px bg-haze border border-haze md:grid-cols-5">
          {processSteps.map((s) => (
            <li key={s.n} className="bg-chalk p-6 reveal">
              <span className="t-mono text-klein">{s.n}</span>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="t-meta text-slate mt-1">{s.duration}</p>
              <p className="text-slate text-[0.95rem] mt-4">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10"><Link href="/process" className="link-arc">Read the full process</Link></div>
      </section>

      {/* Industries */}
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="Industries" title="Sector knowledge, not sector templates" align="split" lead="We have built for these sectors enough times to know their constraints, and not so many that the work looks the same." />
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 reveal">
          {industries.map((i) => (
            <li key={i.slug} className="border-t border-haze py-4">
              <Link href={`/industries/${i.slug}`} className="flex items-baseline justify-between gap-4 group">
                <span className="t-h3 group-hover:text-klein transition-colors">{i.title}</span>
                <span className="t-meta text-slate text-right max-w-[22ch] hidden sm:block">{i.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Insights */}
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="Insights" title="What we have learned, written down" align="split" lead="Guides on design, 3D performance, search and growth from the people doing the work." />
        <div className="grid gap-8 md:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} category={a.category} date={a.date} readTime={a.readTime} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="FAQ" title="Questions we get on the first call" />
        <FaqList faqs={homeFaqs} />
        <div className="mt-8"><Link href="/faq" className="link-arc">More questions answered</Link></div>
      </section>

      <Cta />
    </>
  );
}
