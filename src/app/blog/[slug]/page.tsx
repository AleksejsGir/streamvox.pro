import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { blogPosts, getBlogPost } from "@/shared/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/shared/ui/Button";

// Article content stored here for simplicity
const articleContent: Record<string, React.ReactNode> = {
    "watch-anime-without-subtitles": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                Tired of waiting weeks or months for fansubs? With StreamVox, you can watch raw anime the moment it&apos;s released — with real-time AI-translated subtitles.
            </p>

            <h2>The Problem with Traditional Anime Subtitles</h2>
            <p>
                If you&apos;re an anime fan, you know the struggle. A new episode drops in Japan, but you have to wait for:
            </p>
            <ul>
                <li>Official subtitles (days to weeks)</li>
                <li>Fansub groups (hours to days)</li>
                <li>Streaming platforms to update (varies wildly)</li>
            </ul>
            <p>
                Meanwhile, you&apos;re dodging spoilers on Reddit and Twitter. It&apos;s exhausting.
            </p>

            <h2>How StreamVox Solves This</h2>
            <p>
                StreamVox is a Windows app that translates <strong>any audio on your PC in real-time</strong>. Here&apos;s how to use it for anime:
            </p>
            <ol>
                <li><strong>Download StreamVox</strong> from the Microsoft Store</li>
                <li><strong>Play your anime</strong> in any player (VLC, browser, Crunchyroll, etc.)</li>
                <li><strong>Enable StreamVox overlay</strong> — it floats on top of your video</li>
                <li><strong>Watch with real-time subtitles</strong> — Japanese to English, instantly</li>
            </ol>

            <h2>Which Platforms Work?</h2>
            <p>StreamVox works with <em>anything</em> that plays audio on Windows:</p>
            <ul>
                <li>✅ Crunchyroll (even without subs)</li>
                <li>✅ Netflix (Japanese audio track)</li>
                <li>✅ YouTube (raw anime uploads)</li>
                <li>✅ Twitch (Japanese streamers)</li>
                <li>✅ VLC / MPC-HC (local files)</li>
                <li>✅ Any browser or video player</li>
            </ul>

            <h2>Is the Translation Good?</h2>
            <p>
                StreamVox uses advanced AI translation that understands context. It&apos;s not perfect — no machine translation is — but it&apos;s good enough to follow the story, catch jokes, and understand dialogue.
            </p>
            <p>
                For casual viewing, it&apos;s a game-changer. For learning Japanese, it&apos;s an amazing study tool.
            </p>

            <h2>Get Started Today</h2>
            <p>
                The free version gives you 30 minutes per day — enough to watch an episode. StreamVox Pro ($5.99/month) unlocks unlimited translation.
            </p>
        </div>
    ),
    "real-time-zoom-translation": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                Working with international teams? StreamVox translates Zoom, Teams, and Meet calls in real-time so you never miss a word.
            </p>

            <h2>Why Real-Time Translation for Meetings?</h2>
            <p>
                International collaboration is amazing, but language barriers are real. Maybe you:
            </p>
            <ul>
                <li>Work with colleagues who speak another language</li>
                <li>Join webinars in languages you&apos;re learning</li>
                <li>Need to follow along in multilingual meetings</li>
            </ul>

            <h2>How to Set Up StreamVox for Zoom</h2>
            <ol>
                <li><strong>Install StreamVox</strong> from Microsoft Store</li>
                <li><strong>Join your Zoom call</strong> as usual</li>
                <li><strong>Open StreamVox</strong> and select your input (system audio)</li>
                <li><strong>Position the overlay</strong> where you can see it</li>
                <li><strong>Start translating</strong> — subtitles appear in real-time</li>
            </ol>

            <h2>Supported Platforms</h2>
            <ul>
                <li>✅ Zoom</li>
                <li>✅ Microsoft Teams</li>
                <li>✅ Google Meet</li>
                <li>✅ Discord</li>
                <li>✅ Skype</li>
                <li>✅ Any video conferencing app</li>
            </ul>

            <h2>Privacy Note</h2>
            <p>
                StreamVox processes audio in real-time and doesn&apos;t store recordings. Your meetings remain private.
            </p>
        </div>
    ),
    "translate-phone-calls-windows": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                With Microsoft Phone Link and StreamVox, you can get live translated subtitles for phone calls on your Windows PC.
            </p>

            <h2>What You Need</h2>
            <ul>
                <li>Windows 10 or 11 PC</li>
                <li>iPhone or Android phone</li>
                <li>Microsoft Phone Link app (free)</li>
                <li>StreamVox (free or Pro)</li>
            </ul>

            <h2>Setup Steps</h2>
            <ol>
                <li><strong>Install Phone Link</strong> on Windows and your phone</li>
                <li><strong>Connect your phone</strong> following Microsoft&apos;s setup</li>
                <li><strong>Install StreamVox</strong> from Microsoft Store</li>
                <li><strong>Make or receive a call</strong> through Phone Link</li>
                <li><strong>Enable StreamVox</strong> to translate the call audio</li>
            </ol>

            <h2>Use Cases</h2>
            <ul>
                <li>Calls with family who speak another language</li>
                <li>Business calls with international clients</li>
                <li>Understanding voicemails in other languages</li>
            </ul>

            <h2>Limitations</h2>
            <p>
                Phone Link audio quality can vary. StreamVox works best with clear audio. Background noise may affect translation accuracy.
            </p>
        </div>
    ),
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return { title: "Article Not Found" };
    }

    return {
        title: `${post.title} | StreamVox Blog`,
        description: post.description,
        keywords: post.keywords,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            url: `https://streamvox.pro/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const content = articleContent[slug];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <article className="pt-32 pb-16">
                <Container className="max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </span>
                        </div>
                    </header>

                    <div className="mb-12">
                        {content}
                    </div>

                    {/* CTA */}
                    <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                        <h3 className="text-2xl font-bold mb-3">Ready to Try StreamVox?</h3>
                        <p className="text-text-muted mb-6">
                            Get real-time translated subtitles for any audio on Windows.
                        </p>
                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer">
                            <Button size="lg">
                                Download Free from Microsoft Store
                            </Button>
                        </a>
                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-sm text-text-muted"
                            >
                                <Tag className="w-3 h-3" />
                                {keyword}
                            </span>
                        ))}
                    </div>
                </Container>
            </article>

            <Footer />
        </main>
    );
}
