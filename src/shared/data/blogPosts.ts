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
        slug: "watch-anime-without-subtitles",
        title: "How to Watch Anime Without Waiting for Subtitles",
        description: "Learn how to enjoy raw anime with real-time AI translation. No more waiting for fansubs — get instant Japanese to English subtitles.",
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
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category === category);
}
