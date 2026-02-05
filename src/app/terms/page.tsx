import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function Terms() {
    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        Last updated: February 5, 2026
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-text-muted mb-4">
                        By accessing getting or using StreamVox, you agree to be bound by these Terms of Service.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Subscriptions</h2>
                    <p className="text-text-muted mb-4">
                        StreamVox Pro is billed on a subscription basis ($5.99/month). You can cancel your subscription at any time.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Usage Limits</h2>
                    <p className="text-text-muted mb-4">
                        The Free Starter plan is limited to 30 minutes of translation per 24 hours. StreamVox Pro offers unlimited translation time.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Privacy</h2>
                    <p className="text-text-muted mb-4">
                        Your privacy is important to us. Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> to understand how we collect and use your information.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
