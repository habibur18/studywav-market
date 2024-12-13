"use client";

import { motion } from "framer-motion";
import { BarChart3, Code, HardDriveIcon as DriveIcon, FileText, Globe, ImageIcon, MessageCircle, Palette, Search, Share2, ShoppingCart, Type, Video } from "lucide-react";

const metrics = [
  { title: "VIRAL EDITS", value: "200%", subtitle: "VIEWS INCREASE", icon: Video },
  { title: "THUMBNAILS", value: "15%", subtitle: "CTR INCREASE", icon: ImageIcon },
  { title: "ENGAGING TITLE", value: "10%", subtitle: "MORE CLICKS", icon: Type },
  { title: "SEO", value: "30%", subtitle: "MORE REACH", icon: Search },
];

const services = [
  { title: "Website Development", description: "Custom, responsive websites tailored to your needs.", icon: Globe },
  { title: "E-commerce Solutions", description: "Powerful online stores with seamless checkout.", icon: ShoppingCart },
  { title: "SEO Optimization", description: "Boost your online visibility and organic traffic.", icon: Search },
  { title: "Social Media Management", description: "Engage your audience across all platforms.", icon: Share2 },
  { title: "Content Marketing", description: "Compelling content that drives conversions.", icon: FileText },
  { title: "Video Editing", description: "Professional video editing for all your needs.", icon: Video },
  { title: "Graphic Design", description: "Eye-catching visuals that tell your story.", icon: Palette },
  { title: "Web Application Development", description: "Scalable and secure web applications.", icon: Code },
];

const features = [
  {
    title: "Raw Footage",
    description: "Share your pre-recorded or raw videos in your own unlimited storage Google drive folder.",
    icon: DriveIcon,
  },
  {
    title: "Available 24/7",
    description: "Contact us regarding anything on WhatsApp whenever you want.",
    icon: MessageCircle,
  },
  {
    title: "Real-time Updates",
    description: "Check out our personalized CRM system anytime you wanna know about the process.",
    icon: BarChart3,
  },
];

export function GrowthMetrics() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-5xl md:text-6xl font-bold mb-24 flex items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          See the factors that drive your <span className="text-emerald-400">growth</span>
        </motion.h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, index) => (
            <motion.div key={metric.title} className="border border-emerald-400/20 rounded-lg p-6 bg-zinc-900/50" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
                <metric.icon className="w-5 h-5 text-emerald-400" />
                {metric.title}
              </h3>
              <p className="text-4xl font-bold mb-2">{metric.value}</p>
              <p className="text-sm text-gray-400">{metric.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div key={service.title} className="border border-emerald-400/20 rounded-lg p-6 bg-zinc-900/50" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <service.icon className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div key={feature.title} className="border border-emerald-400/20 rounded-lg p-6 bg-zinc-900/50 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-400/10 mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
