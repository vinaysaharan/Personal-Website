import React from "react";
import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

export type ShowreelProps = {
  headline: string;
  statements: string[];
  stats: { value: string; label: string }[];
  closing: string;
  fontFamily: string;
};

const KLEIN = "#1226d9";
const CHALK = "#f3f1ea";
const INK = "#0e0e10";
const FLARE = "#e6ff4a";

export const showreelDefaults: ShowreelProps = {
  headline: "arcbig",
  statements: ["Brands people recognise.", "Websites that rank and convert.", "3D and motion that earn attention."],
  stats: [
    { value: "240+", label: "brands launched" },
    { value: "12", label: "cities" },
    { value: "4.9", label: "client rating" },
  ],
  closing: "Ideas, built big.",
  fontFamily: "var(--font-display), 'Bricolage Grotesque', system-ui, sans-serif",
};

/* Scene 1: the arc draws itself, then the wordmark rises. */
const Opening: React.FC<{ headline: string; fontFamily: string }> = ({ headline, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const draw = interpolate(frame, [0, 40], [1, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const rise = spring({ frame: frame - 24, fps, config: { damping: 18, stiffness: 120 } });
  const bg = interpolate(frame, [70, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: CHALK, justifyContent: "center", alignItems: "center", fontFamily }}>
      <AbsoluteFill style={{ backgroundColor: KLEIN, opacity: bg }} />
      <svg width={520} height={520} viewBox="0 0 32 32" fill="none" style={{ position: "absolute" }}>
        <path
          d="M4 28V18C4 11.37 9.37 6 16 6s12 5.37 12 12v10"
          stroke={bg > 0.5 ? CHALK : KLEIN}
          strokeWidth="5"
          strokeLinecap="square"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={draw}
        />
        <rect x="12" y="20" width="8" height="8" fill={bg > 0.5 ? CHALK : KLEIN} style={{ opacity: rise }} />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 120,
          fontSize: 140,
          fontWeight: 600,
          letterSpacing: "-0.05em",
          color: bg > 0.5 ? CHALK : INK,
          opacity: rise,
          translate: `0 ${(1 - rise) * 40}px`,
        }}
      >
        {headline}
      </div>
    </AbsoluteFill>
  );
};

/* Scene 2: three statements, each wiping in from the left. */
const Statements: React.FC<{ statements: string[]; fontFamily: string }> = ({ statements, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: KLEIN, color: CHALK, padding: 120, justifyContent: "center", fontFamily }}>
      {statements.map((s, i) => {
        const local = frame - i * 22;
        const p = spring({ frame: local, fps, config: { damping: 20, stiffness: 110 } });
        const clip = interpolate(p, [0, 1], [100, 0]);
        return (
          <div
            key={s}
            style={{
              fontSize: 112,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: 24,
              clipPath: `inset(0 ${clip}% 0 0)`,
              translate: `0 ${(1 - p) * 30}px`,
              opacity: p,
            }}
          >
            {s}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

/* Scene 3: numbers count up. */
const Stats: React.FC<{ stats: ShowreelProps["stats"]; fontFamily: string }> = ({ stats, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: CHALK, color: INK, padding: 120, justifyContent: "flex-end", fontFamily }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 60 }}>
        {stats.map((s, i) => {
          const p = spring({ frame: frame - i * 10, fps, config: { damping: 22, stiffness: 90 } });
          const numeric = parseFloat(s.value.replace(/[^0-9.]/g, ""));
          const suffix = s.value.replace(/[0-9.]/g, "");
          const shown = Number.isFinite(numeric) ? (Number.isInteger(numeric) ? Math.round(numeric * p) : (numeric * p).toFixed(1)) : s.value;
          return (
            <div key={s.label} style={{ borderTop: `3px solid ${KLEIN}`, paddingTop: 30, opacity: p, translate: `0 ${(1 - p) * 40}px` }}>
              <div style={{ fontSize: 150, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.95 }}>
                {shown}
                {suffix}
              </div>
              <div style={{ fontSize: 36, marginTop: 20, color: "#5b5d66", fontFamily: "system-ui, sans-serif" }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* Scene 4: closing line on ink with the flare accent. */
const Closing: React.FC<{ closing: string; fontFamily: string }> = ({ closing, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame, fps, config: { damping: 16, stiffness: 100 } });
  const arc = interpolate(frame, [10, 50], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  return (
    <AbsoluteFill style={{ backgroundColor: INK, color: CHALK, justifyContent: "center", alignItems: "center", fontFamily }}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{ position: "absolute" }}>
        <path d="M-100 1080 C 400 200, 1520 200, 2020 1080" fill="none" stroke={FLARE} strokeWidth={10} pathLength={1} strokeDasharray={1} strokeDashoffset={arc} />
      </svg>
      <div style={{ fontSize: 160, fontWeight: 600, letterSpacing: "-0.05em", opacity: p, scale: `${0.9 + p * 0.1}` }}>{closing}</div>
      <div style={{ position: "absolute", bottom: 90, fontSize: 32, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "ui-monospace, monospace", color: FLARE, opacity: p }}>
        arcbig.com
      </div>
    </AbsoluteFill>
  );
};

export const Showreel: React.FC<ShowreelProps> = (props) => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={3 * fps} premountFor={fps}>
        <Opening headline={props.headline} fontFamily={props.fontFamily} />
      </Sequence>
      <Sequence from={3 * fps} durationInFrames={3 * fps} premountFor={fps}>
        <Statements statements={props.statements} fontFamily={props.fontFamily} />
      </Sequence>
      <Sequence from={6 * fps} durationInFrames={2 * fps} premountFor={fps}>
        <Stats stats={props.stats} fontFamily={props.fontFamily} />
      </Sequence>
      <Sequence from={8 * fps} durationInFrames={2 * fps} premountFor={fps}>
        <Closing closing={props.closing} fontFamily={props.fontFamily} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const SHOWREEL = { fps: 30, durationInFrames: 300, width: 1920, height: 1080 } as const;
