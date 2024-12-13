"use client";

import { Button } from "@/components/ui/button";
import { Menu, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    window.open("https://wa.me/+8801714515574", "_blank");
  };
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              <Image src="/studywav.png" alt="Logo" width={80} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors hidden">
              PROJECTS
            </Link>
            <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
              OUR PROCESS
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Button onClick={handleClick} variant="outline" className="group bg-emerald-500 outline-none border-0 duration-300 font-semibold hover:!border-2 hover:border-emerald-500 hover:bg-transparent hover:text-emerald-500">
              Book a call
              <PhoneCall className="ml-2 w-5 h-5  group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/projects" className="hidden block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                PROJECTS
              </Link>
              <Link href="#process" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                OUR PROCESS
              </Link>
              <Link href="#faq" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Button onClick={handleClick} variant="outline" className="w-full mt-4 group ">
                Book a call
                <PhoneCall className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
