"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const slides = [
    "/assets/showcase/Presentation_1_FullHD.png",
    "/assets/showcase/Presentation_2.png",
    "/assets/showcase/Presentation_3.png",
    "/assets/showcase/Presentation_4.png",
    "/assets/showcase/Presentation_5.png",
    "/assets/showcase/Presentation_6.png",
    "/assets/showcase/Presentation_7.png",
    "/assets/showcase/Presentation_9.png",
    "/assets/showcase/Presentation_21.png",
];

export function ShowcaseCarousel() {
    return (
        <section className="py-12 overflow-hidden whitespace-nowrap">
            <div className="relative w-full">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex items-center gap-6 pr-6"
                        style={{ width: "max-content" }}
                    >
                        {[...slides, ...slides].map((src, idx) => (
                            <div
                                key={idx}
                                className="relative shrink-0 w-[300px] md:w-[500px] aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl glass-card group cursor-pointer"
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10 pointer-events-none" />

                                <Image
                                    src={src}
                                    alt={`StreamVox Interface Preview ${idx}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 300px, 500px"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
