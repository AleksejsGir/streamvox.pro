"use client";

import { useRef, useState, useEffect } from "react";

interface LazyVideoProps {
    src: string;
    className?: string;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
}

export function LazyVideo({
    src,
    className = "",
    loop = true,
    muted = true,
    playsInline = true,
}: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(video);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "100px" }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current && !hasLoaded) {
            videoRef.current.src = src;
            videoRef.current.load();
            videoRef.current.play().catch(() => {
                // Autoplay blocked, that's ok
            });
        }
    }, [isVisible, src, hasLoaded]);

    const handleLoadedData = () => {
        setHasLoaded(true);
    };

    return (
        <video
            ref={videoRef}
            className={className}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload="none"
            onLoadedData={handleLoadedData}
        />
    );
}
