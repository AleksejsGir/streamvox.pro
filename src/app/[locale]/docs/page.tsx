

import { getTranslations } from "next-intl/server";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui/Button";
import {
    Download,
    Sparkles,
    Globe2,
    MonitorPlay,
    Headphones,
    HelpCircle,
    MessageCircle,
    ArrowRight,
    ExternalLink,
    LucideIcon
} from "lucide-react";
import { Link } from "@/i18n/navigation";

interface DocSection {
    titleKey: string;
    icon: LucideIcon;
    itemKeys: string[];
}

const docSections: DocSection[] = [
    {
        titleKey: "gettingStarted",
        icon: Download,
        itemKeys: ["installation", "firstLaunch", "quickStart"],
    },
    {
        titleKey: "coreFeatures",
        icon: Sparkles,
        itemKeys: ["realTimeTranslation", "smartOverlay", "bidirectionalMode", "multilingualInterface", "privacyMode"],
    },
    {
        titleKey: "supportedLanguages",
        icon: Globe2,
        itemKeys: ["inputLanguages", "outputLanguages", "autoDetection"],
    },
    {
        titleKey: "useCases",
        icon: MonitorPlay,
        itemKeys: ["animeMovies", "videoCalls", "gaming", "phoneCalls"],
    },
    {
        titleKey: "audioSetup",
        icon: Headphones,
        itemKeys: ["systemAudio", "microphone", "virtualAudioCable"],
    },
    {
        titleKey: "troubleshooting",
        icon: HelpCircle,
        itemKeys: ["noAudioDetected", "translationDelayed", "overlayNotShowing", "lowAccuracy"],
    },
];

import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("Docs");

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-gradient">{t("title")}</span>
                        </h1>
                        <p className="text-text-muted text-lg mb-8">
                            {t("subtitle")}
                        </p>
                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                            <Button>
                                <Download className="w-4 h-4 mr-2" />
                                {t("downloadBtn")}
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>

                    <div className="space-y-12">
                        {docSections.map((section) => (
                            <div key={section.titleKey} className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/20 rounded-xl">
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{t(section.titleKey)}</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {section.itemKeys.map((itemKey) => (
                                        <div
                                            key={itemKey}
                                            className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                                        >
                                            <h3 className="font-semibold mb-2">{t(itemKey)}</h3>
                                            <p className="text-sm text-text-muted">{t(`${itemKey}Desc`)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Link */}
                    <div className="mt-16 text-center">
                        <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">{t("stillHaveQuestions")}</h3>
                            <p className="text-text-muted mb-6">
                                {t("checkFaqOrContact")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#faq">
                                    <Button variant="outline">
                                        {t("viewFaq")}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <a href="mailto:hello@alekgir.com">
                                    <Button variant="ghost">
                                        {t("contactSupport")}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
