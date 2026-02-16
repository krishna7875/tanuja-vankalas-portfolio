"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

export function FloatingContact() {
    const whatsappNumber = "917030776499";
    const whatsappMessage = encodeURIComponent("Hi Tanuja, I viewed your portfolio and would like to connect.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const instagramUrl = "https://www.instagram.com/tanuu_0318";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 print:hidden"
        >
            {/* Instagram */}
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg border border-neutral-100 text-[#E1306C] hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                aria-label="Visit Instagram Profile"
            >
                <Instagram size={24} />
            </a>

            {/* WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg border border-neutral-100 text-[#25D366] hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} fill="currentColor" className="text-[#25D366]" />
            </a>
        </motion.div>
    );
}
