"use client";

import { m, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <m.span>{rounded}</m.span>;
}

const authorities = [
  "Amazon Kindle", "Forbes", "New York Times", "USA Today", "Wall Street Journal", "Entrepreneur"
];

// Duplicate for infinite scroll - creating enough length
const scrollingAuthorities = [...authorities, ...authorities, ...authorities, ...authorities];

export default function TrustAnchor() {
  return (
    <section className="bg-zinc-950 py-10 lg:py-14 overflow-hidden border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left: Major Metric */}
          <div className="flex items-center gap-6 shrink-0 relative z-20 bg-zinc-950 pr-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
                  <Counter from={0} to={1240} />
                </span>
                <span className="text-2xl lg:text-3xl font-black text-brand">+</span>
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] lg:text-xs">
                Global Bestsellers Launched
              </p>
            </div>
            <div className="hidden lg:block w-px h-16 bg-white/10" />
          </div>

          {/* Right: Infinite Scroll Authority */}
          <div className="flex-1 w-full overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
            
            <div className="flex flex-col gap-4">
              <p className="text-zinc-200 text-sm lg:text-base font-bold uppercase tracking-[0.2em] mb-2  drop-shadow-md text-center">
                Our Authors & Books Featured In:
              </p>
              
              {/* Marquee Container */}
              <div className="flex overflow-hidden w-full mask-gradient-x">
                 {/* CSS-based Marquee for robust 'pause on hover' */}
                 <div className="flex gap-16 lg:gap-24 items-center animate-scroll hover:[animation-play-state:paused] w-max">
                    {scrollingAuthorities.map((auth, idx) => (
                      <div 
                        key={idx} 
                        className="text-zinc-500 font-black text-xl lg:text-2xl tracking-tighter whitespace-nowrap hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {auth}
                      </div>
                    ))}
                    {/* Add one more set to ensure no gaps during the reset depending on screen width */}
                    {authorities.map((auth, idx) => (
                      <div 
                        key={`end-${idx}`} 
                        className="text-zinc-500 font-black text-xl lg:text-2xl tracking-tighter whitespace-nowrap hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {auth}
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Custom CSS for the scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
