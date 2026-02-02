"use client";

export default function CompanyStory() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">
                        Driven by innovation, <br />
                        <span className="text-blue-500">defined by results.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                        <p>
                            Nexverra Technologies was established with a vision to empower organizations through technology. We specialize in building robust software solutions, data-driven platforms, and modern digital ecosystems that enhance operational efficiency.
                        </p>
                        <p>
                            Our team brings together strong technical expertise and a client-centric mindset to deliver solutions that are reliable, secure, and future-ready, bridging the gap between business challenges and technology.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-medium text-xl mb-2">Our Mission</h4>
                            <p className="text-white/40 text-sm">To bridge the gap between business challenges and technology solutions through intelligent design, automation, and data-driven insights.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-medium text-xl mb-2">Our Vision</h4>
                            <p className="text-white/40 text-sm">To empower organizations through technology, transforming ideas into impactful digital products and efficient systems.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-4xl font-bold text-white mb-2">3+</div>
                                <div className="text-sm text-white/40 uppercase tracking-wide">Years of Excellence</div>
                            </div>
                            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-4xl font-bold text-white mb-2">50+</div>
                                <div className="text-sm text-white/40 uppercase tracking-wide">Projects Delivered</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-4xl font-bold text-white mb-2">20+</div>
                                <div className="text-sm text-white/40 uppercase tracking-wide">Team Members</div>
                            </div>
                            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-4xl font-bold text-white mb-2">98%</div>
                                <div className="text-sm text-white/40 uppercase tracking-wide">Client Retention</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
