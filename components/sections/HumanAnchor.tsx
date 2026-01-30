"use client";

import { m } from "framer-motion";
import Image from "next/image";
import side from "@public/side.webp";

export default function HumanAnchor() {
  return (
    <section className="bg-white py-12 md:py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Image Column - Overlapping */}
          <div className="lg:col-span-5 relative">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] bg-zinc-100 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src={side}
                alt="Bestselling Book Example"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </m.div>

            {/* Decorative background element */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-48 h-48 md:w-64 md:h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 lg:pl-12">
            <div className="w-10 md:w-12 h-1 bg-brand" />
            <h2 className="text-2xl md:text-4xl font-black text-black leading-tight">
              Your Book, Your Legacy. Let’s Build It Right.
            </h2>

            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                Other agencies treat your manuscript as just another task to
                tick off. They focus on quantity, while we focus on quality and
                impact.{" "}
              </p>
              <p>
                At The Pulp House, you’ll work directly with an expert and not a
                bot. Every detail, from cover art to keywords, is meticulously
                designed for market leadership.{" "}
              </p>
              <p className="hidden md:block">
                Our 90-day timeline isn’t a gimmick. It's a results-driven
                approach that values your time and creative vision.{" "}
              </p>
            </div>

            <div className="mt-4 md:mt-8">
              <p className="text-black font-black text-xl md:text-2xl mb-0.5 md:mb-1 italic">
                Jameson Vance
              </p>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                Director of Publishing, The Pulp House
              </p>
            </div>

            <div className="mt-4 p-4 border-l-4 border-zinc-100 bg-zinc-50 rounded-r-xl italic text-zinc-500 text-sm md:text-base leading-snug">
              &quot;If we don't hit the 90-day mark, we keep working for free
              until your book is live.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
