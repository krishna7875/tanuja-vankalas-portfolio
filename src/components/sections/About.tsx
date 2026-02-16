"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Typography";
import { reveal } from "@/lib/animations";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-bg">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    className="max-w-4xl mx-auto"
                >
                    <SectionHeading title="About" className="mb-8" />

                    <Text variant="large" className="text-xl md:text-2xl leading-relaxed text-balance text-neutral-800 mb-8 font-serif">
                        Tanuja Vankalas is a Marathi and Hindi television actress based in Thane. She has completed professional acting training and has on-screen experience in Marathi serial productions including <span className="italic">Shubh Shravanii</span> and other television projects. She is known for expressive performances, strong dialogue delivery, and natural screen presence.
                    </Text>

                    <div className="border-t border-neutral-200 pt-8 mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm uppercase tracking-wider font-medium">Age Range</span>
                                <span className="font-medium text-neutral-900">20-25 Years</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm uppercase tracking-wider font-medium">Height</span>
                                <span className="font-medium text-neutral-900">5'5"</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm uppercase tracking-wider font-medium">Location</span>
                                <span className="font-medium text-neutral-900">Thane, Mumbai</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm uppercase tracking-wider font-medium">Languages</span>
                                <span className="font-medium text-neutral-900">Marathi, Hindi, English</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-4">
                            <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-2 font-medium">Available For</span>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-800">
                                <span>Television Serials</span>
                                <span className="text-neutral-300">•</span>
                                <span>Web Series</span>
                                <span className="text-neutral-300">•</span>
                                <span>Advertisements</span>
                                <span className="text-neutral-300">•</span>
                                <span>Short Films</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </Container>
        </section>
    );
}
