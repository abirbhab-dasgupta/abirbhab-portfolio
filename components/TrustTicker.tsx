"use client";

import React from "react";
import { TRUST_TOKENS } from "@/lib/constants";

const ACHIEVEMENTS = ["Open Source", "Automation Agents", "Component Library"];

export default function TrustTicker() {
    const doubled = [...TRUST_TOKENS, ...TRUST_TOKENS];

    return (
        <section
            style={{
                borderTop: "0.5px solid #1A1A1A",
                borderBottom: "0.5px solid #1A1A1A",
                overflow: "hidden",
                padding: "20px 0",
                position: "relative",
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "120px",
                    background: "linear-gradient(to right, #0A0A0A, transparent)",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "120px",
                    background: "linear-gradient(to left, #0A0A0A, transparent)",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    display: "flex",
                    width: "max-content",
                    animation: "ticker 25s linear infinite",
                }}
            >
                {doubled.map((token, i) => {
                    const isAchievement = ACHIEVEMENTS.includes(token);
                    return (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexShrink: 0,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "11px",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontFamily: "var(--font-body)",
                                    color: isAchievement ? "#00DC82" : "#444444",
                                    fontWeight: isAchievement ? 500 : 400,
                                    padding: "0 28px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {token}
                            </span>
                            <span
                                style={{
                                    width: "3px",
                                    height: "3px",
                                    borderRadius: "50%",
                                    background: isAchievement ? "#00DC82" : "#2E2E2E",
                                    flexShrink: 0,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="ticker"] {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}