"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { reveal, stagger } from "@/lib/animations";

// Placeholder data - replace with actual images later
const galleryImages = [
    { id: 1, src: "/images/gallery/placeholder.svg", alt: "Cinematic portrait in saree" },
    { id: 2, src: "/images/gallery/placeholder.svg", alt: "Modern chic western look" },
    { id: 3, src: "/images/gallery/placeholder.svg", alt: "Professional headshot" },
    { id: 4, src: "/images/gallery/placeholder.svg", alt: "Emotional expression close-up" },
    { id: 5, src: "/images/gallery/placeholder.svg", alt: "Traditional look with jewelry" },
    { id: 6, src: "/images/gallery/placeholder.svg", alt: "Casual lifestyle shot" },
    { id: 7, src: "/images/gallery/placeholder.svg", alt: "Dramatic lighting studio shot" },
    { id: 8, src: "/images/gallery/placeholder.svg", alt: "Character role specific look" },
    // { id: 9, src: "/images/gallery/portrait-9.jpg", alt: "Candid moment" },
];

export function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleOpenLightbox = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseLightbox = () => {
        setSelectedImageIndex(null);
    };

    const handleNext = () => {
        if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    return (
        <section id="gallery" className="py-20 md:py-32 bg-brand-bg">
            <Container>
                <SectionHeading
                    title="Portfolio"
                    subtitle="Selected Works"
                    align="center"
                    className="mb-16"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            variants={reveal}
                            className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200 cursor-zoom-in bg-muted"
                            onClick={() => handleOpenLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index < 3} // Prioritize first few images
                            />

                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>

            {selectedImageIndex !== null && (
                <Lightbox
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    isOpen={true}
                    onClose={handleCloseLightbox}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    hasNext={selectedImageIndex < galleryImages.length - 1}
                    hasPrev={selectedImageIndex > 0}
                />
            )}
        </section>
    );
}
