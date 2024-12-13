"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 800,
    features: ["4 YouTube videos per month", "4 Shorts per month", "YouTube Thumbnails", "Video running time: 8 mins", "24/7 assistance via WhatsApp", "Basic SEO optimization", "Content calendar", "Monthly performance reports"],
  },
  {
    name: "Professional",
    price: 1600,
    popular: true,
    features: ["8 YouTube videos per month", "8 Shorts per month", "YouTube Thumbnails", "Shorts Thumbnails", "Video running time: 15 mins", "24/7 assistance via WhatsApp", "Advanced SEO optimization", "Live Updates via dedicated CRM", "Content strategy calls", "Social media management"],
  },
  {
    name: "Enterprise",
    price: 3500,
    features: ["16 YouTube videos per month", "16 Shorts per month", "YouTube Thumbnails", "Shorts Thumbnails", "A/B Thumbnail Split Test", "Advanced SEO optimization", "Max video length: 15 minutes", "24/7 assistance via WhatsApp", "Content strategy calls", "Generate Hooks", "Live Updates via dedicated CRM", "Priority support"],
  },
];

export function PricingSection() {
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Choose what works for you</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Whether you design alone or with a team, we have a plan that fits your needs, including custom design systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 ${plan.popular ? "border-2 border-emerald-400" : ""}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 min-w-[300px] mx-auto">
                  <span className="bg-emerald-400 text-black text-sm font-bold px-3 py-1 rounded-full w-full">MOST RECOMMENDED</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li key={feature} className="flex items-center space-x-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button onClick={handleClick} className="w-full group text-emerald-400" variant={plan.popular ? "default" : "outline"}>
                Buy Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <p className="text-xl text-gray-400 mb-4">Book a free 15 minute growth call</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="group">
              View Pricing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 group">
              Book a call
              <PhoneCall className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
