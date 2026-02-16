"use client";

import { Container } from "@/shared/ui/Container";
import { Zap, Shield, Globe2, Layers, Mic2, Layout } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { ArrowRight } from "lucide-react";
import { LazyVideo } from "@/shared/ui/LazyVideo";
import { useTranslations } from "next-intl";

const WindowsLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.402L35.698 7.548V41.748H0V12.402ZM0 45.897H35.698V80.368L0 75.328V45.897ZM40.165 41.748H87.712V0L40.165 6.784V41.748ZM40.165 45.897V81.151L87.712 88V45.897H40.165Z" />
    </svg>
);



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
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group h-14 px-8 text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all w-full sm:w-auto rounded-lg mt-6">
                                    <WindowsLogo className="mr-3 h-6 w-6 text-primary fill-current" />
                                    <span className="text-primary font-bold">
                                        {t("ctaBtn")}
                                    </span>
                                    <ArrowRight className="ml-3 h-4 w-4 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
