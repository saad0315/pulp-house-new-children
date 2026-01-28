"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";

export default function MadeInUSA() {
  const { openModal } = useModal();

  return (
    <section className="bg-zinc-50 py-24 px-6 lg:px-12 relative overflow-hidden border-b border-zinc-200">
      {/* Absolute USA Flag - Top Left */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <div className="relative w-12 h-8 md:w-16 md:h-10 shadow-md rounded-sm overflow-hidden border border-white/20">
          <Image src="/usa-flag.webp" alt="USA Flag" fill className="object-cover" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header Section (Reverted to Center) */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Federal & State Verified
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-zinc-900 mb-6 leading-tight"
          >
            Proudly Made in the <span className="text-blue-700">USA</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto font-medium"
          >
            We don&apos;t outsource your legacy. Every editor, designer, and strategist is based right here in the United States, ensuring the highest quality standards and legal protection for your work.
          </motion.p>
        </div>

        {/* Bento Grid for Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px] mb-16">
          
          {/* Item 1: IBPA (Featured) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-full min-h-[200px] grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image 
                 src="/idpa-img.webp" 
                 alt="IBPA Member" 
                 fill 
                 className="object-contain"
               />
            </div>
            <p className="mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Verified Industry Leader</p>
          </motion.div>

          {/* Item 2: DBA (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-full min-h-[120px] grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image 
                 src="/DBA.webp" 
                 alt="State of Texas DBA" 
                 fill 
                 className="object-contain"
               />
            </div>
          </motion.div>

          {/* Item 3: DUNS (Square) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-full min-h-[100px] grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image 
                 src="/duns.webp" 
                 alt="D-U-N-S" 
                 fill 
                 className="object-contain"
               />
            </div>
          </motion.div>

          {/* Item 4: Certificate (Square) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 flex items-center justify-center border border-zinc-200 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-full min-h-[100px] grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image 
                 src="/certificate.webp" 
                 alt="Amazon Certificate" 
                 fill 
                 className="object-contain"
               />
            </div>
          </motion.div>

        </div>

        {/* Action Buttons */}
        <motion.div 
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
            variant="outline" 
            size="xl" 
            className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-300 px-12"
            onClick={() => window.location.href = 'tel:+15550000000'}
          >
            <Phone className="mr-2 w-5 h-5" /> Speak to an Expert
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
