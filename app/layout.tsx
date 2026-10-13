import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Creative Agency for Branding, Web Design, 3D & Growth`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["creative agency", "web design agency", "branding agency", "3d website agency", "seo agency", "motion design agency"],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | Creative Agency for Branding, Web Design, 3D & Growth`,
    description: site.description,
    images: [{ url: "/og", width: 1200, height: 630, alt: `${site.name} creative agency` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcbig",
    creator: "@arcbig",
    title: `${site.name} | Creative Agency`,
    description: site.description,
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: site.url },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  manifest: "/manifest.webmanifest",
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#f3f1ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <ViewTransition>
          <main id="main">{children}</main>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
