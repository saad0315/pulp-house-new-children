"use client";

import { Check, X, Star } from "lucide-react";
import { Compare } from "@/components/ui/compare";

export default function BeforeAfter() {
  return (
    <section className="bg-white py-12 px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 z-40">
            From Amateur to <span className="text-brand">Authority</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            See the difference professional publishing makes. 
            We turn &quot;just another upload&quot; into a market-dominating brand.
          </p>
        </div>

        {/* Comparison Component */}
        <div className="max-w-5xl mx-auto border border-zinc-200 rounded-[2rem] shadow-2xl overflow-hidden bg-zinc-900">
          <Compare
            className="w-full h-[500px] md:h-[600px]" 
            slideMode="hover"
            autoplay={false}
            autoplayDuration={4000}
            firstImage={
              // BEFORE Image (Foreground Layer - Clipped)
              <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                   {/* Content */}
                   <div className="flex flex-col items-center gap-6 opacity-60 grayscale filter blur-[1px]">
                      {/* Messy Word Doc Style */}
                      <div className="w-48 h-72 bg-white border border-zinc-300 shadow-sm flex flex-col p-8 items-center text-center scale-90 md:scale-100">
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
                      <p className="text-zinc-400 font-black text-2xl md:text-3xl">Low Sales</p>
                      <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest">Unclear Branding</p>
                   </div>
                </div>
              </div>
            }
            secondImage={
              // AFTER Image (Background Layer)
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand/20 blur-[100px] rounded-full" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse-slow">
                     {/* 3D Book Mockup Style */}
                     <div className="w-48 h-72 bg-gradient-to-br from-brand to-brand/80 rounded-r-lg rounded-l-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-white p-4 border-l-4 border-brand transform rotate-y-12 scale-90 md:scale-100">
                        <h3 className="text-2xl font-black italic text-center leading-none mb-2">THE<br/>AUTHORITY<br/>CODE</h3>
                        <div className="w-full h-0.5 bg-white/30 my-2" />
                        <p className="text-[10px] uppercase tracking-widest font-bold">Best Seller</p>
                     </div>
                     
                     {/* Badges */}
                     <div className="flex gap-4">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                           <Star className="w-4 h-4 text-brand fill-brand" />
                           #1 Best Seller
                        </div>
                        <div className="hidden md:block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                           Global Distribution
                        </div>
                     </div>
                  </div>

                  {/* Floating Labels */}
                  <div className="absolute bottom-8 right-8 text-right">
                     <p className="text-brand font-black text-2xl md:text-3xl">High Conversions</p>
                     <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest">Professional Authority</p>
                  </div>
                </div>
              </div>
            }
          />
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
           <div className="bg-surface-dark p-8 rounded-3xl shadow-xl transform md:scale-105">
              <h3 className="text-lg font-bold text-brand uppercase tracking-widest mb-6">The Pulp House Way</h3>
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