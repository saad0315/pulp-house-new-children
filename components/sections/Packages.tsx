"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const packages = [
  {
    name: "Standard Package",
    price: "$2,500",
    description: "Perfect for first-time authors looking to get published.",
    highlight: false,
    features: [
      {
        category: "Preparing Your Manuscript",
        items: [
          "Basic Editing",
          "Layout Adjustment",
          "Basic Formatting",
          "Publishing Standard Formatting",
          "3 Revisions Per Draft",
        ],
      },
      {
        category: "Preparing Your Illustrations",
        items: [
          "Mid-Level Illustrator (2 Years of Experience)",
          "(10) Illustrations",
          "Graphic + 2D Illustrations",
        ],
      },
      {
        category: "Designing Your Cover",
        items: [
          "Basic Cover Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode",
        ],
      },
      {
        category: "Book Publication",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Publishing on Amazon KDP",
          "Publishing on Barnes & Noble",
          "eBook Format",
          "Paperback Format",
        ],
      },
    ],
  },
  {
    name: "Local Publication Bundle",
    price: "$3,500",
    description:
      "Our most popular choice for serious authors targeting local markets.",
    highlight: true,
    badge: "Most Popular",
    features: [
      {
        category: "Preparing Your Illustrations",
        items: [
          "Senior-Level Illustrator (4 Years of Experience)",
          "Graphic + 2D Illustrations",
          "Hand-drawn + 3D Illustrations",
          "(15) Illustrations",
        ],
      },
      {
        category: "Preparing Your Manuscript",
        items: [
          "Professional Editing",
          "Layout Adjustment",
          "Professional Formatting",
          "Publishing Standard Formatting",
          "Professional Table of Content",
          "5 Revisions Per Draft",
        ],
      },

      {
        category: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode",
        ],
      },
      {
        category: "Book Publication",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Local Distribution (over 10,000+ Platforms)",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
    ],
  },
  {
    name: "Global Publication Bundle",
    price: "$4,500",
    description: "The ultimate package for authors aiming for worldwide reach.",
    highlight: false,
    features: [
      {
        category: "Preparing Your Illustrations",
        items: [
          "Senior-Level Illustrator (6 Years of Experience)",
          "Graphic + 2D Illustrations",
          "Hand-drawn + 3D Illustrations",
          "Illustrations (for the complete book)",
        ],
      },
      {
        category: "Preparing Your Manuscript",
        items: [
          "Expert Editing",
          "Layout Adjustment",
          "Detailed Table of Content",
          "Expert Formatting",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        category: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2x)",
        ],
      },
      {
        category: "Book Publication",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Global Distribution (over 40,000+ Platforms)",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
    ],
  },
];

export default function Packages() {
  const { openModal } = useModal();

  return (
    <section className="py-10 bg-zinc-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand/10 border border-brand/20">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">
              Our Packages
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
            Choose Your Path to Publishing
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium">
            Transparent pricing, no hidden fees. Select the package that fits
            your goals and let us handle the rest.
          </p>
        </div>

        <div className="relative group px-4 md:px-0">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                allowTouchMove: false, // Disable swipe on desktop to act like grid
              },
            }}
            className="!overflow-visible"
          >
            {packages.map((pkg, index) => (
              <SwiperSlide key={index} className="h-auto">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={cn(
                    "relative flex flex-col p-5 md:p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl bg-white",
                    "h-[500px] md:h-[550px] w-full",
                    pkg.highlight
                      ? "border-brand shadow-2xl scale-100 lg:scale-105 z-10 ring-4 ring-brand/10"
                      : "border-zinc-200 shadow-sm hover:border-brand/30",
                  )}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1.5 md:py-2 bg-brand text-white text-[10px] md:text-sm font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand/20 whitespace-nowrap z-20">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-black mb-2 ">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-zinc-500 font-medium text-sm md:text-base">
                        /project
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="flex-grow space-y-6 md:space-y-8 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-brand [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-zinc-100 [&::-webkit-scrollbar-track]:rounded-full">
                    {pkg.features.map((featureCategory, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs md:text-sm font-bold text-black uppercase tracking-wider mb-3 md:mb-4 border-b border-zinc-100 pb-2">
                          {featureCategory.category}
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                          {featureCategory.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-3"
                            >
                              <div
                                className={cn(
                                  "mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center",
                                  pkg.highlight
                                    ? "bg-brand/10 text-brand"
                                    : "bg-zinc-100 text-zinc-500",
                                )}
                              >
                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 stroke-[3]" />
                              </div>
                              <span className="text-xs md:text-sm text-zinc-600 font-medium leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 border-t border-zinc-100">
                    <Button
                      variant={pkg.highlight ? "brand" : "primary"}
                      className="w-full text-sm md:text-base py-5 md:py-6 shadow-none"
                      size="lg"
                      onClick={openModal}
                    >
                      Get Started
                    </Button>
                  </div>
                </m.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons (Visible on Mobile/Tablet only) */}
          <div className="lg:hidden">
            <button className="swiper-button-prev-custom absolute top-1/2 -left-2 md:-left-6 z-30 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand rounded-full shadow-lg flex items-center justify-center text-white hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="swiper-button-next-custom absolute top-1/2 -right-2 md:-right-6 z-30 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand rounded-full shadow-lg flex items-center justify-center text-white hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm font-medium">
            Need a custom solution? Speak with an expert:{" "}
            <a
              href="tel:8889080775"
              className="text-brand font-bold underline underline-offset-4 decoration-brand/30 hover:decoration-brand transition-all"
            >
              888 908-0775
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
