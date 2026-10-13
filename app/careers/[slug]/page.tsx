import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careers } from "@/data/pages";
import { site } from "@/data/site";
import { buildMetadata, breadcrumbJsonLd, absolute } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, Cta } from "@/components/ui";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = careers.find((x) => x.slug === slug);
  if (!c) return {};
  return buildMetadata({ title: `${c.title} | Careers`, description: `${c.title} at Arcbig, ${c.location}. ${c.body}`, path: `/careers/${c.slug}`, kicker: "Careers" });
}

const responsibilities: Record<string, string[]> = {
  "senior-brand-designer": ["Lead two to three identity projects at a time from strategy through guidelines", "Present directly to clients and defend decisions with reasoning", "Mentor mid-level designers and review their work weekly", "Contribute to our brand design playbook"],
  "creative-technologist": ["Build real-time scenes and configurators in React Three Fiber", "Write shaders and optimise models for mobile frame budgets", "Pair with designers to prototype interactions before build", "Own performance monitoring on 3D projects"],
  "seo-strategist": ["Run technical audits and prioritise fixes with engineering", "Build keyword and content strategies tied to forecasts", "Lead AI search optimisation programmes", "Report monthly to clients in plain language"],
  "motion-designer": ["Design motion systems and brand animations", "Build programmatic video templates with Remotion", "Produce social and ad video kits at volume", "Specify UI motion for product and web teams"],
  "product-designer": ["Research, prototype and ship product and web experiences", "Run usability tests and turn findings into decisions", "Contribute to client design systems in Figma and code", "Collaborate daily with engineers in the same sprint"],
};

export default async function JobPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = careers.find((x) => x.slug === slug);
  if (!c) notFound();
  const posting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: c.title,
    description: c.body,
    datePosted: "2026-09-01",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: c.location } },
    url: absolute(`/careers/${c.slug}`),
  };
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Careers", path: "/careers" }, { name: c.title, path: `/careers/${c.slug}` }]), posting]} />
      <section className="container-x pt-10 md:pt-16 pb-16">
        <div className="rise"><Breadcrumbs items={[{ name: "Careers", href: "/careers" }, { name: c.title, href: `/careers/${c.slug}` }]} /></div>
        <p className="t-mono text-slate mt-10 rise" style={{ ["--delay" as string]: "60ms" }}>{c.location} · {c.type}</p>
        <h1 className="t-display-lg mt-4 max-w-[16ch] rise" style={{ ["--delay" as string]: "120ms" }}>{c.title}</h1>
        <p className="t-lead text-slate mt-8 rise" style={{ ["--delay" as string]: "220ms" }}>{c.body}</p>
        <div className="grid gap-12 lg:grid-cols-12 mt-16">
          <div className="lg:col-span-7 reveal">
            <h2 className="t-h2">What you will do</h2>
            <ul className="mt-6 grid gap-3">
              {(responsibilities[c.slug] ?? []).map((r) => <li key={r} className="border-t border-haze pt-3">{r}</li>)}
            </ul>
            <h2 className="t-h2 mt-14">What we offer</h2>
            <ul className="mt-6 grid gap-3">
              {["Salary benchmarked to the top quartile of the market", "Four-day in-studio weeks with flexible hours", "Annual learning budget and conference travel", "Equipment and software of your choice", "Six weeks of paid leave"].map((r) => <li key={r} className="border-t border-haze pt-3">{r}</li>)}
            </ul>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 reveal">
            <div className="card p-6">
              <h2 className="t-h3">Apply</h2>
              <p className="text-slate mt-3 text-[0.95rem]">Send a short note, a link to your work and your location to our hiring team. We reply to every application.</p>
              <a href={`mailto:careers@arcbig.com?subject=${encodeURIComponent(c.title)}`} className="btn btn-primary mt-6">Email your application</a>
            </div>
            <p className="t-meta text-slate mt-6">Other roles: <Link href="/careers" className="hover:underline text-ink">see all openings</Link></p>
          </aside>
        </div>
      </section>
      <Cta tone="ink" title="Not sure it is the right role?" body="Write to us anyway. We would rather hear from you than miss you." primary={{ label: "Get in touch", href: "/contact" }} secondary={{ label: "About Arcbig", href: "/about" }} />
    </>
  );
}
