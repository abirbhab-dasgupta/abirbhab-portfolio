import { ImageResponse } from "next/og";
import { PERSON } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${PERSON.name} — ${PERSON.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          color: "#F5F5F0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00DC82",
            }}
          />
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.14em",
              color: "#00DC82",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Available for internship
          </div>
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {PERSON.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#888888",
            marginTop: "24px",
          }}
        >
          {PERSON.title} · Building with Next.js, TypeScript & AI
        </div>
      </div>
    ),
    { ...size }
  );
}