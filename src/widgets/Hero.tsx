"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
            </div>

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-primary mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        v1.0 Now Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Break Language <br />
                        <span className="text-gradient">Barriers Instantly.</span>
                    </h1>

                    <p className="text-xl text-text-muted max-w-lg">
                        The ultimate AI-powered real-time translator for Windows.
                        Calls, Movies, Streams — in your language with &lt;500ms latency.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="group">
                            <Download className="mr-2 h-5 w-5" />
                            Download on Store
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="secondary">
                            Watch Demo
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Visual / Placeholder for App Screenshot */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl shadow-primary/20 bg-black/40">
                        <div className="absolute inset-x-0 top-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="flex items-center justify-center h-full text-text-muted/50 font-mono">
                            [App Interface Preview]
                        </div>

                        {/* Simulated Overlay */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-10 right-[-20px] w-64 p-4 glass-card border border-primary/30 bg-black/80 backdrop-blur-xl"
                        >
                            <div className="text-xs text-primary mb-1">StreamVox Transcribing...</div>
                            <div className="text-white text-sm">&quot;Technology that feels like magic.&quot;</div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
