"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../app/assets/bg1.webp";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is Nexverra suitable for early-stage startups?",
            answer: "Absolutely! We specialize in MVP development and scalable architecture, helping startups validate ideas quickly while building a foundation for future growth."
        },
        {
            question: "How do you ensure the security of our applications?",
            answer: "Security is integral to our process. We implement bank-grade encryption, secure authentication flows, and role-based access control (RBAC) to protect your data and users."
        },
        {
            question: "Can you help migrate our legacy system to a modern stack?",
            answer: "Yes, we have extensive experience in legacy migration. We analyze your existing infrastructure and execute a seamless transition to modern, cloud-native architectures with minimal downtime."
        },
        {
            question: "What is your typical project timeline?",
            answer: "Timelines vary by project scope. A typical MVP can take 4-8 weeks, while enterprise-grade platforms may take 3-6 months. We provide detailed roadmaps during the discovery phase."
        },
        {
            question: "Do you offer post-launch support and maintenance?",
            answer: "Yes, we offer ongoing maintenance packages including performance monitoring, security updates, feature enhancements, and 24/7 technical support."
        }
    ];

    return (
        <section className="bg-transparent py-24 relative overflow-hidden">
            
            <div className="absolute inset-0 z-0 bottom-80 ">
                <Image
                    src={bgImage}
                    alt="FAQ Background"
                    fill
                    className="object-cover  hue-rotate-150  blur-[100px] scale-150 pointer-events-none"
                />
            </div>
            <div className="absolute inset-0 z-0 bottom-80 ">
                <Image
                    src={bgImage}
                    alt="FAQ Background"
                    fill
                    className="object-cover  hue-rotate-250  blur-[100px] scale-150 pointer-events-none"
                />
            </div>
            <div className="max-w-3xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-white/40">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                ? "bg-white/5 border-white/10"
                                : "bg-transparent border-white/5 hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-medium text-lg ${openIndex === index ? "text-white" : "text-white/80"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full border transition-colors ${openIndex === index ? "border-white/20 bg-white/10 text-white" : "border-white/10 text-white/40"}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openIndex === index ? "max-h-48" : "max-h-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-white/50 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}
