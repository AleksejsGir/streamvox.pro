"use client";

import { Container } from "@/shared/ui/Container";
import { GlassCard } from "@/shared/ui/GlassCard";
import { Briefcase, Film, Smartphone, Gamepad2 } from "lucide-react";
import { useIsMobile } from "@/shared/lib/useIsMobile";

const cases = [
    {
        icon: Briefcase,
        title: "Calls & Meetings",
        desc: "Translate live conversations in Zoom, Microsoft Teams, Google Meet, Skype, or Discord. Follow colleagues in your language.",
        color: "text-[#06B6D4]",
        video: "/assets/video/Calls_Meetings.mp4"
    },
    {
        icon: Smartphone,
        title: "Mobile Translation",
        desc: "Connect iPhone or Android via Microsoft Phone Link. See live subtitles for phone calls directly on your PC screen.",
        color: "text-[#EC4899]",
        video: "/assets/video/Mobile_Translation.mp4"
    },
    {
        icon: Film,
        title: "Movies & Content",
        desc: "Watch YouTube, Netflix, or Twitch without waiting for official subtitles. Use overlay mode on top of any video player.",
        color: "text-[#8B5CF6]",
        video: "/assets/video/Movies_Content.mp4"
    },
    {
        icon: Gamepad2,
        title: "Gaming & Streaming",
        desc: "Get real-time subtitles for in-game voice chat or live streams. Perfect for multiplayer games tailored for any language.",
        color: "text-[#10B981]",
        video: "/assets/video/Gaming_Streaming.mp4"
    }
];

export function UseCases() {
    const isMobile = useIsMobile();

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-primary/10 blur-[130px] rounded-full animate-pulse pointer-events-none" />
                <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[60%] bg-secondary/10 blur-[130px] rounded-full animate-pulse delay-700 pointer-events-none" />
            </div>
            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        One App. <span className="text-gradient">Endless Possibilities</span>
                    </h2>
                    <p className="text-text-muted text-lg">
                        StreamVox adapts to your workflow, providing instant translation wherever audio plays.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((item, idx) => (
                        <GlassCard key={idx} className="group relative overflow-hidden hover:bg-white/10 transition-colors duration-300 min-h-[300px] flex flex-col justify-between rounded-3xl">
                            {/* Video Background (Only if exists) */}
                            {item.video && (
                                <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" /> {/* Solid black bottom for max contrast */}
                                    <video
                                        src={item.video}
                                        autoPlay={!isMobile}
                                        loop
                                        muted
                                        playsInline
                                        preload={isMobile ? "none" : "auto"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="relative z-10 pt-6 px-2">
                                <div className={`p-3 rounded-xl bg-white/5 w-fit ${item.color} backdrop-blur-md`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                            </div>

                            <div className="relative z-10 pb-6 px-4">
                                <h3 className="text-2xl font-extrabold mb-2 text-gradient drop-shadow-[0_2px_2px_rgba(0,0,0,1)] tracking-tight">{item.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed group-hover:text-white/90 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    );
}
