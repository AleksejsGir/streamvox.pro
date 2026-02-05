import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function Privacy() {
    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        Last updated: February 5, 2026
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data Collection</h2>
                    <p className="text-text-muted mb-4">
                        StreamVox processes audio data in real-time to provide translation services. This audio data is processed transiently and is NOT stored on our servers.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Payment Information</h2>
                    <p className="text-text-muted mb-4">
                        We do not compromise your payment information. All payments are securely processed by our Merchant of Record, Paddle.com, or the Microsoft Store.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Services</h2>
                    <p className="text-text-muted mb-4">
                        We use trusted third-party providers for speech-to-text processing (e.g., Deepgram, OpenAI) to ensure high accuracy. These providers are bound by strict data privacy agreements.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
                    <p className="text-text-muted mb-4">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@alekgir.com" className="text-primary hover:underline">hello@alekgir.com</a>.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
