import { services, getService } from "@/data/services";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = getService(slug);
  return renderOg(x?.metaTitle ?? "Services", x?.group ?? "Services");
}
