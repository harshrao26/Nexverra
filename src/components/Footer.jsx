"use client";

import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import Image from "next/image";
import bgImage from "../app/assets/bg5.webp";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 md:opacity-100 opacity-50 z-0 ">
                <Image
                    src={bgImage}
                    alt="Footer Background"
                    fill
                    className="object-cover hue-rotate-250 opacity-100 pointer-events-none"
                />
            </div>
            <div className="absolute top-20 left-0 inset-0 md:opacity-100 z-0 ">
                <Image
                    src={bgImage}
                    alt="Footer Background"
                    fill
                    className="object-cover hue-rotate-150 opacity-50 blur-[50px] pointer-events-none"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logoo.png"
                                alt="Nexverra Logo"
                                width={150}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Full-stack digital solutions for scalable business growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Features</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Stay Updated</h4>
                        <p className="text-white/60 text-sm mb-4">Subscribe to our newsletter for the latest updates and tips.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">© 2026 Nexverra. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
