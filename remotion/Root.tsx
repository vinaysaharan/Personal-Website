import React from "react";
import { Composition } from "remotion";
import { Showreel, showreelDefaults, SHOWREEL } from "./Showreel";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Showreel"
    component={Showreel}
    durationInFrames={SHOWREEL.durationInFrames}
    fps={SHOWREEL.fps}
    width={SHOWREEL.width}
    height={SHOWREEL.height}
    defaultProps={{ ...showreelDefaults, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
  />
);
