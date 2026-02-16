"use client";

import { Container } from "@/components/ui/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-muted py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-serif font-medium mb-4">Tanuja Vankalas</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                            Professional Marathi and Hindi television actress based in Thane.
                            Passionate about storytelling and bringing characters to life.
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-accent mb-2">Contact</h4>
                        <a
                            href="mailto:tanujavanakals@gmail.com"
                            className="text-foreground/70 hover:text-accent transition-colors text-sm hover:underline decoration-accent/50 underline-offset-4"
                        >
                            tanujavanakals@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/tanuu_0318"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/70 hover:text-accent transition-colors text-sm"
                        >
                            Instagram: @tanuu_0318
                        </a>
                        <a
                            href="https://wa.me/917030776499"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/70 hover:text-accent transition-colors text-sm"
                        >
                            WhatsApp: +91 7030776499
                        </a>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-accent mb-2">Details</h4>
                        <p className="text-foreground/70 text-sm">Location: Thane, India</p>
                        <p className="text-foreground/70 text-sm">Languages: Marathi, Hindi, English</p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/50">
                        &copy; {currentYear} Tanuja Vankalas. All rights reserved.
                    </p>
                    <p className="text-xs text-foreground/50">
                        Designed for Performance & Elegance.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
