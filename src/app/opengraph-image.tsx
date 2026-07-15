import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f7f6",
          color: "#101816",
          padding: 72,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#0b6b4f",
            }}
          />
          <div style={{ fontSize: 28, color: "#0b6b4f" }}>
            operational · open to new roles
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>
            {site.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 40, color: "#0b6b4f", marginTop: 12 }}>
            {site.role}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#57625e" }}>
          AWS · Kubernetes · CI/CD · production-first infrastructure
        </div>
      </div>
    ),
    size,
  );
}
