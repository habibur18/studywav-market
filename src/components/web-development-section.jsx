"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe, Layout, Rocket, ShoppingCart } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "E-commerce Development",
    description: "Build a powerful online store with seamless checkout, inventory management, and mobile-first design.",
    icon: ShoppingCart,
    image: "/ecommerce.png",
    features: ["Custom E-commerce Solutions", "Payment Gateway Integration", "Inventory Management", "Mobile-Optimized Shopping", "Analytics Integration"],
  },
  {
    title: "Business Website",
    description: "Create a professional online presence that converts visitors into customers with our custom business websites.",
    icon: Building2,
    image: "/business.png",
    features: ["Responsive Design", "SEO Optimization", "Content Management System", "Lead Generation Forms", "Performance Optimization"],
  },
  {
    title: "Landing Page Design",
    description: "Convert more visitors with our high-performance landing pages designed for maximum impact.",
    icon: Layout,
    price: 1500,
    image: "/landing.png",
    features: ["Conversion-Optimized Design", "A/B Testing", "Mobile-First Approach", "Fast Loading Speed", "Analytics Integration"],
  },
];

export function WebDevelopmentSection() {
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Web Development Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Transform your online presence with our expert web development services</p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}>
                  <service.icon className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </motion.div>
                <motion.p className="text-xl text-gray-400 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}>
                  {service.description}
                </motion.p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li key={feature} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 + 0.3 }}>
                      <Globe className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}>
                  <Button onClick={handleClick} size="lg" className="text-lg px-8 py-6 bg-emerald-500 hover:bg-emerald-600 group">
                    {service.price ? (
                      <>
                        {/* Get Started - ${service.price} */}
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      <>
                        Contact Us
                        <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
              <motion.div className={index % 2 === 1 ? "lg:col-start-1" : ""} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}>
                <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-lg shadow-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
