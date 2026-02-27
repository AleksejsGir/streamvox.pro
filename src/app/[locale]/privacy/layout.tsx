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
    const t = await getTranslations({ locale, namespace: "Privacy" });

    const baseUrl = "https://streamvox.pro";

    return {
        title: `${t("title")} | StreamVox`,
        description: t("dataCollectionText"),
        openGraph: {
            title: `${t("title")} — StreamVox`,
            description: t("dataCollectionText"),
            url: `${baseUrl}/${locale}/privacy`,
            type: "website",
        },
        alternates: getMetadataAlternates("privacy"),
    };
}

export default function PrivacyLayout({ children }: { children: ReactNode }) {
    return children;
}
