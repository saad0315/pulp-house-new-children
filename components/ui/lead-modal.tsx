"use client";

import { m, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
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
        source: "Pulp House Lead Modal"
      };

      const response = await fetch("https://americanseohub.com/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        onClose();
        router.push("/thankyou");
      } else {
        console.error("Submission failed");
        // Optional: Handle error UI
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden border border-zinc-100 p-2 sm:p-4"
          >
            <div className="relative bg-zinc-50 rounded-2xl p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 text-zinc-400 hover:text-black hover:bg-zinc-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-black mb-2">
                  Get Your Publishing Roadmap
                </h3>
                <p className="text-zinc-600 text-sm">
                  Enter your details below to schedule a free strategy session with our editorial team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jameson Vance"
                    className="w-full p-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full p-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    variant="vibrant" 
                    size="lg" 
                    className="w-full relative overflow-hidden"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        GET FREE QUOTE
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                  <p className="text-center text-[10px] text-zinc-400 mt-4 uppercase tracking-wider">
                    100% Secure. No Spam. Unsubscribe Anytime.
                  </p>
                </div>
              </form>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
