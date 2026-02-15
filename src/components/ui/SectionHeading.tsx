"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "./Typography";
import { reveal } from "@/lib/animations";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className = "" }: SectionHeadingProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""} ${className}`}
        >
            {subtitle && (
                <Text variant="small" className="text-accent mb-3 block">
                    {subtitle}
                </Text>
            )}
            <Heading level={2} className="mb-4">
                {title}
            </Heading>
        </motion.div>
    );
}
