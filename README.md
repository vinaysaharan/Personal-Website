# Arcbig — agency website

A multi-page creative agency site for **Arcbig**, built with Next.js 16, React 19, Tailwind CSS 4, Three.js via React Three Fiber, and Remotion.

- 133 statically generated pages: services, industries, case studies, insights, locations, team, glossary, careers, company and legal pages.
- SEO built in: per-page metadata, canonical URLs, Open Graph images generated at `/og`, JSON-LD (Organization, WebSite, Service, Article, FAQPage, BreadcrumbList, LocalBusiness, Person, DefinedTerm, JobPosting, HowTo), `sitemap.xml`, `robots.txt`, `llms.txt` for AI search.
- Three.js hero (`components/three/ArcScene.tsx`): decorative WebGL layer loaded after hydration, paused off-screen, static under `prefers-reduced-motion`.
- Remotion showreel (`remotion/Showreel.tsx`): plays in the browser through `@remotion/player` and renders to MP4 with the Remotion CLI.
- Motion: one orchestrated hero reveal, CSS scroll-driven reveals (native view timelines, progressive enhancement), React `ViewTransition` between pages.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## Remotion

```bash
npm run remotion:studio   # preview the composition
npm run remotion:render   # out/arcbig-showreel.mp4
```

## Content

All page content lives in `data/` as typed TypeScript. Add an entry to `data/services.ts`, `data/industries.ts`, `data/work.ts`, `data/insights.ts`, `data/locations.ts`, `data/team.ts` or `data/glossary.ts` and the route, sitemap entry, breadcrumbs and structured data are generated.

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the deployed origin so canonical URLs and the sitemap are correct.

## Design

Palette: chalk `#f3f1ea`, ink `#0e0e10`, Klein blue `#1226d9`, haze `#d9d6cb`, slate `#5b5d66`, with an acid flare `#e6ff4a` reserved for 3D highlights and dark-surface accents. Type: Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono (meta). The arch is the signature shape, used for media frames, the logo mark and the 3D scene.

## Skills consulted

Built following the guidance in these public skill repositories:

- `anthropics/skills` → `frontend-design` (distinctive, non-generic interfaces; one orchestrated motion moment; accessibility floor)
- `remotion-dev/skills` → `remotion-best-practices`, `remotion-markup` (frame-driven animation, `premountFor`, inline timing)
- `OpenAEC-Foundation/Three.js-Claude-Skill-Package` and `freshtechbro/claudedesignskills` (React Three Fiber patterns, disposal, DPR caps)
- `aevans-eng/seo-skill` (metadata, JSON-LD, sitemap and robots checklist)
- `GoogleChrome/modern-web-guidance` (scroll-driven animations, view transitions, Core Web Vitals)
