import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { blogPosts } from "@/shared/data/blogPosts";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | StreamVox - Real-Time Translation Tips & Guides",
    description: "Learn how to use real-time translation for anime, gaming, meetings, and more. Tips, tutorials, and guides for StreamVox users.",
    keywords: ["StreamVox blog", "translation tips", "anime subtitles", "real-time translation guide"],
    openGraph: {
        title: "StreamVox Blog - Real-Time Translation Tips & Guides",
        description: "Learn how to use real-time translation for anime, gaming, meetings, and more.",
        url: "https://streamvox.pro/blog",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            StreamVox <span className="text-gradient">Blog</span>
                        </h1>
                        <p className="text-text-muted text-lg">
                            Tips, tutorials, and guides for real-time translation
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
                                                Read more
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
