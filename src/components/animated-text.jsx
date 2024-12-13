'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const services = [
  "Website Development",
  "SEO Optimization",
  "Social Media Management",
  "Video Editing",
  "Motion Graphics"
]

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 3000)

    return () => clearInterval(interval);
  }, [])

  return (
    (<div className="relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent block">
          {services[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="307"
        height="34"
        viewBox="0 0 307 34"
        fill="none"
        className="m-auto block max-sm:mr-[20%] max-md:mr-[30%] max-lg:mr-[40%] max-sm:w-40">
        <motion.path
          d="M303.498 26.5334C183.108 -17.8935 53.0014 10.644 2.99697 30.4662"
          stroke="#DBFA9B"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
      </svg>
    </div>)
  );
}

