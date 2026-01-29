"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { ArrowRight, Loader2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function InlineLeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        source: "Pulp House Inline Form"
      };

      const response = await fetch("https://americanseohub.com/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/thankyou");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background with Gradient/Noise */}
      <div className="absolute inset-0 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="bg-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 blur-[100px] rounded-full group-hover:bg-brand/30 transition-colors duration-1000" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-4 border border-brand/20">
                <Sparkles className="w-3 h-3" />
                <span>Fast Track Access</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Get Your <span className="text-brand">Free</span> Quote
              </h2>
              <p className="text-zinc-400 font-medium">
                Skip the line. Enter your details for an instant priority callback and publishing roadmap.
              </p>
            </div>

            {/* Horizontal Form */}
            <div className="lg:w-2/3 w-full">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="flex-1 relative group/input">
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full h-14 pl-4 pr-4 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium"
                  />
                </div>
                
                <div className="flex-1 relative group/input">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full h-14 pl-4 pr-4 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium"
                  />
                </div>

                <div className="flex-1 relative group/input">
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full h-14 pl-4 pr-4 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium"
                  />
                </div>

                <Button 
                  variant="vibrant" 
                  size="xl" 
                  className="h-14 px-8 shrink-0 shadow-lg shadow-brand/20"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="hidden md:inline">Get Quote</span>
                      <span className="md:hidden">Get Free Quote</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-zinc-500 text-[10px] mt-3 text-center md:text-left uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Average response time: 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
