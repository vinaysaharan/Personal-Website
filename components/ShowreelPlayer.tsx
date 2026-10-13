"use client";

import dynamic from "next/dynamic";
import { useCallback, type ComponentType } from "react";
import { ArcMark } from "./ArcMark";
import { Showreel, showreelDefaults, SHOWREEL } from "@/remotion/Showreel";

const Player = dynamic(() => import("@remotion/player").then((m) => m.Player), { ssr: false });

/**
 * In-browser showreel rendered with Remotion's Player.
 * The same composition renders to MP4 with `npm run remotion:render`.
 */
export function ShowreelPlayer() {
  const renderPoster = useCallback(
    () => (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-klein text-chalk">
        <ArcMark size={64} />
        <span className="t-mono">Play the showreel · 10s</span>
      </div>
    ),
    []
  );
  return (
    <div className="arch bg-ink relative aspect-video w-full" style={{ containerType: "inline-size" }}>
      <Player
          component={Showreel as unknown as ComponentType<Record<string, unknown>>}
          inputProps={showreelDefaults}
          durationInFrames={SHOWREEL.durationInFrames}
          fps={SHOWREEL.fps}
          compositionWidth={SHOWREEL.width}
          compositionHeight={SHOWREEL.height}
          controls
          loop
          clickToPlay
          style={{ width: "100%", height: "100%" }}
          acknowledgeRemotionLicense
          renderPoster={renderPoster}
          showPosterWhenUnplayed
          showPosterWhenEnded
        />
    </div>
  );
}
