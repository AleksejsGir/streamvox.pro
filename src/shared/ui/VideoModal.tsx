"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoId?: string;
    videoUrl?: string;
    aspectRatio?: "vertical" | "landscape";
}

export function VideoModal({ isOpen, onClose, videoId, videoUrl, aspectRatio = "vertical" }: VideoModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            className={`relative w-full ${aspectRatio === "landscape" ? "max-w-5xl aspect-video" : "max-w-md aspect-[9/16]"} bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10`}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content */}
                            {videoUrl ? (
                                <video
                                    src={videoUrl}
                                    className="w-full h-full object-contain"
                                    autoPlay
                                    controls
                                    playsInline
                                />
                            ) : videoId ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&loop=1&playlist=${videoId}`}
                                    title="StreamVox Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            ) : null}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
