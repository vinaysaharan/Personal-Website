import type { Metadata } from "next";
import { site } from "@/data/site";
import type { FAQ } from "@/data/services";

export const absolute = (path: string) => new URL(path, site.url).toString();

export function ogImage(title: string, kicker?: string) {
  const params = new URLSearchParams({ title });
  if (kicker) params.set("kicker", kicker);
  return `/og?${params.toString()}`;
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  kicker?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export function buildMetadata(m: PageMeta): Metadata {
  const url = absolute(m.path);
  const image = ogImage(m.title, m.kicker);
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords ? [...m.keywords] : undefined,
    alternates: { canonical: url },
    robots: m.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: m.type ?? "website",
      url,
      title: m.title,
      description: m.description,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: m.title }],
      ...(m.type === "article"
        ? { publishedTime: m.publishedTime, modifiedTime: m.modifiedTime ?? m.publishedTime, authors: m.authors }
        : {}),
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [image] },
  };
}

/* ---------- JSON-LD builders ---------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
    description: site.description,
    foundingDate: String(site.founded),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.hq.street,
      addressLocality: site.hq.city,
      addressRegion: site.hq.region,
      postalCode: site.hq.postal,
      addressCountry: site.hq.country,
    },
    sameAs: Object.values(site.socials),
    knowsAbout: ["Branding", "Web Design", "Web Development", "3D Web Experiences", "Motion Design", "SEO", "Content Marketing", "Paid Media"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(s: { title: string; description: string; path: string; startingAt?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    url: absolute(s.path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["US", "CA", "GB", "DE", "NL", "AE", "SG", "AU", "IN"],
    serviceType: s.title,
    ...(s.startingAt ? { offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: s.startingAt.replace(/[^0-9.]/g, ""), priceCurrency: "USD" } } } : {}),
  };
}

export function articleJsonLd(a: { title: string; description: string; path: string; date: string; author: { name: string; path: string }; keywords: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: absolute(a.path),
    mainEntityOfPage: absolute(a.path),
    datePublished: a.date,
    dateModified: a.date,
    keywords: a.keywords.join(", "),
    image: absolute(ogImage(a.title)),
    author: { "@type": "Person", name: a.author.name, url: absolute(a.author.path) },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function caseStudyJsonLd(c: { title: string; description: string; path: string; client: string; year: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    description: c.description,
    url: absolute(c.path),
    dateCreated: String(c.year),
    creator: { "@id": `${site.url}/#organization` },
    about: { "@type": "Organization", name: c.client },
  };
}

export function localBusinessJsonLd(l: { city: string; country: string; countryCode: string; path: string; lat: number; lng: number; neighbourhood: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absolute(l.path)}#business`,
    name: `${site.name} ${l.city}`,
    url: absolute(l.path),
    parentOrganization: { "@id": `${site.url}/#organization` },
    image: absolute("/icon.svg"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$$",
    address: { "@type": "PostalAddress", addressLocality: l.city, addressCountry: l.countryCode },
    geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
    areaServed: { "@type": "City", name: l.city },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }],
  };
}

export function personJsonLd(p: { name: string; role: string; path: string; bio: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    description: p.bio,
    url: absolute(p.path),
    worksFor: { "@id": `${site.url}/#organization` },
  };
}

export function definedTermJsonLd(t: { term: string; definition: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: absolute(t.path),
    inDefinedTermSet: { "@type": "DefinedTermSet", name: `${site.name} Glossary`, url: absolute("/glossary") },
  };
}

export function collectionJsonLd(c: { name: string; description: string; path: string; items: { name: string; path: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.name,
    description: c.description,
    url: absolute(c.path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: c.items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absolute(it.path) })),
    },
  };
}
