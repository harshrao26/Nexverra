"use client";

import { CheckCircle2, Users, Globe, Shield } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="bg-black py-24 relative overflow-hidden text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-start mb-16 max-w-3xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">About Nexverra</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        Transforming Ideas into <span className="text-blue-500">Impactful Digital Products </span><span className="text-green-400">.</span>
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Nexverra Technologies is a forward-thinking technology company delivering innovative, scalable, and result-driven digital solutions. We help startups, SMEs, and enterprises automate workflows and build modern digital ecosystems.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Stats/Features */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <Users className="w-8 h-8 text-blue-500 mb-4" />
                            <div className="text-3xl font-bold mb-1">10k+</div>
                            <div className="text-sm text-white/50">Active Users</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8 hover:bg-white/10 transition-colors duration-300">
                            <Globe className="w-8 h-8 text-purple-500 mb-4" />
                            <div className="text-3xl font-bold mb-1">50+</div>
                            <div className="text-sm text-white/50">Countries Served</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <Shield className="w-8 h-8 text-green-500 mb-4" />
                            <div className="text-3xl font-bold mb-1">99.9%</div>
                            <div className="text-sm text-white/50">Secure Uptime</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-500 font-bold mb-4">A</div>
                            <div className="text-xl font-bold mb-1">Awarded</div>
                            <div className="text-sm text-white/50">Best Support 2024</div>
                        </div>
                    </div>

                    {/* Right: Checklist/detail */}
                    <div>
                        <h3 className="text-2xl font-medium mb-6">Why choose Nexverra?</h3>
                        <div className="space-y-6">
                            {[
                                "Innovation with purpose",
                                "Quality-driven development",
                                "Transparency and trust",
                                "Scalable, secure, and cost-effective",
                                "One-stop solution for tech & resources"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                            Learn more about us
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
