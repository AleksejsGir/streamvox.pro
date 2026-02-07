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
                Tired of waiting weeks or months for fansubs? With StreamVox, you can watch raw anime the moment it&apos;s released - with real-time AI-translated subtitles.
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
                <li><strong>Enable StreamVox overlay</strong> - it floats on top of your video</li>
                <li><strong>Watch with real-time subtitles</strong> - Japanese to English, instantly</li>
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
                StreamVox uses advanced AI translation that understands context. It&apos;s not perfect - no machine translation is - but it&apos;s good enough to follow the story, catch jokes, and understand dialogue.
            </p>
            <p>
                For casual viewing, it&apos;s a game-changer. For learning Japanese, it&apos;s an amazing study tool.
            </p>

            <h2>Get Started Today</h2>
            <p>
                The free version gives you 30 minutes per day - enough to watch an episode. StreamVox Pro ($5.99/month) unlocks unlimited translation.
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
                <li><strong>Start translating</strong> - subtitles appear in real-time</li>
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
    "japanese-visual-novels-no-translation-patch": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                Love visual novels but tired of waiting years for fan translations? StreamVox lets you play untranslated Japanese VNs right now with real-time AI subtitles.
            </p>

            <h2>The Visual Novel Translation Problem</h2>
            <p>
                Japanese visual novels are incredible, but the translation situation is frustrating:
            </p>
            <ul>
                <li>Official localizations take 2-5 years (if they happen at all)</li>
                <li>Fan translations are slow and often abandoned</li>
                <li>Machine translation patches exist but require technical setup</li>
                <li>Many amazing VNs will never be translated</li>
            </ul>

            <h2>How StreamVox Changes Everything</h2>
            <p>
                StreamVox captures audio from your PC and translates it in real-time. For visual novels with voice acting, this means:
            </p>
            <ol>
                <li><strong>Launch your VN</strong> - any engine works (Kirikiri, Ren&apos;Py, Unity, etc.)</li>
                <li><strong>Enable StreamVox</strong> and position the overlay</li>
                <li><strong>Play normally</strong> - voice lines appear as translated subtitles</li>
                <li><strong>Enjoy the story</strong> without waiting for translation patches</li>
            </ol>

            <h2>Best Visual Novels to Try</h2>
            <p>Here are some popular untranslated VNs perfect for StreamVox:</p>
            <ul>
                <li>✅ Newer releases with full voice acting</li>
                <li>✅ Drama and romance VNs with clear dialogue</li>
                <li>✅ Sports and slice-of-life genres</li>
                <li>✅ Sequels to translated games</li>
            </ul>

            <h2>Tips for Best Results</h2>
            <ul>
                <li>Use headphones for cleaner audio capture</li>
                <li>Adjust text speed to give translation time to process</li>
                <li>Start with VNs you know a bit about for context</li>
            </ul>

            <h2>Get Started</h2>
            <p>
                StreamVox Free gives you 30 minutes daily - enough for a few scenes. Go Pro for unlimited VN sessions.
            </p>
        </div>
    ),
    "streamvox-vs-otter-ai-comparison": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                Both StreamVox and Otter.ai help with audio, but they solve very different problems. Here&apos;s a detailed comparison to help you choose.
            </p>

            <h2>Quick Comparison</h2>
            <p><strong>StreamVox</strong>: Real-time translation + subtitles for any Windows audio</p>
            <p><strong>Otter.ai</strong>: Meeting transcription and note-taking for English</p>

            <h2>Key Differences</h2>

            <h3>Translation vs Transcription</h3>
            <ul>
                <li><strong>StreamVox</strong>: Translates between 10+ languages in real-time</li>
                <li><strong>Otter.ai</strong>: Transcribes English to text (no translation)</li>
            </ul>

            <h3>Use Cases</h3>
            <ul>
                <li><strong>StreamVox</strong>: Anime, international calls, foreign movies, gaming</li>
                <li><strong>Otter.ai</strong>: English meetings, interviews, lectures</li>
            </ul>

            <h3>How It Works</h3>
            <ul>
                <li><strong>StreamVox</strong>: Captures system audio, translates via AI, shows overlay</li>
                <li><strong>Otter.ai</strong>: Records/joins meetings, transcribes, creates searchable notes</li>
            </ul>

            <h3>Platform</h3>
            <ul>
                <li><strong>StreamVox</strong>: Windows desktop app</li>
                <li><strong>Otter.ai</strong>: Web, mobile, Zoom/Teams integrations</li>
            </ul>

            <h2>When to Use StreamVox</h2>
            <ul>
                <li>✅ You need multi-language translation</li>
                <li>✅ You want subtitles for any audio (games, movies, streams)</li>
                <li>✅ You need a floating overlay that works everywhere</li>
                <li>✅ Privacy matters - no recordings stored</li>
            </ul>

            <h2>When to Use Otter.ai</h2>
            <ul>
                <li>✅ You need English transcription only</li>
                <li>✅ You want meeting summaries and searchable notes</li>
                <li>✅ You need speaker identification</li>
                <li>✅ You want deep Zoom/Teams integration</li>
            </ul>

            <h2>Verdict</h2>
            <p>
                They&apos;re not competitors - they solve different needs. Use <strong>StreamVox</strong> for translation and universal subtitles. Use <strong>Otter.ai</strong> for English transcription and meeting notes.
            </p>
        </div>
    ),
    "best-ai-translation-tools-windows-2026": (
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
                Looking for the best AI translation app for Windows in 2026? We&apos;ve tested the top options to help you find the right tool.
            </p>

            <h2>Top AI Translation Tools for Windows</h2>

            <h3>1. StreamVox (Best for Real-Time)</h3>
            <ul>
                <li><strong>Best for</strong>: Live translation of any audio on Windows</li>
                <li><strong>Features</strong>: Floating overlay, 10+ languages, system audio capture</li>
                <li><strong>Price</strong>: Free (30 min/day) or $5.99/month Pro</li>
                <li><strong>Unique</strong>: Works with any app - games, movies, calls, streams</li>
            </ul>

            <h3>2. Google Translate</h3>
            <ul>
                <li><strong>Best for</strong>: Quick text and website translation</li>
                <li><strong>Features</strong>: 100+ languages, browser extension, mobile app</li>
                <li><strong>Price</strong>: Free</li>
                <li><strong>Limitation</strong>: No real-time audio translation on Windows</li>
            </ul>

            <h3>3. DeepL</h3>
            <ul>
                <li><strong>Best for</strong>: High-quality document translation</li>
                <li><strong>Features</strong>: Superior text quality, PDF translation</li>
                <li><strong>Price</strong>: Free tier, Pro from $8.74/month</li>
                <li><strong>Limitation</strong>: No audio/video translation</li>
            </ul>

            <h3>4. Microsoft Translator</h3>
            <ul>
                <li><strong>Best for</strong>: Integration with Microsoft ecosystem</li>
                <li><strong>Features</strong>: Office integration, conversation mode</li>
                <li><strong>Price</strong>: Free</li>
                <li><strong>Limitation</strong>: Limited real-time audio features</li>
            </ul>

            <h2>Comparison Table</h2>
            <p>Here&apos;s how they stack up for common use cases:</p>
            <ul>
                <li><strong>Anime/Movies</strong>: StreamVox ✅ | Others ❌</li>
                <li><strong>Live Calls</strong>: StreamVox ✅ | Others limited</li>
                <li><strong>Document Translation</strong>: DeepL ✅</li>
                <li><strong>Quick Text</strong>: Google Translate ✅</li>
            </ul>

            <h2>Our Recommendation</h2>
            <p>
                For <strong>real-time audio translation</strong> on Windows, StreamVox is the clear winner. It&apos;s the only tool that works with any audio source - games, movies, calls, and streams - with a floating overlay.
            </p>
            <p>
                For <strong>text and document translation</strong>, combine DeepL (quality) with Google Translate (speed and languages).
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
