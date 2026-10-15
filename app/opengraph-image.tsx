import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Arcbig creative agency";

export default function Image() {
  return renderOg("Ideas, built big.", "Creative agency");
}
