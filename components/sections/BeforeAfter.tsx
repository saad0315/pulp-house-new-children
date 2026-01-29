"use client";

import { Check, X, Star } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import Image from "next/image";

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
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Image Container matching original mockup size */}
                  <div className="relative w-100 h-100 shadow-sm scale-90 md:scale-100 ">
                    <Image
                      src="/before.webp"
                      alt="Amateur Publishing"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="absolute bottom-8 left-8 text-left opacity-70">
                    <p className="text-zinc-400 font-black text-2xl md:text-3xl">Low Sales</p>
                    <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest">Unclear Branding</p>
                  </div>
                </div>
              </div>
            }
            secondImage={
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand/20 blur-[100px] rounded-full" />
                  
                  <div className="flex flex-col justify-center items-center gap-6  w-full h-full rounded-md p-4">
                    {/* Image Container */}
                    <div className="relative z-10 w-2xl h-100  scale-90 md:scale-100">
                      <Image
                        src="/after.webp"
                        alt="Professional Publishing"
                        fill
                        className="object-contain w-full "
                        
                      />
                    </div>
                    
                    {/* Badges */}
                    {/* <div className="flex gap-4">
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                        <Star className="w-4 h-4 text-brand fill-brand" />
                        #1 Best Seller
                      </div>
                      <div className="hidden md:block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                        Global Distribution
                      </div>
                    </div> */}
                  </div>

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