"use client";

import { m } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/badge";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoTestimonials = [
  {
    id: 1,
    videoUrl: "https://video.thepulphousepublishing.com/WhatsApp%20Video%202025-11-20%20at%206.02.06%20PM.webm",
  },
  {
    id: 2,
    videoUrl: "https://video.thepulphousepublishing.com/testi-01.webm",
  },
  {
    id: 3,
    videoUrl: "https://video.thepulphousepublishing.com/testi-02.webm",
  },
  {
    id: 4,
    videoUrl: "https://video.thepulphousepublishing.com/home-video.webm",
  },
];

const VideoCard = ({ url }: { url: string }) => {
  return (
    <div className="flex justify-center h-full !py-0">
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-black rounded-[2rem] overflow-hidden shadow-2xl h-full group/card flex flex-col transition-all duration-500 border border-zinc-100/10 w-full max-w-[260px]"
      >
        <div className="relative aspect-[9/16] bg-zinc-900 overflow-hidden">
          <video
            src={url}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </m.div>
    </div>
  );
};

export default function VideoTestimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <Badge icon={Star} text="Watch Success Stories" />

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-6 sm:mb-10"
        >
          Real Stories. <span className="text-brand">Real Inspiration.</span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl lg:text-2xl text-zinc-600 font-medium max-w-4xl mx-auto"
        >
          We&apos;ve helped hundreds of authors achieve their publishing dreams. 
          Watch their journeys and see why we are the top choice for children&apos;s book publishing.
        </m.p>
      </div>

      <div className="relative w-full group">
        <div className="container mx-auto px-4 sm:px-6">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".video-next-btn",
              prevEl: ".video-prev-btn",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-brand",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 32,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
            }}
            centeredSlides={true}
            className="!pb-20 !px-4"
          >
            {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
                <VideoCard url={item.videoUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons */}
        <button className="video-prev-btn absolute left-4 lg:left-12 top-[50%] -translate-y-1/2 w-16 h-16 bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-all duration-300 z-10 hidden xl:flex group/btn">
          <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button className="video-next-btn absolute right-4 lg:right-12 top-[50%] -translate-y-1/2 w-16 h-16 bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-all duration-300 z-10 hidden xl:flex group/btn">
          <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e2e8f0;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ff6b35 !important;
          width: 40px;
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
}
