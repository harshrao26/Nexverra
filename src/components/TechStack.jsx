"use client";

export default function TechStack() {
    const technologies = [
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "Supabase", "PostgreSQL"] },
        { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "CI/CD Pipelines", "Google Cloud"] },
        { category: "Mobile", items: ["React Native", "Expo", "iOS (Swift)", "Android (Kotlin)"] },
    ];

    return (
        <section className="py-24 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
                        Technologies we <span className="text-blue-500">master</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl text-lg">
                        We use the latest, most reliable tools to build software that scales. Our stack is chosen for performance, security, and developer experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-medium text-white mb-4 border-b border-white/5 pb-2">{tech.category}</h3>
                            <ul className="space-y-3">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
