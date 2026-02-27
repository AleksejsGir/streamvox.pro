import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

import { getMetadataAlternates } from "@/shared/lib/seo";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Terms" });

    const baseUrl = "https://streamvox.pro";

    return {
        title: `${t("title")} | StreamVox`,
        description: t("acceptanceText"),
        openGraph: {
            title: `${t("title")} — StreamVox`,
            description: t("acceptanceText"),
            url: `${baseUrl}/${locale}/terms`,
            type: "website",
        },
        alternates: getMetadataAlternates("terms"),
    };
}

export default function TermsLayout({ children }: { children: ReactNode }) {
    return children;
}
