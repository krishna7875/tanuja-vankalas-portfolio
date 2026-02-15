"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";
import { reveal, container } from "@/lib/animations";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Right Column (Image) - Order 1 on Mobile, 2 on Desktop */}
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

                    {/* Left Column (Content) - Order 2 on Mobile, 1 on Desktop */}
                    <motion.div
                        className="order-2 md:order-1 flex flex-col gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={container}
                    >
                        <motion.div variants={reveal}>
                            <Heading level={1} family="serif" className="mb-2">
                                Tanuja Vankalas
                            </Heading>
                            <Heading level={3} className="text-accent">
                                Marathi & Hindi Actress
                            </Heading>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <Text variant="muted" className="mb-1">
                                Based in Thane, India
                            </Text>
                            <Text className="max-w-md">
                                Passionate about storytelling and bringing characters to life.
                                Television experience including <span className="italic">Shubh Shravanii</span> and other Marathi serials.
                            </Text>
                        </motion.div>

                        <motion.div variants={reveal} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="#videos">
                                <Button className="w-full sm:w-auto">
                                    View Showreel
                                </Button>
                            </Link>
                            <Link href="/portfolio-pdf">
                                <Button variant="secondary" className="w-full sm:w-auto">
                                    Download Casting PDF
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
