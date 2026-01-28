"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Landmark, Globe2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: "ibpa",
    title: "Independent Book Publishers Association",
    label: "Proud Member",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    description: "Adhering to the highest standards of independent publishing ethics and quality.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    id: "amazon",
    title: "Amazon KDP Partner",
    label: "Authorized Network",
    icon: <Globe2 className="w-8 h-8 text-brand" />,
    description: "Official partner for global Kindle and paperback distribution.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    id: "state",
    title: "Registered Business Entity",
    label: "State of Texas",
    icon: <Landmark className="w-8 h-8 text-zinc-700" />,
    description: "Fully compliant, legally registered LLC. Operating under US Law.",
    color: "bg-zinc-100 border-zinc-200",
  },
  {
    id: "duns",
    title: "D-U-N-S® Registered",
    label: "Verified Credibility",
    icon: <FileCheck className="w-8 h-8 text-indigo-600" />,
    description: "Dun & Bradstreet verified business profile for maximum transparency.",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    id: "copyright",
    title: "US Copyright Office",
    label: "IP Protection Compliant",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    description: "We ensure every manuscript is legally protected before publication.",
    color: "bg-green-50 border-green-100",
  },
  {
    id: "ingram",
    title: "IngramSpark Certified",
    label: "Global Distribution",
    icon: <CheckCircle2 className="w-8 h-8 text-red-500" />,
    description: "Direct access to 40,000+ libraries and retailers worldwide.",
    color: "bg-red-50 border-red-100",
  },
];

export default function TrustCertifications() {
  return (
    <section className="bg-zinc-50 py-24 px-6 lg:px-12 border-t border-zinc-200">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest mb-4 border border-green-200"
          >
            <ShieldCheck className="w-3 h-3" />
            100% Verified & Secure
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            We&apos;re Not Just Claiming It — We&apos;re Certified.
          </h2>
          <p className="text-zinc-500 font-medium text-lg">
            Officially registered, verified, and partnered with industry-leading organizations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Top: Icon/Image Area */}
              <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner", cert.color)}>
                {cert.icon}
              </div>

              {/* Middle: Title & Label */}
              <h3 className="text-lg font-bold text-black mb-1 leading-tight group-hover:text-black/80 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                {cert.label}
              </p>

              {/* Bottom: Context (appears/emphasized on hover for desktop, visible on mobile) */}
              <div className="mt-auto pt-4 border-t border-zinc-100 w-full">
                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified Badge (Absolute) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 opacity-60">
           <div className="flex items-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple text placeholders for 'bank-like' trust */}
              <span className="font-serif font-bold text-zinc-400 text-xl">Chase Business</span>
              <span className="font-serif font-bold text-zinc-400 text-xl">Stripe Verified</span>
              <span className="font-serif font-bold text-zinc-400 text-xl">SSL Secure</span>
           </div>
           <p className="text-xs text-zinc-400 uppercase tracking-widest">Bank-Grade Security & Compliance</p>
        </div>
      </div>
    </section>
  );
}
