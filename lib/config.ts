export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Tanuja Vankala",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tanuja-vankalas.com",
    description: "Premium Actress Portfolio",
    links: {
        instagram: "https://instagram.com/tanuja_vankala", // Verify actual handle later
        imdb: "#",
        email: "mailto:contact@tanuja-vankalas.com", // Placeholder
    },
};

export const images = {
    hero: process.env.NEXT_PUBLIC_HERO_IMAGE || "/images/hero-placeholder.webp",
    about: process.env.NEXT_PUBLIC_ABOUT_IMAGE || "/images/about-placeholder.webp",
    contact: process.env.NEXT_PUBLIC_CONTACT_IMAGE || "/images/contact-placeholder.webp",
};

export const resume = {
    pdf: process.env.NEXT_PUBLIC_RESUME_PDF || "/resume.pdf",
};
