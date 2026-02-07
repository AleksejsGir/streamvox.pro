import { faqData } from "@/shared/data/faqData";

export function JsonLd() {
    const softwareApp = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "StreamVox Pro",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "ProductivityApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "offers": {
            "@type": "Offer",
            "price": "5.99",
            "priceCurrency": "USD",
            "category": "Subscription"
        },
        "description": "Real-time AI translator for Windows. Get live subtitles for calls, meetings, anime, and movies.",
        "downloadUrl": "https://apps.microsoft.com/detail/9NC10103JH7L",
        "featureList": "Real-time translation, Smart Overlay, Mobile connection, Low latency AI, Anime subtitles",
        "screenshot": "https://streamvox.pro/assets/showcase/StreamVox_main.png",
        "author": {
            "@type": "Person",
            "name": "AlekGir"
        }
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
            />
        </>
    );
}
