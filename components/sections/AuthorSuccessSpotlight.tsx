"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Star, Award } from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    author: "Sarah Jenkins",
    role: "Children's Book Author",
    quote: "My illustrations were ready in 30 days! The team captured my vision perfectly.",
    bookCover: "/abook1.webp",
    badge: "Amazon Best Seller",
    initials: "SJ",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    author: "Michael Ross",
    role: "First-Time Author",
    quote: "I was skeptical about the ownership rights, but they delivered 100% source files as promised.",
    bookCover: "/abook2.webp",
    badge: "Readers' Choice 2024",
    initials: "MR",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    role: "Self-Published Pro",
    quote: "The quality beat every freelancer I've hired in the last 5 years. Worth every penny.",
    bookCover: "/abook3.webp",
    badge: "Top New Release",
    initials: "ER",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    author: "David Miller",
    role: "Series Author",
    quote: "They turned my messy sketches into a professional series. The consistency is unmatched.",
    bookCover: "/abook4.webp",
    badge: "Series Best Seller",
    initials: "DM",
    color: "bg-orange-100 text-orange-600"
  }
];

// Duplicate for infinite loop
const MARQUEE_ITEMS = [...testimonials, ...testimonials, ...testimonials];

export default function AuthorSuccessSpotlight() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge icon={Star} text="Success Stories" />
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6"
          >
            Real Authors. <span className="text-brand">Real Results.</span>
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-medium"
          >
            Don&apos;t just take our word for it. See what happens when you choose professional execution.
          </m.p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* CSS Animation Wrapper */}
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4 px-8">
            {MARQUEE_ITEMS.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[85vw] md:w-[400px] flex-shrink-0 group relative bg-white p-2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-100 flex flex-col"
              >
                {/* Book Cover Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                   {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-400 text-yellow-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform">
                        <Award className="w-3 h-3" />
                        {item.badge}
                      </div>
                    </div>
                  )}
                  <Image
                    src={item.bookCover}
                    alt={`Book cover by ${item.author}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 85vw, 400px"
                  />
                </div>

                {/* Content */}
                <div className="px-4 pb-6 flex-1 flex flex-col">
                  <blockquote className="text-lg font-bold text-zinc-800 leading-snug mb-6 flex-1">
                    &quot;{item.quote}&quot;
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${item.color}`}>
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">{item.author}</div>
                      <div className="text-sm text-zinc-500 font-medium">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
