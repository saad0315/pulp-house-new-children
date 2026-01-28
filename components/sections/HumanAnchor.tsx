"use client";

import { motion } from "framer-motion";

export default function HumanAnchor() {
  return (
    <section className="bg-white py-24 px-6 lg:px-12 relative overflow-visible">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column - Overlapping */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              {/* Placeholder for Lead Editor Photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                <span className="text-sm font-bold uppercase tracking-widest rotate-90 lg:rotate-0">Professional Portrait</span>
              </div>
            </motion.div>
            
            {/* Decorative background element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-12">
            <div className="w-12 h-1 bg-brand" />
            <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight">
              &quot;We don&apos;t just &apos;publish&apos; books. <br />
              We architect legacies.&quot;
            </h2>
            
            <div className="space-y-4 text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                Most agencies see your manuscript as a sequence of tasks to be outsourced to the lowest bidder. They focus on volume; we focus on velocity and value.
              </p>
              <p>
                When you join The Pulp House, you aren&apos;t handed off to a support bot. You work with a dedicated publishing director who ensures every semicolon, every pixel of cover art, and every metadata keyword is optimized for one thing: <strong>Market Dominance.</strong>
              </p>
              <p>
                Our 90-day validator isn&apos;t a marketing gimmick—it&apos;s a disciplined manufacturing process that respects your time and your creative integrity.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-black font-black text-2xl mb-1 italic">Jameson Vance</p>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Director of Publishing, The Pulp House</p>
            </div>
            
            <div className="mt-4 p-4 border-l-4 border-zinc-100 bg-zinc-50 rounded-r-xl italic text-zinc-500">
              &quot;My personal guarantee: If we don&apos;t hit our 90-day publication milestone, we work for free until you&apos;re live.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
