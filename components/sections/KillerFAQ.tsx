"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "Do you help authors publish on Amazon KDP?",
    answer: "Yes. We handle full Amazon KDP setup, upload, and approval."
  },
  {
    question: "Can you help if my book isn’t complete?",
    answer: "Yes. We help finalize missing sections before publishing."
  },
  {
    question: "Do you work with fiction and fantasy books?",
    answer: "Yes. We specialize in fiction, fantasy, and allegorical stories."
  },
  {
    question: "How many pages or word count do you support?",
    answer: "All lengths — including books around 200 pages or more."
  },
  {
    question: "Can you help with book series publishing?",
    answer: "Yes. We publish single books and multi-book series."
  },
  {
    question: "Do you offer editing and proofreading?",
    answer: "Yes. Professional editing and proofreading are available."
  },
  {
    question: "Do you design book covers for Amazon KDP?",
    answer: "Yes. We design Amazon-ready, genre-specific covers."
  },
  {
    question: "Will my book be formatted correctly?",
    answer: "Yes. We format for paperback, hardcover, and eBook."
  },
  {
    question: "Do you provide ISBNs?",
    answer: "Yes. We assist with ISBN setup and registration."
  },
  {
    question: "Will I get support during publishing?",
    answer: "Yes. A dedicated project manager guides you throughout."
  }
];

export default function KillerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold uppercase tracking-wider mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Clear Answers</span>
          </m.div>
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6"
          >
            Your Questions, <span className="text-zinc-400">Answered.</span>
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-medium"
          >
            No hidden clauses. No fine print. Just the truth.
          </m.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <m.div
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
                  <m.div
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
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
