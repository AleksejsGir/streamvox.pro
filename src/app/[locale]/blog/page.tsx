import { Metadata } from "next";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { blogPosts } from "@/shared/data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    return {
        title: `${t("title")} ${t("titleGradient")} | StreamVox`,
        description: t("subtitle"),
        keywords: ["StreamVox blog", "translation tips", "anime subtitles", "real-time translation guide"],
        openGraph: {
            title: `StreamVox ${t("titleGradient")}`,
            description: t("subtitle"),
            url: `https://streamvox.pro/${locale}/blog`,
            type: "website",
        },
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("Blog");

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {t("title")} <span className="text-gradient">{t("titleGradient")}</span>
                        </h1>
                        <p className="text-text-muted text-lg">
                            {t("subtitle")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block"
                            >
                                <article className="h-full border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                                            <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-text-muted text-sm mb-4 line-clamp-3">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-1 text-text-muted">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                                                {t("readMore")}
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
