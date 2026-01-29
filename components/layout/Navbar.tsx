"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { m, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-zinc-200/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Main Logo */}
          <Link href="/" className="relative block hover:opacity-90 transition-opacity">
            <div className="relative w-32 h-10 md:w-48 md:h-12">
               <Image 
                 src="/logo.webp" 
                 alt="The Pulp House" 
                 fill
                 className="object-contain object-left"
                 priority
                 sizes="(max-width: 768px) 128px, 160px"
               />
            </div>
          </Link>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-zinc-200" />

          {/* BBB Badge - Trust Signal */}
          <Link 
            href="#" // User to replace with actual BBB link
            target="_blank"
            className="hidden md:block relative group hover:opacity-100 transition-all duration-300 opacity-90"
          >
             <div className="relative w-24 h-10 overflow-hidden rounded-md bg-white/50">
               <Image 
                 src="/bbbBadge.webp" 
                 alt="BBB A+ Rating" 
                 fill
                 className="object-contain object-left mix-blend-multiply w-56 h-8"
                //  sizes="120px"
               />
               {/* Shine effect on hover */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
             </div>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* BBB Badge - Mobile Only */}
          <div className="block md:hidden relative w-16 h-8">
            <Image 
                 src="/bbbBadge.webp" 
                 alt="BBB" 
                 fill
                 className="object-contain object-right"
                 sizes="64px"
               />
          </div>

          {/* Live Chat - Desktop */}
                      <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              size="lg" 
              className={cn(
                "hidden lg:flex items-center gap-2 font-medium text-zinc-600 hover:text-black hover:bg-zinc-100/50 rounded-full",
                "h-11 md:h-12 px-5" // Matching height to Phone button
              )}
            >
              <div className="relative">
                <MessageCircle className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
              </div>
              Live Chat
            </Button>
          </m.div>

          {/* Phone Button - Tablet & Desktop Only */}
          <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden md:block">
            <Button 
              size="lg" 
              className={cn(
                "relative group overflow-hidden rounded-full font-bold shadow-lg hover:shadow-orange-500/20 transition-all duration-300",
                "bg-black text-white hover:bg-zinc-900",
                "pl-4 pr-5 h-11 md:h-12"
              )}
              onClick={() => window.location.href = 'tel:+15550000000'}
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="hidden sm:inline">+1 (555) 000-0000</span>
                <span className="sm:hidden">Call Now</span>
              </div>
            </Button>
          </m.div>
        </div>
      </div>
    </m.header>
  );
}
