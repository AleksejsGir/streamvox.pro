import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://streamvox.pro";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "Anthropic-ai",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
