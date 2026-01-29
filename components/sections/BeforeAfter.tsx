"use client";

import { Check, X } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import Image from "next/image";

const ComparisonCard = ({ title, subtitleBefore, subtitleAfter }: { title: string, subtitleBefore: string, subtitleAfter: string }) => (
  <div className="border border-zinc-200 rounded-[2rem] shadow-xl overflow-hidden bg-zinc-900 h-[400px] md:h-[500px] relative shrink-0 w-full snap-center">
    <div className="absolute top-4 left-0 right-0 z-20 text-center pointer-events-none">
       <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white/90 text-[10px] font-bold uppercase tracking-widest border border-white/10">
         {title}
       </span>
    </div>
    <Compare
      className="w-full h-full" 
      slideMode="hover"
      autoplay={false}
      firstImage={
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full shadow-sm scale-90">
              <Image
                src="/before.webp"
                alt="Amateur Publishing"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-6 text-left opacity-70">
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded">{subtitleBefore}</p>
            </div>
          </div>
        </div>
      }
      secondImage={
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
            <div className="relative z-10 w-full h-full scale-90">
              <Image
                src="/after.webp"
                alt="Professional Publishing"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-brand text-[10px] md:text-xs uppercase tracking-widest font-bold bg-black/80 px-2 py-1 rounded border border-brand/20">{subtitleAfter}</p>
            </div>
          </div>
        </div>
      }
    />
  </div>
);

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

        {/* Comparison Cards Slider/Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:pb-0 lg:overflow-visible scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          <ComparisonCard 
             title="Cover Design" 
             subtitleBefore="Generic Template" 
             subtitleAfter="Custom Art" 
          />
          <ComparisonCard 
             title="Interior Layout" 
             subtitleBefore="Broken Formatting" 
             subtitleAfter="Pro Typesetting" 
          />
          <ComparisonCard 
             title="Marketing Assets" 
             subtitleBefore="Low Resolution" 
             subtitleAfter="Brand Ready" 
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