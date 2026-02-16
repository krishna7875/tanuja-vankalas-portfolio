"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoModal } from "@/components/ui/VideoModal";
import { Heading, Text } from "@/components/ui/Typography";
import { videos, Video } from "@/lib/videos";
import { reveal, stagger } from "@/lib/animations";

export function Videos() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenVideo = (video: Video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Clear selected video after animation to prevent flickering
        setTimeout(() => setSelectedVideo(null), 300);
    };

    return (
        <section id="videos" className="py-20 md:py-32 bg-brand-bg relative">
            <Container>
                <SectionHeading
                    title="Latest Performances"
                    subtitle="Showreel & Auditions"
                    align="center"
                    className="mb-16"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            variants={reveal}
                            className="group cursor-pointer"
                            onClick={() => handleOpenVideo(video)}
                        >
                            {/* Card Container */}
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-neutral-200 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 group-hover:bg-accent text-brand-dark group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <Play fill="currentColor" size={24} className="ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-1">
                                <Heading level={4} className="group-hover:text-accent transition-colors">
                                    {video.title}
                                </Heading>
                                <Text variant="muted">
                                    {video.description}
                                </Text>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>

            <VideoModal
                video={selectedVideo}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}
