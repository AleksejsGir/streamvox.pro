import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "RefundPolicy" });

    const baseUrl = "https://streamvox.pro";

    const alternateLanguages: Record<string, string> = {};
    for (const loc of routing.locales) {
        alternateLanguages[loc] = `${baseUrl}/${loc}/refund-policy`;
    }

    return {
        title: `${t("title")} | StreamVox`,
        description: t("guaranteeText"),
        openGraph: {
            title: `${t("title")} — StreamVox`,
            description: t("guaranteeText"),
            url: `${baseUrl}/${locale}/refund-policy`,
            type: "website",
        },
        alternates: {
            canonical: `/${locale}/refund-policy`,
            languages: alternateLanguages,
        },
    };
}

export default function RefundPolicyLayout({ children }: { children: ReactNode }) {
    return children;
}
