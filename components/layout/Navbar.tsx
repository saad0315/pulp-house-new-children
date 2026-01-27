"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg">P</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-black hidden sm:block">
            THE PULP HOUSE
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="group hidden sm:flex border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-zinc-500 group-hover:text-black transition-colors" />
            <span className="text-zinc-600 group-hover:text-black font-medium">Live Chat</span>
          </Button>

          <Button 
            variant="primary" 
            size="sm" 
            className="group shadow-sm hover:shadow-md transition-all duration-300 bg-black hover:bg-zinc-800"
            onClick={() => window.location.href = 'tel:+15550000000'}
          >
            <Phone className="w-4 h-4 mr-2 text-white/80 group-hover:text-white" />
            <span className="font-medium">+1 (555) 000-0000</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
