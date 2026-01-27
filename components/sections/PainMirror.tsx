"use client";

import { XCircle, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

export default function PainMirror() {
  const { openModal } = useModal();

  return (
    <section className="bg-zinc-950 py-24 px-6 lg:px-12 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-orange-500 font-bold mb-4 uppercase tracking-widest text-sm">
            <AlertTriangle className="w-5 h-5" />
            The Hard Truth
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Cheap Publishing is the <br />
            <span className="text-orange-500">Most Expensive Mistake</span> You Can Make.
          </h2>
          <p className="text-xl text-zinc-400 font-medium">
            95% of self-published books fail because they look &quot;self-published.&quot; 
            Readers judge your life&apos;s work by its cover and its formatting in under 2 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The DIY/Cheap Route */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-red-500/10 rounded-lg">
                <XCircle className="w-6 h-6 text-red-500" />
              </span>
              The &quot;Budget&quot; Route
            </h3>
            <ul className="space-y-6">
              {[
                "Template-based covers that look like everyone else's.",
                "Basic spell-check that misses critical narrative gaps.",
                "Standard formatting that breaks on Kindle devices.",
                "Zero distribution strategy beyond 'hitting publish'.",
                "You keep 100% of a $0 profit book."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-zinc-500">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Pulp House Route */}
          <div className="bg-white text-black p-8 rounded-3xl relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-2 font-black text-sm uppercase tracking-widest">
              The Gold Standard
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-green-500/10 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </span>
              The Pulp House
            </h3>
            <ul className="space-y-6 mb-8 flex-grow">
              {[
                "Custom 3D-rendered cover art designed to sell.",
                "3-stage editorial process (Structural, Line, & Copy).",
                "Device-agnostic formatting for all global retailers.",
                "Aggressive 90-day launch & metadata optimization.",
                "100% Royalties + Professional Authority."
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span className="text-lg font-bold leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="vibrant" size="lg" className="w-full mt-auto" onClick={openModal}>
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-500 italic text-lg">
            &quot;Your book isn&apos;t just a PDF; it&apos;s your legacy. Treat it like one.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
