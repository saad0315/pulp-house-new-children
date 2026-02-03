"use client";

import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";
import {
  FileText,
  Palette,
  Globe,
  Rocket,
  ArrowDown,
  Clock,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { useRef } from "react";
import Badge from "@/components/ui/badge";

const phases = [
  {
    icon: FileText,
    title: "Editorial Deep Dive",
    subtitle: "Structural & Line Editing",
    duration: "21 Days",
    outcome: "Manuscript Finalized",
    description:
      "Our editors perform structural and line editing to ensure your story flows perfectly and resonates with your target audience.",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    subtitle: "Cover & Interior Design",
    duration: "14 Days",
    outcome: "Print-Ready Files",
    description:
      "While the final copy-edit happens, our design team creates your custom cover and interior layout for all formats.",
    color: "bg-purple-500",
  },
  {
    icon: Globe,
    title: "Digital Optimization",
    subtitle: "Metadata & Distribution",
    duration: "25 Days",
    outcome: "Global Retailer Lock",
    description:
      "We build your Amazon presence, optimize keywords, and set up your global distribution network through 40,000+ retailers.",
    color: "bg-amber-500",
  },
  {
    icon: Rocket,
    title: "Launch & Dominance",
    subtitle: "Marketing Activation",
    duration: "30 Days",
    outcome: "Published & Selling",
    description:
      "The official launch phase. We trigger our proprietary marketing sequence to climb the category rankings on day one.",
    color: "bg-emerald-500",
  },
];

export default function Timeline() {
  const { openModal } = useModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="bg-zinc-50 py-5 relative">
      {/* Background Decor */}
      <div className="absolute top-22 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-zinc-100 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          {/* LEFT COLUMN: Sticky Content & Visual */}
          <div className="lg:w-5/12 xl:w-5/12 lg:h-screen lg:sticky lg:top-10 flex flex-col justify-center py-12 lg:py-0">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <Badge icon={Clock} text="Speed & Precision" variant="zinc" />
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-black leading-tight">
                  The 90-Day <span className="text-brand">Launch Machine</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-muted-foreground font-medium leading-relaxed lg:max-w-sm xl:max-w-md">
                  Publishing is a 4-phase system that turns your manuscript into
                  a market leader.

                  <br />With our 90-Day Validator, we ensure every
                  phase propels your book closer to global dominance, starting
                  from day 1.
                </p>
              </div>

              {/* Progress Visual */}
              <div className="relative pl-8 pt-4 hidden lg:block">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-100" />
                <m.div
                  style={{ scaleY, transformOrigin: "top" }}
                  className="absolute left-3 top-2 bottom-2 w-0.5 bg-brand"
                />

                <div className="space-y-12">
                  {phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="relative flex items-center gap-4 group"
                    >
                      <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-zinc-200 bg-black group-hover:border-brand transition-colors z-10" />
                      <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-800 transition-colors">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                  ))}
                  <div className="relative flex items-center gap-4 group pt-4">
                    <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-brand shadow-[0_0_0_4px_rgba(0,0,0,0.05)] z-10" />
                    <span className="text-sm font-black text-brand uppercase tracking-widest">
                      Goal Reached
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Call to Action (Optional) */}
              <div className="block lg:hidden">
                <Button onClick={openModal} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stacking Cards */}
          <div className="lg:w-7/12 xl:w-7/12 flex flex-col pb-16 lg:pb-32 pt-0 lg:pt-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="sticky w-full"
                  style={{
                    top: `calc(15vh + ${index * 30}px)`,
                    marginBottom: "40vh",
                    zIndex: index + 10,
                  }}
                >
                  <m.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-8 xl:p-10 shadow-[0_30px_100px_-10px_rgba(0,0,0,0.1)] border border-zinc-100 overflow-hidden hover:shadow-[0_40px_120px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-500"
                  >
                    {/* Decorative Number */}
                    <div className="absolute -right-2 sm:-right-4 -top-6 sm:-top-8 text-[120px] sm:text-[150px] lg:text-[140px] xl:text-[180px] font-black text-zinc-50 select-none -z-0 leading-none pointer-events-none">
                      {index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 lg:mb-6">
                        <div
                          className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 ${phase.color} bg-opacity-10 text-white`}
                        >
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-brand font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                            {phase.duration}
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-zinc-900 break-words">
                            {phase.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-zinc-600 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed mb-6 lg:mb-8">
                        {phase.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-zinc-100">
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                            Sub-Focus
                          </span>
                          <span className="text-sm sm:text-base text-zinc-800 font-semibold break-words">
                            {phase.subtitle}
                          </span>
                        </div>
                        <div className="bg-zinc-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand" />
                          <span className="whitespace-nowrap">{phase.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </div>
              );
            })}

            {/* FINAL SUMMARY CARD */}
            <div className="sticky top-[30vh] z-50 mt-[10vh] w-full">
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                className="relative bg-zinc-900 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-10 xl:p-14 shadow-2xl text-center overflow-hidden border border-zinc-800"
              >
                {/* Dynamic Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black z-0" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Glowing blobs & Decoration */}
                <m.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-32 -right-32 w-96 h-96 bg-brand/40 rounded-full blur-[100px]"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Giant Trophy Icon in Background */}
                <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] text-brand/5 rotate-12 blur-sm pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <m.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge
                      icon={Trophy}
                      text="Goal Achieved"
                      variant="brand"
                      className="mb-8 bg-brand text-white border-brand shadow-[0_0_20px_rgba(255,100,0,0.3)]"
                    />
                  </m.div>

                  <m.h3
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.4 }}
                    className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 tracking-tighter leading-none"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 drop-shadow-2xl">
                      90 Days
                    </span>
                  </m.h3>

                  <p className="text-zinc-400 text-base sm:text-lg lg:text-lg xl:text-xl max-w-sm sm:max-w-md lg:max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-4 sm:px-0">
                    From a rough manuscript to a globally distributed,
                    bestseller-ready book. Your legacy begins now.
                  </p>

                  <m.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="xl"
                      className="w-full sm:w-auto min-w-[240px] sm:min-w-[260px] bg-brand text-white hover:bg-brand/90 hover:shadow-[0_0_40px_rgba(255,100,0,0.4)] transition-all duration-300 rounded-full text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10"
                      onClick={openModal}
                    >
                      Start Your Journey
                    </Button>
                  </m.div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
