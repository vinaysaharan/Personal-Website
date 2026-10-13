import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "Arcbig. Ideas, built big.").slice(0, 120);
  const kicker = (searchParams.get("kicker") ?? "Creative agency").slice(0, 60);
  const size = title.length > 70 ? 56 : title.length > 40 ? 72 : 92;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#1226d9",
          color: "#f3f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <path d="M4 28V18C4 11.37 9.37 6 16 6s12 5.37 12 12v10" stroke="#f3f1ea" strokeWidth="5" />
            <rect x="12" y="20" width="8" height="8" fill="#f3f1ea" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>arcbig</div>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", opacity: 0.7, marginLeft: 24 }}>{kicker}</div>
        </div>
        <div style={{ fontSize: size, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.8 }}>
          <span>arcbig.com</span>
          <span>Branding · Web · 3D · Motion · Growth</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
