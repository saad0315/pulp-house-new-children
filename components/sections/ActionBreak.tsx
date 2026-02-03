"use client";

import { m } from "framer-motion";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

interface ActionBreakProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  variant?: "dark" | "light";
}

export default function ActionBreak({ headline, subheadline, buttonText, variant = "light" }: ActionBreakProps) {
  const { openModal } = useModal();

  const isDark = variant === "dark";

  return (
    <section className={`py-12 ${isDark ? "bg-zinc-900 text-white" : "bg-orange-50 text-zinc-900"}`}>
      <div className="container mx-auto px-6 text-center">
        <m.div
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <Button
              onClick={openModal}
              variant={isDark ? "secondary" : "vibrant"}
              size="xl"
              className="w-full sm:w-auto px-10"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              onClick={() => window.location.href = 'tel:8889080775'}
              variant="vibrant"
              size="xl"
              className="w-full sm:w-auto px-10 bg-brand text-white border-none shadow-lg shadow-brand/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              888 908-0775
            </Button>
          </div>
        </m.div>
      </div>
    </section>
  );
}
