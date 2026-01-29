import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "vibrant" | "brand";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-black text-white hover:bg-zinc-800 shadow-lg shadow-black/10",
      secondary: "bg-zinc-100 text-black hover:bg-zinc-200",
      outline: "border border-zinc-200 bg-transparent hover:bg-zinc-100 text-black",
      vibrant: "bg-brand text-brand-foreground hover:shadow-[0_0_30px_-5px_var(--brand)] shadow-lg shadow-brand/20",
      brand: "bg-brand text-brand-foreground hover:shadow-[0_0_30px_-5px_var(--brand)] shadow-lg shadow-brand/20",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs !font-normal uppercase tracking-wider",
      md: "h-11 px-6 text-sm !font-normal uppercase tracking-wider",
      lg: "h-14 px-8 text-base !font-normal uppercase tracking-wide",
      xl: "h-16 px-10 text-lg !font-normal font-black uppercase tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-[0.94] hover:scale-[1.05] hover:-translate-y-1 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Intense Shine Effect on Hover */}
        {(variant === "vibrant" || variant === "brand" || variant === "primary") && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {props.children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
