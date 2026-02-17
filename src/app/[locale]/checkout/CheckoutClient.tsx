"use client";

import { useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

import { useLocale } from "next-intl";

type CheckoutStatus = "loading" | "ready" | "completed" | "closed";

export default function CheckoutClient() {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const isSuccess = searchParams.get("success") === "true";
    const [status, setStatus] = useState<CheckoutStatus>(
        isSuccess ? "completed" : "loading",
    );

    const handlePaddleLoad = () => {
        if (typeof window !== "undefined" && window.Paddle) {
            window.Paddle.Setup({
                token: "live_18c6012e315415d16e0b6521be8",
                checkout: {
                    settings: {
                        displayMode: "overlay",
                        theme: "dark",
                        locale: locale,
                        successUrl:
                            window.location.href.split("?")[0] + "?success=true",
                    },
                },
                eventCallback: (event: { name: string }) => {
                    if (event.name === "checkout.completed") {
                        setStatus("completed");
                    }
                    if (event.name === "checkout.closed") {
                        setStatus("closed");
                    }
                    if (event.name === "checkout.loaded") {
                        setStatus("ready");
                    }
                },
            });
            setStatus("ready");

            // Auto-open checkout if _ptxn is present
            const ptxn = searchParams.get("_ptxn");
            if (ptxn) {
                window.Paddle.Checkout.open({
                    transactionId: ptxn,
                });
            }
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0A0A0B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
        >
            <Script
                src="https://cdn.paddle.com/paddle/v2/paddle.js"
                onLoad={handlePaddleLoad}
            />

            <div style={{ textAlign: "center", padding: "40px" }}>
                {/* Logo */}
                <div
                    style={{
                        marginBottom: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                    }}
                >
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background:
                                "linear-gradient(135deg, #36F4EB, #A128FF)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#fff",
                        }}
                    >
                        S
                    </div>
                    <span
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "#fff",
                        }}
                    >
                        StreamVox
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: "2rem",
                        marginBottom: "8px",
                        background:
                            "linear-gradient(135deg, #36F4EB, #A128FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Pro Subscription
                </h1>

                <p
                    style={{
                        color: "#B4B4BD",
                        fontSize: "1.1rem",
                        marginBottom: "32px",
                    }}
                >
                    Unlimited real-time translation — $5.99/month
                </p>

                {status === "loading" && (
                    <>
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                border: "4px solid rgba(54, 244, 235, 0.2)",
                                borderTopColor: "#36F4EB",
                                borderRadius: "50%",
                                animation: "spin 0.8s linear infinite",
                                margin: "0 auto 16px",
                            }}
                        />
                        <p style={{ color: "#36F4EB", fontSize: "0.95rem" }}>
                            Loading checkout...
                        </p>
                    </>
                )}

                {status === "ready" && (
                    <p style={{ color: "#B4B4BD", fontSize: "0.95rem" }}>
                        Paddle checkout is ready.
                    </p>
                )}

                {status === "completed" && (
                    <div
                        style={{
                            padding: "24px",
                            background: "rgba(16, 185, 129, 0.1)",
                            borderRadius: "16px",
                            border: "1px solid rgba(16, 185, 129, 0.3)",
                        }}
                    >
                        <p
                            style={{
                                color: "#10B981",
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                marginBottom: "8px",
                            }}
                        >
                            Payment successful!
                        </p>
                        <p style={{ color: "#B4B4BD" }}>
                            Your Pro subscription is now active. You can close
                            this tab and return to StreamVox.
                        </p>
                    </div>
                )}

                {status === "closed" && (
                    <p style={{ color: "#B4B4BD", fontSize: "0.95rem" }}>
                        Checkout closed. You can close this tab.
                    </p>
                )}

                <style>{`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        </div>
    );
}
