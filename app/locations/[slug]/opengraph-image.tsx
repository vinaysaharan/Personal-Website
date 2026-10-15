import { locations, getLocation } from "@/data/locations";

export const dynamic = "force-static";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return locations.map((x) => ({ slug: x.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = getLocation(slug);
  return renderOg(x?.metaTitle ?? "Locations", x ? `${x.city} studio` : "Locations");
}
