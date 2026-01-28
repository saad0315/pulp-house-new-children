"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";
import { FileText, Palette, Globe, Rocket, ArrowDown, Clock } from "lucide-react";

const phases = [
  {
    icon: FileText,
    title: "Editorial Deep Dive",
    subtitle: "Structural & Line Editing",
    duration: "21 Days",
    outcome: "Manuscript Finalized",
    description: "Our editors perform structural and line editing to ensure your story flows perfectly and resonates with your target audience.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    subtitle: "Cover & Interior Design",
    duration: "14 Days",
    outcome: "Print-Ready Files",
    description: "While the final copy-edit happens, our design team creates your custom cover and interior layout for all formats.",
  },
  {
    icon: Globe,
    title: "Digital Optimization",
    subtitle: "Metadata & Distribution",
    duration: "25 Days",
    outcome: "Global Retailer Lock",
    description: "We build your Amazon presence, optimize keywords, and set up your global distribution network through 40,000+ retailers.",
  },
  {
    icon: Rocket,
    title: "Launch & Dominance",
    subtitle: "Marketing Activation",
    duration: "30 Days",
    outcome: "Published & Selling",
    description: "The official launch phase. We trigger our proprietary marketing sequence to climb the category rankings on day one.",
  },
];

export default function Timeline() {
  const { openModal } = useModal();

  return (
    <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zinc-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 font-bold uppercase tracking-widest text-xs mb-6"
          >
            <Clock className="w-3 h-3" />
            Speed & Precision
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-black mb-6"
          >
            The 90-Day <span className="text-brand">Validator</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Publishing isn&apos;t a black box. It&apos;s a precise 4-phase machine designed to turn your manuscript into a market leader.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 -translate-x-1/2 hidden md:block" />
          {/* Central Line (Mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 -translate-x-1/2 block md:hidden" />
          
          <div className="space-y-16 lg:space-y-0">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full pl-20 md:pl-0 md:w-1/2">
                    <div className={`
                      group relative bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/50 
                      hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300
                      ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}
                    `}>
                      {/* Floating Number Background */}
                      <div className={`
                        absolute -top-6 text-[120px] font-black text-zinc-50 opacity-50 select-none z-0 leading-none
                        ${index % 2 === 0 ? "lg:right-4 right-4" : "lg:left-4 right-4"}
                      `}>
                        {index + 1}
                      </div>

                      <div className="relative z-10">
                        {/* Header */}
                        <div className={`flex flex-col gap-2 mb-6 ${
                          index % 2 === 0 ? "lg:items-start" : "lg:items-end"
                        }`}>
                          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-1">
                             {phase.duration}
                          </span>
                          <h3 className="text-2xl font-black text-black leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-sm font-bold text-zinc-400 uppercase tracking-tight">
                            {phase.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-600 mb-8 leading-relaxed font-medium">
                          {phase.description}
                        </p>

                        {/* Outcome Box */}
                        <div className={`flex items-center gap-3 ${
                           index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                        }`}>
                          <div className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            {phase.outcome}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-zinc-100 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-zinc-800" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Empty space for alignment on Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Total Time Summary */}
        <div className="mt-24 lg:mt-32 relative text-center">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="inline-flex flex-col items-center justify-center"
           >
              <div className="w-px h-16 bg-gradient-to-b from-zinc-300 to-black mb-8 mx-auto" />
              
              <div className="relative bg-surface-black text-white p-10 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-surface-dark to-black z-0" />
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand/20 blur-[50px] rounded-full group-hover:bg-brand/30 transition-colors" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-2">
                       <span className="text-6xl lg:text-7xl font-black text-brand tracking-tighter">90</span>
                       <span className="text-2xl font-bold uppercase tracking-widest text-muted-foreground">Days</span>
                    </div>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                       From Manuscript to Bestseller
                    </p>
                    <Button 
                      variant="vibrant" 
                      size="lg" 
                      className="mt-6 w-full md:w-auto min-w-[200px]"
                      onClick={openModal}
                    >
                      Start Your Timeline <ArrowDown className="ml-2 w-4 h-4" />
                    </Button>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}