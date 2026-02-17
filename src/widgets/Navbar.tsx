"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WindowsLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.402L35.698 7.548V41.748H0V12.402ZM0 45.897H35.698V80.368L0 75.328V45.897ZM40.165 41.748H87.712V0L40.165 6.784V41.748ZM40.165 45.897V81.151L87.712 88V45.897H40.165Z" />
    </svg>
);

export function Navbar() {
    const t = useTranslations("Navbar");
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
                mobileMenuOpen
                    ? "bg-black/95 backdrop-blur-3xl border-white/10 py-4"
                    : scrolled
                        ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
                        : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between relative">
                <Link
                    href="/"
                    className="relative z-50 block w-fit cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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
                    <Link href="/#features" className="hover:text-white transition-colors">{t("features")}</Link>
                    <Link href="/#faq" className="hover:text-white transition-colors">{t("faq")}</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link>
                    <Link href="/#pricing" className="hover:text-white transition-colors">{t("pricing")}</Link>
                    <LanguageSwitcher />
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                        <Button className="h-10 px-6 text-xs font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all rounded-lg group">
                            <WindowsLogo className="mr-2 h-4 w-4 text-primary fill-current" />
                            <span className="text-primary font-bold">
                                {t("getApp")}
                            </span>
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        className="relative z-50 p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    opacity: 1,
                                    height: "auto",
                                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                                },
                                closed: {
                                    opacity: 0,
                                    height: 0,
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                            className="absolute top-full left-0 right-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl"
                        >
                            <Container className="py-8 flex flex-col gap-6">
                                <nav className="flex flex-col gap-6 text-2xl font-semibold text-center">
                                    {[
                                        { href: "/#features", label: t("features") },
                                        { href: "/#faq", label: t("faq") },
                                        { href: "/blog", label: t("blog") },
                                        { href: "/#pricing", label: t("pricing") },
                                    ].map((item) => (
                                        <motion.div
                                            key={item.href}
                                            variants={{
                                                open: { y: 0, opacity: 1 },
                                                closed: { y: 20, opacity: 0 }
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-white hover:text-primary transition-colors block"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                                <motion.div
                                    variants={{
                                        open: { y: 0, opacity: 1 },
                                        closed: { y: 20, opacity: 0 }
                                    }}
                                    className="flex flex-col gap-4 mt-4"
                                >
                                    <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="w-full h-14 text-base font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all rounded-xl group">
                                            <WindowsLogo className="mr-3 h-6 w-6 text-primary fill-current" />
                                            <span className="text-primary font-bold">
                                                {t("getAppWindows")}
                                            </span>
                                        </Button>
                                    </a>
                                </motion.div>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </nav>
    );
}
