"use client";

import { m } from "framer-motion";

const logos = [
  { name: "Amazon Kindle", id: "amazon" },
  { name: "IngramSpark", id: "ingram" },
  { name: "Barnes & Noble", id: "bn" },
  { name: "Apple Books", id: "apple" },
  { name: "Draft2Digital", id: "d2d" },
  { name: "Goodreads", id: "goodreads" },
];

export default function Logos() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-200 py-8 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
          Our authors are featured on & distributed by
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-gradient-x">
        {/* Gradient Masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

        <m.div
          className="flex whitespace-nowrap gap-16 lg:gap-32 min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default shrink-0"
            >
              <span className="text-2xl lg:text-3xl font-black tracking-tighter text-zinc-800 hover:text-black">
                {logo.name}
              </span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
