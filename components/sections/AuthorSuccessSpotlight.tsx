"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import RJHarbor from "@public/R.J. Harbor.webp";
import ElizabethErnst from "@public/Elizabeth Ernst.webp";
import BJBPublishing from "@public/BJB Publishing.webp";
import AlWilsey from "@public/Al Wilsey.webp";
import SMichaelSmith from "@public/S. Michael Smith.webp";
import LuluSparkle from "@public/Lulu Sparkle.webp";
import CielPublishing from "@public/Ciel Publishing.webp";
import MScElizabethErnst from "@public/MSc Elizabeth Ernst.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    author: "Jessica T",
    role: "Space Adventure Fan",
    quote:
      "The cover design truly captures the essence of the adventure. The professional editing brought Monty's journey to life!",
    bookCover: RJHarbor,
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
    bookCover: ElizabethErnst,
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
    bookCover: BJBPublishing,
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
    bookCover: AlWilsey,
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
    bookCover: SMichaelSmith,
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
    bookCover: LuluSparkle,
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
    bookCover: CielPublishing,
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
    bookCover: MScElizabethErnst,
    badge: "Series Best Seller",
    initials: "SR",
    color: "bg-orange-100 text-orange-600",
    link: "https://www.amazon.com/Lost-Planet-Chronicles-Friendship-Exploration/dp/B0FY1WYWKV",
  },
];

export default function AuthorSuccessSpotlight() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge icon={Star} text="Success Stories" />

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-4 sm:mb-6"
          >
            Real Authors. <span className="text-brand">Real Results.</span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-zinc-600 font-medium px-4"
          >
            Don&apos;t just take our word for it. See what happens when you
            choose professional execution.
          </m.p>
        </div>
      </div>

      <div className="relative w-full flex items-center group isolate">
        {/* Blur effect - moved before everything */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".custom-next-btn",
            prevEl: ".custom-prev-btn",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 40,
            },
          }}
          centeredSlides={true}
          className="!px-12 !py-4 relative z-[10]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
              <Link
                href={item.link}
                target="_blank"
                className="block h-full group/slide relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-100 overflow-hidden"
              >
                {/* Fixed height image container */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[340px] overflow-hidden bg-zinc-100">
                  {item.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-yellow-400 text-yellow-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transform rotate-2 group-hover/slide:rotate-0 transition-transform">
                        <Award className="w-3 h-3" />
                        <span className="hidden sm:inline">{item.badge}</span>
                        <span className="sm:hidden">Best Seller</span>
                      </div>
                    </div>
                  )}
                  <Image
                    src={item.bookCover}
                    alt={`Book cover by ${item.author}`}
                    fill
                    className="object-contain p-4 group-hover/slide:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                    quality={85}
                  />
                </div>

                {/* Fixed height content area */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col sm:h-[260px] lg:h-[280px]">
                  {/* Quote with fixed height and overflow handling */}
                  <blockquote className="text-sm sm:text-base lg:text-lg font-semibold text-zinc-800 leading-snug mb-4 flex-1 line-clamp-6 overflow-hidden">
                    &quot;{item.quote}&quot;
                  </blockquote>

                  {/* Author info at bottom */}
                  <div className="flex items-center gap-3 pt-4 mt-auto border-t border-zinc-100">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0 ${item.color}`}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm sm:text-base text-zinc-900 truncate">
                        {item.author}
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-500 font-medium truncate">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-btn absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-brand backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl border-2 border-brand hover:border-white hover:bg-white transition-all duration-300 z-[999] flex items-center justify-center cursor-pointer">
          <ChevronLeft className="nav-icon-prev w-5 h-5 sm:w-7 sm:h-7 text-white pointer-events-none" strokeWidth={2.5} />
        </button>
        <button className="custom-next-btn absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-brand backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl border-2 border-brand hover:border-white hover:bg-white transition-all duration-300 z-[999] flex items-center justify-center cursor-pointer">
          <ChevronRight className="nav-icon-next w-5 h-5 sm:w-7 sm:h-7 text-white pointer-events-none" strokeWidth={2.5} />
        </button>
      </div>
      <style jsx global>{`
        .custom-prev-btn .nav-icon-prev,
        .custom-next-btn .nav-icon-next {
          color: white !important;
          stroke: white !important;
        }

        .custom-prev-btn:hover .nav-icon-prev,
        .custom-next-btn:hover .nav-icon-next {
          color: #ff6b35 !important;
          stroke: #ff6b35 !important;
        }
      `}</style>
    </section>
  );
}
