"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const items = [
  { src: "/DBA.webp", alt: "IBPA Member", label: "Verified Industry Leader", isWide: false },
  { src: "/idpa-img.webp", alt: "State of Texas DBA", label: null, isWide: true },
  { src: "/duns.webp", alt: "D-U-N-S", label: null, isWide: false, link: "https://www.dnb.com/business-directory/company-profiles.ka_publishing_solutions_llc.8ded2e58b9f5e0379f16b1e2c283897c.html" },
  { src: "/certificate.webp", alt: "Amazon Certificate", label: null, isWide: false },
];

export default function MadeInUSA() {
  const { openModal } = useModal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveSlide(index);
    }
  };

  return (
    <section className="bg-white py-12 px-6 lg:px-12 relative overflow-hidden border-b border-zinc-200">
      {/* Absolute USA Flag - Top Left */}
      <div className="absolute top-0 left-0">
        <div className="relative w-72 h-28 md:w-2xl md:h-100  overflow-hidden">
          <Image src="/usa-flag.webp" alt="USA Flag" fill className="object-cover" sizes="(max-width: 768px) 300px, 672px" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header Section (Reverted to Center) */}
        <div className="text-center mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Federal & State Verified
          </m.div>
          
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-zinc-900 mb-6 leading-tight"
          >
            Proudly Made in the <span className="text-brand">USA</span>
          </m.h2>
          
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto font-medium"
          >
            We handle everything in-house, with top-tier editors, designers, and strategists based in the USA,
ensuring the highest quality and full legal protection for your work.
          </m.p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px] mb-16">
          
          {/* Item 1: IBPA (Featured) */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage("/DBA.webp")}
            className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-full min-h-[200px] group-hover:grayscale transition-all duration-500">
               <Image 
                 src="/DBA.webp" 
                 alt="IBPA Member" 
                 fill 
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
               />
            </div>
            <p className="mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Verified Industry Leader</p>
          </m.div>

          {/* Item 2: DBA (Wide) */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => setSelectedImage("/idpa-img.webp")}
            className="md:col-span-2 bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-full min-h-[120px] group-hover:grayscale transition-all duration-500">
               <Image 
                 src="/idpa-img.webp" 
                 alt="State of Texas DBA" 
                 fill 
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
               />
            </div>
          </m.div>

          {/* Item 3: DUNS (Square) - HAS LINK, KEEP AS IS */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <Link target="_blank" href="https://www.dnb.com/business-directory/company-profiles.ka_publishing_solutions_llc.8ded2e58b9f5e0379f16b1e2c283897c.html" className="relative w-full h-full min-h-[100px] group-hover:grayscale transition-all duration-500">
               <Image 
                 src="/duns.webp" 
                 alt="D-U-N-S" 
                 fill 
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
               />
            </Link>
          </m.div>

          {/* Item 4: Certificate (Square) */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setSelectedImage("/certificate.webp")}
            className="bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-full min-h-[100px] group-hover:grayscale transition-all duration-500">
               <Image 
                 src="/certificate.webp" 
                 alt="Amazon Certificate" 
                 fill 
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
               />
            </div>
          </m.div>

        </div>

        {/* Mobile Slider Layout */}
        <div className="block md:hidden mb-16 relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => !item.link && setSelectedImage(item.src)}
                className={`min-w-full snap-center bg-white rounded-3xl p-8 flex flex-col items-center justify-center border border-zinc-200 shadow-sm h-[300px] ${!item.link ? 'cursor-pointer' : ''}`}
              >
                {item.link ? (
                  <Link href={item.link} target="_blank" className="relative w-full h-full max-h-[180px]">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  </Link>
                ) : (
                  <div className="relative w-full h-full max-h-[180px]">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  </div>
                )}
                {item.label && (
                   <p className="mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{item.label}</p>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: idx * scrollRef.current.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? "w-6 bg-brand" : "w-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            variant="vibrant" 
            size="xl" 
            onClick={openModal}
            className="w-full sm:w-auto px-12"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="black" 
            size="xl" 
            className="w-full sm:w-auto  px-12"
            onClick={() => window.location.href = 'tel:+18889080775'}
          >
            <Phone className="mr-2 w-5 h-5" /> Speak to an Expert
          </Button>
        </m.div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              <div className="relative w-full h-full p-8 md:p-12">
                <Image
                  src={selectedImage}
                  alt="Expanded view"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
