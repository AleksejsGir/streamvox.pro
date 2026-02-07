import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui/Button";
import {
    Download,
    Sparkles,
    Globe2,
    MonitorPlay,
    Headphones,
    MessageCircle,
    HelpCircle,
    ArrowRight,
    ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
    title: "Documentation | StreamVox - Getting Started & Features Guide",
    description: "Complete guide to StreamVox - installation, features, supported languages, troubleshooting, and tips for the best real-time translation experience.",
    keywords: ["StreamVox docs", "documentation", "guide", "how to use", "installation", "features"],
    openGraph: {
        title: "StreamVox Documentation",
        description: "Complete guide to StreamVox real-time translation app for Windows.",
        url: "https://streamvox.pro/docs",
        type: "website",
    },
};

const docSections = [
    {
        title: "Getting Started",
        icon: Download,
        items: [
            { label: "Installation", description: "Download StreamVox from Microsoft Store and install in seconds." },
            { label: "First Launch", description: "Open StreamVox, grant audio permissions, and you're ready to translate." },
            { label: "Quick Start", description: "Click Start, play any audio, and see real-time subtitles appear." },
        ]
    },
    {
        title: "Core Features",
        icon: Sparkles,
        items: [
            { label: "Real-Time Translation", description: "Translates any audio playing on your PC with minimal latency." },
            { label: "Smart Overlay", description: "Floating subtitle window stays on top of games, movies, and apps." },
            { label: "Bidirectional Mode", description: "Translate both system audio and your microphone simultaneously." },
            { label: "Multilingual Interface", description: "App UI available in 8 languages: English, Spanish, Portuguese, Chinese, Japanese, German, French, Russian." },
            { label: "Privacy Mode", description: "Audio is processed in real-time and never stored on servers." },
        ]
    },
    {
        title: "Supported Languages",
        icon: Globe2,
        items: [
            { label: "Input Languages", description: "Japanese, English, Russian, German, Spanish, French, Chinese, Korean, Portuguese, Italian, and more." },
            { label: "Output Languages", description: "Translate to any of the 10+ supported languages." },
            { label: "Auto-Detection", description: "StreamVox can automatically detect the source language." },
        ]
    },
    {
        title: "Use Cases",
        icon: MonitorPlay,
        items: [
            { label: "Anime & Movies", description: "Watch any Japanese anime or foreign film with real-time subtitles." },
            { label: "Video Calls", description: "Translate Zoom, Teams, Discord, and any conferencing app." },
            { label: "Gaming", description: "Understand voice chat, VTuber streams, and visual novel dialogue." },
            { label: "Phone Calls", description: "With Microsoft Phone Link, translate phone calls on your PC." },
        ]
    },
    {
        title: "Audio Setup",
        icon: Headphones,
        items: [
            { label: "System Audio", description: "Captures all audio from Windows - browsers, apps, games." },
            { label: "Microphone", description: "Optional: translate your own speech for bidirectional conversations." },
            { label: "Virtual Audio Cable", description: "For advanced users: route specific audio sources." },
        ]
    },
    {
        title: "Troubleshooting",
        icon: HelpCircle,
        items: [
            { label: "No Audio Detected", description: "Ensure your audio device is selected in Windows Sound Settings." },
            { label: "Translation Delayed", description: "Check internet connection. StreamVox requires stable internet." },
            { label: "Overlay Not Showing", description: "Try running as administrator or check display settings." },
            { label: "Low Accuracy", description: "Background noise affects quality. Use headphones when possible." },
        ]
    },
];

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-gradient">Documentation</span>
                        </h1>
                        <p className="text-text-muted text-lg mb-8">
                            Everything you need to get started with StreamVox
                        </p>
                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                            <Button>
                                <Download className="w-4 h-4 mr-2" />
                                Download from Microsoft Store
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>

                    <div className="space-y-12">
                        {docSections.map((section) => (
                            <div key={section.title} className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/20 rounded-xl">
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {section.items.map((item) => (
                                        <div
                                            key={item.label}
                                            className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                                        >
                                            <h3 className="font-semibold mb-2">{item.label}</h3>
                                            <p className="text-sm text-text-muted">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Link */}
                    <div className="mt-16 text-center">
                        <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
                            <p className="text-text-muted mb-6">
                                Check our FAQ or contact support
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#faq">
                                    <Button variant="outline">
                                        View FAQ
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <a href="mailto:hello@alekgir.com">
                                    <Button variant="ghost">
                                        Contact Support
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
