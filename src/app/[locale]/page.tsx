import { getMetadataAlternates } from "@/shared/lib/seo";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/widgets/Navbar";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        alternates: getMetadataAlternates(""),
    };
}
import { Hero } from "@/widgets/Hero";
import { SmartOverlayDemo } from "@/features/SmartOverlay/Demo";
import { Reviews } from "@/widgets/Reviews";
import { UseCases } from "@/widgets/UseCases";
import { Features } from "@/widgets/Features";
import { Pricing } from "@/widgets/Pricing";
import { FAQ } from "@/widgets/FAQ";
import { Footer } from "@/widgets/Footer";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main>
            <Navbar />
            <Hero />
            <SmartOverlayDemo />
            <Reviews />
            <Features />
            <UseCases />
            <Pricing />
            <FAQ />
            <Footer />
        </main>
    );
}
