"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ShieldCheck, Loader2 } from "lucide-react";

const steps = [
  {
    id: 1,
    key: "manuscript_status",
    question: "Where does your manuscript stand?",
    options: [
      "Completely finished and ready for submission.",
      "Almost there, just finishing the final chapter.",
      "I have a solid draft, but it needs polishing.",
      "Still in the outline phase.",
    ],
  },
  {
    id: 2,
    key: "goal",
    question: "What’s your main objective with this book?",
    options: [
      "I aim to become a full-time author.",
      "I want to establish myself as an authority in my field.",
      "I hope to leave a lasting legacy for my family.",
      "I just want to see it published and in print.",
    ],
  },
  {
    id: 3,
    key: "word_count",
    question: "What is the approximate length of your manuscript?",
    options: [
      "Under 20,000 words",
      "20,000 - 50,000 words",
      "50,000 - 80,000 words",
      "Over 80,000 words",
    ],
  },
  {
    id: 4,
    question: "Are you ready to chart your path to publication?",
    type: "form",
  },
];

export default function ConversionForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleOptionSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        ...answers,
        companyName: "The Pulp House Publishing"
      };

      const response = await fetch("https://americanseohub.com/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
          window.location.href = "https://thepulphousepublishing.com/thankyou";
      } else {
        const errorText = await response.text();
        console.error("Submission failed:", response.status, errorText);
        // Optional: Handle error UI
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

    return (

      <section id="conversion-form" className=" py-8 md:py-12 px-6 lg:px-12 ">

        <div className="container mx-auto max-w-2xl">

          <div className="text-center mb-8 md:mb-12">

            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Claim Your <span className="text-zinc-400">Roadmap</span></h2>

            <p className="text-muted-foreground font-medium italic text-sm md:text-base">Takes less than 60 seconds to secure your legacy.</p>

          </div>

  

          <div className="bg-zinc-100 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 overflow-hidden border border-zinc-100 ">

            {/* Progress Bar */}

            <div className="h-2 w-full bg-zinc-100">

              <m.div

                className="h-full bg-brand"

                initial={{ width: 0 }}

                animate={{ width: `${progress}%` }}

                transition={{ duration: 0.3 }}

              />

            </div>

  

            <div className="p-6 md:p-8 lg:p-12">

              <AnimatePresence mode="wait">

                <m.div

                  key={currentStep}

                  initial={{ opacity: 0, x: 20 }}

                  animate={{ opacity: 1, x: 0 }}

                  exit={{ opacity: 0, x: -20 }}

                  transition={{ duration: 0.2 }}

                >

                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand mb-2">Step {currentStep + 1} of {steps.length}</p>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-6 md:mb-8 leading-tight">

                    {steps[currentStep].question}

                  </h3>

  

                  {steps[currentStep].type === "form" ? (

                    <form onSubmit={handleSubmit} className="space-y-4">

                      <div className="space-y-2">

                        <label className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Your Name</label>

                        <input 

                          required 

                          value={formData.name}

                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                          placeholder="Author Name"

                          className="w-full p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-bold text-base"

                        />

                      </div>

                      <div className="space-y-2">

                        <label className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Author Email</label>

                        <input 

                          required 

                          type="email"

                          value={formData.email}

                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                          placeholder="author@example.com"

                          className="w-full p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-bold text-base"

                        />

                      </div>

                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Phone Number</label>
                        <input 
                          required 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-bold text-base"
                        />
                      </div>
                      
                      <div className="pt-6 flex flex-col items-center gap-4 md:gap-6">

                        <Button variant="vibrant" size="xl" type="submit" className="w-full group text-lg py-6" disabled={loading}>

                          {loading ? (

                            <span className="flex items-center gap-2">

                              <Loader2 className="w-5 h-5 animate-spin" /> Processing...

                            </span>

                          ) : (

                            <>

                              Get My Personalized Roadmap 

                              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />

                            </>

                          )}

                        </Button>

                        

                        <div className="flex items-center gap-2 md:gap-3 bg-zinc-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-zinc-100 w-full md:w-auto justify-center">

                          <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0" />

                          <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Publication or 100% Refund Guarantee</span>

                        </div>

                      </div>

                    </form>

                  ) : (

                    <div className="space-y-3">

                      {steps[currentStep].options?.map((option, idx) => (

                        <button

                          key={idx}

                          onClick={() => handleOptionSelect(steps[currentStep].key!, option)}

                          className="w-full p-4 md:p-5 text-left rounded-xl md:rounded-2xl border-2 border-zinc-100 hover:border-brand hover:bg-brand/5 transition-all group flex justify-between items-center"

                        >

                          <span className="font-bold text-base md:text-lg text-zinc-700">{option}</span>

                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />

                        </button>

                      ))}

                    </div>

                  )}

                </m.div>

              </AnimatePresence>

  

              {currentStep > 0 && (

                <button

                  onClick={prevStep}

                  disabled={loading}

                  className="mt-6 md:mt-8 flex items-center gap-2 text-muted-foreground hover:text-black font-bold text-xs md:text-sm uppercase tracking-widest transition-colors disabled:opacity-50"

                >

                  <ChevronLeft className="w-4 h-4" />

                  Back

                </button>

              )}

            </div>

          </div>

          

          <p className="mt-6 md:mt-8 text-center text-muted-foreground text-xs md:text-sm font-medium px-4">

            Privacy Policy: We never share your manuscript or personal data. 

            Your Intellectual Property is 100% protected.

          </p>

        </div>

      </section>

    );

  }

  