import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({ title: "Terms of Use", description: "Terms governing use of the Arcbig website and its content.", path: "/terms" });

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      updated="October 2026"
      intro="Short version: the site is here to help you learn about our work. Use it fairly and we are both happy."
      sections={[
        { heading: "Using this site", body: ["You may browse, link to and quote from this site for personal and business research. You may not scrape it at scale, republish our content as your own, or use it to train models for commercial resale without permission."] },
        { heading: "Intellectual property", body: ["Text, design, code and imagery on this site belong to Arcbig or our clients. Client work is shown with permission and remains the property of the client where contracts say so."] },
        { heading: "Accuracy", body: ["We keep the site current, but prices, timelines and results are indicative and may change. Project terms are set out in a signed proposal, which takes precedence over anything here."] },
        { heading: "Liability", body: ["The site is provided as is. To the extent permitted by law, we are not liable for losses arising from your use of it."] },
        { heading: "Governing law", body: ["These terms are governed by the laws of the State of California. Disputes are subject to the exclusive jurisdiction of the courts of San Francisco County."] },
      ]}
    />
  );
}
