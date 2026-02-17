interface PaddleSetupOptions {
    token: string;
    checkout?: {
        settings?: {
            displayMode?: "overlay" | "inline";
            theme?: "light" | "dark";
            locale?: string;
            successUrl?: string;
        };
    };
    eventCallback?: (event: { name: string; data?: unknown }) => void;
}

interface PaddleInstance {
    Environment: {
        set: (env: "sandbox" | "production") => void;
    };
    Setup: (options: PaddleSetupOptions) => void;
}

declare global {
    interface Window {
        Paddle: PaddleInstance;
    }
}

export {};
