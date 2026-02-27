import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { blogPosts, getBlogPost } from "@/shared/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { articleContent } from "@/shared/data/articleContent";

const WindowsLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.402L35.698 7.548V41.748H0V12.402ZM0 45.897H35.698V80.368L0 75.328V45.897ZM40.165 41.748H87.712V0L40.165 6.784V41.748ZM40.165 45.897V81.151L87.712 88V45.897H40.165Z" />
    </svg>
);

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

import { getMetadataAlternates } from "@/shared/lib/seo";

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
        alternates: getMetadataAlternates(`blog/${post.slug}`),
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug, locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("Blog");
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
                        {t("backToBlog")}
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
                        <h3 className="text-2xl font-bold mb-3">{t("readyToTry")}</h3>
                        <p className="text-text-muted mb-6">
                            {t("readyToTryDesc")}
                        </p>
                        <a href="https://apps.microsoft.com/detail/9NC10103JH7L?cid=sv_website" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="group h-14 px-8 text-sm font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md border border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all w-full sm:w-auto rounded-lg">
                                <WindowsLogo className="mr-3 h-6 w-6 text-primary fill-current" />
                                <span className="text-primary font-bold">
                                    {t("downloadFree")}
                                </span>
                                <ArrowRight className="ml-3 h-4 w-4 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
