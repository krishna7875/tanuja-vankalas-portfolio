"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { reveal, container } from "@/lib/animations";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left Column (Content) */}
                    <motion.div
                        className="order-2 md:order-1 flex flex-col gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={container}
                    >
                        {/* Name & Title */}
                        <motion.div variants={reveal}>
                            <Heading level={1} family="serif" className="mb-2 text-5xl md:text-6xl">
                                Tanuja Vankalas
                            </Heading>
                            <Heading level={3} className="text-accent text-lg md:text-xl font-medium">
                                Marathi & Hindi Television Actress
                            </Heading>
                        </motion.div>

                        {/* Info Row */}
                        <motion.div variants={reveal}>
                            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-neutral-600 tracking-wide">
                                <span>Thane</span>
                                <span className="text-neutral-300">•</span>
                                <span>Marathi | Hindi | English</span>
                                <span className="text-neutral-300">•</span>
                                <span>Age 25</span>
                                <span className="text-neutral-300">•</span>
                                <span>5&apos;5&quot;</span>
                            </div>
                        </motion.div>

                        {/* Availability Line */}
                        <motion.div variants={reveal}>
                            <div className="text-sm text-neutral-500">
                                <span className="font-medium mr-2">Available for:</span>
                                Television Serials • Web Series • Advertisements • Short Films
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={reveal} className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link href="#videos">
                                <Button className="w-full sm:w-auto">
                                    View Showreel
                                </Button>
                            </Link>
                            <Link target="_blank" href="/portfolio-pdf">
                                <Button variant="secondary" className="w-full sm:w-auto">
                                    Download Casting PDF
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column (Image) */}
                    <motion.div
                        className="order-1 md:order-2 relative"
                        initial="hidden"
                        animate="visible"
                        variants={reveal}
                    >
                        <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-muted">
                            <Image
                                src="/images/hero-placeholder.svg"
                                alt="Tanuja Vankalas - Actress Portfolio"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Subtle border overlay */}
                            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
