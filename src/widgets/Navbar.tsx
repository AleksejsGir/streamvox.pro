"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between relative">
                <Link href="/" className="relative z-50">
                    <Image
                        src="/assets/Logo/SteramVox_logo.jpg"
                        alt="StreamVox Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto rounded-xl"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                        <Button size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Get App
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
                        >
                            <nav className="flex flex-col gap-4 text-lg font-medium text-center">
                                <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="text-text-muted hover:text-white py-2">Features</Link>
                                <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-text-muted hover:text-white py-2">FAQ</Link>
                                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-text-muted hover:text-white py-2">Blog</Link>
                                <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="text-text-muted hover:text-white py-2">Pricing</Link>
                            </nav>
                            <div className="flex flex-col gap-4">
                                <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button className="w-full">
                                        <Download className="mr-2 h-4 w-4" />
                                        Get App for Windows
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </nav>
    );
}
