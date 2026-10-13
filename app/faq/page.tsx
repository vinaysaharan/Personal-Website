import type { Metadata } from "next";
import Link from "next/link";
import { generalFaqs } from "@/data/pages";
import { services } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Cta, FaqList, PageHero, SectionHeading } from "@/components/ui";

const title = "FAQ | Working with Arcbig";
const description = "Answers to the questions clients ask before working with Arcbig: pricing, timelines, process, technology, locations and how to get started.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/faq", kicker: "FAQ", keywords: ["agency faq", "how to hire a creative agency", "agency pricing questions"] });

export default function FaqPage() {
  const all = [...generalFaqs, ...services.flatMap((s) => s.faqs.slice(0, 1))];
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]), faqJsonLd(all)]} />
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} kicker="FAQ" title="Questions we get on the first call" lead="If yours is not here, ask it on the contact page and we will answer in a day." />
      <section className="container-x pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 className="t-h2">Working together</h2></div>
          <div className="lg:col-span-8 reveal"><FaqList faqs={generalFaqs} /></div>
        </div>
      </section>
      <section className="container-x section cv-auto">
        <SectionHeading kicker="By service" title="One question per service" lead="Each service page answers more." align="split" />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 hidden lg:block" />
          <div className="lg:col-span-8">
            <div className="divide-y divide-haze border-y border-haze">
              {services.map((s) => (
                <details key={s.slug} className="faq py-5">
                  <summary className="flex items-start justify-between gap-6 t-h3"><span>{s.faqs[0].q}</span><span className="faq-icon shrink-0 mt-1 text-klein" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" /></svg></span></summary>
                  <p className="mt-4 text-slate max-w-[60ch]">{s.faqs[0].a}</p>
                  <Link href={`/services/${s.slug}`} className="link-arc mt-3 inline-block text-[0.95rem]">More on {s.title}</Link>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
