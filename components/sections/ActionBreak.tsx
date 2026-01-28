"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionBreakProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  variant?: "dark" | "light";
}

export default function ActionBreak({ headline, subheadline, buttonText, variant = "light" }: ActionBreakProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById("conversion-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = variant === "dark";

  return (
    <section className={`py-20 ${isDark ? "bg-zinc-900 text-white" : "bg-orange-50 text-zinc-900"}`}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          {isDark ? (
             <Sparkles className="w-12 h-12 text-brand" />
          ) : (
             <div className="w-16 h-1 bg-brand rounded-full" />
          )}

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            {headline}
          </h2>
          
          <p className={`text-xl md:text-2xl font-medium max-w-2xl ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            {subheadline}
          </p>

          <Button
            onClick={scrollToForm}
            variant={isDark ? "secondary" : "vibrant"}
            size="lg"
            className="mt-4"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
