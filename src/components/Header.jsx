"use client";

import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${isScrolled
          ? "bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-m d  "
          : "bg-transparent "
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16">
              <Image
                src="/logoo.png"
                alt="Nexverra Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-medium text-xl tracking-tight">Nexverra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-6 flex items-center gap-2 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300  ">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center justify-between"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/contact" className="px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 w-full text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
