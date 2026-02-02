"use client";

import { ChevronRight, CreditCard, LayoutDashboard, Wallet, BarChart3, ArrowUpRight, Code2, Globe, Smartphone, ShieldCheck, Zap, LayoutGrid } from "lucide-react";
import Image from "next/image";
import bgImage from "../app/assets/bg3.webp";
import { motion } from "framer-motion";

export default function Workflow() {
    return (
        <section className="bg-transparent py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Workflow Background"
                    fill
                    className="object-cover opacity-100 hue-rotate-250 blur-[10px]"
                />
            </div>
            <div className="absolute top-80 inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Workflow Background"
                    fill
                    className="object-cover opacity-100 hue-rotate-150 blur-[10px]"
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
                                    Our workflow
                                </span>
                            </div>
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
                    </div>

                    <h2 className="text-4xl capitalize md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
                        Our Services
                        <br />
                        Comprehensive <span className="text-blue-500">digital solutions

                            <span className="text-green-400 animate-pulse">.</span>
                        </span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Web & Mobile Development (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="mb-32 md:mb-12 relative z-10 px-2 pointer-events-none">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Code2 size={24} />
                                </div>
                                <h3 className="text-3xl font-medium text-white">Software Development</h3>
                            </div>
                            <p className="text-white/60 text-lg leading-relaxed max-w-lg">We design and develop custom software solutions tailored to your business requirements. Our applications are built for performance, scalability, and security, enabling organizations to streamline operations and improve productivity.</p>
                        </div>

                        {/* Enhanced Web & Mobile Mockup */}
                        <div className="absolute bottom-0 right-0 w-[90%] md:w-[85%] h-[60%] flex items-end gap-4 p-4">
                            {/* Browser Window */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-[70%] h-full bg-[#111] rounded-tl-xl border-t border-l border-white/10 shadow-2xl overflow-hidden relative"
                            >
                                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="h-4 w-1/2 bg-white/5 rounded mx-auto"></div>
                                </div>
                                <div className="p-3 space-y-3">
                                    <motion.div
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="h-20 bg-white/5 rounded-lg w-full"
                                    ></motion.div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-24 bg-white/5 rounded-lg"></div>
                                        <div className="h-24 bg-white/5 rounded-lg"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile Phone Mockup */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-[25%] h-[90%] bg-[#050505] rounded-t-[20px] border-t border-x border-white/10 shadow-2xl overflow-hidden relative transform translate-y-2"
                            >
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full"></div>
                                <div className="mt-6 px-2 space-y-2">
                                    <motion.div
                                        animate={{ background: ["rgba(37, 99, 235, 0.1)", "rgba(37, 99, 235, 0.3)", "rgba(37, 99, 235, 0.1)"] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="h-10 bg-blue-600/20 rounded-lg w-full"
                                    ></motion.div>
                                    <div className="h-16 bg-white/5 rounded-lg w-full"></div>
                                    <div className="h-16 bg-white/5 rounded-lg w-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card 2: SEO & Performance (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-1 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between min-h-[400px]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 mb-12 px-2 pointer-events-none">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                    <Globe size={20} />
                                </div>
                                <h3 className="text-2xl font-medium text-white">Web Development</h3>
                            </div>
                            <p className="text-white/60 leading-relaxed">We create modern, responsive, and SEO-optimized websites using the latest technologies. Our web solutions are designed to deliver seamless user experience and strong performance.</p>
                        </div>

                        {/* SEO Score Cards Mockup */}
                        <div className="relative h-[200px] w-full mt-auto px-4 mask-gradient-bottom">
                            <div className="flex flex-col gap-3">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-[#151515] border border-white/5 rounded-xl p-4 flex items-center justify-between transform scale-95 opacity-60"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><span className="text-xs text-white">SEO</span></div>
                                        <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                                    </div>
                                    <div className="text-white text-sm font-bold">85</div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5 flex items-center justify-between z-10 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><span className="text-xs text-green-400 font-bold">100</span></div>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-white text-sm font-medium">Performance</div>
                                            <motion.div
                                                animate={{ width: ["0%", "100%", "95%", "100%"] }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                className="h-1.5 w-20 bg-green-500 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                    <div className="text-green-400 text-lg font-bold">A+</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Backend & Analytics (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors min-h-[400px]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 text-center mb-10 px-4 pointer-events-none">
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-2xl font-medium text-white">Mobile App Development</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">Our team develops high-quality Android and cross-platform mobile applications focused on usability, performance, and scalability.</p>
                        </div>

                        {/* Integrated Glowing Orb Mockup */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 flex items-center justify-center">
                            {/* Pulsing rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute w-40 h-40 border border-white/10 rounded-full"
                            ></motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute w-56 h-56 border border-white/5 rounded-full"
                            ></motion.div>

                            {/* Central Orb */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    boxShadow: ["0 0 20px rgba(59, 130, 246, 0.3)", "0 0 50px rgba(59, 130, 246, 0.6)", "0 0 20px rgba(59, 130, 246, 0.3)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center z-20"
                            >
                                <div className="w-8 h-8 text-white"><LayoutGrid /></div>
                            </motion.div>

                            {/* Connecting lines */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Card 4: SaaS & E-Commerce (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-start min-h-[450px]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 mb-16 px-2 pointer-events-none">
                            <h3 className="text-3xl font-medium text-white mb-4">Data Analytics & BI Solutions</h3>
                            <p className="text-white/60 text-lg leading-relaxed max-w-lg">We offer advanced data analytics and business intelligence solutions, including Power BI dashboards and data modeling to help organizations make informed decisions.</p>
                        </div>

                        {/* Enhanced Sales/Growth Mockup */}
                        <div className="absolute inset-x-8 bottom-0 top-[180px] flex gap-4">
                            {/* Revenue Chart */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 bg-[#111] border border-white/5 rounded-xl p-6 flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-500/30">
                                            <BarChart3 className="text-blue-500 w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm">Revenue</span>
                                            <span className="text-white/40 text-xs">Last 30 days</span>
                                        </div>
                                    </div>
                                    <div className="text-green-500 text-sm font-bold">+24%</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-semibold text-white mb-4">$42,500</div>
                                    <div className="flex items-end justify-between gap-1 h-12">
                                        {[...Array(20)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${Math.random() * 100}%` }}
                                                transition={{ duration: 1, delay: i * 0.05 }}
                                                className={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-900/40'}`}
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Product Cards (Hidden on mobile) */}
                            <div className="hidden md:flex flex-col gap-3 w-48 pt-4">
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-[#1A1A1A] border border-white/10 rounded-lg p-3 flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 border border-purple-500/20">
                                        <CreditCard size={14} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-16 bg-white/20 rounded mb-1"></div>
                                        <div className="h-2 w-8 bg-white/10 rounded"></div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ x: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="bg-[#1A1A1A] border border-white/10 rounded-lg p-3 flex items-center gap-3 opacity-60"
                                >
                                    <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center text-orange-400 border border-orange-500/20">
                                        <LayoutDashboard size={14} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                                        <div className="h-2 w-12 bg-white/10 rounded"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Security & Reliability (Narrow) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-1 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors min-h-[350px]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 mb-12 px-2 pointer-events-none">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                                    <ShieldCheck size={20} />
                                </div>
                                <h3 className="text-2xl font-medium text-white">Cloud & DevOps Services</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">We provide end-to-end cloud and DevOps services including deployment, optimization, monitoring, and automation to ensure system reliability.</p>
                        </div>

                        {/* Security Visual */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 h-24 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                </div>
                            </motion.div>
                            <div className="mt-4 flex gap-2 justify-center">
                                <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/40">AES-256</div>
                                <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/40">SOC 2</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 6: Maintenance & Support (Wide - 2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="md:col-span-2 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex items-center justify-between min-h-[350px]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 max-w-sm px-2 pointer-events-none">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-3xl font-medium text-white">IT Consulting & Digital Transformation</h3>
                            </div>
                            <p className="text-white/60 leading-relaxed">Our consulting services help businesses modernize operations, automate workflows, and implement digital strategies aligned with their long-term goals.</p>
                            <ul className="mt-8 space-y-3 pointer-events-auto">
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-base text-white/80"
                                ><div className="w-2 h-2 rounded-full bg-green-500"></div> Business Process Automation</motion.li>
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-base text-white/80"
                                ><div className="w-2 h-2 rounded-full bg-blue-500"></div> Workflow Optimization</motion.li>
                            </ul>
                        </div>

                        {/* Support Visual */}
                        <div className="relative w-[300px] h-[200px] hidden md:block">
                            <motion.div
                                animate={{
                                    rotate: [-3, -1, -3],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full bg-[#111] border border-white/10 rounded-xl p-4 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300"
                            >
                                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                                    <div className="text-xs text-white/40 font-mono">System Status</div>
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Operational</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/60">API Latency</span>
                                        <span className="text-white font-mono">24ms</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-1"><motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} transition={{ duration: 1 }} className="bg-green-500 h-full rounded-full"></motion.div></div>

                                    <div className="flex justify-between items-center text-xs pt-2">
                                        <span className="text-white/60">Error Rate</span>
                                        <span className="text-white font-mono">0.01%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-1"><motion.div initial={{ width: 0 }} whileInView={{ width: "2%" }} transition={{ duration: 1 }} className="bg-green-500 h-full rounded-full"></motion.div></div>

                                    <div className="flex justify-between items-center text-xs pt-2">
                                        <span className="text-white/60">Active Sessions</span>
                                        <span className="text-white font-mono">1,420</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
