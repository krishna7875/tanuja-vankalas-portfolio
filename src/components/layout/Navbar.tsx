"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

const navLinks = [
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for backdrop blur
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <Container className="flex items-center justify-between h-[70px]">
                {/* Logo */}
                <Link href="/" className="text-xl font-medium tracking-tight font-serif">
                    Tanuja Vankalas
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                        />
                    </div>
                </button>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[70px] left-0 right-0 bg-background border-b border-white/10 shadow-lg md:hidden"
                    >
                        <Container className="flex flex-col py-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground py-2 border-b border-muted last:border-none"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
