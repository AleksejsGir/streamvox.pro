"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Sliders } from "lucide-react";

export function SmartOverlayDemo() {
    const [opacity, setOpacity] = useState(70);

    return (
        <section className="py-24 overflow-hidden relative">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="order-2 lg:order-1 lg:col-span-4 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            The &quot;Invisible&quot; <br />
                            <span className="text-gradient">Smart Overlay</span>
                        </h2>
                        <p className="text-text-muted text-lg">
                            StreamVox floats above your content. Adjust the transparency to keep subtitles visible without blocking your view.
                            Perfect for movies and gaming.
                        </p>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="flex justify-between mb-4">
                                <label className="flex items-center gap-2 font-medium">
                                    <Sliders className="w-4 h-4 text-primary" />
                                    Overlay Opacity
                                </label>
                                <span className="text-primary font-mono">{opacity}%</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={opacity}
                                onChange={(e) => setOpacity(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-secondary transition-colors"
                                aria-label="Overlay Opacity"
                            />
                            <p className="text-xs text-text-muted mt-3">
                                Drag the slider to test the transparency effect on the preview.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 lg:col-span-8 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#0f0f11] border border-white/10 shadow-2xl">
                            {/* Fake Background Content */}
                            <video
                                src="/assets/video/StreamVox_movie.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />

                            {/* The Smart Overlay */}
                            <div
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 p-4 rounded-xl border border-white/10 transition-all duration-100 ease-linear shadow-lg"
                                style={{
                                    backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`,
                                    backdropFilter: "blur(4px)"
                                }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Live Translation</span>
                                </div>
                                <p className="text-base md:text-xl font-medium text-white leading-relaxed">
                                    &quot;This is how the overlay looks on your screen. You decide how visible the background should be.&quot;
                                </p>
                                <p className="text-sm text-gray-400 mt-1">original: &quot;C&apos;est à cela que ressemble la superposition sur votre écran.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
