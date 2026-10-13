"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";

type State = "idle" | "sent";

/**
 * No backend is wired yet: the form composes a mailto so enquiries still arrive.
 * Swap the submit handler for a server action or a form service when ready.
 */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company")}`,
      `Email: ${fd.get("email")}`,
      `Interested in: ${fd.getAll("services").join(", ") || "Not sure yet"}`,
      `Budget: ${fd.get("budget")}`,
      "",
      String(fd.get("brief") ?? ""),
    ];
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${fd.get("name")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="card p-8" role="status">
        <h3 className="t-h3">Thanks. Your email client should have opened.</h3>
        <p className="text-slate mt-3">If it did not, write to us directly at <a href={`mailto:${site.email}`} className="text-ink underline">{site.email}</a>. We reply within one business day.</p>
      </div>
    );
  }

  const field = "w-full bg-transparent border-b border-haze focus:border-ink py-3 outline-none transition-colors placeholder:text-slate/70";

  return (
    <form onSubmit={onSubmit} className="grid gap-8" aria-label="Project enquiry">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-1 t-mono text-slate">Name<input name="name" required autoComplete="name" className={`${field} font-sans normal-case tracking-normal text-[1.05rem] text-ink`} placeholder="Your name" /></label>
        <label className="grid gap-1 t-mono text-slate">Company<input name="company" autoComplete="organization" className={`${field} font-sans normal-case tracking-normal text-[1.05rem] text-ink`} placeholder="Company" /></label>
      </div>
      <label className="grid gap-1 t-mono text-slate">Work email<input name="email" type="email" required autoComplete="email" className={`${field} font-sans normal-case tracking-normal text-[1.05rem] text-ink`} placeholder="you@company.com" /></label>

      <fieldset>
        <legend className="t-mono text-slate mb-3">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <label key={s.slug} className="cursor-pointer">
              <input type="checkbox" name="services" value={s.title} className="peer sr-only" />
              <span className="inline-block border border-haze rounded-full px-4 py-2 text-[0.95rem] peer-checked:bg-ink peer-checked:text-chalk peer-checked:border-ink peer-focus-visible:outline-3 peer-focus-visible:outline-klein transition-colors">{s.title}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-1 t-mono text-slate">Budget range
        <select name="budget" className={`${field} font-sans normal-case tracking-normal text-[1.05rem] text-ink`} defaultValue="">
          <option value="" disabled>Select a range</option>
          <option>Under $25k</option>
          <option>$25k to $50k</option>
          <option>$50k to $100k</option>
          <option>$100k to $250k</option>
          <option>Over $250k</option>
          <option>Monthly retainer</option>
        </select>
      </label>

      <label className="grid gap-1 t-mono text-slate">The brief
        <textarea name="brief" required rows={5} className={`${field} font-sans normal-case tracking-normal text-[1.05rem] text-ink resize-y`} placeholder="What are you building, who is it for, and when does it need to exist?" />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">Send the brief</button>
        <p className="t-meta text-slate">We reply within one business day.</p>
      </div>
    </form>
  );
}
