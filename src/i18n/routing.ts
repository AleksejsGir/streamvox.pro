import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pt", "zh", "ja", "de", "fr", "ru", "tr", "it", "pl", "ko"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
    locales,
    defaultLocale: "en",
});
