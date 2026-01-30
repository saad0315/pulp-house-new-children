"use client";

import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";
import { m } from "framer-motion";
import Image from "next/image";
import cross from "@public/cross.webp";
import tick from "@public/tick.webp";

export default function PainMirror() {
  const { openModal } = useModal();

  return (
    <section className="bg-zinc-950 py-16 md:py-24 px-6 lg:px-12 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-12 md:mb-20 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
          <m.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-brand font-bold mb-4 uppercase tracking-[0.2em] text-xs md:text-sm"
          >
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
            The Hard Truth
          </m.div>
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight"
          >
            Cheap Publishing  <br className="hidden md:block" />
            <span className="text-brand">Costs You More.</span>
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl"
          >
            95% of self-published books fail because they scream self-published. In just 2 seconds, readers judge your book by its cover and layout.
          </m.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 pt-10">
          {/* The DIY/Cheap Route */}
          <m.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-10 rounded-[2rem] relative group"
          >
            {/* 3D Cross Image */}
            <div className="absolute -top-12 -left-10 w-24 h-24 md:w-32 md:h-32 z-20 pointer-events-none drop-shadow-2xl animate-float">
               <Image src={cross} alt="Mistake" fill className="object-contain" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2.5 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                <Circle className="w-5 h-5 md:w-6 md:h-6 text-red-500" fill="red" />
              </span>
              The &quot;Budget&quot; Option
            </h3>
            <ul className="space-y-5 md:space-y-6">
              {[
                "Template designs that blend in, not stand out.",
                "Simple spell-check that misses key narrative flaws.",
                "Basic formatting that fails on Kindle and other devices.",
                "No post-launch strategy. Just hitting 'publish'.",
                "You keep 100% of nothing.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-zinc-500 items-start">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                  <span className="text-base md:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </m.div>

          {/* The Pulp House Route */}
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-black p-6 md:p-10 rounded-[2rem] relative flex flex-col h-full shadow-2xl shadow-brand/10"
          >
            {/* 3D Tick Image */}
            <div className="absolute -top-14 -left-10 w-24 h-24 md:w-32 md:h-32 z-20 pointer-events-none drop-shadow-2xl animate-float-delayed">
               <Image src={tick} alt="Success" fill className="object-contain" />
            </div>

            <div className="absolute top-0 right-0 bg-brand text-white px-5 md:px-6 py-2 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-tr-[2rem] rounded-bl-xl">
              The Gold Standard
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2.5 bg-green-500/10 rounded-xl">
                <Circle className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="#00aa3d" />
              </span>
              The Pulp House Advantage
            </h3>
            <ul className="space-y-5 md:space-y-6 mb-10 ">
              {[
                "Stunning, custom 3D-rendered covers that sell.",
                "Comprehensive 3-stage editorial process (Structure, Line, & Copy).",
                "Flawless formatting that works across all devices and retailers.",
                "Proven 90-day launch strategy with metadata optimization.",
                "100% Royalties + Expert-Backed Authority.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-black leading-tight tracking-tight font-normal">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="vibrant" size="xl" className="w-full mt-auto shadow-lg shadow-brand/20 py-7 text-lg" onClick={openModal}>
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </m.div>
        </div>
        
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-zinc-500 italic text-base md:text-lg max-w-xl mx-auto">
            &quot;Your story deserves more than just a page.&quot; <br />
            &quot;Your book is your legacy. Treat it like one.&quot;
          </p>
        </m.div>
      </div>
    </section>
  );
}
