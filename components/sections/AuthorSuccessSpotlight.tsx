"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Award } from "lucide-react";
import Badge from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    author: "Jessica T",
    role: "Space Adventure Fan",
    quote:
      "The cover design truly captures the essence of the adventure. The professional editing brought Monty's journey to life!",
    bookCover: "/R.J. Harbor.webp",
    badge: "Amazon Best Seller",
    initials: "SJ",
    color: "bg-blue-100 text-blue-600",
    link: "https://www.amazon.com/dp/B0CK3WZHPQ",
  },
  {
    id: 2,
    author: "Monica L",
    role: "Parent & Educator",
    quote:
      "The hand-drawn illustrations are absolutely stunning! They perfectly complement the educational content, making learning fun.",
    bookCover: "/Elizabeth Ernst.webp",
    badge: "Readers' Choice 2024",
    initials: "ML",
    color: "bg-emerald-100 text-emerald-600",
    link: "https://www.amazon.com/Leann-Moon-Bears-Secret-Exploration/dp/B0FMDBX1P5",
  },
  {
    id: 3,
    author: "Anna K.",
    role: "Mom of 2",
    quote:
      "The bright, bold illustrations made it so easy for my little one to enjoy coloring. Perfect for toddlers!",
    bookCover: "/BJB Publishing.webp",
    badge: "Top New Release",
    initials: "AK",
    color: "bg-purple-100 text-purple-600",
    link: "https://www.amazon.com/Animals-Coloring-Book-Kids-Toddlers/dp/B0FC45KPS1",
  },
  {
    id: 4,
    author: "Tom S",
    role: "Christian Parent",
    quote:
      "The beautiful nature illustrations and heartwarming story helped my child connect with the theme of faith.",
    bookCover: "/Al Wilsey.webp",
    badge: "Series Best Seller",
    initials: "TS",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/Avery-Wolf-Den-Al-Wilsey/dp/B0GJT331JL",
  },
  {
    id: 5,
    author: "Rachel M.",
    role: "Mom of 3",
    quote:
      "The playful illustrations and thoughtful writing make this book a magical bedtime read that sparks joy and kindness.",
    bookCover: "/S. Michael Smith.webp",
    badge: "Series Best Seller",
    initials: "RM",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/dp/1964475228/",
  },
  {
    id: 5,
    author: "Michael F.",
    role: "Dad of an 8-year-old",
    quote:
      "They turned my messy sketches into a professional series. The consistency is unmatched.",
    bookCover: "/Lulu Sparkle.webp",
    badge: "Series Best Seller",
    initials: "MF",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/Super-Activity-Book-Smart-Boys/dp/B0G1HJ89V3",
  },
  {
    id: 6,
    author: "Linda B.",
    role: "Teacher & Parent",
    quote:
      "The jokes are funny and the illustrations are adorable! This book was a hit at our Valentine’s Day celebration.",
    bookCover: "/Ciel Publishing.webp",
    badge: "Series Best Seller",
    initials: "LB",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/Valentines-Day-Joke-Book-Kids/dp/B0BT6WVTRM",
  },
  {
    id: 7,
    author: "Sarah R.",
    role: "Teacher & Parent ",
    quote:
      "The creative illustrations and seamless storytelling kept my kids hooked. It’s an adventure that sparks curiosity!",
    bookCover: "/MSc Elizabeth Ernst.webp",
    badge: "Series Best Seller",
    initials: "SR",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/Lost-Planet-Chronicles-Friendship-Exploration/dp/B0FY1WYWKV",
  },
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
            Don&apos;t just take our word for it. See what happens when you
            choose professional execution.
          </m.p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* CSS Animation Wrapper */}
        <div className="flex gap-8 w-max animate-marquee py-4 px-8">
          {MARQUEE_ITEMS.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.link}
              target="_blank"
              className="w-[85vw] md:w-[400px] flex-shrink-0 group relative bg-white p-2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-100 flex flex-col block"
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
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${item.color}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">{item.author}</div>
                    <div className="text-sm text-zinc-500 font-medium">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
