"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgImage from "../assets/bg3.webp";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";

  return (
    <div className="h-screen bg-black text-white flex flex-col py-16">
      {/* Adjusted bg-black and flex-col to ensure footer stays at bottom if content is short, 
            though min-h-screen handles it. */}

      <main className="flex-grow flex flex-col items-center justify-center relative px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover opacity-100 hue-rotate-150 blur-[0px]"
            priority
          />
        </div>
        <div className="absolute inset-0 top-40 z-0">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover opacit-60 hue-rotate-250  blur-[100px]"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 mb-6 border border-green-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Thank you, <span className="text-blue-500 capitalize">{name}</span>!
          </h1>

          <p className="text-xl text-white/80 leading-relaxed max-w-lg mx-auto">
            We've received your inquiry and will be in touch shortly. We're
            excited to explore how we can help you grow.
          </p>

          <div className="pt-8">
            <Link
              href="/"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

    
    </div>
  );
}

export default function ThankYou() {
  return (
   
      <ThankYouContent />
   );
}
