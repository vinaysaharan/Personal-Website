import { services, getService } from "@/data/services";
import { industries, getIndustry } from "@/data/industries";
import { work, getCaseStudy } from "@/data/work";
import { articles, getArticle } from "@/data/insights";
import { locations, getLocation } from "@/data/locations";
import { team, getPerson } from "@/data/team";
import { glossary, getTerm } from "@/data/glossary";

export { services, industries, work, articles, locations, team, glossary };
export { getService, getIndustry, getCaseStudy, getArticle, getLocation, getPerson, getTerm };

export function servicesFor(slugs: readonly string[]) {
  return slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
}
export function industriesFor(slugs: readonly string[]) {
  return slugs.map(getIndustry).filter((s): s is NonNullable<typeof s> => Boolean(s));
}
export function workFor(slugs: readonly string[]) {
  return slugs.map(getCaseStudy).filter((s): s is NonNullable<typeof s> => Boolean(s));
}
export function articlesFor(slugs: readonly string[]) {
  return slugs.map(getArticle).filter((s): s is NonNullable<typeof s> => Boolean(s));
}
export function termsFor(slugs: readonly string[]) {
  return slugs.map(getTerm).filter((s): s is NonNullable<typeof s> => Boolean(s));
}

export function workByService(slug: string) {
  return work.filter((w) => w.services.includes(slug));
}
export function workByIndustry(slug: string) {
  return work.filter((w) => w.industry === slug);
}
export function articlesByAuthor(slug: string) {
  return articles.filter((a) => a.author === slug);
}
export function articlesByCategory(cat: string) {
  return articles.filter((a) => a.category === cat);
}
export function industriesByService(slug: string) {
  return industries.filter((i) => i.services.includes(slug));
}
export function teamByLocation(slug: string) {
  return team.filter((p) => p.location === slug);
}
export function sortedArticles() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
