"use client";

import { useState, useRef, useEffect } from "react";
import { Check, X, MoveHorizontal, Star } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const startDrag = () => { isDragging.current = true; };
  const stopDrag = () => { isDragging.current = false; };

  // Add global event listeners for smooth dragging outside container
  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="bg-zinc-50 py-24 px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            From Amateur to <span className="text-orange-500">Authority</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
            See the difference professional publishing makes. 
            We turn &quot;just another upload&quot; into a market-dominating brand.
          </p>
        </div>

        {/* Comparison Slider */}
        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 select-none cursor-ew-resize"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseUp={stopDrag}
          >
            {/* AFTER Image (Background Layer) */}
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center bg-zinc-900 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse-slow">
                   {/* 3D Book Mockup Style */}
                   <div className="w-48 h-72 bg-gradient-to-br from-orange-500 to-orange-600 rounded-r-lg rounded-l-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-white p-4 border-l-4 border-orange-700 transform rotate-y-12">
                      <h3 className="text-2xl font-black italic text-center leading-none mb-2">THE<br/>AUTHORITY<br/>CODE</h3>
                      <div className="w-full h-0.5 bg-white/30 my-2" />
                      <p className="text-[10px] uppercase tracking-widest font-bold">Best Seller</p>
                   </div>
                   
                   {/* Badges */}
                   <div className="flex gap-4">
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                         <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                         #1 Best Seller
                      </div>
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                         Global Distribution
                      </div>
                   </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute bottom-8 right-8 text-right">
                   <p className="text-orange-500 font-black text-3xl">High Conversions</p>
                   <p className="text-zinc-400 text-sm uppercase tracking-widest">Professional Brand Authority</p>
                </div>
              </div>
            </div>

            {/* BEFORE Image (Foreground Layer - Clipped) */}
            <div 
              className="absolute inset-0 bg-zinc-100 flex items-center justify-center border-r-4 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                 {/* Content */}
                 <div className="flex flex-col items-center gap-6 opacity-60 grayscale filter blur-[1px]">
                    {/* Messy Word Doc Style */}
                    <div className="w-48 h-72 bg-white border border-zinc-300 shadow-sm flex flex-col p-8 items-center text-center">
                       <p className="font-serif text-black text-xl mb-4">My Book Title</p>
                       <p className="font-serif text-zinc-500 text-xs mb-8">by Author Name</p>
                       <div className="w-full space-y-2">
                          <div className="h-1 bg-zinc-200 w-full" />
                          <div className="h-1 bg-zinc-200 w-full" />
                          <div className="h-1 bg-zinc-200 w-3/4" />
                          <div className="h-1 bg-zinc-200 w-full" />
                       </div>
                    </div>
                    
                    <div className="flex gap-2 text-zinc-400 text-xs font-mono bg-zinc-200 px-3 py-1 rounded">
                       <X className="w-3 h-3" /> formatting_error.docx
                    </div>
                 </div>

                 {/* Floating Labels */}
                 <div className="absolute bottom-8 left-8 text-left opacity-70">
                    <p className="text-zinc-400 font-black text-3xl">Low Sales</p>
                    <p className="text-zinc-500 text-sm uppercase tracking-widest">Unclear Branding & Amateur Look</p>
                 </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-400">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Before List */}
           <div className="bg-white p-8 rounded-3xl border border-zinc-200 opacity-70">
              <h3 className="text-lg font-bold text-zinc-500 uppercase tracking-widest mb-6">The &quot;Amateur&quot; Route</h3>
              <ul className="space-y-4">
                 {[
                    "Unprofessional cover that screams 'self-published'",
                    "Formatting errors that frustrate readers",
                    "Zero authority or brand recognition",
                    "Invisible on Amazon rankings"
                 ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-500">
                       <X className="w-5 h-5 text-red-400 shrink-0" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* After List */}
           <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl transform scale-105">
              <h3 className="text-lg font-bold text-orange-500 uppercase tracking-widest mb-6">The Pulp House Way</h3>
              <ul className="space-y-4">
                 {[
                    "Category-killing cover design & branding",
                    "Flawless, device-agnostic formatting",
                    "Instant credibility & industry authority",
                    "Optimized for conversion & bestseller status"
                 ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-white font-medium">
                       <Check className="w-5 h-5 text-green-500 shrink-0" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}
