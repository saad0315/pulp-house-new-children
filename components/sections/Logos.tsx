"use client";

import { motion } from "framer-motion";

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
    <section className="bg-zinc-50 border-y border-zinc-200 py-12">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8">
          Our authors are featured on & distributed by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <span className="text-xl lg:text-2xl font-black tracking-tighter text-zinc-800 group-hover:text-black">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
