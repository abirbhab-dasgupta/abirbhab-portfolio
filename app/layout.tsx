import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geist = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abirbhab Dasgupta — Frontend Engineer",
  description:
    "Abirbhab Dasgupta is a Frontend Engineer and B.Tech CSE student at Adamas University, Kolkata. Building with Next.js, TypeScript, and React.",
  keywords: [
    "Abirbhab Dasgupta",
    "Abirbhab",
    "Frontend Engineer",
    "Next.js Developer",
    "Adamas University",
    "Kolkata Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Abirbhab Dasgupta" }],
  creator: "Abirbhab Dasgupta",
  metadataBase: new URL("https://abirbhabdasgupta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abirbhabdasgupta.vercel.app",
    title: "Abirbhab Dasgupta — Frontend Engineer",
    description:
      "Frontend Engineer building with Next.js and TypeScript. B.Tech CSE at Adamas University.",
    siteName: "Abirbhab Dasgupta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abirbhab Dasgupta — Frontend Engineer",
    description:
      "Frontend Engineer building with Next.js and TypeScript. B.Tech CSE at Adamas University.",
    creator: "@Abirbhab_24",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abirbhab Dasgupta",
  url: "https://abirbhabdasgupta.vercel.app",
  jobTitle: "Frontend Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Adamas University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}