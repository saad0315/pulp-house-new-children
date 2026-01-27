"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <motion.div
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

              {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2">Request Received!</h3>
                  <p className="text-zinc-600 mb-8">
                    Our team will review your details and contact you shortly to schedule your consultation.
                  </p>
                  <Button onClick={onClose} className="w-full">
                    Return to Site
                  </Button>
                </div>
              ) : (
                <>
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
                        placeholder="e.g. Jameson Vance"
                        className="w-full p-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="name@example.com"
                        className="w-full p-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
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
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
