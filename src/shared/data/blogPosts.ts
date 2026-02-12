export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image?: string;
    keywords: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "streamvox-certified-microsoft-store",
        title: "StreamVox Pro Certified by Microsoft & New Features",
        description: "Big news! StreamVox Pro is now officially certified on the Microsoft Store. Learn about the new features, pricing, and what's coming next.",
        date: "2026-02-12",
        author: "AlekGir",
        category: "News",
        readTime: "2 min read",
        keywords: ["Microsoft Store", "certification", "StreamVox Pro", "update", "roadmap"]
    },
    {
        slug: "watch-anime-without-subtitles",
        title: "How to Watch Anime Without Waiting for Subtitles",
        description: "Learn how to enjoy raw anime with real-time AI translation. No more waiting for fansubs - get instant Japanese to English subtitles.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Anime",
        readTime: "5 min read",
        keywords: ["anime", "japanese translation", "real-time subtitles", "raw anime", "fansubs"]
    },
    {
        slug: "real-time-zoom-translation",
        title: "How to Add Real-Time Subtitles to Zoom Calls",
        description: "Step-by-step guide to translating Zoom meetings in real-time. Perfect for international teams and multilingual calls.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Business",
        readTime: "4 min read",
        keywords: ["zoom", "translation", "meetings", "subtitles", "international"]
    },
    {
        slug: "translate-phone-calls-windows",
        title: "How to Translate Phone Calls on Windows with Phone Link",
        description: "Connect your iPhone or Android to Windows and get live translated subtitles for any phone call.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Mobile",
        readTime: "4 min read",
        keywords: ["phone link", "phone calls", "translation", "mobile", "windows"]
    },
    {
        slug: "japanese-visual-novels-no-translation-patch",
        title: "Play Japanese Visual Novels Without Translation Patches",
        description: "Skip the wait for fan translations. Learn how to play untranslated Japanese visual novels with real-time AI subtitles on Windows.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Gaming",
        readTime: "6 min read",
        keywords: ["visual novels", "japanese games", "VN translation", "untranslated games", "JRPG"]
    },
    {
        slug: "streamvox-vs-otter-ai-comparison",
        title: "StreamVox vs Otter.ai: Real-Time Translation Comparison",
        description: "Detailed comparison of StreamVox and Otter.ai. Which is better for real-time translation vs transcription? We break it down.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Comparison",
        readTime: "7 min read",
        keywords: ["StreamVox vs Otter", "comparison", "transcription", "translation", "best AI tool"]
    },
    {
        slug: "best-ai-translation-tools-windows-2026",
        title: "Best AI Translation Tools for Windows in 2026",
        description: "Complete guide to the top AI translation apps for Windows. Compare features, pricing, and find the best tool for your needs.",
        date: "2026-02-07",
        author: "StreamVox Team",
        category: "Guide",
        readTime: "8 min read",
        keywords: ["AI translation", "Windows apps", "best translation tools", "2026", "comparison"]
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category === category);
}
