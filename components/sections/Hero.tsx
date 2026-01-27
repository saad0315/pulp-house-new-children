"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white px-6 py-24 lg:px-12 pt-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Accepting new authors for 2026
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-black leading-[1.1] tracking-tight">
            Full Service Publishing. <br />
            <span className="text-zinc-400">100% Ownership.</span>
          </h1>
          
          <p className="text-xl text-zinc-600 leading-relaxed font-medium">
            We turn your manuscript into a global bestseller in 90 days. 
            You keep <span className="text-black font-bold border-b-2 border-orange-500">100% of your royalties</span> and all creative rights. No exceptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="vibrant" size="xl" className="group" onClick={openModal}>
              Get Your Publishing Roadmap
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold text-black uppercase tracking-wider">Zero upfront cost options</p>
              <p className="text-xs text-zinc-500">Subject to manuscript approval</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 3D Book Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[450px] aspect-[3/4] bg-zinc-100 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden group">
             {/* Animated gradient placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-white to-zinc-100" />
            <div className="relative z-10 flex flex-col items-center text-center p-12">
               <div className="w-24 h-1 bg-black mb-8" />
               <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">The Pulp House</p>
               <h2 className="text-3xl font-black text-black mb-4 italic">YOUR LEGACY</h2>
               <p className="text-zinc-500 font-serif italic text-lg">Coming soon to global retailers</p>
               <div className="mt-auto w-32 h-40 border-2 border-dashed border-zinc-300 rounded flex items-center justify-center">
                  <span className="text-zinc-400 text-xs font-medium">Book Cover Art</span>
               </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-20 bg-orange-500/5 blur-[100px] rounded-full" />
          </div>
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <p className="text-2xl font-black">90 DAYS</p>
            <p className="text-xs uppercase tracking-widest text-zinc-400">To Publication</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
