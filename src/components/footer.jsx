"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image src="/studywav.png" alt="Logo" width={80} height={100} />
              </Link>
            </div>
            <p className="text-gray-400">Transform your digital presence with our expert services and solutions.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+1234567890" className="hover:text-emerald-400 transition-colors">
                  +1 (332) 288-3234
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+1234567890" className="hover:text-emerald-400 transition-colors">
                  +880 (171) 451-5574
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:contact@studywav.com" className="hover:text-emerald-400 transition-colors">
                  habibur@studywav.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-6">Working Hours</h3>
            <ul className="space-y-4 text-gray-400">
              {/* <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li> */}
              <li>24/7 Availability</li>
            </ul>
          </motion.div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-zinc-800">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-gray-400">
            © 2024 Studywav | All Rights Reserved
          </motion.div>

          <motion.button initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.1 }} onClick={scrollToTop} className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
