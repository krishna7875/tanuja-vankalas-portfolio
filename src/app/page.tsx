import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Videos } from "@/components/sections/Videos";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
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

                <About />

                <Gallery />

                <Videos />

                <Experience />

                <Contact />

            </main>

            <Footer />
        </div>
    );
}
