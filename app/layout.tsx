import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NVSBL — Agentic middleware for organizations that ship",
    template: "%s | NVSBL.SYSTEMS",
  },
  description:
    "Strategy, design, and build for the post-chatbot era. Twenty-five years of enterprise software, now applied to agents.",
  keywords: [
    "agentic systems",
    "middleware",
    "AI integration",
    "enterprise AI",
    "agent orchestration",
    "MCP",
  ],
  authors: [{ name: "NVSBL.SYSTEMS" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NVSBL.SYSTEMS",
    title: "NVSBL — Agentic middleware for organizations that ship",
    description:
      "Strategy, design, and build for the post-chatbot era. Twenty-five years of enterprise software, now applied to agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVSBL — Agentic middleware for organizations that ship",
    description:
      "Strategy, design, and build for the post-chatbot era. Twenty-five years of enterprise software, now applied to agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
