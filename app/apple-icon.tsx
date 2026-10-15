import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1226d9" }}>
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          <path d="M4 28V18C4 11.37 9.37 6 16 6s12 5.37 12 12v10" stroke="#f3f1ea" strokeWidth="5" />
          <rect x="12" y="20" width="8" height="8" fill="#f3f1ea" />
        </svg>
      </div>
    ),
    size
  );
}
