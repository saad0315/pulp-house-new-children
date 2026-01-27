"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

const features = [
// ... (features data remains unchanged)
  {
    name: "Royalty Percentage",
    competitor: "Usually 30-70% (They take a cut)",
    pulp: "100% (We take $0)",
  },
  {
    name: "Copyright Ownership",
    competitor: "Often shared or restricted",
    pulp: "100% Yours (Legally protected)",
  },
  {
    name: "Production Speed",
    competitor: "6-18 Months",
    pulp: "90 Days Guaranteed",
  },
  {
    name: "Quality Control",
    competitor: "Automated/Template-based",
    pulp: "Bespoke 3-Stage Editorial",
  },
  {
    name: "Marketing & Launch",
    competitor: "Basic 'upload and pray'",
    pulp: "Aggressive SEO & Metadata Lock",
  },
  {
    name: "File Ownership",
    competitor: "Locked in proprietary systems",
    pulp: "Full Source Access Provided",
  },
];

export default function Comparison() {
  const { openModal } = useModal();

  return (
    <section className="bg-zinc-950 py-24 px-6 lg:px-12 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">The Killer Comparison</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            When you look at the math, there is no competition. One is a cost; the other is an investment.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-zinc-900/50">
            {/* Header */}
            <div className="p-6 font-bold text-zinc-500 uppercase tracking-widest text-xs hidden md:block">Feature</div>
            <div className="p-6 font-bold text-zinc-500 uppercase tracking-widest text-xs text-center hidden md:block">Generic Publishers</div>
            <div className="p-6 font-bold text-orange-500 uppercase tracking-widest text-xs text-center hidden md:block">The Pulp House</div>

            {features.map((feature, index) => (
              <div key={index} className="contents group">
                {/* Mobile Label */}
                <div className="md:hidden p-4 bg-zinc-800/50 font-bold text-xs uppercase tracking-widest text-zinc-400">
                  {feature.name}
                </div>
                
                {/* Feature Name */}
                <div className="p-6 border-t border-zinc-800 flex items-center font-bold text-lg">
                  {feature.name}
                </div>
                
                {/* Competitor */}
                <div className="p-6 border-t border-zinc-800 bg-zinc-900/30 flex items-center justify-center md:justify-center gap-3 text-zinc-500 italic">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-center">{feature.competitor}</span>
                </div>
                
                {/* Pulp House */}
                <div className="p-6 border-t border-zinc-800 bg-orange-500/5 flex items-center justify-center md:justify-center gap-3 font-black text-white">
                  <Check className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-center">{feature.pulp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center flex flex-col items-center gap-6">
           <p className="text-zinc-500 font-medium">
             Don&apos;t sacrifice your legacy for &quot;convenience.&quot; 
             Professional publishing is the only path to a professional career.
           </p>
           <Button variant="vibrant" size="lg" onClick={openModal}>
             Stop Comparing. Start Publishing.
           </Button>
        </div>
      </div>
    </section>
  );
}
