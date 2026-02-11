"use client";

import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import Image, { StaticImageData } from "next/image";
import before from "@public/before.webp";
import before2 from "@public/before2.webp";
import before3 from "@public/before3.webp";
import after1 from "@public/after1.webp";
import after2 from "@public/after2.webp";
import after3 from "@public/after3.webp";

const ComparisonCard = ({
  title,
  linkBefore,
  linkAfter,
}: {
  title: string;
  linkBefore: string | StaticImageData;
  linkAfter: string | StaticImageData;
}) => (
  <div className="border border-zinc-200 rounded-[2rem] shadow-xl overflow-hidden bg-zinc-900 h-[400px] md:h-[500px] relative w-full shrink-0">
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
                src={linkBefore}
                alt="Amateur Publishing"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-6 text-left opacity-70">
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded">
                before
              </p>
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
                src={linkAfter}
                alt="Professional Publishing"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-brand text-[10px] md:text-xs uppercase tracking-widest font-bold bg-black/80 px-2 py-1 rounded border border-brand/20">
                after
              </p>
            </div>
          </div>
        </div>
      }
    />
  </div>
);

const cards = [
  { title: "Book Design", linkBefore: before, linkAfter: after1 },
  { title: "Illustration", linkBefore: before2, linkAfter: after2 },
  { title: "Cover Art", linkBefore: before3, linkAfter: after3 },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 z-40 uppercase">
            From Idea to <span className="text-brand">Icon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            See how professional publishing transforms your work. We turn 'just
            a manuscript' into a bestselling brand.
          </p>
        </div>

        {/* --- DESKTOP VIEW (GRID) --- */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <ComparisonCard key={index} {...card} />
          ))}
        </div>

        {/* --- MOBILE VIEW (SLIDER) --- */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <ComparisonCard {...card} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 bg-black/30 rounded-full text-white"
            aria-label="Previous comparison"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 bg-black/30 rounded-full text-white"
            aria-label="Next comparison"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Feature Comparison Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before List */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 opacity-70">
            <h3 className="text-lg font-bold text-zinc-500 uppercase tracking-widest mb-6">
              The &quot;Amateur&quot; Route
            </h3>
            <ul className="space-y-4">
              {[
                "Basic cover designs with no creative element. ",
                "Formatting mistakes that annoy readers",
                "No brand or authority recognition",
                "Invisible on Amazon metrics",
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
            <h3 className="text-lg font-bold text-brand uppercase tracking-widest mb-6">
              The Pulp House Way
            </h3>
            <ul className="space-y-4">
              {[
                "Eye-catching, professional cover design",
                "Flawless formatting for every device",
                "Instant authority & credibility",
                "Optimized for bestseller success & promotion",
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
