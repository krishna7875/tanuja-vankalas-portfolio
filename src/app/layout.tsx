import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata, Viewport } from "next";
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
    metadataBase: new URL("https://tanuja-vankalas.com"), // Placeholder domain
    alternates: {
        canonical: "/",
    },
    title: {
        default: "Tanuja Vankalas | Marathi & Hindi Actress",
        template: "%s | Tanuja Vankalas",
    },
    description: "Professional Marathi and Hindi actress based in Thane with television experience including Shubh Shravanii, Tu Anolkhi Tari Sobati, and other serials.",
    keywords: ["Tanuja Vankalas", "Actress", "Marathi Actress", "Hindi Actress", "Thane", "Mumbai", "Portfolio", "Casting", "Indian Television"],
    authors: [{ name: "Tanuja Vankalas" }],
    creator: "Tanuja Vankalas",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://tanuja-vankalas.com",
        title: "Tanuja Vankalas | Professional Actress Portfolio",
        description: "Emerging Marathi and Hindi television actress based in Thane. View showreel, gallery, and casting details.",
        siteName: "Tanuja Vankalas Portfolio",
        images: [
            {
                url: "/images/hero-placeholder.svg", // Replace with actual og-image
                width: 1200,
                height: 630,
                alt: "Tanuja Vankalas - Actress Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tanuja Vankalas | Marathi & Hindi Actress",
        description: "Professional actress based in Thane. View portfolio and showreel.",
        images: ["/images/hero-placeholder.svg"], // Replace with actual image
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
                            jobTitle: "Actress",
                            url: "https://tanuja-vankalas.com",
                            image: "https://tanuja-vankalas.com/images/hero-placeholder.svg",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Thane",
                                addressRegion: "Maharashtra",
                                addressCountry: "IN",
                            },
                            sameAs: [
                                "https://instagram.com/your_handle", // Replace with actual
                            ],
                            worksFor: {
                                "@type": "Organization",
                                name: "Indian Television Industry",
                            },
                        }),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
