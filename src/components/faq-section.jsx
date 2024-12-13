"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "What Are Your Services?",
    answer: "We offer comprehensive digital solutions including web development, SEO optimization, social media management, video editing, and creative services. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "Do You Offer Revisions?",
    answer: "Yes, we offer revisions to ensure your complete satisfaction. Our packages include multiple revision rounds to perfect your content.",
  },
  {
    question: "When Will I Get My Videos?",
    answer: "Delivery times vary based on the package and project complexity. Typically, you'll receive your videos within 5-7 business days after content approval.",
  },
  {
    question: "Can I Create My Own Custom Package?",
    answer: "We understand that every business is unique. Contact us to create a customized package that perfectly fits your needs and budget.",
  },
  {
    question: "Why Wouldn't I Hire A Freelancer?",
    answer: "While freelancers can be great, we offer a full team of experts, consistent quality, reliable support, and comprehensive services all under one roof. Plus, you get dedicated account management and guaranteed delivery times.",
  },
  {
    question: "Can I Use The Package Within A Set Time Period?",
    answer: "Yes, our packages are typically structured for monthly use, but we can create flexible arrangements based on your specific needs.",
  },
  {
    question: "When Will I Experience Growth?",
    answer: "Growth patterns vary, but most clients see initial results within 2-3 months. We provide detailed monthly reports to track your progress.",
  },
  {
    question: "Do You Offer Trials?",
    answer: "We offer discovery calls and detailed consultations to understand your needs before commitment. Some services may have pilot program options.",
  },
  {
    question: "Do You Want Only One Service?",
    answer: "You can choose individual services or combine multiple services for a comprehensive digital strategy. We're flexible to your needs.",
  },
  {
    question: "Do You Offer Any Guarantees?",
    answer: "We guarantee professional quality, timely delivery, and transparent communication. Specific performance guarantees are discussed based on your package and goals.",
  },
];

export function FaqSection() {
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };
  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-24">
            <h2 className="text-6xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-400 mb-8">Do you have more questions?</p>
            <Button onClick={handleClick} size="lg" className="text-lg px-8 py-6 group bg-emerald-500 hover:bg-emerald-600">
              Book a call
              <PhoneCall className="ml-2 w-5 h-5  group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-zinc-800 rounded-lg px-6 py-2">
                  <AccordionTrigger className="text-xl font-medium hover:text-emerald-400">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
