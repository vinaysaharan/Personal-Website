import type { FAQ } from "./services";

export const processSteps = [
  { n: "01", title: "Discover", duration: "1 to 2 weeks", body: "Stakeholder interviews, customer research, analytics and a competitive audit. We leave with a clear brief, a success metric and a fixed-price scope.", outputs: ["Research summary", "Success metrics", "Scope and timeline"] },
  { n: "02", title: "Define", duration: "1 to 2 weeks", body: "Strategy, positioning and structure. For brands, that is the positioning and personality. For websites, the sitemap, templates and SEO architecture.", outputs: ["Positioning", "Sitemap and templates", "Content plan"] },
  { n: "03", title: "Design", duration: "4 to 6 weeks", body: "A design system first, then the key moments. Motion and 3D are prototyped, not described, so nothing is lost between design and build.", outputs: ["Design system", "Key pages and states", "Motion prototypes"] },
  { n: "04", title: "Build", duration: "4 to 8 weeks", body: "Component-based builds in two-week sprints with a staging site from sprint one. Performance, accessibility and SEO checks run in CI.", outputs: ["Staging site", "CMS and training", "QA reports"] },
  { n: "05", title: "Launch and grow", duration: "ongoing", body: "A monitored launch with redirects, analytics and search verification. Then growth: SEO, content, experimentation and the next phase of work.", outputs: ["Launch checklist", "30-day support", "Growth roadmap"] },
];

export const pricingTiers = [
  { name: "Launch", price: "from $38k", for: "Early-stage companies that need a brand and site live in a quarter.", includes: ["Brand identity essentials", "8 to 12 page website", "Design system and CMS", "SEO foundations", "Launch support"], cta: "Start with Launch" },
  { name: "Scale", price: "from $90k", for: "Growing companies that need a full brand, a larger site and motion or 3D.", includes: ["Full brand strategy and identity", "20 to 40 page website", "Motion system or 3D hero", "Content and SEO architecture", "Growth programme onboarding"], cta: "Talk about Scale", featured: true },
  { name: "Partner", price: "custom", for: "Established organisations that want a long-term creative and growth partner.", includes: ["Dedicated cross-functional team", "Continuous design and development", "Growth, content and experimentation", "Quarterly strategy reviews", "Priority support"], cta: "Discuss a partnership" },
];

export const retainers = [
  { name: "Growth retainer", price: "from $6.5k / month", body: "SEO, content and CRO run as one programme with monthly reporting." },
  { name: "Design and development retainer", price: "from $8k / month", body: "A standing team for continuous improvements, new pages and features." },
  { name: "Content and social retainer", price: "from $5k / month", body: "Monthly production of articles, video and social across your channels." },
];

export const generalFaqs: FAQ[] = [
  { q: "What kind of agency is Arcbig?", a: "A full-service creative and digital agency. We design brands, build websites and digital products with 3D and motion, and grow them with SEO, content and paid media." },
  { q: "How much do your projects cost?", a: "Brand identity projects start at $24,000 and websites at $38,000. Growth retainers start at $6,500 per month. Every project is fixed-price after a short discovery phase." },
  { q: "How long does a project take?", a: "A brand identity takes 8 to 12 weeks. A website takes 10 to 16 weeks. Larger platforms and 3D experiences can take longer. We agree dates before we start and keep them." },
  { q: "Where are you based?", a: "Our headquarters is in San Francisco, with studios in New York, Los Angeles, Austin, Toronto, London, Berlin, Amsterdam, Dubai, Singapore, Sydney and Mumbai." },
  { q: "Do you work with startups?", a: "Yes. Roughly half our clients are venture-backed companies between seed and Series C. We also work with established brands and nonprofits." },
  { q: "What technologies do you build with?", a: "Mostly Next.js and React with a headless CMS, Three.js and React Three Fiber for 3D, Remotion for programmatic video, and Shopify for commerce." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes 30 days of post-launch support, and most clients continue with a growth or development retainer." },
  { q: "Can you work with our in-house team?", a: "Yes. We can own a project end to end, embed with your team, or deliver a system your team implements." },
  { q: "How do we start?", a: "Send a short brief through the contact page. We reply within one business day and usually hold a first call within the week." },
  { q: "Do you sign NDAs?", a: "Yes. We are happy to sign a mutual NDA before any detailed conversation." },
];

export const careers = [
  { slug: "senior-brand-designer", title: "Senior Brand Designer", location: "New York or London", type: "Full-time", body: "Lead identity projects from strategy to guidelines, working with our creative directors and clients across fintech, fashion and culture." },
  { slug: "creative-technologist", title: "Creative Technologist (Three.js)", location: "Berlin or remote", type: "Full-time", body: "Build real-time 3D scenes, configurators and shaders with React Three Fiber, and hold the line on performance." },
  { slug: "seo-strategist", title: "SEO Strategist", location: "Austin or remote", type: "Full-time", body: "Run technical audits, content strategy and AI search programmes for clients across sectors, with clear forecasts and reporting." },
  { slug: "motion-designer", title: "Motion Designer (Remotion)", location: "Los Angeles or remote", type: "Full-time", body: "Design and build motion systems and programmatic video templates with Remotion and After Effects." },
  { slug: "product-designer", title: "Product Designer", location: "Singapore or San Francisco", type: "Full-time", body: "Research, prototype and ship product and web experiences, and contribute to client design systems." },
];

export const values = [
  { title: "Big ideas, built", body: "An idea that stays in a deck is a cost. We only keep the ones we can build, and we build all of the ones we keep." },
  { title: "Measured, not guessed", body: "Every project starts with a number we are trying to move. Every review checks whether we moved it." },
  { title: "Fast is a feature", body: "Speed is part of design. We set performance budgets before the first layout and hit them before launch." },
  { title: "Accessible by default", body: "Work that excludes people is unfinished. Accessibility is a constraint we design within, not a checklist at the end." },
  { title: "Craft in the details", body: "Kerning, easing, copy, code. The details are where people feel the difference between good and right." },
  { title: "Honest partnership", body: "We tell clients what we think, including when the answer is no. Long relationships are built on that." },
];
