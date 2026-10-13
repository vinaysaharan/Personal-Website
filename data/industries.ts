import type { FAQ } from "./services";

export type Industry = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  challenges: string[];
  approach: { title: string; body: string }[];
  services: string[];
  caseStudy?: string;
  faqs: FAQ[];
};

export const industries: Industry[] = [
  {
    slug: "saas",
    title: "SaaS",
    short: "Websites and brands that explain complex software in one scroll.",
    metaTitle: "SaaS Marketing Agency | Websites, Branding & Growth",
    metaDescription: "Arcbig is a SaaS marketing agency designing websites, brands and growth programmes for B2B software companies. Clear positioning, fast sites and pipeline you can track.",
    keywords: ["saas marketing agency", "saas web design agency", "b2b saas branding", "saas website design", "saas growth agency"],
    h1: "A creative agency for SaaS companies that need to explain less and convert more",
    intro: "Software buyers decide fast. Your homepage has one scroll to make the product understood and worth a trial. We design SaaS brands and sites that do exactly that, then grow them with SEO and content that attracts the right accounts.",
    challenges: ["Positioning that blurs into competitors", "Homepages that describe features instead of outcomes", "Marketing sites engineering teams dread updating", "Organic growth stalled on a thin content base"],
    approach: [
      { title: "Positioning first", body: "We interview customers and sales to find the sentence that wins the deal, then design around it." },
      { title: "Product in the hero", body: "Real UI, animated with purpose, so the product is understood before the first headline ends." },
      { title: "Sites marketing can own", body: "Headless CMS with reusable sections, so launches do not wait for an engineer." },
      { title: "Search that compounds", body: "Comparison, integration and use-case pages built as a system." },
    ],
    services: ["branding", "web-design", "ui-ux-design", "seo", "content-marketing", "motion-design"],
    caseStudy: "northwind-analytics",
    faqs: [
      { q: "Do you understand product-led growth?", a: "Yes. We design for self-serve signups and sales-assisted motions alike, with analytics on both." },
      { q: "Can you work with our existing design system?", a: "Yes. We extend what works and replace only what holds you back." },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech",
    short: "Trust-building design for money, markets and payments.",
    metaTitle: "Fintech Marketing Agency | Branding, Web Design & Compliance",
    metaDescription: "Arcbig is a fintech marketing agency building trustworthy brands, compliant websites and growth campaigns for payments, lending, wealth and crypto companies.",
    keywords: ["fintech marketing agency", "fintech branding agency", "fintech web design", "financial services design agency", "payments branding"],
    h1: "A creative agency for fintech brands that need to earn trust in seconds",
    intro: "People hand fintechs their money before they understand them. Design carries that trust. We build identities and websites that feel secure and modern, and we know our way around compliance review.",
    challenges: ["Looking credible without looking like a bank from 1995", "Explaining regulated products plainly", "Legal and compliance slowing every launch", "Acquisition costs rising on paid channels"],
    approach: [
      { title: "Credibility by design", body: "Typography, structure and motion that signal precision and calm." },
      { title: "Plain language", body: "Copy that explains products clearly and passes compliance on the first pass." },
      { title: "Compliance-aware workflow", body: "Disclosure patterns and review stages built into our process." },
      { title: "Organic acquisition", body: "Content that answers money questions and earns links from financial press." },
    ],
    services: ["branding", "web-design", "seo", "content-marketing", "ui-ux-design", "paid-media"],
    caseStudy: "ledgerline",
    faqs: [
      { q: "Have you worked with regulated companies before?", a: "Yes, across payments, lending and wealth management in the US, UK and EU." },
      { q: "Can you design for accessibility requirements?", a: "Every build targets WCAG 2.2 AA, which most financial regulators now expect." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Clear, accessible design for clinics, health tech and life sciences.",
    metaTitle: "Healthcare Marketing Agency | Web Design & Patient Experience",
    metaDescription: "Arcbig is a healthcare marketing agency designing accessible websites, brands and campaigns for clinics, health technology and life sciences companies, with privacy and compliance built in.",
    keywords: ["healthcare marketing agency", "healthcare web design agency", "medical website design", "health tech branding", "digital health marketing"],
    h1: "A creative agency for healthcare brands that put patients first",
    intro: "Healthcare audiences are often anxious, often on a phone, and always deserve clarity. We design experiences that help people find care and understand it, with privacy and accessibility handled from the start.",
    challenges: ["Dense information that overwhelms patients", "Accessibility gaps that exclude the people who need care most", "Privacy requirements across forms and analytics", "Trust in a sector full of noise"],
    approach: [
      { title: "Patient journeys", body: "Research with patients and clinicians to design for real moments of need." },
      { title: "Accessibility first", body: "WCAG 2.2 AA as a floor, with plain-language content and clear structure." },
      { title: "Privacy by default", body: "Consent-aware analytics and form handling that respects health data rules." },
      { title: "Credible content", body: "Clinically reviewed content that earns rankings and trust." },
    ],
    services: ["web-design", "ui-ux-design", "content-marketing", "seo", "branding", "video-production"],
    caseStudy: "clearpath-health",
    faqs: [
      { q: "Can you handle HIPAA considerations?", a: "We design and build with HIPAA-aware patterns and work with your compliance team on data flows." },
      { q: "Do you do clinical content?", a: "Yes, with medical writers and a clinician review step." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "Property brands and 3D experiences that sell before the site visit.",
    metaTitle: "Real Estate Marketing Agency | Property Branding & 3D Websites",
    metaDescription: "Arcbig is a real estate marketing agency creating development brands, immersive 3D property websites and lead generation campaigns for developers, brokers and proptech.",
    keywords: ["real estate marketing agency", "property branding agency", "real estate web design", "3d property website", "property development marketing"],
    h1: "A creative agency for property that sells the view before the viewing",
    intro: "Buyers decide emotionally and justify with floor plans. We create development brands and 3D websites that let people walk through a building before it exists, backed by lead generation that fills the sales suite.",
    challenges: ["Off-plan sales with nothing physical to show", "Generic branding across developments", "Lead quality from portals and paid channels", "Long sales cycles with little nurture"],
    approach: [
      { title: "Development identity", body: "A brand rooted in the place, not a stock render with a serif." },
      { title: "3D and immersive", body: "Interactive models, unit explorers and virtual walkthroughs built for the browser." },
      { title: "Lead systems", body: "Landing pages, CRM integration and nurture flows that qualify buyers." },
      { title: "Launch campaigns", body: "Film, social and paid media timed to each sales phase." },
    ],
    services: ["branding", "3d-web-experiences", "web-design", "paid-media", "video-production", "email-marketing"],
    caseStudy: "meridian-tower",
    faqs: [
      { q: "Can you build from architectural models?", a: "Yes. We convert Revit, SketchUp and CAD files into optimised web-ready 3D." },
      { q: "Do you integrate with property CRMs?", a: "Yes, including Salesforce, HubSpot and specialist platforms." },
    ],
  },
  {
    slug: "ecommerce-brands",
    title: "E-commerce Brands",
    short: "DTC brands that look as good as they sell.",
    metaTitle: "DTC & E-commerce Marketing Agency | Brand, Store & Growth",
    metaDescription: "Arcbig is a DTC and e-commerce marketing agency building brands, Shopify stores and growth programmes for consumer products companies that want to scale profitably.",
    keywords: ["dtc marketing agency", "ecommerce marketing agency", "shopify design agency", "consumer brand agency", "dtc branding"],
    h1: "A creative agency for consumer brands that want to be chosen on purpose",
    intro: "Consumer attention is expensive. A distinctive brand lowers the cost of every click after it. We build brands, stores and content systems for DTC companies, then grow them with retention and performance marketing.",
    challenges: ["Rising acquisition costs on paid social", "Stores that look like every other theme", "Retention left to chance", "Content demands outpacing the team"],
    approach: [
      { title: "Brand worth remembering", body: "Packaging, identity and voice that stand out in a feed and on a shelf." },
      { title: "Stores built to convert", body: "Shopify and headless builds with product storytelling and 3D previews." },
      { title: "Retention engine", body: "Email and SMS lifecycle flows that turn first orders into habits." },
      { title: "Creative at volume", body: "Monthly content and ad creative systems that keep performance fresh." },
    ],
    services: ["branding", "ecommerce", "email-marketing", "paid-media", "social-media", "video-production"],
    caseStudy: "halden-coffee",
    faqs: [
      { q: "Do you work with Shopify Plus?", a: "Yes. We design and build on Shopify, Shopify Plus and headless storefronts." },
      { q: "Can you help with packaging?", a: "Yes. Our branding work extends to packaging and unboxing design." },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    short: "Hotels, restaurants and destinations that feel like the place before you arrive.",
    metaTitle: "Hospitality Marketing Agency | Hotel & Restaurant Branding",
    metaDescription: "Arcbig is a hospitality marketing agency designing brands, websites and direct booking experiences for hotels, restaurants and destinations.",
    keywords: ["hospitality marketing agency", "hotel branding agency", "hotel web design agency", "restaurant branding agency", "direct booking website design"],
    h1: "A creative agency for hospitality brands that want more direct bookings",
    intro: "Every booking through a third party costs margin and a relationship. We design hotel and restaurant brands and websites that capture the feeling of the place and make booking direct the obvious choice.",
    challenges: ["Dependence on online travel agencies", "Websites that cannot convey atmosphere", "Inconsistent brand across properties", "Seasonal demand with little nurture"],
    approach: [
      { title: "Atmosphere online", body: "Photography, film and motion that carry the sensory experience of the property." },
      { title: "Direct booking design", body: "Booking flows and rate presentation designed to beat the OTAs." },
      { title: "Brand systems", body: "Identities that flex across properties, menus and merchandise." },
      { title: "Seasonal marketing", body: "Email, social and paid campaigns timed to demand." },
    ],
    services: ["branding", "web-design", "video-production", "email-marketing", "social-media", "seo"],
    caseStudy: "sable-house",
    faqs: [
      { q: "Do you integrate booking engines?", a: "Yes, with major hotel booking engines and restaurant reservation platforms." },
      { q: "Can you shoot on location?", a: "Yes. Our video and photography teams travel for property shoots." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    short: "Universities, schools and edtech that communicate with clarity.",
    metaTitle: "Education Marketing Agency | University & EdTech Web Design",
    metaDescription: "Arcbig is an education marketing agency designing websites, brands and student recruitment campaigns for universities, schools and edtech companies.",
    keywords: ["education marketing agency", "university web design agency", "edtech branding agency", "school website design", "student recruitment marketing"],
    h1: "A creative agency for education brands with a lot to say and little time to say it",
    intro: "Prospective students compare dozens of options on their phones. Institutions and edtech products need brands that stand out and websites that make the next step obvious. We build both.",
    challenges: ["Sprawling sites with thousands of pages", "Brands diluted across departments", "Recruitment campaigns with unclear attribution", "Accessibility obligations across all content"],
    approach: [
      { title: "Information architecture", body: "Audience-led structure that simplifies without hiding what matters." },
      { title: "Brand with flexibility", body: "Systems that unify departments while giving each a voice." },
      { title: "Recruitment funnels", body: "Landing pages, nurture and paid media tied to applications." },
      { title: "Accessible by default", body: "Templates and content guidance that keep large sites compliant." },
    ],
    services: ["web-design", "web-development", "branding", "content-marketing", "paid-media", "seo"],
    caseStudy: "fieldstone-university",
    faqs: [
      { q: "Can you migrate a large university site?", a: "Yes. We have migrated sites with over 20,000 pages, with redirects and SEO preserved." },
      { q: "Do you work with edtech startups?", a: "Yes, from brand and product design to growth." },
    ],
  },
  {
    slug: "architecture",
    title: "Architecture & Design",
    short: "Portfolios and brands for practices whose work deserves the frame.",
    metaTitle: "Architecture Marketing Agency | Branding & Portfolio Websites",
    metaDescription: "Arcbig is a creative agency for architecture, interior and design practices, building brand identities and portfolio websites that present work with the care it was made with.",
    keywords: ["architecture branding agency", "architecture website design", "design studio branding", "architect portfolio website", "interior design marketing agency"],
    h1: "A creative agency for architecture practices who care about the details",
    intro: "Architects notice everything. Your website and identity should be as resolved as your buildings. We design restrained, typographically precise brands and portfolio sites, often with 3D that lets visitors move through the work.",
    challenges: ["Portfolios that bury the best projects", "Identities that look like every other studio", "Winning competitions and RFPs with weak digital presence", "Project imagery that loads slowly"],
    approach: [
      { title: "Editorial restraint", body: "Typography and layout that let the work speak, with a confident voice around it." },
      { title: "Projects as narratives", body: "Case studies structured around brief, response and result." },
      { title: "3D where it helps", body: "Interactive models for unbuilt work and competition entries." },
      { title: "Fast imagery", body: "Image pipelines that keep large portfolios quick on every device." },
    ],
    services: ["branding", "web-design", "3d-web-experiences", "motion-design", "content-marketing", "seo"],
    caseStudy: "studio-ferrant",
    faqs: [
      { q: "Can you present 3D models from our tools?", a: "Yes. We optimise Rhino, Revit and SketchUp exports for the web." },
      { q: "Do you design printed material?", a: "Yes, from monographs to competition boards." },
    ],
  },
  {
    slug: "fashion",
    title: "Fashion & Beauty",
    short: "Brands and stores with the attitude the category demands.",
    metaTitle: "Fashion & Beauty Marketing Agency | Branding & E-commerce",
    metaDescription: "Arcbig is a fashion and beauty marketing agency creating brand identities, campaign content and e-commerce stores for labels and beauty brands that want cultural relevance.",
    keywords: ["fashion marketing agency", "beauty branding agency", "fashion ecommerce agency", "fashion web design", "beauty brand design"],
    h1: "A creative agency for fashion and beauty brands with a point of view",
    intro: "Fashion and beauty move at the speed of culture. We build brands with attitude, campaign content that earns attention, and stores where the product looks as good as it does in the lookbook.",
    challenges: ["Standing out in saturated visual categories", "Content demands across drops and seasons", "Stores that do not do the product justice", "Balancing brand and performance marketing"],
    approach: [
      { title: "Attitude as identity", body: "Brand systems with tension and personality, not just a logotype." },
      { title: "Campaign content", body: "Film and photography directed for feed, store and press." },
      { title: "Product-first stores", body: "Shopify builds with editorial layouts and fast imagery." },
      { title: "Drop marketing", body: "Email, social and paid timed to launches." },
    ],
    services: ["branding", "ecommerce", "video-production", "social-media", "email-marketing", "paid-media"],
    caseStudy: "aurelle-skin",
    faqs: [
      { q: "Do you handle campaign photography?", a: "Yes, with directors and photographers in our network across our cities." },
      { q: "Can you run our social channels?", a: "Yes, with content shot monthly and community management included." },
    ],
  },
  {
    slug: "nonprofit",
    title: "Nonprofit",
    short: "Causes that need clarity, trust and a path to action.",
    metaTitle: "Nonprofit Marketing Agency | Branding, Websites & Fundraising",
    metaDescription: "Arcbig is a nonprofit marketing agency designing brands, websites and fundraising campaigns for charities and foundations that need to move people to act.",
    keywords: ["nonprofit marketing agency", "charity branding agency", "nonprofit web design", "fundraising campaign agency", "ngo website design"],
    h1: "A creative agency for nonprofits that need stories to become support",
    intro: "Nonprofits compete for attention with the same tools as brands, with smaller teams. We design identities and websites that explain the mission fast, make giving easy, and are built to be maintained by a small staff.",
    challenges: ["Donation flows that lose people", "Complex missions explained poorly", "Sites too hard for small teams to update", "Limited budgets for ongoing marketing"],
    approach: [
      { title: "Mission clarity", body: "Messaging that explains impact in one line and proves it in one scroll." },
      { title: "Giving made easy", body: "Donation experiences designed and tested for completion." },
      { title: "Maintainable sites", body: "Simple CMS structures with training for your team." },
      { title: "Efficient growth", body: "Grant-friendly reporting and campaigns that stretch budgets." },
    ],
    services: ["branding", "web-design", "content-marketing", "email-marketing", "video-production", "seo"],
    caseStudy: "riverkeep",
    faqs: [
      { q: "Do you offer nonprofit pricing?", a: "Yes. Registered charities receive reduced rates and we take on select pro bono work each year." },
      { q: "Can you help with Google Ad Grants?", a: "Yes. We set up and manage Ad Grant accounts alongside organic search." },
    ],
  },
  {
    slug: "automotive",
    title: "Automotive & Mobility",
    short: "Launch experiences and configurators for vehicles and mobility brands.",
    metaTitle: "Automotive Marketing Agency | 3D Configurators & Launch Sites",
    metaDescription: "Arcbig is an automotive and mobility marketing agency building 3D vehicle configurators, launch websites and brand campaigns for manufacturers, EV startups and mobility services.",
    keywords: ["automotive marketing agency", "car configurator development", "ev branding agency", "automotive web design", "mobility branding agency"],
    h1: "A creative agency for automotive brands launching into a changed market",
    intro: "Electric, software-defined and sold online: vehicles are now bought like products. We build 3D configurators, launch experiences and brands for manufacturers and mobility companies competing for a new kind of buyer.",
    challenges: ["Selling vehicles without a dealership visit", "Configurators that are slow or confusing", "New brands entering against established names", "Launch moments that need global reach"],
    approach: [
      { title: "Real-time configurators", body: "WebGL vehicle configurators with accurate materials and instant pricing." },
      { title: "Launch experiences", body: "Scroll-driven storytelling with film and 3D that holds attention." },
      { title: "Brand for a new category", body: "Identities that feel like technology and mobility, not legacy auto." },
      { title: "Global campaigns", body: "Localised content and paid media across markets." },
    ],
    services: ["3d-web-experiences", "web-design", "branding", "motion-design", "video-production", "paid-media"],
    caseStudy: "volta-mobility",
    faqs: [
      { q: "Can configurators work from our CAD data?", a: "Yes. We convert and optimise CAD into web-ready models with accurate materials." },
      { q: "Do you handle dealer or fleet portals?", a: "Yes, through our web and app development teams." },
    ],
  },
  {
    slug: "legal",
    title: "Legal & Professional Services",
    short: "Firms that want to look as sharp as their advice.",
    metaTitle: "Law Firm Marketing Agency | Branding, Websites & SEO",
    metaDescription: "Arcbig is a law firm and professional services marketing agency building distinctive brands, modern websites and SEO programmes that generate qualified enquiries.",
    keywords: ["law firm marketing agency", "legal branding agency", "law firm web design", "professional services marketing", "law firm seo agency"],
    h1: "A creative agency for firms that are tired of looking like every other firm",
    intro: "Professional services brands default to navy and a serif. The firms that grow fastest look different and say something. We build brands, websites and search programmes that attract the clients and talent you want.",
    challenges: ["Indistinguishable brands across the sector", "Websites built for partners, not clients", "Search dominated by directories and aggregators", "Recruitment competing on culture"],
    approach: [
      { title: "Differentiated positioning", body: "A point of view that clients and recruits can describe." },
      { title: "Client-first websites", body: "Structure around problems people have, not practice areas alone." },
      { title: "Authority SEO", body: "Expert content and digital PR that outrank directories." },
      { title: "Employer brand", body: "Careers experiences that show real culture." },
    ],
    services: ["branding", "web-design", "seo", "content-marketing", "video-production", "paid-media"],
    caseStudy: "harlow-partners",
    faqs: [
      { q: "Do you understand bar advertising rules?", a: "Yes. We work within professional advertising rules in each jurisdiction and with your compliance partner." },
      { q: "Can you help with partner profiles at scale?", a: "Yes, with templates and a CMS that keep hundreds of profiles consistent." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
