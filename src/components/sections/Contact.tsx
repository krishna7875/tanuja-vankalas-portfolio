"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reveal, stagger } from "@/lib/animations";
import { Mail, MessageCircle, Instagram } from "lucide-react";

export function Contact() {
    const whatsappMessage = encodeURIComponent("Hi Tanuja, I viewed your portfolio and would like to connect.");

    return (
        <section id="contact" className="py-20 md:py-32 bg-brand-bg bg-gradient-to-b from-transparent to-brand-muted/20">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        title="Contact"
                        subtitle="For casting inquiries, collaborations, or professional opportunities."
                        className="mb-16"
                        align="center"
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {/* Email Card */}
                        <motion.a
                            href="mailto:tanujavanakals@gmail.com"
                            variants={reveal}
                            className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-accent/50 transition-all duration-300 group shadow-sm hover:shadow-md text-center flex flex-col items-center gap-4"
                        >
                            <div className="p-4 rounded-full bg-neutral-50 text-neutral-600 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif font-medium text-lg mb-1">Email</h3>
                                <p className="text-sm text-neutral-500 mb-3">Direct Inquiries</p>
                                <span className="text-sm md:text-base font-medium text-neutral-800 group-hover:underline decoration-accent/50 underline-offset-4">
                                    tanujavanakals@gmail.com
                                </span>
                            </div>
                        </motion.a>

                        {/* WhatsApp Card */}
                        <motion.a
                            href={`https://wa.me/917030776499?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={reveal}
                            className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-[#25D366]/50 transition-all duration-300 group shadow-sm hover:shadow-md text-center flex flex-col items-center gap-4"
                        >
                            <div className="p-4 rounded-full bg-neutral-50 text-neutral-600 group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
                                <MessageCircle size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif font-medium text-lg mb-1">WhatsApp</h3>
                                <p className="text-sm text-neutral-500 mb-3">Quick Connect</p>
                                <span className="text-sm md:text-base font-medium text-neutral-800 group-hover:underline decoration-[#25D366]/50 underline-offset-4">
                                    +91 7030776499
                                </span>
                            </div>
                        </motion.a>

                        {/* Instagram Card */}
                        <motion.a
                            href="https://www.instagram.com/tanuu_0318"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={reveal}
                            className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-[#E1306C]/50 transition-all duration-300 group shadow-sm hover:shadow-md text-center flex flex-col items-center gap-4"
                        >
                            <div className="p-4 rounded-full bg-neutral-50 text-neutral-600 group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] transition-colors">
                                <Instagram size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif font-medium text-lg mb-1">Instagram</h3>
                                <p className="text-sm text-neutral-500 mb-3">Social Portfolio</p>
                                <span className="text-sm md:text-base font-medium text-neutral-800 group-hover:underline decoration-[#E1306C]/50 underline-offset-4">
                                    @tanuu_0318
                                </span>
                            </div>
                        </motion.a>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-center mt-12 pt-8 border-t border-neutral-200/60"
                    >
                        <p className="text-sm text-neutral-500 font-medium uppercase tracking-widest">
                            Available for Auditions & Screen Tests
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
