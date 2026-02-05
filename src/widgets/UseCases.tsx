"use client";

import { Container } from "@/shared/ui/Container";
import { GlassCard } from "@/shared/ui/GlassCard";
import { Briefcase, Film, Smartphone, GraduationCap } from "lucide-react";

const cases = [
    {
        icon: Briefcase,
        title: "Business & Teams",
        desc: "Real-time subtitles for Zoom, Teams, and Google Meet. Never miss a detail in international calls.",
        color: "text-[#06B6D4]"
    },
    {
        icon: Film,
        title: "Entertainment",
        desc: "Watch Netflix, YouTube, or Twitch streams in any language. Your personal AI dubbing assistant.",
        color: "text-[#8B5CF6]"
    },
    {
        icon: Smartphone,
        title: "Mobile Calls",
        desc: "Seamlessly translate WhatsApp and phone calls via Windows Phone Link integration.",
        color: "text-[#EC4899]"
    },
    {
        icon: GraduationCap,
        title: "Education",
        desc: "Attend webinars and online courses worldwide. Break down language barriers in learning.",
        color: "text-[#10B981]"
    }
];

export function UseCases() {
    return (
        <section id="features" className="py-24 relative">
            <div className="absolute inset-0 bg-background/50 z-0" />
            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        One App. <span className="text-gradient">Endless Possibilities.</span>
                    </h2>
                    <p className="text-text-muted text-lg">
                        StreamVox adapts to your workflow, providing instant translation wherever audio plays.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, idx) => (
                        <GlassCard key={idx} className="group hover:bg-white/10 transition-colors duration-300">
                            <div className={`mb-4 p-3 rounded-xl bg-white/5 w-fit ${item.color}`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    );
}
