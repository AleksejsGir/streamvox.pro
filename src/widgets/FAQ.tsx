"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function FAQ() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Using 1-based index as in en.json
    const faqIndices = Array.from({ length: 13 }, (_, i) => i + 1);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t("title")} <span className="text-gradient">{t("titleGradient")}</span>
                    </h2>
                    <p className="text-text-muted text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqIndices.map((i) => {
                        const index = i - 1; // logical index for state
                        return (
                            <div
                                key={index}
                                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="font-semibold text-lg pr-4">{t(`q${i}`)}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <p className="px-6 pb-6 text-text-muted leading-relaxed">
                                        {t(`a${i}`)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
