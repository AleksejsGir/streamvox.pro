"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function Privacy() {
    const t = useTranslations("Privacy");

    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        {t("lastUpdated")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("dataCollectionTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("dataCollectionText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("paymentTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("paymentText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("paddleTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("paddleText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("thirdPartyTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("thirdPartyText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("contactTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("contactText")}{" "}
                        <a href="mailto:hello@alekgir.com" className="text-primary hover:underline">hello@alekgir.com</a>.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
