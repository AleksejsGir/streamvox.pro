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

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
);

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
                    <a
                        href="https://discord.gg/ARPG5RzfJU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-[#5865F2] transition-colors"
                        aria-label="Discord Community"
                    >
                        <DiscordIcon className="w-5 h-5" />
                    </a>
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
                                    <a href="https://discord.gg/ARPG5RzfJU" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="w-full h-14 text-base font-bold bg-[#5865F2]/10 hover:bg-[#5865F2]/20 backdrop-blur-md border border-[#5865F2]/50 hover:border-[#5865F2] shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 transition-all rounded-xl group">
                                            <DiscordIcon className="mr-3 h-6 w-6 text-[#5865F2]" />
                                            <span className="text-[#5865F2] font-bold">
                                                Discord
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
