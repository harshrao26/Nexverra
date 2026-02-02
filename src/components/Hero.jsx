"use client";

import Image from "next/image";
import bgImage from "../app/assets/bg1.webp";
import bgImage2 from "../app/assets/bg2.webp";
import bgImage7 from "../app/assets/bg7.webp";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
            {/* Main Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Hero Background"
                    fill
                    className="object-  opacity-100 hue-rotate-250 brightness-120 contrast-110 blur-[10px]"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Hero Background"
                    fill
                    className="object- top-20 opacity-70 hue-rotate-150 brightness-120 contrast-110 blur-[10px]"
                    priority
                />
            </div>

            {/* Top Left Accent (bg2) */}
            <div className="absolute top-[-20%] left-[-10%] z-0 w-[600px] md:w-[800px] hue-rotate-250 opacity-60 pointer-events-none mix-blend-screen">
                <Image
                    src={bgImage2}
                    alt="Top Left Accent"
                    className="w-full h-auto object-cover blur-3xl"
                />
            </div>

            {/* Top Right Accent (bg7) */}
            <div className="absolute top-[-20%] right-[-10%] z-0 w-[600px] md:w-[800px] hue-rotate-250 opacity-60 pointer-events-none mix-blend-screen">
                <Image
                    src={bgImage7}
                    alt="Top Right Accent"
                    className="w-full h-auto object-cover blur-3xl"
                />
            </div>


            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Badge with Lines */}
                <div className="flex items-center gap-4 mb-10 opacity-90">
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
                    <div className="relative">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                        <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/5">
                            <span className="text-sm text-gray-200 font-medium tracking-wide">
                                End-to-End Digital Solutions
                            </span>
                        </div>
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl capitalize font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                    Scalable, performance-driven
                    <br />
                    <span>🌐</span>  <span className="text-blue-500">web</span> & <span className="text-green-600">mobile </span> <span className="rotate-6">📱</span> products
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    Nexverra delivers full-stack digital solutions backed by SEO, analytics, and backend intelligence to drive measurable business growth.
                </p>

                {/* CTA Button */}
                <div>
                    <Link href="/contact" className="px-8 animate-bounce py-3.5 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                        Get started <Globe className="animate-spin" />
                    </Link>
                </div>
            </div>

        </section>
    );
}
