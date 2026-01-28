"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    question: "Is your manuscript currently finished?",
    options: [
      "Yes, it's 100% complete",
      "Almost, I'm in the final chapter",
      "I have a solid first draft",
      "I'm still in the outline phase",
    ],
  },
  {
    id: 2,
    question: "What is your primary goal for this book?",
    options: [
      "I want to become a full-time author",
      "I want to build authority in my niche",
      "I want to leave a legacy for my family",
      "I just want to see it in print",
    ],
  },
  {
    id: 3,
    question: "What is your approximate word count?",
    options: [
      "Under 20,000 words",
      "20,000 - 50,000 words",
      "50,000 - 80,000 words",
      "Over 80,000 words",
    ],
  },
  {
    id: 4,
    question: "Ready to see your publishing roadmap?",
    type: "form",
  },
];

export default function ConversionForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-zinc-100"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-4">Roadmap Request Received!</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our publishing director will review your manuscript details and reach out within 24 hours to schedule your strategy call.
            </p>
            <Button variant="vibrant" size="lg" onClick={() => setIsSubmitted(false)}>
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="conversion-form" className="bg-zinc-50 py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-black mb-4">Claim Your Roadmap</h2>
          <p className="text-muted-foreground font-medium italic">Takes less than 60 seconds to secure your legacy.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 overflow-hidden border border-zinc-100">
          {/* Progress Bar */}
          <div className="h-2 w-full bg-zinc-100">
            <motion.div 
              className="h-full bg-brand"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Step {currentStep + 1} of {steps.length}</p>
                <h3 className="text-2xl lg:text-3xl font-black text-black mb-8 leading-tight">
                  {steps[currentStep].question}
                </h3>

                {steps[currentStep].type === "form" ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Your Name</label>
                      <input 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Author Name"
                        className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Author Email</label>
                      <input 
                        required 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="author@example.com"
                        className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-bold"
                      />
                    </div>
                    
                    <div className="pt-6 flex flex-col items-center gap-6">
                      <Button variant="vibrant" size="xl" type="submit" className="w-full group">
                        GET MY ROADMAP NOW
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <div className="flex items-center gap-3 bg-zinc-50 px-6 py-3 rounded-full border border-zinc-100">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Publication or 100% Refund Guarantee</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3">
                    {steps[currentStep].options?.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={nextStep}
                        className="w-full p-5 text-left rounded-2xl border-2 border-zinc-100 hover:border-brand hover:bg-brand/5 transition-all group flex justify-between items-center"
                      >
                        <span className="font-bold text-lg text-zinc-700">{option}</span>
                        <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {currentStep > 0 && !isSubmitted && (
              <button
                onClick={prevStep}
                className="mt-8 flex items-center gap-2 text-muted-foreground hover:text-black font-bold text-sm uppercase tracking-widest transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
        </div>
        
        <p className="mt-8 text-center text-muted-foreground text-sm font-medium">
          Privacy Policy: We never share your manuscript or personal data. 
          Your Intellectual Property is 100% protected.
        </p>
      </div>
    </section>
  );
}