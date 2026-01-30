import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "vibrant" | "brand" | "black";
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
      black: "bg-black text-white hover:bg-zinc-800 shadow-lg shadow-black/10",
    };

    const sizes = {
      sm: "h-8 md:h-9 px-3 md:px-4 text-xs  uppercase tracking-wider",
      md: "h-10 md:h-11 px-5 md:px-6 text-sm  uppercase tracking-wider",
      lg: "h-12 md:h-14 px-6 md:px-8 text-base  uppercase tracking-wide",
      xl: "h-14 md:h-16 px-6 md:px-10 text-base md:text-lg font-black uppercase tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-[0.94] hover:scale-[1.05] hover:-translate-y-1 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden cursor-pointer !font-semibold",
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
