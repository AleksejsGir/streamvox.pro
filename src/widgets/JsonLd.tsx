import en from "@/i18n/messages/en.json";

export function JsonLd() {
    const faq = en.FAQ;
    const baseUrl = "https://streamvox.pro";

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "StreamVox",
        "url": baseUrl,
        "logo": `${baseUrl}/assets/StreamVox_logo.jpg`,
        "email": "hello@alekgir.com",
        "description": "AI-powered real-time translation and subtitle software for Windows.",
        "founder": {
            "@type": "Person",
            "name": "AlekGir"
        },
        "sameAs": [
            "https://apps.microsoft.com/detail/9NC10103JH7L",
            "https://www.facebook.com/profile.php?id=61586199129069"
        ]
    };

    const webSite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "StreamVox",
        "url": baseUrl,
        "description": "Real-time AI translator for Windows with live subtitles for calls, meetings, anime, and streams.",
        "inLanguage": ["en", "es", "pt", "zh", "ja", "de", "fr", "ru"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/en/blog?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const softwareApp = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "StreamVox Pro",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "MultimediaApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "StreamVox Free",
                "price": "0",
                "priceCurrency": "USD",
                "description": "30 minutes per day, no credit card required"
            },
            {
                "@type": "Offer",
                "name": "StreamVox Pro",
                "price": "5.99",
                "priceCurrency": "USD",
                "category": "Subscription",
                "description": "Unlimited translation time, monthly subscription"
            }
        ],
        "description": "Real-time AI translator for Windows. Get live subtitles for calls, meetings, anime, and movies.",
        "downloadUrl": "https://apps.microsoft.com/detail/9NC10103JH7L",
        "installUrl": "https://apps.microsoft.com/detail/9NC10103JH7L",
        "featureList": [
            "Real-time AI translation",
            "Smart floating overlay",
            "Bidirectional translation (system audio + microphone)",
            "10+ supported languages",
            "Multilingual interface (8 languages)",
            "Privacy-focused (no audio storage)",
            "Mobile call translation via Phone Link",
            "Low latency subtitle generation"
        ],
        "screenshot": `${baseUrl}/assets/showcase/StreamVox_main.png`,
        "softwareVersion": "1.4.0",
        "author": {
            "@type": "Organization",
            "name": "StreamVox",
            "url": baseUrl
        }
    };

    const faqIndices = Array.from({ length: 13 }, (_, i) => i + 1);
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqIndices.map(i => ({
            "@type": "Question",
            "name": faq[`q${i}` as keyof typeof faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq[`a${i}` as keyof typeof faq]
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
            />
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
