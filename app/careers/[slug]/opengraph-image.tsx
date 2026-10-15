import { careers } from "@/data/pages";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return careers.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = careers.find((c) => c.slug === slug);
  return renderOg(x?.title ?? "Careers", "Careers");
}
