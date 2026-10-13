export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faqs: FAQ[];
  related: string[];
  startingAt: string;
  timeline: string;
  group: "Brand" | "Build" | "Grow" | "Motion";
};

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding",
    group: "Brand",
    short: "Identity systems that look right at a billboard and a favicon.",
    metaTitle: "Branding Agency | Brand Identity & Strategy",
    metaDescription:
      "Arcbig is a branding agency that builds brand strategy, naming, visual identity and guidelines for companies that want to be recognised instantly. See our process and pricing.",
    keywords: ["branding agency", "brand identity design", "brand strategy agency", "logo design agency", "rebranding services"],
    h1: "A branding agency for companies that want to be unmistakable",
    intro:
      "A brand is the sum of every decision people can see. We define the strategy, design the identity system and write the guidelines, so every touchpoint from pitch deck to packaging feels like one company.",
    outcomes: ["Clear positioning your sales team can repeat", "An identity system that scales across print, product and motion", "Guidelines that stop brand drift before it starts"],
    deliverables: ["Brand strategy and positioning", "Naming and verbal identity", "Logo and visual identity system", "Typography and colour", "Brand guidelines and asset library", "Launch toolkit"],
    process: [
      { title: "Discover", body: "Stakeholder interviews, customer research and a competitive audit. We find the gap you can own." },
      { title: "Define", body: "Positioning, personality and a messaging hierarchy, agreed before any pixel is drawn." },
      { title: "Design", body: "Two or three distinct identity directions, then refinement of one into a complete system." },
      { title: "Deliver", body: "Guidelines, templates and a launch plan, with a workshop for your team." },
    ],
    faqs: [
      { q: "How long does a branding project take?", a: "A full identity usually takes 8 to 12 weeks. A refresh of an existing brand takes 4 to 6." },
      { q: "Do you handle trademark checks?", a: "We run preliminary screening on names and marks and work alongside your IP counsel for registration." },
      { q: "Can you rebrand without losing recognition?", a: "Yes. We audit which brand assets carry equity and build the new system around them." },
    ],
    related: ["web-design", "motion-design", "content-marketing"],
    startingAt: "$24,000",
    timeline: "8 to 12 weeks",
  },
  {
    slug: "web-design",
    title: "Web Design",
    group: "Build",
    short: "Websites that are designed to be remembered and built to be found.",
    metaTitle: "Web Design Agency | Award-Level Websites That Convert",
    metaDescription:
      "Arcbig is a web design agency creating custom, high-performance websites with 3D, motion and conversion-focused UX. Explore our work, process and pricing.",
    keywords: ["web design agency", "custom website design", "website design company", "creative web design", "responsive web design agency"],
    h1: "A web design agency that treats your website as your best salesperson",
    intro:
      "Most websites are templates with a logo swapped in. Ours start from your audience and your numbers, then earn attention with design that is distinctive, fast and easy to maintain.",
    outcomes: ["A site that ranks, loads in under two seconds and converts", "A design system your team can extend without us", "Measurable lift in leads, signups or sales"],
    deliverables: ["UX research and sitemap", "Wireframes and prototypes", "Visual design system", "3D and motion direction", "Responsive front-end build", "CMS setup and training"],
    process: [
      { title: "Research", body: "Analytics review, user interviews and a content audit so we design for real behaviour." },
      { title: "Structure", body: "Sitemap, page templates and SEO architecture before any visual design." },
      { title: "Design", body: "A design system plus the key pages, prototyped with motion so nothing is lost in build." },
      { title: "Build and launch", body: "Component-based build, performance budget, QA across devices and a monitored launch." },
    ],
    faqs: [
      { q: "What platforms do you build on?", a: "Mostly Next.js with a headless CMS like Sanity or Contentful. We also work in Webflow and Shopify when it fits." },
      { q: "How much does a website cost?", a: "Marketing sites start around $38,000. Larger platforms with custom 3D or e-commerce run higher. We scope fixed-price after discovery." },
      { q: "Will the site be fast with 3D and animation?", a: "Yes. We set a performance budget at the start and lazy-load heavy scenes so Core Web Vitals stay green." },
    ],
    related: ["web-development", "ui-ux-design", "seo", "3d-web-experiences"],
    startingAt: "$38,000",
    timeline: "10 to 16 weeks",
  },
  {
    slug: "web-development",
    title: "Web Development",
    group: "Build",
    short: "Next.js, headless CMS and edge infrastructure built by engineers who care about design.",
    metaTitle: "Web Development Agency | Next.js & Headless CMS Experts",
    metaDescription:
      "Arcbig's web development agency builds fast, accessible websites and web apps with Next.js, React and headless CMS. Performance budgets, clean code and SEO built in.",
    keywords: ["web development agency", "next.js development agency", "headless cms development", "react development company", "frontend development agency"],
    h1: "A web development agency that ships fast sites and faster teams",
    intro:
      "We build on Next.js, React and headless content platforms, with a performance budget enforced in CI. Your marketing team gets a site they can edit, and your engineers get code they are happy to own.",
    outcomes: ["Core Web Vitals in the green on every template", "A component library your team can extend", "Infrastructure that scales without surprise bills"],
    deliverables: ["Technical architecture", "Next.js or React build", "Headless CMS modelling", "Integrations and APIs", "Accessibility audit to WCAG 2.2 AA", "Performance monitoring"],
    process: [
      { title: "Architect", body: "Stack decisions, content model and integration map, documented before the first commit." },
      { title: "Build", body: "Two-week sprints with a staging site you can click through from the first sprint." },
      { title: "Harden", body: "Automated tests, Lighthouse CI, accessibility checks and a security review." },
      { title: "Hand over", body: "Documentation, a recorded walkthrough and 30 days of post-launch support." },
    ],
    faqs: [
      { q: "Do you work with our in-house developers?", a: "Often. We can own the build, pair with your team, or deliver a design system they implement." },
      { q: "Which CMS do you recommend?", a: "Sanity for editorial flexibility, Contentful for enterprise governance, Shopify for commerce. We will recommend after discovery." },
      { q: "Do you provide ongoing maintenance?", a: "Yes, through monthly retainers that cover updates, monitoring and small improvements." },
    ],
    related: ["web-design", "ecommerce", "app-development", "ai-automation"],
    startingAt: "$30,000",
    timeline: "8 to 14 weeks",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    group: "Build",
    short: "Shopify and headless storefronts that make buying feel effortless.",
    metaTitle: "E-commerce Agency | Shopify & Headless Commerce Design",
    metaDescription:
      "Arcbig is an e-commerce agency designing and building Shopify and headless storefronts that raise conversion rate and average order value. See case studies.",
    keywords: ["ecommerce agency", "shopify agency", "headless commerce agency", "ecommerce website design", "shopify plus partner"],
    h1: "An e-commerce agency obsessed with the moment before checkout",
    intro:
      "We design storefronts around product discovery, trust and speed. Then we build them on Shopify or headless stacks so merchandising, content and checkout work together.",
    outcomes: ["Higher conversion rate and average order value", "Product pages that answer questions before they are asked", "A store that stays fast on Black Friday"],
    deliverables: ["Store UX and conversion audit", "Storefront design system", "Shopify or headless build", "Product configurators and 3D previews", "Checkout and payments optimisation", "Analytics and CRO setup"],
    process: [
      { title: "Audit", body: "Funnel analysis, session recordings and customer interviews to find where revenue leaks." },
      { title: "Design", body: "Collection, product and checkout flows prototyped and tested with real shoppers." },
      { title: "Build", body: "Theme or headless build with performance budgets and merchandising tools." },
      { title: "Grow", body: "Ongoing experimentation and SEO so the store compounds." },
    ],
    faqs: [
      { q: "Shopify or headless?", a: "Shopify themes suit most brands under $20M revenue. Headless pays off when you need custom experiences or multi-region complexity." },
      { q: "Can you migrate our store?", a: "Yes. We migrate products, customers, orders and redirects with zero downtime and SEO preserved." },
      { q: "Do you add 3D product viewers?", a: "We do, using glTF models and WebGL so shoppers can inspect products from every angle." },
    ],
    related: ["web-development", "cro", "3d-web-experiences", "paid-media"],
    startingAt: "$45,000",
    timeline: "12 to 18 weeks",
  },
  {
    slug: "seo",
    title: "SEO",
    group: "Grow",
    short: "Technical, content and authority work that earns the rankings you keep.",
    metaTitle: "SEO Agency | Technical SEO, Content & Link Strategy",
    metaDescription:
      "Arcbig's SEO agency combines technical SEO, keyword-led content and digital PR to grow organic traffic that converts. Transparent reporting, no lock-in contracts.",
    keywords: ["seo agency", "technical seo services", "seo company", "organic search agency", "enterprise seo agency", "ai search optimization"],
    h1: "An SEO agency that builds rankings on a foundation you own",
    intro:
      "Search is changing. Classic rankings still drive most traffic, while AI overviews and answer engines reward clear, structured, authoritative content. We do both, with a reporting dashboard you can read in a minute.",
    outcomes: ["Qualified organic traffic that grows quarter on quarter", "Visibility in AI overviews and answer engines", "A content engine your team can keep running"],
    deliverables: ["Technical SEO audit and fixes", "Keyword and intent research", "Content strategy and briefs", "On-page optimisation", "Digital PR and link acquisition", "Monthly reporting and forecasting"],
    process: [
      { title: "Audit", body: "Crawl, Core Web Vitals, index coverage and content gaps, ranked by impact." },
      { title: "Fix", body: "Technical issues resolved with your developers or ours, usually within the first month." },
      { title: "Create", body: "Keyword-mapped content briefs, written by specialists and structured for AI search." },
      { title: "Amplify", body: "Digital PR to earn links and mentions that build authority." },
    ],
    faqs: [
      { q: "How long until we see results?", a: "Technical fixes show within weeks. Meaningful traffic growth usually takes 3 to 6 months depending on competition." },
      { q: "Do you guarantee rankings?", a: "No one honestly can. We do commit to forecasts, transparent reporting and the right to cancel with 30 days' notice." },
      { q: "Do you optimise for ChatGPT and AI overviews?", a: "Yes. We structure content with clear entities, schema and citations so answer engines can quote it." },
    ],
    related: ["content-marketing", "web-development", "cro", "paid-media"],
    startingAt: "$6,500 / month",
    timeline: "6-month minimum",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    group: "Grow",
    short: "Editorial, video and social content with a strategy behind it.",
    metaTitle: "Content Marketing Agency | Strategy, Editorial & Video",
    metaDescription:
      "Arcbig is a content marketing agency producing search-led articles, video and social content that builds audiences and pipeline. Strategy, production and distribution.",
    keywords: ["content marketing agency", "content strategy agency", "b2b content marketing", "content creation agency", "editorial content services"],
    h1: "A content marketing agency that measures stories in pipeline",
    intro:
      "Content works when it answers a real question for a real buyer, then gets in front of them. We plan it against search demand and sales conversations, produce it to a high standard, and distribute it where your audience already is.",
    outcomes: ["A publishing cadence that compounds organic reach", "Sales enablement content your team actually uses", "A measurable path from content to revenue"],
    deliverables: ["Content strategy and editorial calendar", "Long-form articles and guides", "Video and podcast production", "Social content systems", "Email newsletters", "Performance reporting"],
    process: [
      { title: "Map", body: "Buyer questions, keyword demand and sales objections mapped into content pillars." },
      { title: "Produce", body: "Writers, designers and editors with subject-matter review." },
      { title: "Distribute", body: "Organic social, email, partners and paid amplification where it pays." },
      { title: "Learn", body: "Monthly performance reviews that reshape the next quarter's plan." },
    ],
    faqs: [
      { q: "Do you use AI to write content?", a: "We use AI for research and drafts, with human writers and editors owning every published word." },
      { q: "Can you work in our brand voice?", a: "Yes. We build a voice guide in the first month and review every piece against it." },
      { q: "How many pieces per month?", a: "Typical retainers produce 4 to 12 pieces, mixing long-form, video and social." },
    ],
    related: ["seo", "social-media", "video-production", "email-marketing"],
    startingAt: "$5,000 / month",
    timeline: "3-month minimum",
  },
  {
    slug: "paid-media",
    title: "Paid Media",
    group: "Grow",
    short: "Search, social and programmatic campaigns managed to a profit target.",
    metaTitle: "Paid Media Agency | PPC, Paid Social & Programmatic",
    metaDescription:
      "Arcbig's paid media agency runs Google Ads, Meta, LinkedIn and programmatic campaigns with creative that performs. Managed to ROAS and CAC targets with full transparency.",
    keywords: ["paid media agency", "ppc agency", "google ads agency", "paid social agency", "performance marketing agency"],
    h1: "A paid media agency that pairs sharp creative with disciplined spend",
    intro:
      "Great media buying cannot save weak creative, and great creative cannot fix a broken funnel. We handle both, with weekly optimisation and reporting tied to the metrics your finance team cares about.",
    outcomes: ["Lower cost per acquisition with scalable spend", "Creative tested in weeks, not quarters", "Clear attribution across channels"],
    deliverables: ["Channel strategy and forecasting", "Campaign build and management", "Ad creative and landing pages", "Conversion tracking setup", "Creative testing programme", "Weekly reporting"],
    process: [
      { title: "Forecast", body: "Unit economics, channel fit and a spend plan with expected returns." },
      { title: "Launch", body: "Tracking first, then campaigns built with creative variants ready to test." },
      { title: "Optimise", body: "Weekly bid, audience and creative adjustments against targets." },
      { title: "Scale", body: "Budget shifted toward what works, new channels added when the data supports it." },
    ],
    faqs: [
      { q: "What is your minimum ad spend?", a: "We work best with monthly budgets above $15,000, though we take on smaller programmes for launches." },
      { q: "How do you charge?", a: "A flat management fee based on scope, not a percentage of spend, so our incentives match yours." },
      { q: "Do you make the ads?", a: "Yes. Static, motion and video creative is produced in-house." },
    ],
    related: ["cro", "social-media", "video-production", "seo"],
    startingAt: "$4,500 / month",
    timeline: "3-month minimum",
  },
  {
    slug: "social-media",
    title: "Social Media",
    group: "Grow",
    short: "Channel strategy, content and community for brands people follow on purpose.",
    metaTitle: "Social Media Agency | Strategy, Content & Community",
    metaDescription:
      "Arcbig is a social media agency building channel strategies, content systems and communities on Instagram, LinkedIn, TikTok and YouTube. Organic growth with a point of view.",
    keywords: ["social media agency", "social media marketing agency", "instagram marketing agency", "linkedin marketing agency", "tiktok agency"],
    h1: "A social media agency for brands with something to say",
    intro:
      "Feeds reward consistency and a recognisable point of view. We define yours, build repeatable content formats, and run the channels so your brand shows up every day looking like itself.",
    outcomes: ["Followers who buy, not just like", "A content system that scales without burnout", "Channels that feed your website and email list"],
    deliverables: ["Channel audit and strategy", "Content formats and templates", "Monthly content production", "Community management", "Creator partnerships", "Analytics and reporting"],
    process: [
      { title: "Audit", body: "What works for you, your competitors and your category, by channel." },
      { title: "Design", body: "Three to five repeatable formats with a visual and verbal system." },
      { title: "Run", body: "Monthly production, scheduling and community replies." },
      { title: "Refine", body: "Format performance reviewed monthly and adjusted." },
    ],
    faqs: [
      { q: "Which platforms should we be on?", a: "Fewer than you think. We usually recommend two primary channels done well over five done poorly." },
      { q: "Do you handle paid social too?", a: "Yes, through our paid media team, so organic and paid creative share one system." },
      { q: "Can you shoot content on location?", a: "Yes. We run monthly shoot days in our 12 cities and travel for launches." },
    ],
    related: ["content-marketing", "paid-media", "video-production", "branding"],
    startingAt: "$4,000 / month",
    timeline: "3-month minimum",
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    group: "Motion",
    short: "Animated brand systems, product films and UI motion built in code.",
    metaTitle: "Motion Design Agency | Animation, Brand Motion & Remotion",
    metaDescription:
      "Arcbig's motion design agency creates animated brand systems, product videos and interface motion. We build programmatic video with Remotion so every asset stays on-brand and scalable.",
    keywords: ["motion design agency", "motion graphics agency", "animation studio", "brand motion design", "remotion video", "programmatic video"],
    h1: "A motion design agency that animates brands with code",
    intro:
      "Motion is how a brand behaves. We design the rules, from a logo reveal to how a button responds, then build them as reusable systems. For video at scale we use Remotion, so hundreds of personalised clips can be rendered from one template.",
    outcomes: ["A motion language that works in product, ads and social", "Video assets produced in hours instead of weeks", "Interfaces that feel responsive and alive"],
    deliverables: ["Motion principles and guidelines", "Logo and brand animation", "Product and explainer films", "UI motion specs and prototypes", "Programmatic video templates with Remotion", "Social and ad video kits"],
    process: [
      { title: "Principles", body: "Easing, timing and choreography defined as a system, not one-off effects." },
      { title: "Prototype", body: "Key moments animated and reviewed on real devices." },
      { title: "Produce", body: "Final assets rendered from code or composited in After Effects where appropriate." },
      { title: "Scale", body: "Templates handed over so your team renders new variants on demand." },
    ],
    faqs: [
      { q: "What is Remotion?", a: "A framework for making videos with React. It lets us render thousands of data-driven video variants from one template, with pixel-perfect brand control." },
      { q: "Can you animate our existing logo?", a: "Yes. We start with the logo's construction and find the motion already implied in its shapes." },
      { q: "Do you do 3D animation?", a: "Yes, with Blender and real-time WebGL for interactive pieces." },
    ],
    related: ["video-production", "3d-web-experiences", "branding", "ui-ux-design"],
    startingAt: "$12,000",
    timeline: "4 to 8 weeks",
  },
  {
    slug: "3d-web-experiences",
    title: "3D Web Experiences",
    group: "Motion",
    short: "Real-time WebGL scenes, configurators and immersive storytelling with Three.js.",
    metaTitle: "3D Website Agency | WebGL & Three.js Experiences",
    metaDescription:
      "Arcbig builds 3D websites and WebGL experiences with Three.js and React Three Fiber: product configurators, immersive launches and interactive storytelling that still load fast.",
    keywords: ["3d website agency", "webgl agency", "three.js development", "interactive 3d web experience", "product configurator development", "immersive website design"],
    h1: "A 3D web agency that makes the browser feel like a stage",
    intro:
      "Real-time 3D turns a product page into a showroom and a launch into an event. We build with Three.js and React Three Fiber, optimise every model and shader, and keep the experience fast enough to rank.",
    outcomes: ["Launch pages people share because they are worth exploring", "Configurators that lift conversion on complex products", "Immersive brand moments that stay accessible and fast"],
    deliverables: ["Concept and storyboard", "3D modelling and optimisation", "Three.js and React Three Fiber build", "Shader and lighting design", "Scroll-driven and interactive choreography", "Performance tuning across devices"],
    process: [
      { title: "Concept", body: "A narrative and interaction model sketched before any geometry is built." },
      { title: "Model", body: "Assets built or converted to glTF, compressed with Draco and KTX2 textures." },
      { title: "Build", body: "Scenes composed in React Three Fiber with progressive loading and fallbacks." },
      { title: "Tune", body: "Frame budgets hit on mid-range phones, reduced-motion respected." },
    ],
    faqs: [
      { q: "Will a 3D site hurt our SEO?", a: "Not when it is built properly. Content stays in HTML, scenes load after the page is interactive and Core Web Vitals remain green." },
      { q: "Do we need existing 3D models?", a: "Helpful but not required. We model from CAD, photography or sketches." },
      { q: "Does it work on mobile?", a: "Yes. We build quality tiers so phones get a lighter scene that still looks right." },
    ],
    related: ["web-design", "motion-design", "ecommerce", "web-development"],
    startingAt: "$28,000",
    timeline: "8 to 12 weeks",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    group: "Build",
    short: "Product design for software people choose to open every day.",
    metaTitle: "UI/UX Design Agency | Product Design & Design Systems",
    metaDescription:
      "Arcbig is a UI/UX design agency designing SaaS products, apps and design systems grounded in user research. Prototypes, usability testing and developer-ready specs.",
    keywords: ["ui ux design agency", "product design agency", "saas design agency", "design system agency", "ux research agency"],
    h1: "A UI/UX design agency that designs for the tenth use, not the first",
    intro:
      "Onboarding is easy to make beautiful. Day ten is where products win or lose. We research how people actually work, design flows that get out of the way, and document systems your engineers can build from.",
    outcomes: ["Activation and retention that move in the right direction", "A design system that keeps velocity high", "Fewer support tickets from confused users"],
    deliverables: ["User research and journey mapping", "Information architecture", "Wireframes and interactive prototypes", "Visual UI design", "Design system and component library", "Usability testing"],
    process: [
      { title: "Research", body: "Interviews, analytics and support logs to find real friction." },
      { title: "Flow", body: "Task flows and low-fidelity prototypes tested early." },
      { title: "Design", body: "High-fidelity UI with motion and states fully specified." },
      { title: "Systemise", body: "Tokens, components and docs delivered in Figma and code." },
    ],
    faqs: [
      { q: "Do you work in Figma?", a: "Yes, with variables and components mirrored in a coded library when we build the front-end too." },
      { q: "Can you redesign an existing product?", a: "Yes. We start with an expert review and usage data, then prioritise the changes with the biggest impact." },
      { q: "How do you measure success?", a: "Activation, task completion, time to value and support volume, agreed at the start." },
    ],
    related: ["app-development", "web-design", "motion-design", "cro"],
    startingAt: "$32,000",
    timeline: "8 to 14 weeks",
  },
  {
    slug: "app-development",
    title: "App Development",
    group: "Build",
    short: "Cross-platform mobile and web apps with design baked in from day one.",
    metaTitle: "App Development Agency | iOS, Android & Web Apps",
    metaDescription:
      "Arcbig's app development agency designs and builds mobile and web applications with React Native and Next.js. From MVP to scale, with design and engineering in one team.",
    keywords: ["app development agency", "mobile app development company", "react native agency", "web app development agency", "mvp development agency"],
    h1: "An app development agency where designers and engineers share a desk",
    intro:
      "We build mobile and web apps with React Native and Next.js, in one team that designs and ships together. You get a product that feels considered, built on a stack your future hires already know.",
    outcomes: ["An MVP in market within a quarter", "Shared code across iOS, Android and web", "A codebase your in-house team can inherit"],
    deliverables: ["Product discovery and roadmap", "UX and UI design", "React Native or web app build", "Backend and API integration", "App store submission", "Analytics and crash monitoring"],
    process: [
      { title: "Discover", body: "Scope the smallest version that proves the idea, with a roadmap beyond it." },
      { title: "Design", body: "Flows, UI and a clickable prototype validated with users." },
      { title: "Build", body: "Two-week sprints with TestFlight and web previews each sprint." },
      { title: "Launch", body: "Store submission, monitoring and a plan for the first 90 days." },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "React Native covers most products with one codebase. We go native when hardware or performance demands it." },
      { q: "Do you build the backend?", a: "Yes, typically on serverless platforms with managed databases and auth." },
      { q: "Who owns the code?", a: "You do, from the first commit, in your own repository." },
    ],
    related: ["ui-ux-design", "web-development", "ai-automation", "motion-design"],
    startingAt: "$60,000",
    timeline: "12 to 20 weeks",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    group: "Build",
    short: "Practical AI features and workflow automation that save real hours.",
    metaTitle: "AI Agency | AI Integration & Marketing Automation",
    metaDescription:
      "Arcbig helps companies integrate AI into products and marketing: assistants, content pipelines, personalisation and workflow automation, built responsibly and measured honestly.",
    keywords: ["ai agency", "ai integration services", "marketing automation agency", "ai consulting agency", "llm application development"],
    h1: "An AI agency that ships useful features, not demos",
    intro:
      "We help teams put AI where it earns its keep: support assistants that resolve tickets, content pipelines that keep brand voice, personalisation that lifts conversion. Scoped tightly, evaluated honestly, built on models you can swap.",
    outcomes: ["Hours saved per week your team can point to", "AI features with evaluation and guardrails", "Automation across your marketing stack"],
    deliverables: ["Opportunity audit and prioritisation", "Prototype and evaluation", "Production integration", "Marketing workflow automation", "Governance and documentation", "Team training"],
    process: [
      { title: "Audit", body: "Where time goes and which tasks AI can genuinely take over." },
      { title: "Prototype", body: "A working proof in two weeks, measured against a baseline." },
      { title: "Integrate", body: "Production build with monitoring, fallbacks and evaluation." },
      { title: "Enable", body: "Training and playbooks so your team keeps improving it." },
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "We pick per use case and build so models can be swapped as the field changes." },
      { q: "How do you handle data privacy?", a: "Data stays in your accounts, with retention controls and a review of every third-party processor." },
      { q: "Can you automate our marketing operations?", a: "Yes, from lead routing and CRM hygiene to content localisation and reporting." },
    ],
    related: ["web-development", "content-marketing", "app-development", "email-marketing"],
    startingAt: "$18,000",
    timeline: "4 to 10 weeks",
  },
  {
    slug: "video-production",
    title: "Video Production",
    group: "Motion",
    short: "Brand films, product videos and social content, shot and finished in-house.",
    metaTitle: "Video Production Agency | Brand Films & Product Video",
    metaDescription:
      "Arcbig is a video production agency creating brand films, product videos, explainers and social-first content. Strategy, shoot, edit, motion and delivery under one roof.",
    keywords: ["video production agency", "brand video production", "product video agency", "corporate video production company", "social video production"],
    h1: "A video production agency with a strategy before the shot list",
    intro:
      "Video gets expensive when it is made without a plan for where it will live. We begin with the channels and messages, then shoot once and cut many, so one production day feeds months of content.",
    outcomes: ["A brand film that sets the tone for everything after it", "Product videos that shorten the sales cycle", "Dozens of social cuts from one shoot"],
    deliverables: ["Creative concept and script", "Pre-production and casting", "Shoot with full crew", "Edit, colour and sound", "Motion graphics and titles", "Deliverables cut for every channel"],
    process: [
      { title: "Concept", body: "Message, audience and distribution plan agreed before scripting." },
      { title: "Prep", body: "Script, storyboard, locations, talent and schedule." },
      { title: "Shoot", body: "Directed production days designed to capture multiple formats." },
      { title: "Finish", body: "Edit, grade, mix, motion and versioning for every platform." },
    ],
    faqs: [
      { q: "What does a brand film cost?", a: "From $25,000 for a one-day shoot with a small crew to six figures for multi-location productions." },
      { q: "Can you work with footage we already have?", a: "Yes. We regularly re-edit and re-grade existing libraries into new formats." },
      { q: "Do you provide captions and accessibility?", a: "Every delivery includes captions, transcripts and audio-described versions on request." },
    ],
    related: ["motion-design", "social-media", "content-marketing", "paid-media"],
    startingAt: "$25,000",
    timeline: "4 to 8 weeks",
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimisation",
    group: "Grow",
    short: "Research-led experimentation that turns existing traffic into more revenue.",
    metaTitle: "CRO Agency | Conversion Rate Optimisation & A/B Testing",
    metaDescription:
      "Arcbig's CRO agency runs research-driven experimentation programmes: analytics, user testing, hypotheses and A/B tests that raise conversion rate across websites and funnels.",
    keywords: ["cro agency", "conversion rate optimisation agency", "a/b testing agency", "landing page optimization", "conversion optimization services"],
    h1: "A CRO agency that tests ideas worth testing",
    intro:
      "Most testing programmes fail because they test button colours. Ours start with research: analytics, recordings, surveys and interviews. Then we test the hypotheses with the biggest potential and ship the winners.",
    outcomes: ["A measurable lift in conversion rate and revenue per visitor", "A backlog of validated insights about your customers", "Design decisions backed by evidence"],
    deliverables: ["Conversion audit", "Research and hypothesis backlog", "Experiment design and build", "A/B and multivariate testing", "Landing page design", "Monthly insight reports"],
    process: [
      { title: "Research", body: "Quantitative and qualitative research to find the biggest friction." },
      { title: "Prioritise", body: "Hypotheses scored by potential, confidence and ease." },
      { title: "Test", body: "Experiments built and run to statistical significance." },
      { title: "Ship", body: "Winners implemented permanently, learnings fed back into design." },
    ],
    faqs: [
      { q: "How much traffic do we need?", a: "Reliable A/B testing needs roughly 10,000 monthly visitors to the tested page. Below that we rely on research and iterative changes." },
      { q: "Which tools do you use?", a: "Analytics platforms, session recording tools and server-side testing frameworks that do not slow the page." },
      { q: "How quickly do we see results?", a: "First tests launch within four weeks. Compounding gains build over a six-month programme." },
    ],
    related: ["seo", "paid-media", "web-design", "ui-ux-design"],
    startingAt: "$5,500 / month",
    timeline: "6-month programme",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    group: "Grow",
    short: "Lifecycle flows and newsletters people open on purpose.",
    metaTitle: "Email Marketing Agency | Lifecycle, Automation & Newsletters",
    metaDescription:
      "Arcbig is an email marketing agency designing lifecycle automations, newsletters and campaigns on Klaviyo, HubSpot and Customer.io that drive retention and revenue.",
    keywords: ["email marketing agency", "klaviyo agency", "lifecycle marketing agency", "email automation services", "newsletter design agency"],
    h1: "An email marketing agency that treats the inbox with respect",
    intro:
      "Email is the only channel you own outright. We design lifecycle flows that feel personal, newsletters that earn a reply, and templates your team can ship without a developer.",
    outcomes: ["More revenue from the list you already have", "Automated flows that onboard, retain and win back", "Templates and a cadence your team can sustain"],
    deliverables: ["Lifecycle strategy and flow mapping", "Email design system and templates", "Copywriting", "Platform setup on Klaviyo, HubSpot or Customer.io", "Segmentation and personalisation", "Deliverability and reporting"],
    process: [
      { title: "Map", body: "Customer lifecycle mapped to moments where email changes behaviour." },
      { title: "Design", body: "A modular template system that renders well in every client." },
      { title: "Automate", body: "Flows built, tested and launched with segmentation." },
      { title: "Optimise", body: "Monthly testing of subject lines, timing and content." },
    ],
    faqs: [
      { q: "Which platforms do you work with?", a: "Klaviyo for e-commerce, HubSpot for B2B, Customer.io for product-led companies, and most others on request." },
      { q: "Can you improve our deliverability?", a: "Yes. We audit authentication, list hygiene and sending patterns before scaling volume." },
      { q: "Do you write the emails?", a: "Yes. Our writers work from your voice guide, with your approval on every send." },
    ],
    related: ["content-marketing", "ecommerce", "cro", "ai-automation"],
    startingAt: "$3,500 / month",
    timeline: "3-month minimum",
  },
];

export const serviceGroups = ["Brand", "Build", "Grow", "Motion"] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
