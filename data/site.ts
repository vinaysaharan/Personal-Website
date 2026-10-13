export const site = {
  name: "Arcbig",
  legalName: "Arcbig Studio Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcbig.com",
  tagline: "The creative agency for ideas that need to be built big.",
  description:
    "Arcbig is a full-service creative and digital agency. We design brands, build high-performance websites with 3D and motion, and grow them with SEO, content and paid media.",
  email: "hello@arcbig.com",
  phone: "+1 (415) 555-0142",
  founded: 2016,
  hq: {
    street: "48 Bluxome Street",
    city: "San Francisco",
    region: "CA",
    postal: "94107",
    country: "US",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/arcbig",
    instagram: "https://www.instagram.com/arcbig",
    x: "https://x.com/arcbig",
    dribbble: "https://dribbble.com/arcbig",
    behance: "https://www.behance.net/arcbig",
    youtube: "https://www.youtube.com/@arcbig",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { value: "240+", label: "brands launched" },
    { value: "9", label: "years in business" },
    { value: "12", label: "cities served" },
    { value: "4.9", label: "average client rating" },
  ],
} as const;

export type SiteConfig = typeof site;
