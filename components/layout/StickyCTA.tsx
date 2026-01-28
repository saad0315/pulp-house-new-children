"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (roughly after Hero)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("conversion-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Bottom Bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-zinc-200 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center justify-between gap-4">
               <div className="flex-1">
                 <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Ready to start?</p>
                 <p className="text-sm font-black text-zinc-900 leading-none">Get Your Free Roadmap</p>
               </div>
               <Button 
                variant="vibrant"
                size="md"
                onClick={scrollToForm}
                className="px-6"
               >
                 <span>Start Now</span>
                 <ArrowRight className="w-4 h-4" />
               </Button>
            </div>
          </motion.div>

          {/* Desktop Floating Pill (Bottom Right) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-4"
          >
             <Button 
                variant="vibrant"
                size="lg"
                onClick={scrollToForm}
                className="px-8 border-4 border-white"
             >
                <span className="text-lg">Get Free Roadmap</span>
                <ArrowRight className="w-5 h-5" />
             </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
