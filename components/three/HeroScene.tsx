"use client";

import dynamic from "next/dynamic";

const ArcScene = dynamic(() => import("./ArcScene"), { ssr: false, loading: () => null });

/** Client wrapper so the WebGL bundle only loads after hydration and never blocks LCP. */
export function HeroScene({ className = "" }: { className?: string }) {
  return <ArcScene className={className} />;
}
