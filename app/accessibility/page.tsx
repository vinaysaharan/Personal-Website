import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({ title: "Accessibility Statement", description: "Arcbig's commitment to WCAG 2.2 AA accessibility on this website and in client work.", path: "/accessibility", keywords: ["accessibility statement", "wcag 2.2 aa website"] });

export default function Accessibility() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      updated="October 2026"
      intro="We build to WCAG 2.2 AA for clients, so we hold this site to the same standard."
      sections={[
        { heading: "What we have done", body: ["Semantic HTML with one H1 per page and a logical heading order. Visible focus states on every interactive element. Colour contrast above 4.5:1 for text. A skip link to the main content. All content available without JavaScript or WebGL."] },
        { heading: "Motion and 3D", body: ["Animation, scroll effects and the 3D hero respect the prefers-reduced-motion setting. The showreel only plays when you press play. Nothing flashes more than three times per second."] },
        { heading: "Known limitations", body: ["The 3D scene is decorative and hidden from assistive technology. If you find a page that is hard to use, tell us and we will fix it."] },
        { heading: "Feedback", body: ["Email accessibility@arcbig.com. We respond within five business days and treat accessibility reports as bugs with priority."] },
      ]}
    />
  );
}
