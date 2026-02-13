import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/widgets/Navbar";
import { Hero } from "@/widgets/Hero";
import { UseCases } from "@/widgets/UseCases";
import { Features } from "@/widgets/Features";
import { SmartOverlayDemo } from "@/features/SmartOverlay/Demo";
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
            <Features />
            <UseCases />
            <SmartOverlayDemo />
            <Pricing />
            <FAQ />
            <Footer />
        </main>
    );
}
