import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers, retainers } from "@/data/pages";
import { services } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, FaqList, PageHero, SectionHeading } from "@/components/ui";

const title = "Pricing | Agency Project & Retainer Costs";
const description = "Transparent agency pricing from Arcbig: brand identity from $24,000, websites from $38,000, growth retainers from $6,500 per month. Fixed price after discovery.";

const pricingFaqs = [
  { q: "Why fixed price?", a: "Because you should know what a project costs before it starts. We scope after a short paid discovery, then commit to a price and a date." },
  { q: "What affects the price most?", a: "Page count, custom 3D or motion, integrations and the amount of content we produce. We will show you what each option adds." },
  { q: "Do you offer payment plans?", a: "Yes. Projects are typically billed in three or four milestones. Retainers are billed monthly." },
  { q: "Is discovery really paid?", a: "Yes, usually $3,000 to $8,000 depending on size. It is credited against the project if you proceed, and you keep the research either way." },
  { q: "Do you work with smaller budgets?", a: "Sometimes, for launches and nonprofits. Tell us the budget and we will tell you honestly what it can buy." },
];

export const metadata: Metadata = buildMetadata({ title, description, path: "/pricing", kicker: "Pricing", keywords: ["agency pricing", "web design cost", "branding agency cost", "how much does a website cost", "seo retainer pricing"] });

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]), faqJsonLd(pricingFaqs)]} />
      <PageHero crumbs={[{ name: "Pricing", href: "/pricing" }]} kicker="Pricing" title="Prices on the website, because you would ask anyway" lead="Every project is fixed-price after discovery. These are the ranges most engagements land in." />

      <section className="container-x pb-8">
        <div className="grid gap-px bg-haze border border-haze lg:grid-cols-3">
          {pricingTiers.map((t) => (
            <div key={t.name} className={`p-7 md:p-9 reveal ${t.featured ? "on-klein" : "bg-chalk"}`}>
              <p className="t-mono text-muted">{t.name}</p>
              <p className="t-display-lg mt-4">{t.price}</p>
              <p className="text-muted mt-4">{t.for}</p>
              <ul className="mt-8 grid gap-2">
                {t.includes.map((i) => <li key={i} className="border-t border-line pt-2 text-[0.95rem]">{i}</li>)}
              </ul>
              <Link href="/contact" className={`btn mt-10 ${t.featured ? "btn-primary" : "btn-ghost"}`}>{t.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x section cv-auto">
        <SectionHeading kicker="Retainers" title="Ongoing work, priced monthly" align="split" lead="Cancel with thirty days' notice. No lock-in contracts." />
        <ul className="grid gap-6 md:grid-cols-3">
          {retainers.map((r) => (
            <li key={r.name} className="card p-6 reveal">
              <h3 className="t-h3">{r.name}</h3>
              <p className="t-h2 mt-4">{r.price}</p>
              <p className="text-slate mt-4 text-[0.98rem]">{r.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x section rule cv-auto">
        <SectionHeading kicker="By service" title="Starting prices by service" />
        <table className="w-full text-left border-collapse reveal">
          <thead><tr className="t-mono text-slate"><th className="py-3 border-b border-haze font-normal">Service</th><th className="py-3 border-b border-haze font-normal">From</th><th className="py-3 border-b border-haze font-normal hidden sm:table-cell">Typical timeline</th></tr></thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.slug}>
                <td className="py-3 border-b border-haze"><Link href={`/services/${s.slug}`} className="hover:underline">{s.title}</Link></td>
                <td className="py-3 border-b border-haze">{s.startingAt}</td>
                <td className="py-3 border-b border-haze text-slate hidden sm:table-cell">{s.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="container-x section rule cv-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 className="t-h2">Pricing questions</h2></div>
          <div className="lg:col-span-8"><FaqList faqs={pricingFaqs} /></div>
        </div>
      </section>

      <Cta title="Get a number for your project" body="Send a brief and a budget range. We reply within one business day with what it can buy." />
    </>
  );
}
