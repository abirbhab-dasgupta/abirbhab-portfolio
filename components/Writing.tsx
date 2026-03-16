"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";


function BlogPostItem({
    post,
    index,
}: {
    post: { title: string; description: string; url: string; date: string; readTime: string };
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.a
            ref={ref}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "center",
                padding: "32px 0",
                borderBottom: "0.5px solid #1A1A1A",
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = "12px";
                e.currentTarget.style.borderBottomColor = "#2E2E2E";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = "0px";
                e.currentTarget.style.borderBottomColor = "#1A1A1A";
            }}
        >
            <div>
                <p style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: "#444444",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    marginBottom: "8px",
                }}>
                    {post.date} · {post.readTime}
                </p>
                <h3 style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                }}>
                    {post.title}
                </h3>
                <p style={{
                    fontSize: "14px",
                    color: "#888888",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.6,
                    maxWidth: "600px",
                }}>
                    {post.description}
                </p>
            </div>
            <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "0.5px solid #2E2E2E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "#444444",
                fontSize: "16px",
                transition: "all 0.2s ease",
            }}>
                →
            </div>
        </motion.a>
    );
}

export default function Writing() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    return (
        <section
            id="writing"
            style={{
                padding: "120px clamp(16px, 4vw, 48px)",
                borderTop: "0.5px solid #1A1A1A",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "64px" }}
                >
                    <p style={{
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        color: "#00DC82",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                        marginBottom: "12px",
                    }}>
                        Writing
                    </p>
                    <div style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "var(--foreground)",
                            letterSpacing: "-0.03em",
                            fontFamily: "var(--font-display)",
                            lineHeight: 1.1,
                        }}>
                            Thinking out{" "}
                            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #F5F5F0" }}>
                                loud.
                            </span>
                        </h2>
                        <a
                            href="https://abirbhabdasgupta.hashnode.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                color: "#444444",
                                textTransform: "uppercase",
                                fontFamily: "var(--font-body)",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                                paddingBottom: "8px",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#00DC82"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "#444444"; }}
                        >
                            All posts →
                        </a>
                    </div>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {BLOG_POSTS.map((post, i) => (
                        <BlogPostItem key={i} post={post} index={i} />
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={headerInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ padding: "32px 0", display: "flex", alignItems: "center", gap: "12px" }}
                    >
                        <span style={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            background: "#00DC82", display: "inline-block",
                            animation: "pulse 2s ease-in-out infinite", flexShrink: 0,
                        }} />
                        <span style={{
                            fontSize: "13px", color: "#333333",
                            fontFamily: "var(--font-body)", fontStyle: "italic",
                        }}>
                            More articles coming soon — writing about AI, automation, and shipping products.
                        </span>
                    </motion.div>
                </div>
            </div >

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
        </section >
    );
}