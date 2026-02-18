"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { Star, CheckCircle2 } from "lucide-react";
import { reviews } from "@/shared/data/reviews";

export const Reviews = () => {
    const t = useTranslations("Reviews");

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#0A0A0B]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#36F4EB]/5 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                    >
                        <Star className="w-4 h-4 text-[#36F4EB] fill-[#36F4EB]" />
                        <span className="text-sm font-medium text-white/80">
                            {t("badge")}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            {t("title")}{" "}
                        </span>
                        <span className="text-gradient font-extrabold">{t("titleCommunity")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#B4B4BD] max-w-2xl mx-auto"
                    >
                        {t("subtitle")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#36F4EB]/30 transition-all duration-300 hover:bg-white/[0.07]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-white">
                                            {review.author}
                                        </h3>
                                        {review.verified && (
                                            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#36F4EB]/10 border border-[#36F4EB]/20">
                                                <CheckCircle2 className="w-3 h-3 text-[#36F4EB]" />
                                                <span className="text-[10px] font-medium text-[#36F4EB]">
                                                    {t("verified")}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-xs text-[#B4B4BD]">
                                        {review.country} • {review.version ? `v${review.version}` : ""}
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating
                                                ? "text-[#36F4EB] fill-[#36F4EB]"
                                                : "text-white/20"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <h4 className="font-medium text-white/90 mb-2">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {t(`${review.id}.title` as any)}
                            </h4>

                            <p className="text-[#B4B4BD] text-sm leading-relaxed mb-4 flex-1">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {t(`${review.id}.content` as any)}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                <span className="text-xs text-[#B4B4BD]/60">
                                    {review.date}
                                </span>
                                <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-medium text-white/50">
                                        {t("msStore")}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
