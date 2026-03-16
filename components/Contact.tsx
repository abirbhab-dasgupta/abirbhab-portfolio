"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSON } from "@/lib/constants";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });
    const contentRef = useRef(null);
    const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
    const isMobile = useIsMobile();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(PERSON.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section
            id="contact"
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
                        Contact
                    </p>
                    <h2 style={{ fontSize: isMobile ? "clamp(28px, 8vw, 48px)" : "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.03em", fontFamily: "var(--font-display)", lineHeight: 1.05 }}>
                        Open to internships.
                        <br />
                        <span style={{ color: "transparent", WebkitTextStroke: "1.5px #F5F5F0" }}>Let's talk.</span>
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
                    <div>
                        <p style={{ fontSize: isMobile ? "15px" : "16px", color: "#888888", fontFamily: "var(--font-body)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                            I'm actively looking for Summer 2026 internship opportunities.
                            If you're building something interesting and need someone who
                            can ship — reach out. I typically reply within 24 hours.
                        </p>

                        <button
                            onClick={handleCopyEmail}
                            style={{ display: "flex", alignItems: "center", gap: "12px", background: "transparent", border: "0.5px solid #2E2E2E", borderRadius: "4px", padding: "16px 24px", cursor: "pointer", width: "100%", marginBottom: "12px", transition: "border-color 0.2s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00DC82"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2E2E2E"; }}
                        >
                            <span style={{ flex: 1, textAlign: "left", fontSize: isMobile ? "12px" : "14px", color: "#888888", fontFamily: "var(--font-body)", letterSpacing: "0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {PERSON.email}
                            </span>
                            <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: copied ? "#00DC82" : "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "color 0.2s ease", flexShrink: 0 }}>
                                {copied ? "Copied ✓" : "Copy"}
                            </span>
                        </button>

                        <p style={{ fontSize: "11px", color: "#333333", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                            Click to copy email address
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                        {[
                            { label: "GitHub", value: "@abirbhab-dasgupta", href: PERSON.github, description: "See what I'm building" },
                            { label: "LinkedIn", value: "@abirbhab", href: PERSON.linkedin, description: "Professional profile" },
                            { label: "Twitter", value: "@Abirbhab_24", href: `https://twitter.com/${PERSON.twitterHandle}`, description: "Building in public" },
                        ].map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
                                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "0.5px solid #1A1A1A", textDecoration: "none", transition: "all 0.2s ease", cursor: "pointer" }}
                                onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "8px"; e.currentTarget.style.borderBottomColor = "#2E2E2E"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0px"; e.currentTarget.style.borderBottomColor = "#1A1A1A"; }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                                        {link.label}
                                    </span>
                                    <span style={{ fontSize: isMobile ? "14px" : "15px", color: "#888888", fontFamily: "var(--font-body)" }}>
                                        {link.value}
                                    </span>
                                </div>
                                {!isMobile && (
                                    <span style={{ fontSize: "11px", color: "#333333", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                                        {link.description} →
                                    </span>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={contentInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{ marginTop: isMobile ? "48px" : "80px", paddingTop: "40px", borderTop: "0.5px solid #1A1A1A", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: "12px" }}
                >
                    <span style={{ fontSize: "12px", color: "#333333", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                        © 2026 Abirbhab Dasgupta.
                    </span>
                    <span style={{ fontSize: "12px", color: "#333333", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                        Kolkata, India · IST
                    </span>
                </motion.div>
            </div>
        </section>
    );
}