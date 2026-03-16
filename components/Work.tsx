"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { useIsMobile } from "@/lib/useIsMobile";

const PROJECT_IMAGES: Record<string, string> = {
    framixui: "/project-framixui.png",
    "auth-next": "/project-authnext.png",
    "hyperflux-theme": "/project-hyperflux.png",
    "n8n-agents": "/project-n8n.png",
};

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;
    const imageSrc = PROJECT_IMAGES[project.slug];
    const isMobile = useIsMobile();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 48 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "24px" : "64px",
                alignItems: "center",
                paddingBottom: isMobile ? "32px" : "48px",
                borderBottom: "0.5px solid #1A1A1A",
                marginBottom: isMobile ? "32px" : "48px",
                direction: isMobile ? "ltr" : isEven ? "ltr" : "rtl",
            }}
        >
            <div
                style={{
                    direction: "ltr",
                    position: "relative",
                    borderRadius: "6px",
                    overflow: "hidden",
                    border: "0.5px solid #2E2E2E",
                    aspectRatio: "16/9",
                    background: "#111111",
                }}
            >
                <img
                    src={imageSrc}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div
                    style={{
                        position: "absolute", top: "16px", left: "16px",
                        fontSize: "10px", letterSpacing: "0.14em", color: "#444444",
                        fontFamily: "var(--font-body)", textTransform: "uppercase",
                        background: "rgba(10,10,10,0.8)", padding: "4px 8px", borderRadius: "3px",
                    }}
                >
                    {String(index + 1).padStart(2, "0")}
                </div>
            </div>

            <div style={{ direction: "ltr" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
                    {project.stack.map((tech) => (
                        <span key={tech} style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)", border: "0.5px solid #2E2E2E", padding: "3px 8px", borderRadius: "3px" }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 style={{ fontSize: isMobile ? "clamp(24px, 6vw, 32px)" : "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.03em", fontFamily: "var(--font-display)", marginBottom: "1rem", lineHeight: 1.1 }}>
                    {project.title}
                </h3>

                <p style={{ fontSize: "13px", color: "#444444", fontFamily: "var(--font-body)", marginBottom: "0.5rem", letterSpacing: "0.02em", lineHeight: 1.6 }}>
                    <span style={{ color: "#00DC82", fontWeight: 500 }}>Problem — </span>
                    {project.problem}
                </p>

                <p style={{ fontSize: "13px", color: "#444444", fontFamily: "var(--font-body)", marginBottom: "1.5rem", letterSpacing: "0.02em", lineHeight: 1.6 }}>
                    <span style={{ color: "#888888", fontWeight: 500 }}>Key decision — </span>
                    {project.decision}
                </p>

                {project.metrics && (
                    <p style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#444444", fontFamily: "var(--font-body)", textTransform: "uppercase", marginBottom: "2rem", paddingLeft: "12px", borderLeft: "2px solid #00DC82" }}>
                        {project.metrics}
                    </p>
                )}

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#0A0A0A", textTransform: "uppercase", fontFamily: "var(--font-body)", background: "#00DC82", padding: "8px 20px", borderRadius: "3px", textDecoration: "none", fontWeight: 600, transition: "opacity 0.2s ease", display: "inline-block", flex: isMobile ? "1" : "unset", textAlign: "center" }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                        >
                            Live Demo
                        </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#888888", textTransform: "uppercase", fontFamily: "var(--font-body)", border: "0.5px solid #2E2E2E", padding: "8px 20px", borderRadius: "3px", textDecoration: "none", transition: "color 0.2s ease, border-color 0.2s ease", display: "inline-block", flex: isMobile ? "1" : "unset", textAlign: "center" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F5F0"; e.currentTarget.style.borderColor = "#00DC82"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#888888"; e.currentTarget.style.borderColor = "#2E2E2E"; }}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Work() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });
    const isMobile = useIsMobile();

    return (
        <section id="work" style={{ padding: isMobile ? "80px 20px" : "120px clamp(16px, 4vw, 48px)", maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: isMobile ? "48px" : "80px" }}
            >
                <p style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#00DC82", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "12px" }}>
                    Selected Work
                </p>
                <h2 style={{ fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.03em", fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
                    Things I have
                    <br />
                    <span style={{ color: "transparent", WebkitTextStroke: "1.5px #F5F5F0", display: "block" }}>
                        actually shipped.
                    </span>
                </h2>
            </motion.div>

            {PROJECTS.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
            ))}
        </section>
    );
}