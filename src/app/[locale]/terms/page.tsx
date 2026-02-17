"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function Terms() {
    const t = useTranslations("Terms");

    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        {t("lastUpdated")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("acceptanceTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("acceptanceText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("subscriptionsTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("subscriptionsText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("usageLimitsTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("usageLimitsText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("privacyText")}{" "}
                        <Link href="/privacy" className="text-primary hover:underline">{t("privacyLink")}</Link>{" "}
                        {t("privacyTextEnd")}
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
