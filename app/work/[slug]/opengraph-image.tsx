import { work, getCaseStudy } from "@/data/work";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return work.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = getCaseStudy(slug);
  return renderOg(x?.title ?? "Work", x ? `Case study · ${x.client}` : "Work");
}
