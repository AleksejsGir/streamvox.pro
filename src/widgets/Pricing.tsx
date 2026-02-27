"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const WindowsLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.402L35.698 7.548V41.748H0V12.402ZM0 45.897H35.698V80.368L0 75.328V45.897ZM40.165 41.748H87.712V0L40.165 6.784V41.748ZM40.165 45.897V81.151L87.712 88V45.897H40.165Z" />
    </svg>
);

export function Pricing() {
    const t = useTranslations("Pricing");
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-text-muted text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Free Starter */}
                    <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{t("freeTitle")}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{t("freePrice")}</span>
                                <span className="text-text-muted">{t("freePeriod")}</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                {t("freeDesc")}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("freeFeat1")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("freeFeat2")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("freeFeat3")}</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="w-full bg-transparent hover:bg-white/5 border-white/20 h-12 group">
                                    <WindowsLogo className="mr-2 h-4 w-4 fill-current opacity-70 group-hover:opacity-100 transition-opacity" />
                                    {t("freeBtn")}
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* StreamVox Pro */}
                    <div className="relative p-6 rounded-3xl bg-black/40 border border-primary/50 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] flex flex-col xl:scale-105 z-10">
                        {/* Recommended Badge */}
                        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            {t("recommended")}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{t("proTitle")}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-primary">{t("proPrice")}</span>
                                <span className="text-text-muted">{t("proPeriod")}</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                {t("proDesc")}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proFeat1")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proFeat2")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proFeat3")}</span>
                            </li>
                        </ul>

                        <div className="space-y-4 mt-auto">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button className="w-full h-12 text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all rounded-lg group">
                                    <WindowsLogo className="mr-2 h-5 w-5 text-primary fill-current" />
                                    <span className="text-primary font-bold">
                                        {t("proBtn")}
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* StreamVox Pro Plus */}
                    <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{t("proPlusTitle")}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">{t("proPlusPrice")}</span>
                                <span className="text-text-muted">{t("proPlusPeriod")}</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                {t("proPlusDesc")}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proPlusFeat1")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proFeat2")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span className="text-sm">{t("proFeat3")}</span>
                            </li>
                        </ul>

                        <div className="space-y-4 mt-auto">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button className="w-full h-12 text-sm font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition-all rounded-lg group">
                                    <WindowsLogo className="mr-2 h-5 w-5 text-white/80 fill-current" />
                                    <span className="text-white font-bold">
                                        {t("proBtn")}
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* StreamVox Unlimited */}
                    <div className="relative p-6 rounded-3xl bg-white/5 border border-amber-500/30 backdrop-blur-sm flex flex-col shadow-[0_0_20px_-10px_rgba(245,158,11,0.2)]">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2 text-amber-500">{t("unlimitedTitle")}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">{t("unlimitedPrice")}</span>
                                <span className="text-text-muted">{t("unlimitedPeriod")}</span>
                            </div>
                            <p className="text-sm text-text-muted mt-4">
                                {t("unlimitedDesc")}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-amber-500" />
                                <span className="text-sm">{t("unlimitedFeat1")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-amber-500" />
                                <span className="text-sm">{t("proFeat2")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-amber-500" />
                                <span className="text-sm">{t("proFeat3")}</span>
                            </li>
                        </ul>

                        <div className="space-y-4 mt-auto">
                            <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button className="w-full h-12 text-sm font-bold bg-amber-500/10 hover:bg-amber-500/20 backdrop-blur-md border border-amber-500/50 text-amber-500 hover:scale-[1.02] transition-all rounded-lg group">
                                    <WindowsLogo className="mr-2 h-5 w-5 text-amber-500 fill-current" />
                                    <span className="font-bold">
                                        {t("proBtn")}
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-text-muted text-center mt-6">
                    {t("proGuarantee")}
                </p>

                <div className="text-center mt-12 text-sm text-text-muted">
                    <p>
                        {t("footerText")}{" "}
                        <Link href="/terms" className="text-white hover:underline underline-offset-4">
                            {t("termsLink")}
                        </Link>{" "}
                        {t("or")}{" "}
                        <Link href="/refund-policy" className="text-white hover:underline underline-offset-4">
                            {t("refundLink")}
                        </Link>
                        .
                    </p>
                </div>
            </Container>
        </section>
    );
}
