"use client";

import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function ThankYouPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-50 p-12 rounded-[3rem] shadow-xl border border-zinc-100"
          >
            <div className="flex justify-center mb-8">
              <m.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-lg shadow-green-100"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </m.div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black mb-6 text-black tracking-tight">
              Request Received!
            </h1>
            
            <p className="text-zinc-600 text-xl mb-10 leading-relaxed font-medium">
              Thank you for taking the first step towards your legacy. Our publishing director will review your details and reach out within 24 hours to schedule your strategy call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="vibrant" size="xl" className="w-full sm:w-auto px-10">
                  Return to Home
                </Button>
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </main>
  );
}
