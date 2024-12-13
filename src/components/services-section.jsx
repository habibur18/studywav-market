"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Palette, Rocket } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    icon: Rocket,
    services: ["SEO Optimization", "Social Media Management", "Content Marketing", "Email Marketing", "PPC Advertising"],
  },
  {
    title: "Web Development",
    icon: Laptop,
    services: ["Custom Website Development", "E-commerce Solutions", "Web Application Development", "CMS Development", "API Integration"],
  },
  {
    title: "Creative Services",
    icon: Palette,
    services: ["Logo Design", "Brand Identity", "Video Editing", "Motion Graphics", "UI/UX Design"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <service.icon className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-4 mb-8">
                {service.services.map((item, i) => (
                  <motion.li key={item} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}>
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="w-full group hidden" variant="outline">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
