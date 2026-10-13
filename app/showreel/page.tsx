import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ShowreelPlayer } from "@/components/ShowreelPlayer";
import { Cta, PageHero } from "@/components/ui";

const title = "Showreel | Motion Rendered with Remotion";
const description = "Watch the Arcbig showreel, a video written as a React component and rendered in the browser with Remotion. The same code renders our MP4 exports.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/showreel", kicker: "Showreel", keywords: ["agency showreel", "remotion showreel", "programmatic video example"] });

export default function ShowreelPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Showreel", path: "/showreel" }])} />
      <PageHero crumbs={[{ name: "Showreel", href: "/showreel" }]} kicker="Showreel" title="A video that is also source code" lead="Every frame of this reel is a React render. Change a prop and the whole film updates. That is how we produce video at scale for clients." />
      <section className="container-x pb-8 reveal"><ShowreelPlayer /></section>
      <section className="container-x section grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 reveal">
          <h2 className="t-h2">How it is made</h2>
        </div>
        <div className="lg:col-span-7 grid gap-5 reveal text-[1.05rem]">
          <p>The composition lives in the <code className="t-meta bg-chalk-2 px-1">remotion/</code> folder of this site. Animation is driven by the current frame with interpolation and springs, never CSS transitions, so what you see in the browser is exactly what renders to file.</p>
          <p>Each scene is a sequence with its own timing. The statements, statistics and closing line are props, which means a client version with different numbers is a one-line change.</p>
          <p>Rendering to MP4 is a single command. We use the same approach to produce localised ad sets, personalised onboarding videos and automated reports for clients.</p>
          <Link href="/services/motion-design" className="link-arc">See our motion design service</Link>
        </div>
      </section>
      <Cta tone="ink" title="Want video that scales like software?" primary={{ label: "Talk to our motion team", href: "/contact" }} secondary={{ label: "Motion design", href: "/services/motion-design" }} />
    </>
  );
}
