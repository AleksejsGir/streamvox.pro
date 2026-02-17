"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ArrowRight, ShieldCheck, Gamepad2, Zap, AppWindow, Mic } from "lucide-react";

import { useState } from "react";
import { VideoModal } from "@/shared/ui/VideoModal";
import { useTranslations } from "next-intl";

const WindowsLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.402L35.698 7.548V41.748H0V12.402ZM0 45.897H35.698V80.368L0 75.328V45.897ZM40.165 41.748H87.712V0L40.165 6.784V41.748ZM40.165 45.897V81.151L87.712 88V45.897H40.165Z" />
    </svg>
);

export function Hero() {
    const t = useTranslations("Hero");
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isMonitorOpen, setIsMonitorOpen] = useState(false);

    const benefits = [
        "benefit1", "benefit2", "benefit3", "benefit4", "benefit5"
    ] as const;

    const iconMap = {
        benefit1: ShieldCheck,
        benefit2: Gamepad2,
        benefit3: Zap,
        benefit4: AppWindow,
        benefit5: Mic,
    };

    const benefitVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.6 + i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <section className="relative flex flex-col pt-16 pb-12 overflow-hidden lg:pt-20 2xl:pt-24 lg:pb-12 lg:min-h-screen lg:justify-center">
            <VideoModal
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
                videoId="56UR6gu9HtU"
            />

            <VideoModal
                isOpen={isMonitorOpen}
                onClose={() => setIsMonitorOpen(false)}
                videoUrl="/assets/showcase/StreamFox_Video.mp4"
                aspectRatio="landscape"
            />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-25%] left-[-15%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 2xl:gap-16">

                    {/* LEFT COLUMN: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[60%] text-center lg:text-left space-y-5 2xl:space-y-6 lg:max-w-none mx-auto lg:mx-0"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {t("badge")}
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl font-bold tracking-tight leading-tight text-balance">
                            <span className="relative inline-block mb-4">
                                <span className="text-gradient font-extrabold">StreamVox</span>
                                <span className="text-3xl 2xl:text-4xl text-white/40 font-light tracking-normal ml-1">.app</span>
                                {/* Stylish Underline */}
                                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent"></span>
                            </span>
                            <span className="block text-white">{t("titleGradient")}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-text-muted leading-relaxed">
                            {t("description")}
                        </p>

                        {/* Benefits Checklist */}
                        <ul className="space-y-2 2xl:space-y-3 pt-2 2xl:pt-4 inline-block text-left">
                            {benefits.map((benefit, index) => {
                                const Icon = iconMap[benefit];
                                return (
                                    <motion.li
                                        key={index}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={benefitVariants}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 bg-primary/10 p-1.5 rounded-lg border border-primary/20 shadow-[0_0_10px_-5px_var(--primary)]">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-gray-300 leading-tight block py-1 font-medium">{t(benefit)}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group h-14 px-8 text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all w-full sm:w-auto rounded-lg">
                                    <WindowsLogo className="mr-3 h-6 w-6 text-primary fill-current" />
                                    <span className="text-primary font-bold">
                                        {t("downloadBtn")}
                                    </span>
                                    <ArrowRight className="ml-3 h-4 w-4 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Button>
                            </a>
                            <Button size="lg" variant="secondary" onClick={() => setIsDemoOpen(true)} className="h-12 px-8 text-base w-full sm:w-auto">
                                {t("demoBtn")}
                            </Button>
                        </div>


                    </motion.div>

                    {/* RIGHT COLUMN: Image Slideshow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[40%] max-w-2xl lg:max-w-none relative z-10"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none -z-10" />

                        {/* Monitor Stand */}
                        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-b from-gray-800 to-gray-950 -z-10 rounded-b-xl" />
                        <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-80 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0" />

                        {/* Monitor Bezel */}
                        <div
                            onClick={() => setIsMonitorOpen(true)}
                            className="relative w-full bg-gray-950 rounded-t-[1rem] rounded-b-[1.5rem] pt-3 px-3 pb-8 shadow-2xl ring-1 ring-white/10 cursor-zoom-in group border-t border-x border-gray-700 border-b-4 border-b-gray-800 hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* Screen */}
                            <div className="relative w-full rounded-md overflow-hidden shadow-inner border border-white/5 aspect-video bg-black">
                                {/* Glass Reflection - Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-20" />

                                <video
                                    src="/assets/showcase/StreamFox_Video.mp4"
                                    poster="/assets/showcase/Main_StreamVox.png"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Bezel Details */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/10" />
                            <div className="absolute bottom-3 right-6 w-1 h-1 rounded-full bg-primary/50 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
