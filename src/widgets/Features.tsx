"use client";

import { Container } from "@/shared/ui/Container";
import { CheckCircle2, Zap, Shield, Globe2, Layers, Mic2, Layout } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/shared/lib/useIsMobile";

const features = [
    {
        icon: Zap,
        title: "Low Latency AI",
        desc: "Real-time translation with context-aware results.",
    },
    {
        icon: Layers,
        title: "Universal Overlay",
        desc: "Floating subtitle window that stays on top of any app.",
    },
    {
        icon: Mic2,
        title: "Bidirectional",
        desc: "Translates both System Audio (what you hear) and Microphone (what you say).",
    },
    {
        icon: Globe2,
        title: "10+ Languages",
        desc: "English, Russian, German, Spanish, French, Chinese, Japanese, Korean, Portuguese, Italian.",
    },
    {
        icon: Shield,
        title: "Privacy Focused",
        desc: "Audio is processed in real-time and never stored.",
    },
    {
        icon: Layout,
        title: "Windows 11 Optimized",
        desc: "Modern dark-mode interface designed for the latest Windows.",
    },
];

export function Features() {
    const isMobile = useIsMobile();

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Powering Global <br />
                            <span className="text-gradient">Communication</span>
                        </h2>
                        <ul className="space-y-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 p-2 rounded-lg bg-white/5 text-primary">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-text-muted">{feature.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative overflow-hidden w-full aspect-video rounded-3xl glass-card border-2 border-primary/30 shadow-[0_0_30px_-10px_var(--primary)] bg-white/5 text-center group flex flex-col justify-center items-center hover:border-primary/50 transition-colors duration-500">
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <video
                                src="/assets/video/Download_StreamVox.mp4"
                                autoPlay={!isMobile}
                                loop
                                muted
                                playsInline
                                preload={isMobile ? "none" : "auto"}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                            />
                        </div>

                        <div className="relative z-10 p-8">
                            <h3 className="text-2xl font-bold">Start Breaking Barriers</h3>
                            <p className="text-text-muted group-hover:text-white/90 transition-colors">
                                Download StreamVox today and see live subtitles for everything on your PC.
                            </p>
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto mt-6">
                                    Download on Microsoft Store
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <p className="text-xs text-text-muted mt-4">
                                Supports Windows 10 & 11 (64-bit)
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
