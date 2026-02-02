"use client";

import Image from "next/image";
import bgImage from "../app/assets/bg2.webp";

export default function Statistics() {
    const stats = [
        {
            percentage: "01",
            title: "Web Development",
            description: "Corporate websites, high-performance landing pages, and internal tools."
        },
        {
            percentage: "02",
            title: "Mobile Apps",
            description: "Native iOS/Android and cross-platform React Native business applications."
        },
        {
            percentage: "03",
            title: "E-Commerce",
            description: "Scalable online stores with secure payments and inventory management."
        },
        {
            percentage: "04",
            title: "SaaS Platforms",
            description: "End-to-end SaaS delivery, from MVP validation to full-scale architecture."
        }
    ];

    return (
        <section className="bg-transparent py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 -top -1/2 -trans late-y-1/2">
                <Image
                    src={bgImage}
                    alt="Statistics Background"
                    fill
                    className="object-cover opacity-100 pointer-events-none hue-rotate-250 "
                />
            </div>
            <div className="absolute inset-0 z-0 -top-0 -translate-y-1/4">
                <Image
                    src={bgImage}
                    alt="Statistics Background"
                    fill
                    className="object-cover opacity-100 pointer-events-none hue-rotate-150 "
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-4 mb-8 opacity-90">
                        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
                        <div className="relative">
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                            <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/5">
                                <span className="text-sm text-gray-200 font-medium tracking-wide">
                                    Our Expertise
                                </span>
                            </div>
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        Digital Solutions for <span className="text-blue-500 anima te-pulse">Growth</span> <span className="text-green-400 animate-pulse">.</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                                <div>
                                    <div className="text-5xl font-medium text-white mb-6">
                                        {stat.percentage}
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-3">
                                        {stat.title}
                                    </h3>
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
