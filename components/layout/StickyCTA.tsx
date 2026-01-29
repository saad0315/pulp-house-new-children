"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useModal();

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

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Bottom Bar */}
          <m.div
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
                onClick={openModal}
                className="px-6"
               >
                 <span>Start Now</span>
                 <ArrowRight className="w-4 h-4" />
               </Button>
            </div>
          </m.div>

          {/* Desktop Floating Pill (Bottom Center) */}
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 items-center gap-4"
          >
             <Button 
                variant="vibrant"
                size="lg"
                onClick={openModal}
                className="px-8 border-4 border-white shadow-2xl"
             >
                <span className="text-lg">Get Free Roadmap</span>
                <ArrowRight className="w-5 h-5" />
             </Button>
          </m.div>

          {/* Desktop Floating 3D Call Icon (Bottom Left) */}
          <m.a
            href="tel:+18889080775"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            className="hidden md:flex fixed bottom-8 left-8 z-50 items-center justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-green-600 rounded-full blur opacity-40 group-hover:opacity-70 animate-pulse-slow" />
              <div 
                className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white shadow-[0_8px_0_rgb(21,128,61),0_15px_20px_rgba(0,0,0,0.2)] active:shadow-[0_0px_0_rgb(21,128,61),0_0px_0_rgba(0,0,0,0)] active:translate-y-2 transition-all duration-150 border-2 border-green-400"
              >
                 <m.div
                   animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                   transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                 >
                   <Phone className="w-8 h-8 fill-white" />
                 </m.div>
              </div>
            </div>
          </m.a>
        </>
      )}
    </AnimatePresence>
  );
}
