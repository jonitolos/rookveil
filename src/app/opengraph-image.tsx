import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rookveil — Web Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            rookveil
            <span style={{ color: "#8b5cf6" }}>.lt</span>
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#888888",
              letterSpacing: "0.05em",
            }}
          >
            Web Development Studio
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 16,
              color: "#555555",
            }}
          >
            Custom websites &bull; Vilnius, Lithuania
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
