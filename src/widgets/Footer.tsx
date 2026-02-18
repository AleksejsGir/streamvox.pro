"use client";

import { Container } from "@/shared/ui/Container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Facebook, Mail, Youtube, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586199129069", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/alekgir", label: "Instagram" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353/", label: "LinkedIn" },
        { icon: Youtube, href: "https://www.youtube.com/@StreamVoxApp", label: "YouTube" },
        { icon: Mail, href: "mailto:hello@alekgir.com", label: "Email" },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-black pt-16 pb-8 text-sm overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-1/2 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10 grid md:grid-cols-4 gap-10 md:gap-8">
                <div className="space-y-6">
                    <Link
                        href="/"
                        className="block w-fit relative z-20 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <Image
                            src="/assets/Logo/SteramVox_logo.jpg"
                            alt="StreamVox Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </Link>
                    <p className="text-text-muted leading-relaxed max-w-xs">
                        {t("description")}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-white hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Product Column */}
                <div>
                    <h4 className="font-semibold text-white mb-5 tracking-wide">{t("product")}</h4>
                    <ul className="space-y-3 text-text-muted">
                        <li><Link href="#features" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("features")}</Link></li>
                        <li><a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("download")}</a></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("blog")}</Link></li>
                        <li><Link href="/docs" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("documentation")}</Link></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div>
                    <h4 className="font-semibold text-white mb-5 tracking-wide">{t("legal")}</h4>
                    <ul className="space-y-3 text-text-muted">
                        <li><Link href="/privacy" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("privacyPolicy")}</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("termsOfService")}</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />{t("refundPolicy")}</Link></li>
                    </ul>
                </div>

                {/* Connect/Contact Column - Simplified since socials are on left */}
                <div>
                    <h4 className="font-semibold text-white mb-5 tracking-wide">{t("connect")}</h4>
                    <p className="text-text-muted mb-4 text-sm leading-relaxed">
                        {t("contactText")}
                    </p>
                    <a href="mailto:hello@alekgir.com" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium group">
                        <Mail className="w-4 h-4 group-hover:animate-bounce" />
                        hello@alekgir.com
                    </a>
                </div>
            </Container>

            <Container className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
                <p>© {currentYear} StreamVox. {t("rights")}</p>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {t("systemStatus")}</span>
                </div>
            </Container>
        </footer>
    );
}
