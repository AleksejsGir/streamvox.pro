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
    const t = await getTranslations({ locale, namespace: "Docs" });

    const baseUrl = "https://streamvox.pro";

    const alternateLanguages: Record<string, string> = {};
    for (const loc of routing.locales) {
        alternateLanguages[loc] = `${baseUrl}/${loc}/docs`;
    }

    return {
        title: `${t("title")} | StreamVox`,
        description: t("subtitle"),
        keywords: ["StreamVox docs", "documentation", "guide", "how to use", "installation", "features", "real-time translation"],
        openGraph: {
            title: `${t("title")} — StreamVox`,
            description: t("subtitle"),
            url: `${baseUrl}/${locale}/docs`,
            type: "website",
        },
        alternates: {
            canonical: `/${locale}/docs`,
            languages: alternateLanguages,
        },
    };
}

export default function DocsLayout({ children }: { children: ReactNode }) {
    return children;
}
