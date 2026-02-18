import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/widgets/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    const baseUrl = "https://streamvox.pro";

    const alternateLanguages: Record<string, string> = {};
    for (const loc of routing.locales) {
        alternateLanguages[loc] = `${baseUrl}/${loc}`;
    }

    return {
        title: t("title"),
        description: t("description"),
        keywords: ["AI translator", "real-time subtitles", "Windows translator", "speech to text", "live captioning", "StreamVox", "translation app", "anime subtitles", "meeting translator"],
        authors: [{ name: "AlekGir", url: baseUrl }],
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                ...alternateLanguages,
                "x-default": baseUrl,
            },
        },
        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: `${baseUrl}/${locale}`,
            siteName: "StreamVox",
            locale: locale === "en" ? "en_US" : locale,
            type: "website",
            images: [
                {
                    url: `${baseUrl}/assets/showcase/StreamVox_main.png`,
                    width: 1200,
                    height: 630,
                    alt: "StreamVox App Showcase",
                },
            ],
        },
        metadataBase: new URL(baseUrl),

    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
                <JsonLd />
                <Analytics />
            </body>
        </html>
    );
}
