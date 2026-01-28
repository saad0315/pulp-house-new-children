"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "Who owns the illustrations?",
    answer: "You do. 100%. Unlike other agencies that hold your rights hostage, we provide full transfer of copyright and all source files upon completion. You are the sole owner of your work."
  },
  {
    question: "Do you take any sales commission?",
    answer: "Zero. We are a service provider, not a publisher. All royalties and profits from your book sales go directly to your bank account. We take 0% commission."
  },
  {
    question: "Can I speak to a human?",
    answer: "Yes. You get a dedicated Project Manager who guides you through every step. No bots, no automated runarounds. Real human support for your real book."
  },
  {
    question: "What if I don't like the illustrations?",
    answer: "We offer unlimited revisions during the sketching phase. We don't move to coloring until you are 100% satisfied with the structure and composition of every single page."
  },
  {
    question: "How long does the whole process take?",
    answer: "Our streamlined process is designed to get you published in as little as 90 days. We work efficiently without compromising quality to help you hit the market fast."
  }
];

export default function KillerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold uppercase tracking-wider mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Clear Answers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6"
          >
            Your Questions, <span className="text-zinc-400">Answered.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-medium"
          >
            No hidden clauses. No fine print. Just the truth.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50 hover:bg-white hover:border-zinc-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-zinc-900 pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 p-2 rounded-full ${openIndex === index ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-zinc-600 font-medium leading-relaxed border-t border-zinc-100/50">
                      <div className="pt-4 flex gap-3">
                         <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                         <span>{faq.answer}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
