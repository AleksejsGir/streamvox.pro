"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
                    <p className="text-text-muted text-lg">
                        Simple, transparent pricing for StreamVox Pro.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Starter */}
                    <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Free Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-text-muted">/forever</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                Experience the magic of real-time translation with daily free access.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">30 minutes free usage every 24 hours</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Access to Standard Models</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Community Support</span>
                            </li>
                        </ul>

                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full bg-transparent hover:bg-white/5 border-white/20">
                                Download Free Version
                            </Button>
                        </a>
                    </div>

                    {/* StreamVox Pro */}
                    <div className="relative p-8 rounded-3xl bg-black/40 border border-primary/50 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] flex flex-col">
                        {/* Recommended Badge */}
                        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            RECOMMENDED
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">StreamVox Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-primary">$5.99</span>
                                <span className="text-text-muted">/month</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                Unlock the full power of real-time AI translation for your Windows desktop.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Unlimited Translation Time</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Access to Premium AI Models</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Priority Support</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">Early Access to New Features</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">No Watermark on Overlay</span>
                            </li>
                        </ul>

                        <div className="space-y-3">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full">
                                    Subscribe via Microsoft Store
                                </Button>
                            </a>
                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/5" disabled>
                                Subscribe via Web (Coming Soon)
                            </Button>
                        </div>
                        <p className="text-xs text-text-muted text-center mt-4">
                            14-day money-back guarantee. No questions asked.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12 text-sm text-text-muted">
                    <p>
                        Have questions? Check our{" "}
                        <Link href="/terms" className="text-white hover:underline underline-offset-4">
                            Terms of Service
                        </Link>{" "}
                        or{" "}
                        <Link href="/refund-policy" className="text-white hover:underline underline-offset-4">
                            Refund Policy
                        </Link>
                        .
                    </p>
                </div>
            </Container>
        </section>
    );
}
