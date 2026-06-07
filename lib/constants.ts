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
};

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
];

export const PROJECTS = [
  {
    title: "StudioSynq",
    problem:
      "Developers, designers, and writers constantly switch between AI tools, losing context mid-workflow",
    solution:
      "Built an AI co-working platform with five role-specific agents, real-time room collaboration, and a Kanban board in a single workspace",
    decision:
      "Chose Vercel AI SDK with multi-provider routing over a single LLM integration — lets each agent use the best-fit model for its task (Google, Groq, Mistral)",
    stack: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "Drizzle ORM",
      "Neon",
      "Pusher",
      "Upstash Redis",
    ],
    metrics:
      "5 specialized agents · Real-time rooms via Pusher · Kanban with dnd-kit · Multi-LLM routing · Tavily web search",
    github: "https://github.com/abirbhab-dasgupta/studiosynq",
    live: "https://studiosynq.vercel.app",
    slug: "studiosynq",
  },
  {
    title: "PromptBuildr",
    problem:
      "Raw ideas fed directly into AI models produce weak, generic outputs",
    solution:
      "Built a client-side tool that transforms any idea into a model-specific, optimized prompt",
    decision:
      "Chose localStorage-only storage over a backend — keeps it 100% private and zero-latency with no auth overhead",
    stack: ["Next.js", "TypeScript", "Gemini API"],
    metrics:
      "6 prompt modes · 4 target models · Zero server storage · Prompt explainability",
    github: "https://github.com/abirbhab-dasgupta/promptbuildr",
    live: "https://promptbuildr.vercel.app",
    slug: "promptbuildr",
  },
  {
    title: "FramixUI",
    problem:
      "Building consistent UI components from scratch wastes development hours",
    solution: "Built a reusable component library others could use",
    decision:
      "Chose a headless architecture to give consumers full styling control",
    stack: ["Next.js", "TypeScript", "Tailwind", "Markdown"],
    metrics: "12 components · Lighthouse 98 · Used across 2 live projects",
    github: "https://github.com/abirbhab-dasgupta/framixui",
    live: "https://framixui.vercel.app",
    slug: "framixui",
  },
  {
    title: "AUth Next",
    problem:
      "Production-grade auth in Next.js is poorly documented and fragile",
    solution:
      "Built full-stack auth with Better Auth, Drizzle ORM, and Neon PostgreSQL",
    decision:
      "Chose Better Auth over NextAuth for its type-safe API and native Drizzle integration",
    stack: ["Next.js", "Better Auth", "Drizzle ORM", "Neon", "TypeScript"],
    metrics: "Google OAuth · Email auth · Deployed on Vercel",
    github: "https://github.com/abirbhab-dasgupta/betterauth-nextjs",
    live: "https://better-authnext.vercel.app",
    slug: "auth-next",
  },

  {
    title: "n8n AI Agents",
    problem:
      "Repetitive personal tasks like expense tracking and email filtering waste hours every week",
    solution:
      "Built three AI-powered automation agents using n8n and Google Gemini",
    decision:
      "Chose n8n over custom code for its visual workflow builder — faster iteration, easier debugging",
    stack: ["n8n", "Google Gemini API", "Telegram Bot API"],
    metrics: "3 agents · Expense tracker · Calendar summariser · Gmail filter",
    github: "https://github.com/abirbhab-dasgupta/n8n-workflows",
    live: "",
    slug: "n8n-agents",
  },
];

export const TIMELINE = [
  { year: "2023", event: "Started coding — HTML, CSS, JavaScript" },
  {
    year: "2024",
    event: "First project — Google Gemini API integration with vanilla JS",
  },
  { year: "2024", event: "Top 20 finish at SIH Internal Hackathon" },
  {
    year: "2024",
    event: "JP Morgan Forage Virtual Experience — learned TypeScript",
  },
  {
    year: "2024",
    event: "Explored React — built first component-based projects",
  },
  {
    year: "2025",
    event: "Moved to Next.js — started building full-stack applications",
  },
  { year: "2025", event: "FramixUI — first open source component library" },
  {
    year: "2025",
    event: "n8n AI Agents — three automation workflows deployed",
  },
  {
    year: "2026",
    event: "AUth Next — first production deployment with Better Auth + Drizzle",
  },
  {
    year: "→",
    event:
      "Working on something big. The best entries on this timeline haven't happened yet.",
  },
];

export const BLOG_POSTS = [
  {
    title: "Invoice Generator with AI",
    description:
      "Building an AI-powered invoice generator — the problem, the approach, and what I learned.",
    url: "https://abirbhabdasgupta.hashnode.dev/invoice-generator-with-ai",
    date: "2025",
    readTime: "5 min read",
  },
  {
    title:
      "From Function Calling to MCP: Building Your First Standardized AI Agent",
    description:
      "I broke my function calling agent trying to scale it. This is what I learned rebuilding it with MCP — and why the architecture difference matters more than I expected.",
    url: "https://abirbhabdasgupta.hashnode.dev/from-function-calling-to-mcp-building-your-first-standardized-ai-agent",
    date: "2026",
    readTime: "19 min read",
  },
];
