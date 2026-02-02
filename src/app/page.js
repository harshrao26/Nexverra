import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Workflow from "@/components/Workflow";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <LogoMarquee />
      <Workflow />
      <Statistics />
      <AboutUs />
      <Testimonials />
      <FAQ />
     </div>
  );
}
