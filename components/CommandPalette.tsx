"use client";

import React from "react";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  Action,
} from "kbar";
import { PERSON } from "@/lib/constants";
import { useIsMobile } from "@/lib/useIsMobile";

const actions: Action[] = [
  {
    id: "work",
    name: "View Work",
    shortcut: ["w"],
    keywords: "work projects portfolio",
    perform: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
    section: "Navigate",
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about me person",
    perform: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    section: "Navigate",
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "contact email reach out",
    perform: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    section: "Navigate",
  },
  {
    id: "github",
    name: "Open GitHub",
    shortcut: ["g"],
    keywords: "github code repos",
    perform: () => window.open(PERSON.github, "_blank"),
    section: "Links",
  },
  {
    id: "linkedin",
    name: "Open LinkedIn",
    shortcut: ["l"],
    keywords: "linkedin professional",
    perform: () => window.open(PERSON.linkedin, "_blank"),
    section: "Links",
  },
  {
    id: "twitter",
    name: "Open Twitter",
    shortcut: ["t"],
    keywords: "twitter x social",
    perform: () => window.open(`https://twitter.com/${PERSON.twitterHandle}`, "_blank"),
    section: "Links",
  },
  {
    id: "email",
    name: "Copy Email",
    shortcut: ["e"],
    keywords: "email copy contact",
    perform: () => navigator.clipboard.writeText(PERSON.email),
    section: "Actions",
  },
];

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === "string") {
          return (
            <div style={{ padding: "8px 16px 4px", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#444444", fontFamily: "var(--font-body)" }}>
              {item}
            </div>
          );
        }
        return (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: active ? "#1A1A1A" : "transparent", borderLeft: active ? "2px solid #00DC82" : "2px solid transparent", cursor: "pointer", transition: "all 0.1s ease" }}>
            <span style={{ fontSize: "14px", color: active ? "#F5F5F0" : "#888888", fontFamily: "var(--font-body)", transition: "color 0.1s ease" }}>
              {item.name}
            </span>
            {item.shortcut?.length ? (
              <div style={{ display: "flex", gap: "4px" }}>
                {item.shortcut.map((sc) => (
                  <kbd key={sc} style={{ padding: "2px 6px", fontSize: "11px", color: "#444444", background: "#0A0A0A", border: "0.5px solid #2E2E2E", borderRadius: "3px", fontFamily: "var(--font-body)" }}>
                    {sc}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        );
      }}
    />
  );
}

export function CommandPalette({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <KBarProvider actions={actions}>
      {!isMobile && <KBarPortal>
        <KBarPositioner style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "20vh" }}>
          <KBarAnimator style={{ width: "100%", maxWidth: "520px", background: "#111111", border: "0.5px solid #2E2E2E", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", padding: "0 16px", borderBottom: "0.5px solid #1A1A1A" }}>
              <span style={{ fontSize: "12px", color: "#444444", fontFamily: "var(--font-body)", marginRight: "10px", flexShrink: 0 }}>⌘</span>
              <KBarSearch
                style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", outline: "none", fontSize: "15px", color: "#F5F5F0", fontFamily: "var(--font-body)" }}
                defaultPlaceholder="Type a command or search..."
              />
              <kbd style={{ padding: "2px 6px", fontSize: "11px", color: "#444444", background: "#0A0A0A", border: "0.5px solid #2E2E2E", borderRadius: "3px", fontFamily: "var(--font-body)", flexShrink: 0 }}>
                ESC
              </kbd>
            </div>
            <div style={{ maxHeight: "320px", overflowY: "auto", padding: "8px 0" }}>
              <RenderResults />
            </div>
            <div style={{ padding: "10px 16px", borderTop: "0.5px solid #1A1A1A", display: "flex", gap: "16px" }}>
              {[{ key: "↑↓", label: "navigate" }, { key: "↵", label: "select" }, { key: "esc", label: "close" }].map(({ key, label }) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <kbd style={{ padding: "2px 6px", fontSize: "10px", color: "#444444", background: "#0A0A0A", border: "0.5px solid #2E2E2E", borderRadius: "3px", fontFamily: "var(--font-body)" }}>
                    {key}
                  </kbd>
                  <span style={{ fontSize: "10px", color: "#333333", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>}
      {children}
    </KBarProvider>
  );
}