"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { routing } from "@/i18n/routing";

const localeNames: Record<string, string> = {
    en: "English",
    es: "Español",
    pt: "Português",
    zh: "中文",
    ja: "日本語",
    de: "Deutsch",
    fr: "Français",
    ru: "Русский",
    tr: "Türkçe",
    it: "Italiano",
    pl: "Polski",
    ko: "한국어",
};

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("Navbar");

    const handleLocaleChange = (newLocale: string) => {
        setIsOpen(false);
        router.replace(pathname, { locale: newLocale });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium text-text-muted hover:text-white"
                aria-label={t("switchLanguage")}
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-background border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                    >
                        <div className="py-2 max-h-64 overflow-y-auto custom-scrollbar">
                            {routing.locales.map((loc) => (
                                <button
                                    key={loc}
                                    onClick={() => handleLocaleChange(loc)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors flex items-center justify-between ${locale === loc ? "text-primary font-medium" : "text-text-muted hover:text-white"
                                        }`}
                                >
                                    <span>{localeNames[loc]}</span>
                                    {locale === loc && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
