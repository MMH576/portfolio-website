import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohammed Monjorul Hoque | Backend Engineer",
    template: "%s | Mohammed Monjorul Hoque",
  },
  description:
    "Backend-focused CS student building transactional, event-driven systems with Node.js, PostgreSQL, and Redis.",
  keywords: [
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "NestJS",
    "Software Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Mohammed Monjorul Hoque" }],
  creator: "Mohammed Monjorul Hoque",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohammed Monjorul Hoque Portfolio",
    title: "Mohammed Monjorul Hoque | Backend Engineer",
    description:
      "Backend-focused CS student building transactional, event-driven systems with Node.js, PostgreSQL, and Redis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Monjorul Hoque | Backend Engineer",
    description:
      "Backend-focused CS student building transactional, event-driven systems with Node.js, PostgreSQL, and Redis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
