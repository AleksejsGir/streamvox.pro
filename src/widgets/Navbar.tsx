"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Stream<span className="text-primary">Vox</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                <Button size="sm" className="hidden sm:inline-flex">
                    <Download className="mr-2 h-4 w-4" />
                    Get App
                </Button>
            </Container>
        </nav>
    );
}
