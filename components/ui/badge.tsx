"use client";

import { m } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: LucideIcon;
  text: string;
  className?: string;
  variant?: "brand" | "zinc" | "white";
}

export default function Badge({ icon: Icon, text, className, variant = "brand" }: BadgeProps) {
  const variants = {
    brand: "bg-brand/10 text-brand border-brand/10",
    zinc: "bg-zinc-100 text-zinc-600 border-zinc-200",
    white: "bg-white/10 text-white border-white/20 backdrop-blur-sm",
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm",
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 fill-current opacity-80" />}
      <span>{text}</span>
    </m.div>
  );
}
