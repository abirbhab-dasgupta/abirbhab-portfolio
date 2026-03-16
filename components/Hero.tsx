"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PERSON } from "@/lib/constants";

type ContributionDay = { date: string; count: number };

const codeLines = [
    "const engineer = new Frontend();",
    "await engineer.build('AUth Next');",
    "git commit -m 'ship it'",
    "npm run deploy --prod",
    "export default function App()",
    "import { motion } from 'framer-motion'",
    "type Props = { children: ReactNode }",
    "await db.insert(users).values(data)",
    "drizzle.select().from(schema.users)",
    "better_auth.session.verify(token)",
    "n8n.workflow.execute(agentId)",
    "const [state, setState] = useState()",
    "npx create-next-app@latest",
    "SELECT * FROM workflows LIMIT 10",
    "git push origin main --force",
];

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

function GitHubHeatmap({ username }: { username: string }) {
    const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
    const isMobile = useIsMobile();

    useEffect(() => {
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (!data) return;
                const days: ContributionDay[] = (data.contributions as ContributionDay[]).map((d) => ({ date: d.date, count: d.count }));
                const chunked: ContributionDay[][] = [];
                for (let i = 0; i < days.length; i += 7) chunked.push(days.slice(i, i + 7));
                setWeeks(chunked);
            })
            .catch(() => { });
    }, [username]);

    const allDays = ([] as ContributionDay[]).concat(...weeks);
    const maxCount = allDays.length > 0 ? Math.max(...allDays.map((d) => d.count), 1) : 1;
    const getOpacity = (count: number) => count === 0 ? 0.04 : 0.06 + (count / maxCount) * 0.22;

    if (weeks.length === 0 || isMobile) return null;

    return (
        <div
            aria-hidden="true"
            style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                alignItems: "flex-end",
                padding: "0 32px 0 0",
                pointerEvents: "none",
                WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to top, black 0%, transparent 55%)",
                maskImage: "linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to top, black 0%, transparent 55%)",
            }}
        >
            {weeks.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    {week.map((day, di) => (
                        <div key={di} style={{ width: "14px", height: "14px", borderRadius: "2px", background: "#00DC82", opacity: getOpacity(day.count) }} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function CodeTexture() {
    const isMobile = useIsMobile();
    if (isMobile) return null;

    return (
        <div
            aria-hidden="true"
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "45%",
                height: "100%",
                pointerEvents: "none",
                overflow: "hidden",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
                maskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
            }}
        >
            {codeLines.map((line, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: `${5 + (i / codeLines.length) * 90}%`,
                        right: `${(i % 3) * 8}%`,
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px",
                        color: i % 4 === 0 ? "#00DC82" : "#1E1E1E",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.04em",
                        transform: "rotate(-8deg)",
                        userSelect: "none",
                    }}
                >
                    {line}
                </div>
            ))}
        </div>
    );
}

export default function Hero() {
    const githubUsername = PERSON.github.replace("https://github.com/", "");
    const [time, setTime] = useState("");
    const isMobile = useIsMobile();

    useEffect(() => {
        const tick = () => {
            setTime(new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit", minute: "2-digit", second: "2-digit",
                hour12: false, timeZone: "Asia/Kolkata",
            }));
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            style={{
                minHeight: "100dvh",
                display: "flex",
                alignItems: "center",
                padding: isMobile ? "0 20px" : "0 clamp(16px, 4vw, 48px)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <CodeTexture />
            <GitHubHeatmap username={githubUsername} />

            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{ position: "absolute", top: "28px", left: "clamp(16px, 4vw, 48px)", display: "flex", alignItems: "center", gap: "16px" }}
                >
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#2E2E2E", fontFamily: "var(--font-body)", textTransform: "uppercase" }}>
                        IST {time}
                    </span>
                    <span style={{ width: "1px", height: "12px", background: "#2E2E2E", display: "inline-block" }} />
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#2E2E2E", fontFamily: "var(--font-body)", textTransform: "uppercase" }}>
                        Kolkata, India
                    </span>
                </motion.div>
            )}

            <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", position: "relative", zIndex: 1, paddingTop: isMobile ? "80px" : "0px" }}>

                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}
                >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00DC82", display: "inline-block", animation: "pulse 2s ease-in-out infinite", flexShrink: 0 }} />
                    <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#00DC82", fontFamily: "var(--font-body)", textTransform: "uppercase", fontWeight: 500 }}>
                        Available for internship
                    </span>
                </motion.div>

                <div style={{ marginBottom: "1.5rem", lineHeight: 0.95 }}>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
                        <span style={{ display: "block", fontSize: isMobile ? "clamp(52px,15vw,72px)" : "clamp(52px,8vw,96px)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.04em", fontFamily: "var(--font-display)" }}>
                            Abirbhab
                        </span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}>
                        <span style={{ display: "block", fontSize: isMobile ? "clamp(52px,15vw,72px)" : "clamp(52px,8vw,96px)", fontWeight: 700, color: "transparent", letterSpacing: "-0.04em", fontFamily: "var(--font-display)", WebkitTextStroke: "1.5px #F5F5F0" }}>
                            Dasgupta
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "100%", maxWidth: isMobile ? "100%" : "480px", height: "0.5px", background: "#2E2E2E", transformOrigin: "left", marginBottom: "1.5rem" }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ fontSize: isMobile ? "16px" : "clamp(15px,1.8vw,18px)", fontFamily: "var(--font-body)", marginBottom: "0.4rem", letterSpacing: "0.01em" }}
                >
                    <span style={{ color: "#888888" }}>Code.</span>{" "}
                    <span style={{ color: "#00DC82" }}>Automate.</span>{" "}
                    <span style={{ color: "#888888" }}>Ship.</span>{" "}
                    <span style={{ color: "#444444" }}>Repeat.</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.58 }}
                    style={{ fontSize: "13px", color: "#444444", marginBottom: "3rem", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
                >
                    Building in public. Open to opportunities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.66 }}
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}
                >
                    <a href="#work"
                        style={{ background: "#00DC82", color: "#0A0A0A", padding: isMobile ? "14px 0" : "11px 28px", borderRadius: "3px", fontSize: "12px", fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", transition: "opacity 0.2s ease", width: isMobile ? "100%" : "auto", textAlign: "center" }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                    >
                        View Work
                    </a>
                    <a href={PERSON.github} target="_blank" rel="noopener noreferrer"
                        style={{ background: "transparent", color: "#666666", padding: isMobile ? "14px 0" : "11px 28px", borderRadius: "3px", fontSize: "12px", fontWeight: 500, textDecoration: "none", border: "0.5px solid #2E2E2E", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", transition: "color 0.2s ease, border-color 0.2s ease", flex: isMobile ? "1" : "unset", textAlign: "center" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F5F0"; e.currentTarget.style.borderColor = "#00DC82"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#666666"; e.currentTarget.style.borderColor = "#2E2E2E"; }}
                    >
                        GitHub
                    </a>
                    <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer"
                        style={{ background: "transparent", color: "#666666", padding: isMobile ? "14px 0" : "11px 28px", borderRadius: "3px", fontSize: "12px", fontWeight: 500, textDecoration: "none", border: "0.5px solid #2E2E2E", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", transition: "color 0.2s ease, border-color 0.2s ease", flex: isMobile ? "1" : "unset", textAlign: "center" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F5F0"; e.currentTarget.style.borderColor = "#00DC82"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#666666"; e.currentTarget.style.borderColor = "#2E2E2E"; }}
                    >
                        LinkedIn
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
                    onClick={() => document.getElementById("trust-ticker")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, #2E2E2E)" }} />
                    <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#444444", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                        Scroll
                    </span>
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