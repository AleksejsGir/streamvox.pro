import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/widgets/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StreamVox - Real-Time AI Translator for Windows | Live Subtitles",
  description: "Real-time AI translator for Windows. Add live subtitles to calls, meetings, anime, and streams. Floating overlay, 10+ languages. Download free.",
  keywords: ["AI translator", "real-time subtitles", "Windows translator", "speech to text", "live captioning", "StreamVox", "translation app", "anime subtitles", "meeting translator"],
  authors: [{ name: "AlekGir", url: "https://streamvox.pro" }],
  openGraph: {
    title: "StreamVox - Real-time AI Translator for Windows",
    description: "Break language barriers instantly with AI-powered subtitles for any app on Windows.",
    url: "https://streamvox.pro",
    siteName: "StreamVox",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/showcase/StreamVox_main.png",
        width: 1200,
        height: 630,
        alt: "StreamVox App Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamVox - Real-time AI Translator",
    description: "Live AI subtitles for calls, streams, and movies on Windows.",
    creator: "@alekgir",
    images: ["/assets/showcase/StreamVox_main.png"],
  },
  metadataBase: new URL("https://streamvox.pro"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
