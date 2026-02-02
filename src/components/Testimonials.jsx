"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import bgImage from "../app/assets/bg4.webp";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "I finally feel in control of my finances. Thank you, Nexverra",
            name: "Mark Julio",
            role: "Entrepreneur",
            initial: "M",
            color: "bg-orange-500"
        },
        {
            quote: "This tool has saved us hours every month. Highly recommend it!",
            name: "James Luis",
            role: "Startup Founder",
            initial: "J",
            color: "bg-blue-500"
        },
        {
            quote: "The automation features are a game-changer. No more manual work!",
            name: "Emma Robertson",
            role: "Freelancer",
            initial: "E",
            color: "bg-purple-500"
        },
        {
            quote: "With Nexverra, I finally have a clear understanding of my store's finances. The profit and loss tracking tools have saved me so much time.",
            name: "Ryan Palmer",
            role: "Owner of Trendy Goods",
            initial: "R",
            color: "bg-green-500"
        },
        {
            quote: "Simple, reliable, and perfect for my building business. I can't imagine going back to spreadsheets.",
            name: "Linda King",
            role: "E-commerce",
            initial: "L",
            color: "bg-blue-500"
        }
    ];

    return (
        <section className="bg-transparent py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Testimonials Background"
                    fill
                    className="object-cover opacity-100 hue-rotate-250  pointer-events-none"
                />
            </div>
            <div className="absolute inset-0 z-0 top-40">
                <Image
                    src={bgImage}
                    alt="Testimonials Background"
                    fill
                    className="object-cover opacity-60 hue-rotate-150 blur-[20px] pointer-events-none"
                />
            </div>

            {/* Header */}
            <div className="relative z-10 flex flex-col items-center text-center mb-16 px-6">
                <div className="flex items-center gap-4 mb-8 opacity-90">
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
                    <div className="relative">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                        <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/5">
                            <span className="text-sm text-gray-200 font-medium tracking-wide">
                                Testimonials
                            </span>
                        </div>
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                    What our clients are saying
                </h2>
                <p className="text-white/40 max-w-2xl mx-auto">
                    Our digital solutions are transforming the way people manage their businesses. Here's what some of our users have to say about their experience.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee whitespace-nowrap gap-6 pl-6 hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-6">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors relative group/card"
                                >
                                    {/* blue glow effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity rounded-b-2xl"></div>

                                    <div className="relative z-10 whitespace-normal">
                                        <div className="mb-6">
                                            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/20">
                                                <Quote className="w-5 h-5 text-blue-500 fill-blue-500" />
                                            </div>
                                        </div>

                                        <p className="text-white/80 text-lg leading-relaxed mb-8 min-h-[80px]">
                                            "{item.quote}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
                                                {item.initial}
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{item.name}</div>
                                                <div className="text-sm text-white/40">{item.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
