import { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { blogPosts } from "@/shared/data/blogPosts";

const baseUrl = "https://streamvox.pro";

function buildAlternates(path: string): Record<string, string> {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
        languages[locale] = `${baseUrl}/${locale}${path}`;
    }
    languages["x-default"] = `${baseUrl}/en${path}`;
    return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        entries.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
            alternates: { languages: buildAlternates("") },
        });

        entries.push({
            url: `${baseUrl}/${locale}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
            alternates: { languages: buildAlternates("/blog") },
        });

        entries.push({
            url: `${baseUrl}/${locale}/docs`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: { languages: buildAlternates("/docs") },
        });

        entries.push({
            url: `${baseUrl}/${locale}/privacy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: { languages: buildAlternates("/privacy") },
        });

        entries.push({
            url: `${baseUrl}/${locale}/terms`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: { languages: buildAlternates("/terms") },
        });

        entries.push({
            url: `${baseUrl}/${locale}/refund-policy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: { languages: buildAlternates("/refund-policy") },
        });

        for (const post of blogPosts) {
            entries.push({
                url: `${baseUrl}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: "monthly",
                priority: 0.8,
                alternates: { languages: buildAlternates(`/blog/${post.slug}`) },
            });
        }
    }

    return entries;
}
