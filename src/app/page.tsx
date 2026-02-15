import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-[70px]"> {/* Offset for fixed navbar */}

                <Hero />

                {/* Placeholder Sections for Scroll Testing */}

                <section id="about" className="min-h-screen flex items-center justify-center border-b border-muted bg-brand-bg">
                    <Container>
                        <h2 className="text-4xl font-serif mb-4">About Section</h2>
                        <p className="text-foreground/60">Scroll anchor test.</p>
                    </Container>
                </section>

                <section id="gallery" className="min-h-screen flex items-center justify-center border-b border-muted bg-brand-muted/30">
                    <Container>
                        <h2 className="text-4xl font-serif mb-4">Gallery Section</h2>
                        <p className="text-foreground/60">Scroll anchor test.</p>
                    </Container>
                </section>

                <section id="videos" className="min-h-screen flex items-center justify-center border-b border-muted bg-brand-bg">
                    <Container>
                        <h2 className="text-4xl font-serif mb-4">Videos Section</h2>
                        <p className="text-foreground/60">Scroll anchor test.</p>
                    </Container>
                </section>

                <section id="experience" className="min-h-screen flex items-center justify-center border-b border-muted bg-brand-muted/30">
                    <Container>
                        <h2 className="text-4xl font-serif mb-4">Experience Section</h2>
                        <p className="text-foreground/60">Scroll anchor test.</p>
                    </Container>
                </section>

                <section id="contact" className="min-h-screen flex items-center justify-center bg-brand-bg">
                    <Container>
                        <h2 className="text-4xl font-serif mb-4">Contact Section</h2>
                        <p className="text-foreground/60">Scroll anchor test.</p>
                    </Container>
                </section>

            </main>

            <Footer />
        </div>
    );
}
