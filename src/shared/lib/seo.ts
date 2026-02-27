import { routing } from "@/i18n/routing";

export function getMetadataAlternates(path: string = "") {
    const baseUrl = "https://streamvox.pro";

    // Ensure path starts with a slash if it's not empty and doesn't already have one
    const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path;

    const alternateLanguages: Record<string, string> = {};
    for (const loc of routing.locales) {
        // Build the language-specific URL
        alternateLanguages[loc] = `${baseUrl}/${loc}${normalizedPath}`;
    }

    return {
        // The canonical URL should point to the currently localized version of the page
        // However, next-intl docs recommend setting x-default and alternates correctly in metadataBase 
        // We will generate the map of all localized alternates here.
        // We do NOT set 'canonical' here directly to let Next.js use metadataBase + current locale from alternates
        // or we can set it in the page.tsx where we have the `locale`.
        languages: {
            ...alternateLanguages,
            "x-default": `${baseUrl}${normalizedPath}`,
        },
    };
}
