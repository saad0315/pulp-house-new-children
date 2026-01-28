"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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

const authorities = [
  "Amazon Kindle", "Forbes", "New York Times", "USA Today", "Wall Street Journal", "Entrepreneur"
];

export default function TrustAnchor() {
  return (
    <section className="bg-zinc-950 py-12 lg:py-16 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left: Major Metric */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
                  <Counter from={0} to={1240} />
                </span>
                <span className="text-2xl lg:text-3xl font-black text-brand">+</span>
              </div>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] lg:text-xs">
                Global Bestsellers Launched
              </p>
            </div>
            <div className="hidden lg:block w-px h-16 bg-white/10" />
          </div>

          {/* Right: Authority Grid */}
          <div className="flex-1 w-full">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-center lg:text-left">
              Our Authors & Books Featured In:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-40">
              {authorities.map((auth, idx) => (
                <div 
                  key={idx} 
                  className="text-white font-black text-sm lg:text-base tracking-tighter whitespace-nowrap hover:opacity-100 transition-opacity cursor-default"
                >
                  {auth}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
