import { glossary, getTerm } from "@/data/glossary";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return glossary.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = getTerm(slug);
  return renderOg(x ? `What is ${x.term}?` : "Glossary", "Glossary");
}
