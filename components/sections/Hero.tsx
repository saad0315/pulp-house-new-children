"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import { useEffect } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Hero() {
  const { openModal } = useModal();
  
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white px-6 py-24 lg:px-12 pt-32"
    >
      {/* Background Decor - Dot Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 text-zinc-900 text-sm font-medium w-fit border border-zinc-200 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Accepting new authors for 2026
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
            Full Service Publishing. <br />
            <span className="text-muted-foreground">100% Ownership.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            We turn your manuscript into a global bestseller in 90 days. 
            You keep <span className="text-foreground font-bold border-b-2 border-brand">100% of your royalties</span> and all creative rights. No exceptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="relative group">
              {/* Aggressive Pulse Effect */}
              <div className="absolute -inset-1 bg-brand/30 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse duration-1000" />
              <Button 
                variant="vibrant" 
                size="xl" 
                className="relative w-full sm:w-auto shadow-xl hover:scale-[1.02] transition-transform duration-300" 
                onClick={openModal}
              >
                Get Your Publishing Roadmap
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-col justify-center pl-2">
              <p className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 text-brand fill-brand" />
                Zero upfront cost options
              </p>
              <p className="text-xs text-muted-foreground font-medium">Subject to manuscript approval</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Premium 3D Hardcover Book Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end perspective-[2000px]"
        >
          {/* Static Book (No Animation) */}
          <div
            className="relative transform-style-3d rotate-y-[-25deg] rotate-x-[5deg]"
          >
            {/* Book Spine */}
            <div className="absolute top-0 left-0 w-[50px] h-[580px] bg-surface-black transform -translate-x-full origin-right rotate-y-[-90deg] flex flex-col items-center justify-center py-12 border-l border-zinc-800 shadow-2xl">
               <span className="text-brand text-xs font-black tracking-[0.4em] uppercase rotate-180 writing-mode-vertical">The Pulp House</span>
            </div>

            {/* Book Front Cover */}
            <div className="relative w-[400px] h-[580px] bg-surface-black rounded-r-md shadow-[50px_20px_100px_rgba(0,0,0,0.5)] border-t border-r border-zinc-800 overflow-hidden">
               {/* Cover Art - Dark Premium Aesthetic */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[100px] rounded-full mix-blend-overlay" />
               
               <div className="relative z-10 h-full flex flex-col p-12 text-white">
                  <div className="w-full flex justify-between items-start mb-20">
                     <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500">Bestseller</span>
                     <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                     </div>
                  </div>
                  
                  <h2 className="text-5xl font-black leading-none mb-4 tracking-tighter mix-blend-difference">
                     YOUR<br />
                     <span className="text-brand">AUTHORITY</span><br />
                     BLUEPRINT
                  </h2>
                  
                  <div className="w-20 h-1 bg-white/20 my-8" />
                  
                  <p className="text-zinc-400 font-serif italic text-lg max-w-[200px] leading-tight">
                     The definitive guide to owning your legacy.
                  </p>

                  <div className="mt-auto flex items-end justify-between">
                     <span className="text-[10px] uppercase tracking-widest text-zinc-600">Vol. 01</span>
                     <div className="text-right">
                        <p className="text-xs font-bold text-white uppercase tracking-wider">The Pulp House</p>
                        <p className="text-[10px] text-zinc-500">Publishing Group</p>
                     </div>
                  </div>
               </div>

               {/* Sheen/Gloss Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Pages (Side View) */}
            <div className="absolute top-[5px] right-[5px] w-[40px] h-[570px] bg-[#fff] transform translate-z-[-2px] translate-x-full origin-left rotate-y-[90deg] border-r border-zinc-200 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:4px_100%]"></div>
            
            {/* Book Shadow */}
            <div className="absolute -bottom-20 left-10 w-[80%] h-12 bg-black/40 blur-[40px] rounded-full transform rotate-x-[60deg]" />
          </div>
          
          {/* Badge - Floating with Counter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-12 -left-12 bg-white text-black p-6 rounded-2xl shadow-2xl z-30 hidden lg:block border border-zinc-100"
          >
            <div className="flex items-center gap-4">
               <div className="flex flex-col w-[3ch] items-end">
                  <span className="text-4xl font-black leading-none">
                    <Counter from={0} to={90} />
                  </span>
                  <span className="text-xs font-bold text-brand uppercase tracking-wider">Days</span>
               </div>
               <div className="h-8 w-px bg-zinc-200" />
               <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">From Draft</span>
                  <span className="text-sm font-black uppercase tracking-tight">To Published</span>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}