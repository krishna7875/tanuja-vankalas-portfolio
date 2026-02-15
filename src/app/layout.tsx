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
    title: "Tanuja Vankalas | Actress Portfolio",
    description: "Marathi and Hindi actress based in Thane. Television experience including Shubh Shravanii and other Marathi serials.",
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
                {children}
            </body>
        </html>
    );
}
