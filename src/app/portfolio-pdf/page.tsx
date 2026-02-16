"use client";

import "@/styles/print.css";
import Image from "next/image";
import { Printer } from "lucide-react";

export default function PortfolioPDF() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-neutral-100 py-8 print:bg-white print:py-0">
            {/* Control Bar (Hidden in Print) */}
            <div className="no-print fixed top-4 right-4 z-50">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-neutral-800 transition-all font-medium"
                >
                    <Printer size={18} />
                    Download / Print PDF
                </button>
            </div>

            {/* A4 Page Container */}
            <div className="a4-page bg-white p-[12mm] md:p-[15mm] text-neutral-900 relative">

                {/* Header Section */}
                <div className="flex gap-8 mb-10 border-b-2 border-neutral-900 pb-8">
                    {/* Headshot */}
                    <div className="w-[35%] shrink-0">
                        <div className="aspect-[4/5] relative bg-neutral-100 border border-neutral-200">
                            {/* Ideally high-res image here, using placeholder for now */}
                            <Image
                                src="/images/hero-placeholder.svg"
                                alt="Tanuja Vankalas"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-2 leading-tight">
                                Tanuja Vankalas
                            </h1>
                            <p className="text-xl text-neutral-600 font-medium mb-6">
                                Marathi & Hindi Television Actress
                            </p>

                            <div className="grid grid-cols-2 gap-y-3 text-sm">
                                <div>
                                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-0.5">Location</span>
                                    <span className="font-medium">Thane, Mumbai</span>
                                </div>
                                <div>
                                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-0.5">Languages</span>
                                    <span className="font-medium">Marathi, Hindi, English</span>
                                </div>
                                <div>
                                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-0.5">Height</span>
                                    <span className="font-medium">5'5"</span>
                                </div>
                                <div>
                                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-0.5">Age Range</span>
                                    <span className="font-medium">20-25 Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact (Simulated) */}
                        <div className="mt-6 pt-6 border-t border-neutral-100">
                            <div className="flex items-center gap-4 text-sm font-medium">
                                <span>📧 tanuja.work@email.com</span>
                                <span>📞 +91 98765 43210</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-12 gap-8">

                    {/* Left Column (Main Stats) */}
                    <div className="col-span-12 md:col-span-8 space-y-8">

                        {/* Bio */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-neutral-300 pb-2 mb-3">
                                Professional Bio
                            </h3>
                            <p className="text-neutral-700 leading-relaxed text-sm text-justify">
                                Emerging Marathi and Hindi television actress based in Thane with professional acting training and on-screen experience.
                                Dedicated to the craft of storytelling, bringing authenticity and emotional depth to every role.
                                Experienced in dialogue delivery, continuity, and working in fast-paced production environments.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-neutral-300 pb-2 mb-3">
                                Television Experience
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-neutral-900">Shubh Shravanii</h4>
                                        <span className="text-xs font-medium bg-neutral-100 px-2 py-0.5 rounded">Star Pravah</span>
                                    </div>
                                    <p className="text-sm text-neutral-600">Dialogue Role • Character Artist</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-neutral-900">Tu Anolkhi Tari Sobati</h4>
                                        <span className="text-xs font-medium bg-neutral-100 px-2 py-0.5 rounded">Zee Yuva</span>
                                    </div>
                                    <p className="text-sm text-neutral-600">Junior Artist • Continuity Role</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-neutral-900">Lakshminivas</h4>
                                        <span className="text-xs font-medium bg-neutral-100 px-2 py-0.5 rounded">Colors Marathi</span>
                                    </div>
                                    <p className="text-sm text-neutral-600">Junior Artist</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-neutral-900">Kamali</h4>
                                        <span className="text-xs font-medium bg-neutral-100 px-2 py-0.5 rounded">Sony Marathi</span>
                                    </div>
                                    <p className="text-sm text-neutral-600">Junior Artist</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="col-span-12 md:col-span-4 space-y-8">

                        {/* Skills */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-neutral-300 pb-2 mb-3">
                                Skills
                            </h3>
                            <ul className="text-sm space-y-2 text-neutral-700">
                                <li>• Emotional Scences</li>
                                <li>• Dialogue Delivery</li>
                                <li>• Traditional Roles</li>
                                <li>• Camera Awareness</li>
                                <li>• Improvisation</li>
                                <li>• Voice Modulation</li>
                            </ul>
                        </section>

                        {/* Training */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-neutral-300 pb-2 mb-3">
                                Training
                            </h3>
                            <div className="text-sm">
                                <p className="font-bold">Acting Diploma (6 Months)</p>
                                <p className="text-neutral-600">Focus on Method Acting & Screen Techniques</p>
                            </div>
                        </section>

                        {/* QR Code */}
                        <section className="pt-8 mt-auto">
                            <div className="border border-neutral-200 p-3 inline-block bg-white">
                                <Image
                                    src="/images/qr-code-placeholder.svg"
                                    alt="Portfolio QR"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className="text-[10px] text-neutral-500 mt-2 uppercase tracking-wide">
                                Scan to view<br />Full Portfolio
                            </p>
                        </section>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-[12mm] left-[12mm] right-[12mm] border-t border-neutral-200 pt-4 flex justify-between items-center text-xs text-neutral-400">
                    <span>www.tanujavankalas.com</span>
                    <span>© 2026 Tanuja Vankalas Portfolio</span>
                </div>

            </div>
        </div>
    );
}
