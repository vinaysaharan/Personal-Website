import { industries, getIndustry } from "@/data/industries";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = getIndustry(slug);
  return renderOg(x?.metaTitle ?? "Industries", "Industry");
}
