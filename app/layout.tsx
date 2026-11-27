import type { Metadata, Viewport } from "next";
import { PT_Mono, Libre_Baskerville } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

// Applies a theme chosen with the footer toggle before first paint. Keep in sync with
// components/layout/theme-toggle.tsx.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
      className={`${ptMono.variable} ${libreBaskerville.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
