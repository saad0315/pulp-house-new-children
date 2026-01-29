"use client";

import { m, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import { useEffect } from "react";
import Image from "next/image";

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <m.span>{rounded}</m.span>;
}

export default function Hero() {
  const { openModal } = useModal();
  
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white px-6 py-12 lg:px-12 pt-20"
    >
      {/* Background Decor - Dot Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div
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
          <p className="text-sm text-dark leading-relaxed font-bold">
            Your Manuscript. A Global Bestseller in 90 Days. Keep 100% Royalties and Creative Rights
          </p>


          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="relative">
              <Button 
                variant="vibrant" 
                size="xl" 
                className="w-full sm:w-auto " 
                onClick={openModal}
              >
                Start Your Bestseller Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-col justify-center pl-2">
              <p className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 text-brand fill-brand" />
                Zero upfront cost
              </p>
              <p className="text-xs text-muted-foreground font-medium">Subject to manuscript approval</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[4/5] lg:aspect-square">
            <Image
              src="/hero-image.webp"
              alt="The Pulp House Publishing Book Collection"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}