import { Container } from "@/shared/ui/Container";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export default function RefundPolicy() {
    return (
        <main>
            <Navbar />
            <Container className="pt-32 pb-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
                <div className="prose prose-invert">
                    <p className="text-lg text-text-muted mb-8">
                        Last updated: February 5, 2026
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">14-Day Money-Back Guarantee</h2>
                    <p className="text-text-muted mb-4">
                        At StreamVox, we want you to be completely satisfied with our service. If you are not satisfied with your purchase of StreamVox Pro, you may request a full refund within 14 days of your initial purchase.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">How to Request a Refund</h2>
                    <p className="text-text-muted mb-4">
                        To request a refund, please contact our support team at <a href="mailto:hello@alekgir.com" className="text-primary hover:underline">hello@alekgir.com</a> with your order details.
                    </p>
                    <p className="text-text-muted mb-4">
                        For subscriptions purchased via the Microsoft Store, refunds are handled directly by Microsoft. Please refer to the <a href="https://support.microsoft.com/account-billing/returning-items-you-bought-from-microsoft-for-exchange-or-refund-81629012-aa4f-f48b-2394-8596f4158b8b" target="_blank" className="text-primary hover:underline">Microsoft Store Refund Policy</a>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Paddle Payments</h2>
                    <p className="text-text-muted mb-4">
                        Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
