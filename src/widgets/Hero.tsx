"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ArrowRight, Download } from "lucide-react";
import { ShowcaseCarousel } from "@/features/Showcase/Carousel";

import { useState } from "react";
import { VideoModal } from "@/shared/ui/VideoModal";

export function Hero() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col pt-32 pb-16 lg:pt-28 overflow-hidden">
            <VideoModal
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
                videoId="56UR6gu9HtU"
            />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
            </div>

            <Container className="relative z-10 grid lg:grid-cols-12 gap-8 items-center flex-grow my-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 space-y-6"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-primary mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        v1.1.0 Now Available
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        Break Language <br />
                        <span className="text-gradient">Barriers Instantly</span>
                    </h1>

                    <p className="text-xl text-text-muted max-w-lg">
                        Real-Time AI Translator for Windows. Live subtitles for calls, meetings, streams, and mobile calls in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="group">
                                <Download className="mr-2 h-5 w-5" />
                                Download on MS Store
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <Button size="lg" variant="secondary" onClick={() => setIsDemoOpen(true)}>
                            Watch Demo
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block lg:col-span-7 mt-12 lg:mt-0"
                >
                    {/* "Effective" Glow Effect Behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-[2rem] blur-2xl opacity-50 animate-pulse pointer-events-none" />

                    {/* Main Image Container */}
                    <div className="relative w-full h-auto p-2 rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-sm">

                        <div className="relative w-full rounded-md overflow-hidden shadow-inner border border-white/5">
                            <Image
                                src="/assets/showcase/StreamVox_main.png"
                                alt="StreamVox App Interface"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Simulated Overlay - Re-designed */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                            transition={{
                                opacity: { duration: 0.5, delay: 1 },
                                scale: { duration: 0.5, delay: 1 },
                                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                            }}
                            className="absolute -right-8 bottom-20 flex items-center gap-3 p-4 pr-6 rounded-2xl glass-card border-l-4 border-l-primary bg-surface/90 shadow-xl backdrop-blur-xl z-20"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /><line x1="8" x2="16" y1="22" y2="22" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Live Translation</div>
                                <div className="text-sm font-medium text-white">"Technology that feels like magic."</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>

            {/* Carousel Footer */}
            <div className="relative z-10 w-full mt-16 mb-8">
                <ShowcaseCarousel />
            </div>
        </section>
    );
}
