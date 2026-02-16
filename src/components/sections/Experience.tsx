"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heading, Text } from "@/components/ui/Typography";
import { reveal, stagger } from "@/lib/animations";

export function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 bg-brand-muted/30 border-t border-b border-neutral-100">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Bio & Experience */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Experience Timeline */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <SectionHeading title="Work History" className="mb-8" />

                            <div className="space-y-8 border-l-2 border-neutral-200 pl-8 ml-2">
                                {/* Item 1 */}
                                <motion.div variants={reveal} className="relative">
                                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white" />
                                    <Heading level={4} className="text-lg font-medium">Shubh Shravanii</Heading>
                                    <Text variant="muted">Dialogue Role</Text>
                                </motion.div>

                                {/* Item 2 */}
                                <motion.div variants={reveal} className="relative">
                                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-300 ring-4 ring-white" />
                                    <Heading level={4} className="text-lg font-medium">Tu Anolkhi Tari Sobati</Heading>
                                    <Text variant="muted">Junior Artist</Text>
                                </motion.div>

                                {/* Item 3 */}
                                <motion.div variants={reveal} className="relative">
                                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-300 ring-4 ring-white" />
                                    <Heading level={4} className="text-lg font-medium">Lakshminivas</Heading>
                                    <Text variant="muted">Junior Artist</Text>
                                </motion.div>

                                {/* Item 4 */}
                                <motion.div variants={reveal} className="relative">
                                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-300 ring-4 ring-white" />
                                    <Heading level={4} className="text-lg font-medium">Kamali</Heading>
                                    <Text variant="muted">Junior Artist</Text>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills & Languages */}
                    <div className="lg:col-span-5 space-y-12">

                        {/* Skills */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                        >
                            <Heading level={3} className="mb-6 font-serif">Acting Strengths</Heading>
                            <div className="flex flex-wrap gap-3">
                                {["Emotional Scenes", "Traditional Roles", "Dialogue Delivery", "Expressive Close-ups", "Camera Presence", "Improvisation"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Training Highlight */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">🎭</span>
                                <div>
                                    <Heading level={4} className="mb-1">Professional Training</Heading>
                                    <Text variant="muted">
                                        Completed 6 months of intensive acting training, focusing on method acting, voice modulation, and screen techniques.
                                    </Text>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
