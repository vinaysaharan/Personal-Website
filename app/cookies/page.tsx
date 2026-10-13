import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({ title: "Cookie Policy", description: "Which cookies the Arcbig website uses and how to control them.", path: "/cookies" });

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      updated="October 2026"
      intro="This site runs with almost no cookies. Here is the full list."
      sections={[
        { heading: "Strictly necessary", body: ["None are set by default. If we add a login or a form that needs session state, it will use a single first-party cookie that expires when you close the browser."] },
        { heading: "Analytics", body: ["We use privacy-focused, cookieless analytics that count page views without identifying you. No cross-site tracking is used."] },
        { heading: "Embedded content", body: ["Our showreel is rendered in the browser from code and sets no cookies. If we embed third-party video elsewhere, that provider may set cookies when you press play."] },
        { heading: "Your choices", body: ["Because we do not use tracking cookies, there is nothing to opt out of. You can block all cookies in your browser settings without affecting this site."] },
      ]}
    />
  );
}
