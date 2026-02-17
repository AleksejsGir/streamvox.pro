import { Suspense } from "react";
import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "StreamVox Pro - Checkout",
    description: "Subscribe to StreamVox Pro for unlimited real-time translation",
    robots: { index: false, follow: false },
};

export default function CheckoutPage() {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        minHeight: "100vh",
                        background: "#0A0A0B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                    }}
                >
                    Loading...
                </div>
            }
        >
            <CheckoutClient />
        </Suspense>
    );
}
