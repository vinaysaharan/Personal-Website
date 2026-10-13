import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";

const title = "Contact | Start a Project with Arcbig";
const description = "Tell Arcbig about your project. Send a brief and a budget range and we reply within one business day with a point of view and next steps. Studios in twelve cities.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/contact", kicker: "Contact", keywords: ["contact creative agency", "hire web design agency", "agency enquiry"] });

export default function ContactPage() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    url: `${site.url}/contact`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]), contactPage]} />
      <PageHero crumbs={[{ name: "Contact", href: "/contact" }]} kicker="Contact" title="Tell us what you are building" lead="A few sentences is enough. We will come back within one business day with questions, a point of view and a rough budget." />
      <section className="container-x pb-16 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7 reveal"><ContactForm /></div>
        <aside className="lg:col-span-4 lg:col-start-9 grid gap-10 content-start">
          <div>
            <h2 className="t-mono text-slate mb-3">Direct</h2>
            <a href={`mailto:${site.email}`} className="t-h3 block hover:underline">{site.email}</a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="block text-slate mt-1 hover:underline">{site.phone}</a>
          </div>
          <div>
            <h2 className="t-mono text-slate mb-3">Headquarters</h2>
            <address className="not-italic">{site.hq.street}<br />{site.hq.city}, {site.hq.region} {site.hq.postal}</address>
          </div>
          <div>
            <h2 className="t-mono text-slate mb-3">Studios</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[0.95rem]">
              {locations.map((l) => <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:underline">{l.city}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="t-mono text-slate mb-3">Careers and press</h2>
            <p className="text-[0.95rem] text-slate">Roles are listed on the <Link href="/careers" className="text-ink hover:underline">careers page</Link>. Press enquiries go to <a href="mailto:press@arcbig.com" className="text-ink hover:underline">press@arcbig.com</a>.</p>
          </div>
        </aside>
      </section>
    </>
  );
}
