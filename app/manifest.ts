import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arcbig",
    short_name: "Arcbig",
    description: "Creative agency for branding, web design, 3D, motion and growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f1ea",
    theme_color: "#1226d9",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
