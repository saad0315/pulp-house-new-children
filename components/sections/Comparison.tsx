"use client";

import { Check, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";
import { m } from "framer-motion";

const features = [
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
    <section className="bg-zinc-950 py-16 md:py-24 px-6 lg:px-12 text-white overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand font-bold mb-4 uppercase tracking-[0.2em] text-xs md:text-sm"
          >
            <AlertCircle className="w-4 h-4" />
            The Reality Check
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            The Killer Comparison
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            When it comes to publishing, one path costs you everything. The
            other? It’s an investment in your future.
          </m.p>
        </div>

        <div className="flex flex-col gap-4 md:block md:bg-zinc-900/50 md:rounded-[2rem] md:border md:border-zinc-800 md:shadow-2xl md:overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-3 bg-zinc-900 border-b border-zinc-800">
            <div className="p-6 font-bold text-zinc-500 uppercase tracking-widest text-xs">
              Feature
            </div>
            <div className="p-6 font-bold text-zinc-500 uppercase tracking-widest text-xs text-center">
              Generic Publishers
            </div>
            <div className="p-6 font-bold text-brand uppercase tracking-widest text-xs text-center bg-brand/5">
              The Pulp House
            </div>
          </div>

          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col md:grid md:grid-cols-3 bg-zinc-900/40 md:bg-transparent border border-zinc-800 md:border-0 md:border-t md:border-zinc-800 rounded-2xl md:rounded-none overflow-hidden hover:bg-zinc-800/30 transition-colors"
            >
              {/* Feature Name */}
              <div className="p-5 md:p-6 flex items-center justify-between md:justify-start font-bold text-lg md:text-base border-b border-zinc-800 md:border-none bg-zinc-900/50 md:bg-transparent">
                <span className="md:hidden text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                  Feature
                </span>
                <span>{feature.name}</span>
              </div>

              {/* Competitor */}
              <div className="p-5 md:p-6 flex items-start md:items-center justify-between md:justify-center gap-4 text-zinc-400 italic bg-zinc-900/20 md:bg-zinc-900/30">
                <span className="md:hidden text-xs uppercase tracking-widest text-zinc-600 font-semibold min-w-[80px]">
                  Others
                </span>
                <div className="flex items-center gap-3 md:justify-center w-full md:w-auto text-right md:text-center">
                  <span className="text-sm md:text-base">
                    {feature.competitor}
                  </span>
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                </div>
              </div>

              {/* Pulp House */}
              <div className="p-5 md:p-6 flex items-start md:items-center justify-between md:justify-center gap-4 font-black text-white bg-brand/5 md:bg-brand/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand md:hidden" />{" "}
                {/* Mobile Accent Line */}
                <span className="md:hidden text-xs uppercase tracking-widest text-brand font-bold min-w-[80px]">
                  Us
                </span>
                <div className="flex items-center gap-3 md:justify-center w-full md:w-auto text-right md:text-center">
                  <span className="text-sm md:text-base">{feature.pulp}</span>
                  <Check className="w-6 h-6 text-brand shrink-0" />
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center flex flex-col items-center gap-6 md:gap-8"
        >
          <p className="text-zinc-500 font-medium text-base md:text-lg max-w-xl">
            Don&apos;t settle for convenience. Real success comes with
            professional publishing, not shortcuts. Own your career, own your
            story.
          </p>
          <Button
            variant="vibrant"
            size="xl"
            onClick={openModal}
            className="w-full sm:w-auto px-10 py-6 text-lg shadow-brand/20 shadow-lg"
          >
            Make Your Move 
          </Button>
        </m.div>
      </div>
    </section>
  );
}
