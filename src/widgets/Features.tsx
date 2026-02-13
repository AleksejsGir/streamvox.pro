"use client";

import { Container } from "@/shared/ui/Container";
import { Zap, Shield, Globe2, Layers, Mic2, Layout } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { ArrowRight } from "lucide-react";
import { LazyVideo } from "@/shared/ui/LazyVideo";
import { useTranslations } from "next-intl";



export function Features() {
    const t = useTranslations("Features");

    const features = [
        {
            icon: Zap,
            id: "lowLatency",
        },
        {
            icon: Layers,
            id: "overlay",
        },
        {
            icon: Mic2,
            id: "bidirectional",
        },
        {
            icon: Globe2,
            id: "languages",
        },
        {
            icon: Shield,
            id: "privacy",
        },
        {
            icon: Layout,
            id: "uiLanguages",
        },
    ];

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
                            {t("title")} <br />
                            <span className="text-gradient">{t("titleGradient")}</span>
                        </h2>
                        <ul className="space-y-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 p-2 rounded-lg bg-white/5 text-primary">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{t(feature.id)}</h3>
                                        <p className="text-text-muted">{t(`${feature.id}Desc`)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative overflow-hidden w-full aspect-video rounded-3xl glass-card border-2 border-primary/30 shadow-[0_0_30px_-10px_var(--primary)] bg-white/5 text-center group flex flex-col justify-center items-center hover:border-primary/50 transition-colors duration-500">
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <LazyVideo
                                src="/assets/video/Download_StreamVox.mp4"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                            />
                        </div>

                        <div className="relative z-10 p-8">
                            <h3 className="text-2xl font-bold">{t("ctaTitle")}</h3>
                            <p className="text-text-muted group-hover:text-white/90 transition-colors">
                                {t("ctaDesc")}
                            </p>
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto mt-6">
                                    {t("ctaBtn")}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <p className="text-xs text-text-muted mt-4">
                                {t("ctaNote")}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
