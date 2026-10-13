import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({ title: "Privacy Policy", description: "How Arcbig collects, uses and protects personal data across its website and services.", path: "/privacy", noIndex: false });

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="October 2026"
      intro="We collect as little as we can, keep it only as long as we need, and never sell it. This page explains the details."
      sections={[
        { heading: "What we collect", body: ["When you contact us, we receive the information you send: your name, email, company and the content of your message. When you browse the site, our analytics record anonymised page views and device information without cookies that identify you.", "We do not collect payment details through this website."] },
        { heading: "How we use it", body: ["To reply to enquiries, to run and improve this website, and, where you have agreed, to send occasional updates about our work. We do not use your data for automated decision-making."] },
        { heading: "Who we share it with", body: ["Service providers who host our website, email and analytics, under contracts that limit their use of the data to our instructions. We do not sell personal data to anyone."] },
        { heading: "How long we keep it", body: ["Enquiry data is kept for up to three years after our last contact. Analytics data is aggregated and retained for 26 months."] },
        { heading: "Your rights", body: ["You can ask for a copy of your data, ask us to correct or delete it, or object to our processing. Email privacy@arcbig.com and we will respond within 30 days. If you are in the EU or UK, you may also complain to your supervisory authority."] },
        { heading: "Contact", body: ["Arcbig Studio Ltd., 48 Bluxome Street, San Francisco, CA 94107. privacy@arcbig.com."] },
      ]}
    />
  );
}
