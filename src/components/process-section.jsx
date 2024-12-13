"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Palette, Rocket, Target, TestTube } from "lucide-react";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const steps = [
  {
    title: "Discovery",
    description: "We learn about your goals and challenges.",
    icon: Lightbulb,
    iconBg: "#10b981",
  },
  {
    title: "Strategy",
    description: "We develop a tailored plan for your success.",
    icon: Target,
    iconBg: "#10b981",
  },
  {
    title: "Design",
    description: "We create visually appealing mockups and prototypes.",
    icon: Palette,
    iconBg: "#10b981",
  },
  {
    title: "Development",
    description: "We build your solution using cutting-edge technologies.",
    icon: Code,
    iconBg: "#10b981",
  },
  {
    title: "Testing",
    description: "We ensure everything works flawlessly.",
    icon: TestTube,
    iconBg: "#10b981",
  },
  {
    title: "Launch",
    description: "We deploy your project and provide ongoing support.",
    icon: Rocket,
    iconBg: "#10b981",
  },
];

export function ProcessSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-6xl font-bold text-center mb-24" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Our Process
        </motion.h2>

        <VerticalTimeline lineColor="#10b981">
          {steps.map((step, index) => (
            <VerticalTimelineElement
              key={step.title}
              className="vertical-timeline-element"
              contentStyle={{
                background: "rgba(24, 24, 27, 0.5)",
                backdropFilter: "blur(10px)",
                boxShadow: "none",
                border: "1px solid rgba(63, 63, 70, 0.4)",
                borderRadius: "0.75rem",
                padding: "2rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(63, 63, 70, 0.4)" }}
              iconStyle={{ background: step.iconBg, color: "#000" }}
              icon={<step.icon className="w-5 h-5" />}
            >
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-xl text-gray-400">{step.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
