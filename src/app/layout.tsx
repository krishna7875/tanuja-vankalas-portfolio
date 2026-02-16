import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { FloatingContact } from "@/components/ui/FloatingContact";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://tanujavankalas.in"),
    alternates: {
        canonical: "https://tanujavankalas.in",
    },
    title: {
        default: "Tanuja Vankalas | Marathi & Hindi Television Actress",
        template: "%s | Tanuja Vankalas",
    },
    description: "Tanuja Vankalas is a Marathi and Hindi television actress based in Thane with on-screen experience in serials including Shubh Shravanii and other Marathi productions.",
    keywords: ["Tanuja Vankalas", "Actress", "Marathi Actress", "Hindi Actress", "Thane", "Mumbai", "Portfolio", "Casting", "Indian Television", "Shubh Shravanii"],
    authors: [{ name: "Tanuja Vankalas" }],
    creator: "Tanuja Vankalas",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://tanujavankalas.in",
        title: "Tanuja Vankalas | Professional Actress Portfolio",
        description: "Marathi and Hindi television actress based in Thane. View showreel, gallery, and casting details.",
        siteName: "Tanuja Vankalas Portfolio",
        // images: Handled by opengraph-image.tsx automatically
    },
    twitter: {
        card: "summary_large_image",
        title: "Tanuja Vankalas | Marathi & Hindi Actress",
        description: "Professional actress based in Thane. View portfolio and showreel.",
        // images: Handled by opengraph-image.tsx automatically
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Tanuja Vankalas",
                            jobTitle: "Television Actress",
                            url: "https://tanujavankalas.in",
                            // Image handled by default OG or added specifically here if needed
                            email: "mailto:tanujavanakals@gmail.com",
                            telephone: "+917030776499",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Thane",
                                addressCountry: "India"
                            },
                            sameAs: [
                                "https://www.instagram.com/tanuu_0318"
                            ],
                            worksFor: {
                                "@type": "Organization",
                                name: "Indian Television Industry",
                            },
                        }),
                    }}
                />
                {children}
                <FloatingContact />
            </body>
        </html>
    );
}
