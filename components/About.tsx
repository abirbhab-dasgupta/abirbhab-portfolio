"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

const TRAITS = [
    { label: "Approach", value: "Research → Blueprint → Design → Ship" },
    { label: "Stack", value: "Next.js · TypeScript · React · Node.js · PostgreSQL · Python · Tailwind · Git" },
];

const EDUCATION = [
    { institution: "Adamas University", degree: "B.Tech Computer Science & Engineering", period: "2024 – 2028", accent: true },
    { institution: "PM Shri Kendriya Vidyalaya Birbhum", degree: "Higher Secondary — CBSE", period: "Graduated 2024", accent: false },
];

export default function About() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });
    const contentRef = useRef(null);
    const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
    const isMobile = useIsMobile();

    return (
        <section
            id="about"
            style={{
                padding: isMobile ? "80px 20px" : "120px clamp(16px, 4vw, 48px)",
                borderTop: "0.5px solid #1A1A1A",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: isMobile ? "48px" : "80px" }}
                >
                    <p style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#00DC82", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "12px" }}>
                        About
                    </p>
                    <h2 style={{ fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.03em", fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
                        The person behind
                        <br />
                        <span style={{ color: "transparent", WebkitTextStroke: "1.5px #F5F5F0" }}>the code.</span>
                    </h2>
                </motion.div>

                <motion.div
                    ref={contentRef}
                    initial={{ opacity: 0, y: 32 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "48px" : "80px",
                        alignItems: "flex-start",
                    }}
                >
                    {/* Left */}
                    <div>
                        <p style={{ fontSize: isMobile ? "15px" : "16px", color: "#888888", fontFamily: "var(--font-body)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            I don't build things to pad a resume. I look for{" "}
                            <span style={{ color: "#F5F5F0" }}>real problems</span>{" "}
                            worth solving — then I research them, sketch a blueprint, wire up the design, and ship something that actually works.
                        </p>
                        <p style={{ fontSize: isMobile ? "15px" : "16px", color: "#888888", fontFamily: "var(--font-body)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            My interest sits at the intersection of{" "}
                            <span style={{ color: "#F5F5F0" }}>frontend engineering</span>,{" "}
                            <span style={{ color: "#00DC82" }}>AI automation</span>, and product thinking. I've built UI libraries, production auth systems, and AI agents that automate real workflows — not just tutorial clones.
                        </p>
                        <p style={{ fontSize: isMobile ? "15px" : "16px", color: "#888888", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
                            I'm looking for an internship where I can learn how{" "}
                            <span style={{ color: "#F5F5F0", fontWeight: 400 }}>real products are architected and shipped</span>{" "}
                            — not just how to write features, but how to think about systems from the ground up.
                        </p>

                        {/* Education on mobile — shown below copy */}
                        {isMobile && (
                            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "0.5px solid #1A1A1A" }}>
                                <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "16px" }}>
                                    Education
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {EDUCATION.map((edu) => (
                                        <div key={edu.institution}>
                                            <p style={{ fontSize: "14px", color: edu.accent ? "#F5F5F0" : "#888888", fontFamily: "var(--font-body)", fontWeight: edu.accent ? 500 : 400, marginBottom: "2px" }}>
                                                {edu.institution}
                                            </p>
                                            <p style={{ fontSize: "12px", color: "#444444", fontFamily: "var(--font-body)", marginBottom: "2px" }}>
                                                {edu.degree}
                                            </p>
                                            <p style={{ fontSize: "11px", color: "#444444", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                                                {edu.period}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right */}
                    <div>
                        {!isMobile && (
                            <div style={{ marginBottom: "0px", borderBottom: "0.5px solid #1A1A1A", paddingBottom: "32px" }}>
                                <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "16px" }}>
                                    Education
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {EDUCATION.map((edu) => (
                                        <div key={edu.institution} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                                            <div>
                                                <p style={{ fontSize: "14px", color: edu.accent ? "#F5F5F0" : "#888888", fontFamily: "var(--font-body)", fontWeight: edu.accent ? 500 : 400, marginBottom: "2px" }}>
                                                    {edu.institution}
                                                </p>
                                                <p style={{ fontSize: "12px", color: "#444444", fontFamily: "var(--font-body)" }}>
                                                    {edu.degree}
                                                </p>
                                            </div>
                                            <span style={{ fontSize: "11px", color: "#444444", fontFamily: "var(--font-body)", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
                                                {edu.period}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                            {TRAITS.map((trait, i) => (
                                <motion.div
                                    key={trait.label}
                                    initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
                                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "24px 0", borderBottom: "0.5px solid #1A1A1A" }}
                                >
                                    <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                                        {trait.label}
                                    </span>
                                    <span style={{ fontSize: isMobile ? "14px" : "15px", color: "#888888", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>
                                        {trait.value}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
        </section>
    );
}