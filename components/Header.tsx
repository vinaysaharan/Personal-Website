"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { Wordmark } from "./ArcMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "bg-[color-mix(in_oklab,var(--chalk)_88%,transparent)] backdrop-blur-md border-b border-haze" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" aria-label="Arcbig home" className="text-ink">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-arc text-[0.95rem] ${active ? "text-klein" : "text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary ml-2">
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center gap-2 t-mono text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="relative block w-6 h-3">
            <span className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-[2px] w-6 bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-chalk border-t border-haze overflow-auto"
      >
        <nav aria-label="Mobile" className="container-x py-8 flex flex-col gap-2">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="t-h2 py-3 border-b border-haze">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary self-start mt-6">
            Start a project
          </Link>
          <div className="mt-10 grid gap-1 t-meta text-slate">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
