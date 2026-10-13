import Link from "next/link";
import type { ReactNode } from "react";
import type { FAQ } from "@/data/services";
import { getService } from "@/data/services";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="t-meta text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? <span aria-current="page">{it.name}</span> : <Link href={it.href} className="hover:underline">{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  kicker,
  title,
  lead,
  children,
  crumbs,
  tone = "chalk",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  crumbs?: { name: string; href: string }[];
  tone?: "chalk" | "klein" | "ink";
}) {
  const toneClass = tone === "klein" ? "on-klein" : tone === "ink" ? "on-ink" : "";
  return (
    <section className={`${toneClass} relative overflow-hidden`}>
      <div className="container-x pt-10 pb-16 md:pt-16 md:pb-24">
        {crumbs ? <div className="rise mb-10" style={{ ["--delay" as string]: "0ms" }}><Breadcrumbs items={crumbs} /></div> : null}
        {kicker ? <p className="t-mono text-muted mb-5 rise" style={{ ["--delay" as string]: "60ms" }}>{kicker}</p> : null}
        <h1 className="t-display-lg max-w-[16ch] rise" style={{ ["--delay" as string]: "120ms" }}>{title}</h1>
        {lead ? <p className="t-lead mt-8 text-muted rise" style={{ ["--delay" as string]: "220ms" }}>{lead}</p> : null}
        {children ? <div className="mt-10 rise" style={{ ["--delay" as string]: "300ms" }}>{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title, lead, align = "left" }: { kicker?: string; title: string; lead?: string; align?: "left" | "split" }) {
  if (align === "split") {
    return (
      <div className="grid gap-6 lg:grid-cols-12 items-end mb-12 md:mb-16 reveal">
        <div className="lg:col-span-7">
          {kicker ? <p className="t-mono text-muted mb-4">{kicker}</p> : null}
          <h2 className="t-h2">{title}</h2>
        </div>
        {lead ? <p className="lg:col-span-5 text-muted text-[1.05rem] lg:justify-self-end max-w-[40ch]">{lead}</p> : null}
      </div>
    );
  }
  return (
    <div className="mb-12 md:mb-16 reveal">
      {kicker ? <p className="t-mono text-muted mb-4">{kicker}</p> : null}
      <h2 className="t-h2 max-w-[18ch]">{title}</h2>
      {lead ? <p className="t-lead mt-6 text-muted">{lead}</p> : null}
    </div>
  );
}

/** Abstract arch tile used in place of photography: hue-driven gradient with a grain. */
export function ArchTile({ hue, label, className = "", tall = false }: { hue: number; label?: string; className?: string; tall?: boolean }) {
  return (
    <div
      className={`arch relative grain ${tall ? "aspect-[4/5]" : "aspect-[4/3]"} ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 50% 100%, oklch(0.62 0.2 ${hue}) 0%, oklch(0.42 0.16 ${hue}) 55%, oklch(0.2 0.05 ${hue}) 100%)`,
      }}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-20 300 C 60 120, 340 120, 420 300" fill="none" stroke="rgba(243,241,234,0.55)" strokeWidth="1" />
        <path d="M40 300 C 110 170, 290 170, 360 300" fill="none" stroke="rgba(243,241,234,0.35)" strokeWidth="1" />
        <path d="M100 300 C 150 220, 250 220, 300 300" fill="none" stroke="rgba(243,241,234,0.25)" strokeWidth="1" />
      </svg>
      {label ? <span className="absolute left-5 bottom-4 t-mono text-chalk">{label}</span> : null}
    </div>
  );
}

export function StatRow({ stats }: { stats: readonly { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 reveal">
      {stats.map((s) => (
        <div key={s.label} className="border-t border-line pt-5">
          <dd className="t-display-lg">{s.value}</dd>
          <dt className="text-muted mt-2">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function FaqList({ faqs }: { faqs: readonly FAQ[] }) {
  return (
    <div className="divide-y divide-[var(--line)] border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="faq group py-5">
          <summary className="flex items-start justify-between gap-6 t-h3">
            <span>{f.q}</span>
            <span className="faq-icon shrink-0 mt-1 text-klein" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" /></svg>
            </span>
          </summary>
          <p className="mt-4 text-muted max-w-[60ch]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({
  title = "Tell us what you are building",
  body = "Send a short brief. We reply within one business day with a point of view, a rough budget and the next step.",
  primary = { label: "Start a project", href: "/contact" },
  secondary = { label: "See our process", href: "/process" },
  tone = "klein",
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "klein" | "ink";
}) {
  return (
    <section className={`${tone === "klein" ? "on-klein" : "on-ink"} cv-auto`}>
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="t-display-lg max-w-[14ch]">{title}</h2>
            <p className="t-lead mt-6 text-muted">{body}</p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link href={primary.href} className="btn btn-primary">{primary.label}</Link>
            <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ slug, title, short, group }: { slug: string; title: string; short: string; group?: string }) {
  return (
    <Link href={`/services/${slug}`} className="card group block p-6 md:p-7 h-full">
      {group ? <p className="t-mono text-muted mb-6">{group}</p> : null}
      <h3 className="t-h3">{title}</h3>
      <p className="text-muted mt-3 text-[0.98rem]">{short}</p>
      <span className="link-arc inline-block mt-6 text-[0.95rem]">Explore {title}</span>
    </Link>
  );
}

export function WorkCard({ slug, client, title, hue, services, large = false }: { slug: string; client: string; title: string; hue: number; services?: string[]; large?: boolean }) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div className="reveal-mask">
        <ArchTile hue={hue} tall={large} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="t-mono text-muted">{client}</p>
          <h3 className={`${large ? "t-h2" : "t-h3"} mt-2 max-w-[22ch] group-hover:underline underline-offset-4 decoration-1`}>{title}</h3>
        </div>
      </div>
      {services ? <p className="t-meta text-muted mt-3">{services.map((s) => getService(s)?.title ?? s).join(" · ")}</p> : null}
    </Link>
  );
}

export function ArticleCard({ slug, title, excerpt, category, date, readTime }: { slug: string; title: string; excerpt: string; category: string; date: string; readTime: number }) {
  return (
    <Link href={`/insights/${slug}`} className="group block border-t border-line pt-6 h-full">
      <div className="flex items-center gap-3 t-mono text-muted">
        <span>{category}</span><span aria-hidden="true">·</span><span>{readTime} min</span>
      </div>
      <h3 className="t-h3 mt-4 group-hover:underline underline-offset-4 decoration-1">{title}</h3>
      <p className="text-muted mt-3 text-[0.98rem]">{excerpt}</p>
      <time dateTime={date} className="t-meta text-muted block mt-4">{date}</time>
    </Link>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const row = (ariaHidden: boolean) => (
    <div className="marquee__track" aria-hidden={ariaHidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className="t-display-lg whitespace-nowrap text-muted font-light">{t}<span className="inline-block mx-10 text-klein">◠</span></span>
      ))}
    </div>
  );
  return (
    <div className="marquee py-6">
      {row(false)}
      {row(true)}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-block border border-line rounded-full px-3 py-1 t-meta">{children}</span>;
}
