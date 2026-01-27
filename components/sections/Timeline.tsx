"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

const phases = [
// ... (phases data remains unchanged)
  {
    title: "Phase 1: Editorial Deep Dive",
    duration: "21 Days",
    outcome: "Manuscript Finalized",
    description: "Our editors perform structural and line editing to ensure your story flows perfectly and resonates with your target audience.",
  },
  {
    title: "Phase 2: Visual Identity & Design",
    duration: "14 Days",
    outcome: "Print-Ready Files",
    description: "While the final copy-edit happens, our design team creates your custom cover and interior layout for all formats.",
  },
  {
    title: "Phase 3: Digital Optimization",
    duration: "25 Days",
    outcome: "Metadata & SEO Lock",
    description: "We build your Amazon presence, optimize keywords, and set up your global distribution network through 40,000+ retailers.",
  },
  {
    title: "Phase 4: Launch & Dominance",
    duration: "30 Days",
    outcome: "Published & Selling",
    description: "The official launch phase. We trigger our proprietary marketing sequence to climb the category rankings on day one.",
  },
];

export default function Timeline() {
  const { openModal } = useModal();

  return (
    <section className="bg-zinc-50 py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">The 90-Day Validator</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
            Publishing isn&apos;t a black box. It&apos;s a precise 4-phase machine designed for speed and quality.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className={`p-8 bg-white rounded-3xl shadow-sm border border-zinc-100 ${
                    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}>
                    <div className="flex items-center gap-3 mb-2 justify-start lg:justify-end flex-row-reverse lg:flex-row">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                        {phase.duration}
                      </span>
                      <h3 className="text-2xl font-black text-black">{phase.title}</h3>
                    </div>
                    <p className="text-zinc-600 mb-6 text-lg">{phase.description}</p>
                    <div className={`flex items-center gap-2 font-bold text-black uppercase tracking-tighter text-sm ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}>
                      <span className="text-zinc-400">Outcome:</span>
                      <span className="px-2 py-0.5 bg-zinc-900 text-white rounded">{phase.outcome}</span>
                    </div>
                  </div>
                </div>

                {/* Dot on line */}
                <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-white border-4 border-orange-500 rounded-full -translate-x-1/2 z-10 hidden lg:block" />

                {/* Empty space for alignment */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
           <div className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <span className="text-3xl font-black text-orange-500">90</span>
              <div className="text-left">
                 <p className="font-black leading-none uppercase tracking-widest text-sm">Days Total</p>
                 <p className="text-zinc-400 text-xs uppercase tracking-tight">From Approval to Publication</p>
              </div>
           </div>
           <Button variant="primary" size="lg" onClick={openModal}>
             See If You Qualify
           </Button>
        </div>
      </div>
    </section>
  );
}
