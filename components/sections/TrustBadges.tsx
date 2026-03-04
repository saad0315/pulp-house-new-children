"use client";

import { m } from "framer-motion";
import Image from "next/image";
import BBBBadge from "@public/bbbBadge.webp";
import TrustpilotLogo from "@public/trustpilot.svg";
import BarkLogo from "@public/bark.webp";

const trustBadges = [
  {
    id: "bbb",
    name: "BBB",
    image: BBBBadge,
    alt: "BBB Accredited Business A+ Rating",
    width: 120,
    height: 60,
    link: "https://www.bbb.org/central-texas/review/1000248365/",
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    image: TrustpilotLogo,
    alt: "Trustpilot 5 Stars",
    width: 140,
    height: 50,
    isSvg: true,
    link: "https://www.trustpilot.com/review/thepulphousepublishing.com",
  },
  {
    id: "reviewsio",
    name: "REVIEWS.io",
    placeholder: "REVIEWS.io",
    stars: 5,
    color: "text-orange-500",
    link: "https://www.reviews.io/company-reviews/store/thepulphousepublishing.com-KW6KpXV?MQ2YAle",
  },
  {
    id: "trustindex",
    name: "Trustindex",
    placeholder: "Trustindex",
    stars: 5,
    color: "text-blue-500",
    link: "https://www.trustindex.io/reviews/thepulphousepublishing.com",
  },
  {
    id: "google",
    name: "Google Partner",
    placeholder: "Google Partner",
    isGoogle: true,
    link: "https://www.google.com/search?sca_esv=5dca0e6f8aa8611e&sxsrf=ANbL-n4Sqf-CIFabP3hQroia3O1qBwzDBg:1771519236310&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdf9FlhlRBJtqMirw-m12kT1kVcktxOrLUvrYnzAzQJeOXMnlzfQOK2v9-ZGlLB2fYbI3Av6VPvo5jpXLovqxhmUUXvirILQiwbCKL1iCLjYEAi8ww%3D%3D&q=The+Pulp+House+Publishing+Reviews&sa=X&ved=2ahUKEwjC5qu2_-WSAxXyQaQEHYZbG3kQ0bkNegQIOxAH",
  },
  {
    id: "bark",
    name: "Bark",
    image: BarkLogo,
    alt: "Bark Logo",
    width: 120,
    height: 40,
    link: "https://www.bark.com/en/us/company/the-pulp-house-publishing/p3vlmB/",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-5 md:py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight mb-4"
          >
            Trusted & Verified Book Publishing Company
          </m.h2>
          
          <m.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-20 h-1 bg-emerald-500 mx-auto mb-8 origin-center"
          />

          <m.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We proudly support first-time and experienced authors with professional self publishing services designed to help you publish a book the right way.
          </m.p>
        </div>

        {/* Badges Container - Grid on Desktop, Scroll on Mobile */}
        <div className="flex lg:grid lg:grid-cols-6 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-hide snap-x snap-mandatory">
          {trustBadges.map((badge, index) => (
            <m.a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex-shrink-0 w-[240px] lg:w-full flex items-center justify-center p-6 bg-white border border-zinc-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[140px] hover:-translate-y-1 snap-center"
            >
              {badge.image ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={badge.image}
                    alt={badge.alt || badge.name}
                    width={badge.width}
                    height={badge.height}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  {badge.isGoogle ? (
                    <div className="flex items-center gap-2">
                       <div className="flex flex-col items-start leading-none">
                          <span className="text-[#4285F4] font-bold text-xl">G<span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>
                          <span className="text-zinc-500 text-sm font-semibold uppercase tracking-tight">Partner</span>
                       </div>
                    </div>
                  ) : (
                    <>
                      <div className="font-bold text-zinc-800 text-lg mb-1 flex items-center gap-1">
                        {badge.id === 'reviewsio' && <span className="w-5 h-5 bg-black rounded-full text-white text-[10px] flex items-center justify-center">★</span>}
                        {badge.id === 'trustindex' && <span className="w-5 h-5 bg-emerald-500 rounded-full text-white text-[10px] flex items-center justify-center">✓</span>}
                        {badge.name}
                      </div>
                      {badge.stars && (
                        <div className="flex gap-0.5">
                          {[...Array(badge.stars)].map((_, i) => (
                            <span key={i} className={`text-sm ${badge.color}`}>★</span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </m.a>
          ))}
        </div>
        
        {/* Mobile Indicator */}
        <div className="lg:hidden flex justify-center mt-2 gap-1 opacity-30">
           <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
        </div>
      </div>
    </section>
  );
}
