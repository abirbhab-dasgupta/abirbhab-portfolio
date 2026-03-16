export const PERSON = {
    name: "Abirbhab Dasgupta",
    title: "Full Stack Engineer",
    subtitle: "Building in public. Open to opportunities.",
    email: "abirbhab00dasgupta@gmail.com",
    github: "https://github.com/abirbhab-dasgupta",
    linkedin: "https://linkedin.com/in/abirbhab",
    university: "Adamas University",
    location: "Kolkata, India",
    url: "https://abirbhabdasgupta.vercel.app",
    twitterHandle: "Abirbhab_24",
    resumeUrl: "",
}

export const TRUST_TOKENS = [
    "Next.js",
    "TypeScript",
    "React",
    "Component Library",
    "Better Auth",
    "Drizzle ORM",
    "n8n Workflows",
    "Open Source",
    "Postgresql",
    "Tailwind CSS",
    "Git",
    "LangChain",
    "Automation Agents",

]

export const PROJECTS = [
    {
        title: "FramixUI",
        problem: "Building consistent UI components from scratch wastes development hours",
        solution: "Built a reusable component library others could use",
        decision: "Chose a headless architecture to give consumers full styling control",
        stack: ["Next.js", "TypeScript", "Tailwind", "Markdown"],
        metrics: "12 components · Lighthouse 98 · Used across 2 live projects",
        github: "https://github.com/abirbhab-dasgupta/framixui",
        live: "https://framixui.vercel.app",
        slug: "framixui",
    },
    {
        title: "AUth Next",
        problem: "Production-grade auth in Next.js is poorly documented and fragile",
        solution: "Built full-stack auth with Better Auth, Drizzle ORM, and Neon PostgreSQL",
        decision: "Chose Better Auth over NextAuth for its type-safe API and native Drizzle integration",
        stack: ["Next.js", "Better Auth", "Drizzle ORM", "Neon", "TypeScript"],
        metrics: "Google OAuth · Email auth · Deployed on Vercel",
        github: "https://github.com/abirbhab-dasgupta/betterauth-nextjs",
        live: "https://better-authnext.vercel.app",
        slug: "auth-next",
    },
    {
        title: "HyperFlux Theme",
        problem: "Most VS Code dark themes sacrifice readability for aesthetics",
        solution: "Built a custom VS Code theme focused on syntax clarity and low eye strain",
        decision: "Chose a muted neon palette over pure brights to reduce contrast fatigue on long sessions",
        stack: ["VS Code Extension API", "JSON", "Color Theory"],
        metrics: "",
        github: "https://github.com/abirbhab-dasgupta/hyperflux-theme",
        live: "",
        slug: "hyperflux-theme",
    },
    {
        title: "n8n AI Agents",
        problem: "Repetitive personal tasks like expense tracking and email filtering waste hours every week",
        solution: "Built three AI-powered automation agents using n8n and Google Gemini",
        decision: "Chose n8n over custom code for its visual workflow builder — faster iteration, easier debugging",
        stack: ["n8n", "Google Gemini API", "Telegram Bot API"],
        metrics: "3 agents · Expense tracker · Calendar summariser · Gmail filter",
        github: "https://github.com/abirbhab-dasgupta/n8n-workflows",
        live: "",
        slug: "n8n-agents",
    },
]

export const TIMELINE = [
    { year: "2023", event: "Started coding — HTML, CSS, JavaScript" },
    { year: "2024", event: "First project — Google Gemini API integration with vanilla JS" },
    { year: "2024", event: "Top 20 finish at SIH Internal Hackathon" },
    { year: "2024", event: "JP Morgan Forage Virtual Experience — learned TypeScript" },
    { year: "2024", event: "Explored React — built first component-based projects" },
    { year: "2025", event: "Moved to Next.js — started building full-stack applications" },
    { year: "2025", event: "FramixUI — first open source component library" },
    { year: "2025", event: "n8n AI Agents — three automation workflows deployed" },
    { year: "2026", event: "AUth Next — first production deployment with Better Auth + Drizzle" },
    { year: "→", event: "Working on something big. The best entries on this timeline haven't happened yet." },
]



export const BLOG_POSTS = [
    {
        title: "Invoice Generator with AI",
        description: "Building an AI-powered invoice generator — the problem, the approach, and what I learned.",
        url: "https://abirbhabdasgupta.hashnode.dev/invoice-generator-with-ai",
        date: "2025",
        readTime: "5 min read",
    },
]