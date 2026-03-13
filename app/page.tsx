export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Geist", "Inter", system-ui, sans-serif',
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "left",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(0, 220, 130, 0.08)",
            border: "0.5px solid rgba(0, 220, 130, 0.25)",
            borderRadius: "4px",
            padding: "4px 10px",
            marginBottom: "2rem",
          }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#00DC82",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Build in progress
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#F5F5F0",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Something is
          <br />
          being crafted.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "15px",
            color: "#888888",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            maxWidth: "420px",
          }}
        >
          A new portfolio is under active development.
          <br />
          Check back soon — it will be worth the wait.
        </p>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#2E2E2E",
            marginBottom: "2rem",
          }}
        />

        {/* Meta rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { label: "Engineer", value: "Abirbhab Dasgupta", accent: true },
            { label: "Stack", value: "Next.js · TypeScript · Tailwind" },
            { label: "Status", value: "Active development" },
            { label: "ETA", value: "Soon" },
          ].map(({ label, value, accent }) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  color: "#444444",
                  textTransform: "uppercase",
                  minWidth: "80px",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: accent ? "#00DC82" : "#888888",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "11px",
          letterSpacing: "0.06em",
          color: "#2E2E2E",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        abirbhabdasgupta.vercel.app
      </div>

      {/* Pulse animation */}
      <style>{`
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00DC82;
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </main>
  );
}