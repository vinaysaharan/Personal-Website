import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { ArcMark } from "./ArcMark";

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-ink mt-24">
      <div className="container-x section-tight">
        <div className="grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="t-display-lg max-w-[12ch]">Have an idea that needs to be built big?</p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
            <Link href="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <a href={`mailto:${site.email}`} className="link-arc">{site.email}</a>
          </div>
        </div>
      </div>

      <div className="container-x py-12 border-t border-line grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <h2 className="t-mono text-muted mb-4">Services</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:underline">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="t-mono text-muted mb-4">Industries</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {industries.map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}`} className="hover:underline">{i.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="t-mono text-muted mb-4">Locations</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {locations.map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:underline">{l.city}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="t-mono text-muted mb-4">Company</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {company.map((c) => (
              <li key={c.href}><Link href={c.href} className="hover:underline">{c.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="t-mono text-muted mb-4">Follow</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {Object.entries(site.socials).map(([k, v]) => (
              <li key={k}><a href={v} rel="noopener noreferrer" target="_blank" className="hover:underline capitalize">{k === "x" ? "X" : k}</a></li>
            ))}
          </ul>
          <address className="not-italic mt-8 t-meta text-muted">
            {site.hq.street}<br />{site.hq.city}, {site.hq.region} {site.hq.postal}
          </address>
        </div>
      </div>

      <div className="container-x py-6 border-t border-line flex flex-wrap items-center justify-between gap-4 t-meta text-muted">
        <span className="inline-flex items-center gap-2 text-chalk"><ArcMark size={18} /> {site.name} © {year}</span>
        <nav aria-label="Legal" className="flex gap-6">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          <Link href="/sitemap-page" className="hover:underline">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}
