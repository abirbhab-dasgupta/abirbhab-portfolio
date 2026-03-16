"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { PERSON } from "@/lib/constants";

const NAV_ITEMS = [
    { index: "01", label: "Home", href: "#" },
    { index: "02", label: "Work", href: "#work" },
    { index: "03", label: "About", href: "#about" },
    { index: "04", label: "Blogs", href: "#writing" },
    { index: "05", label: "Contact", href: "#contact" },
];

function useIsLowEndDevice() {
    const [isLowEnd, setIsLowEnd] = useState(false);
    useEffect(() => {
        const lowCPU = navigator.hardwareConcurrency <= 4;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setIsLowEnd(lowCPU || reducedMotion);
    }, []);
    return isLowEnd;
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <div style={{ width: "28px", height: "20px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    animate={
                        isOpen
                            ? { rotate: i === 0 ? 45 : i === 2 ? -45 : 0, y: i === 0 ? 10 : i === 2 ? -10 : 0, opacity: i === 1 ? 0 : 1 }
                            : { rotate: 0, y: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    style={{ display: "block", width: i === 1 ? "20px" : "28px", height: "1.5px", background: "#F5F5F0", borderRadius: "2px", transformOrigin: "center" }}
                />
            ))}
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isLowEnd = useIsLowEndDevice();
    const isMobile = useIsMobile();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const overlayVariants = isLowEnd
        ? {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 } as Transition,
        }
        : {
            initial: { clipPath: "circle(0% at calc(100% - 48px) 44px)" },
            animate: { clipPath: "circle(150% at calc(100% - 48px) 44px)" },
            exit: { clipPath: "circle(0% at calc(100% - 48px) 44px)" },
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } as Transition,
        };

    const itemVariants = isLowEnd
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
        : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 } };

    return (
        <>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                style={{ position: "fixed", top: "24px", right: "32px", zIndex: 1001, background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", gap: "12px" }}
            >
                <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#888888", fontFamily: "var(--font-body)", textTransform: "uppercase", fontWeight: 500 }}>
                    {isOpen ? "Close" : "Menu"}
                </span>
                <MenuIcon isOpen={isOpen} />
            </button>

            {!isMobile && (
                <div style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "8px", zIndex: 1001, background: "rgba(26,26,26,0.8)", border: "0.5px solid #2E2E2E", borderRadius: "4px", padding: "6px 14px", backdropFilter: "blur(8px)" }}>
                    <kbd style={{ fontSize: "12px", color: "#00DC82", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600 }}>⌘K</kbd>
                    <span style={{ fontSize: "11px", color: "#666666", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Command</span>
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={overlayVariants.initial}
                        animate={overlayVariants.animate}
                        exit={overlayVariants.exit}
                        transition={overlayVariants.transition}
                        style={{ position: "fixed", inset: 0, zIndex: 999, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 32px 0px 48px", background: "#0A0A0A" }}
                    >
                        {!isLowEnd && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 0.15, delay: 0.1 }}
                                style={{ position: "absolute", inset: 0, background: "#00DC82", zIndex: -1 }}
                            />
                        )}

                        <nav style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", paddingTop: "40px" }}>
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={itemVariants.initial}
                                    animate={itemVariants.animate}
                                    exit={itemVariants.exit}
                                    transition={{ delay: isLowEnd ? 0.05 * i : 0.2 + i * 0.08, duration: isLowEnd ? 0.2 : 0.5, ease: [0.76, 0, 0.24, 1] as const } as Transition}
                                    style={{ position: "relative", marginBottom: "4px" }}
                                >
                                    <span style={{
                                        position: "absolute",
                                        left: "0px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        fontSize: "clamp(48px, 10vw, 96px)",
                                        fontWeight: 700,
                                        color: "#2E2E2E",
                                        fontFamily: "var(--font-display)",
                                        userSelect: "none",
                                        lineHeight: 1,
                                        zIndex: 0,
                                        letterSpacing: "-0.02em",
                                    }}>
                                        {item.index}
                                    </span>

                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            position: "relative",
                                            zIndex: 1,
                                            fontSize: "clamp(36px, 7vw, 72px)",
                                            fontWeight: 700,
                                            color: "#F5F5F0",
                                            textDecoration: "none",
                                            fontFamily: "var(--font-display)",
                                            letterSpacing: "-0.03em",
                                            lineHeight: 1.15,
                                            display: "block",
                                            transition: "color 0.2s ease",
                                            paddingLeft: "clamp(56px, 8vw, 80px)",
                                        }}
                                        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#00DC82"; }}
                                        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "#F5F5F0"; }}
                                    >
                                        {item.label}
                                    </a>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: isLowEnd ? 0.2 : 0.6 }}
                            style={{ position: "absolute", bottom: "40px", left: "48px", right: "32px", display: "flex", gap: "32px" }}
                        >
                            {[
                                { label: "GitHub", href: PERSON.github },
                                { label: "LinkedIn", href: PERSON.linkedin },
                                { label: "Twitter", href: `https://twitter.com/${PERSON.twitterHandle}` },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: "12px", letterSpacing: "0.08em", color: "#444444", textDecoration: "none", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "color 0.2s ease" }}
                                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#F5F5F0"; }}
                                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "#444444"; }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}