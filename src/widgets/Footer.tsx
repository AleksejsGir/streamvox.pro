"use client";

import { Container } from "@/shared/ui/Container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Facebook, Mail, Linkedin, Instagram } from "lucide-react";

function DiscordIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
    );
}

export function Footer() {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: DiscordIcon, href: "https://discord.gg/ARPG5RzfJU", label: "Discord" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586199129069", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/alekgir", label: "Instagram" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353/", label: "LinkedIn" },
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
