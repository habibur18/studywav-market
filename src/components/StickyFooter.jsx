"use client";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function StickyFooter() {
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };

  return (
    <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
      <p className="text-xl text-gray-400 mb-4">Book a free 15 minute growth call</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link href="#pricing">
          <Button size="lg" variant="outline" className="text-lg text-black px-8 py-6 group">
            View Pricing
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Button onClick={handleClick} size="lg" className="text-lg px-8 py-6 bg-emerald-500 hover:bg-emerald-600 group">
          Get Started
          <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
