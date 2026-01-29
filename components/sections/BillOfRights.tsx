"use client";

import { ShieldCheck, Lock, Scale, FileText } from "lucide-react";

const rights = [
  {
    icon: <Lock className="w-6 h-6 text-black" />,
    title: "100% Intellectual Property",
    statement: "You retain all copyrights and creative control. We are your service provider, not your master.",
    isNo: false,
  },
  {
    icon: <Scale className="w-6 h-6 text-black" />,
    title: "Zero Royalty Sharing",
    statement: "Every cent of profit from every sale goes directly into your bank account. We take 0%.",
    isNo: false,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-black" />,
    title: "No Predatory Contracts",
    statement: "No 'first right of refusal' on future books. No hidden multi-year exclusivity clauses.",
    isNo: true,
  },
  {
    icon: <FileText className="w-6 h-6 text-black" />,
    title: "Full Source Access",
    statement: "You receive all raw production files, including cover PSDs and interior source files. You own the assets.",
    isNo: false,
  },
];

export default function BillOfRights() {
  return (
    <section className="bg-white py-12 px-6 lg:px-12 border-t border-zinc-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="p-3 bg-zinc-100 rounded-2xl mb-6">
            <ShieldCheck className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6 italic">The Author&apos;s Bill of Rights</h2>
          <p className="text-xl text-zinc-600 max-w-2xl font-medium">
            Most publishing contracts are designed to trap you. Ours is designed to liberate you. 
            This is our legal commitment to every author we represent.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {rights.map((right, index) => (
            <div key={index} className="min-w-[85vw] snap-center p-8 border border-zinc-200 rounded-3xl hover:border-black transition-colors duration-500 bg-zinc-50/50 md:min-w-0">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  {right.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{right.title}</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed italic font-serif">
                    {right.statement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-950 rounded-[2.5rem] text-center">
           <p className="text-white font-black text-xl mb-2">Total Control. Absolute Transparency.</p>
           <p className="text-zinc-400 text-sm uppercase tracking-[0.2em]">Validated by 200+ Published Authors</p>
        </div>
      </div>
    </section>
  );
}
