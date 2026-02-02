"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: <Search className="w-6 h-6 text-blue-400" />,
            title: "Discovery & Strategy",
            description: "We start by understanding your business goals, target audience, and technical requirements to build a solid roadmap."
        },
        {
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            title: "Design & Prototyping",
            description: "Our designers create intuitive, high-fidelity wireframes and prototypes that align with your brand identity."
        },
        {
            icon: <Code2 className="w-6 h-6 text-green-400" />,
            title: "Development",
            description: "We ship clean, scalable code using modern tech stacks, ensuring security, performance, and SEO best practices."
        },
        {
            icon: <Rocket className="w-6 h-6 text-orange-400" />,
            title: "Launch & Growth",
            description: "After rigorous testing, we deploy your product and provide ongoing support to help you scale."
        }
    ];

    return (
        <section className="bg-black py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                        How we <span className="text-blue-500">deliver excellence</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Our streamlined process ensures transparency and efficiency from day one to final launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:border-white/30 transition-colors shadow-lg shadow-black/50">
                                {step.icon}
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
