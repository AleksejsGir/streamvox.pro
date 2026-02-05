import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/widgets/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StreamVox - Real-time AI Translator for Windows",
  description: "Break language barriers instantly. StreamVox provides real-time AI subtitles for calls, meetings, movies, and streams on Windows. Download now.",
  keywords: ["AI translator", "real-time subtitles", "Windows translator", "speech to text", "live captioning", "StreamVox", "translation app"],
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
      </body>
    </html>
  );
}
