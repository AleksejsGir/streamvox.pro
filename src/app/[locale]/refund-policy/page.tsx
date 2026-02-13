"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function RefundPolicy() {
    const t = useTranslations("RefundPolicy");

    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        {t("lastUpdated")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("guaranteeTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("guaranteeText")}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("howToTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("howToText")}{" "}
                        <a href="mailto:hello@alekgir.com" className="text-primary hover:underline">hello@alekgir.com</a>{" "}
                        {t("howToTextEnd")}
                    </p>
                    <p className="text-text-muted mb-4">
                        {t("msStoreText")}{" "}
                        <a href="https://support.microsoft.com/account-billing/returning-items-you-bought-from-microsoft-for-exchange-or-refund-81629012-aa4f-f48b-2394-8596f4158b8b" target="_blank" className="text-primary hover:underline">{t("msStoreLink")}</a>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{t("paddleTitle")}</h2>
                    <p className="text-text-muted mb-4">
                        {t("paddleText")}
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
