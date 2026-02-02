"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Workflow from "@/components/Workflow";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen text-white">
       <div className="pt-20">
        <Workflow />
        <Process />
        <TechStack />
        <Testimonials />
        <FAQ />
      </div>
     </div>
  );
}
