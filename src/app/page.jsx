"use client";
import { AnimatedText } from "@/components/animated-text";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GrowthMetrics } from "@/components/growth-metrics";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { StickyFooter } from "@/components/StickyFooter";
import { Button } from "@/components/ui/button";
import { WebDevelopmentSection } from "@/components/web-development-section";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            <p className="text-emerald-400 text-lg sm:text-xl uppercase tracking-wider">TRANSFORM YOUR DIGITAL PRESENCE WITH OUR EXPERTISE</p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              Grow Super Fast With <br />
              <AnimatedText />
            </h1>

            <p className="max-w-3xl mx-auto text-gray-400 text-xl lg:text-2xl">Generate growth and success with our expert team, who have worked with leading businesses worldwide. Relax, we handle it all for you.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#pricing">
                <Button size="lg" variant="outline" className="text-lg text-black px-8 py-6 group">
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button onClick={handleClick} variant="outline" size="lg" className="text-lg px-8 py-6  bg-emerald-500 hover:bg-emerald-600 hover:text-white group border-none">
                Get Started
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <main className="relative">
        {/* Hero Section */}
        <section>
          <ServicesSection />
          <ProcessSection />
          <WebDevelopmentSection />
          <GrowthMetrics />
          <PricingSection />
        </section>
        <div className=" sticky bottom-10 left-0 right-0">
          <StickyFooter />
        </div>
      </main>
      <FaqSection />
      <Footer />
    </main>
  );
}
