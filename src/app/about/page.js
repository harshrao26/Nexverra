"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import CompanyStory from "@/components/CompanyStory";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white">
       <div className="pt-20">
        <AboutUs />
        <CompanyStory />
        <Statistics />
        <Testimonials />
      </div>
     </div>
  );
}
