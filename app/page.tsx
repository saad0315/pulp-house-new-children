import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import MadeInUSA from "@/components/sections/MadeInUSA";
import Portfolio from "@/components/sections/Portfolio";
import PainMirror from "@/components/sections/PainMirror";
import BeforeAfter from "@/components/sections/BeforeAfter";
import HumanAnchor from "@/components/sections/HumanAnchor";
import Timeline from "@/components/sections/Timeline";
import BillOfRights from "@/components/sections/BillOfRights";
import Comparison from "@/components/sections/Comparison";
import AuthorSuccessSpotlight from "@/components/sections/AuthorSuccessSpotlight";
import TrustCertifications from "@/components/sections/TrustCertifications";
import KillerFAQ from "@/components/sections/KillerFAQ";
import ConversionForm from "@/components/sections/ConversionForm";
import StickyCTA from "@/components/layout/StickyCTA";
import ActionBreak from "@/components/sections/ActionBreak";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyCTA />
      <Hero />
      <Logos />
      <MadeInUSA />
      <Portfolio />
      <PainMirror />
      <BeforeAfter />
      
      <ActionBreak 
        headline="Don't Let Your Story Fade Away."
        subheadline="Every day you wait is another day your book remains just a dream. Let's make it real."
        buttonText="Start Your Journey"
        variant="light"
      />

      <HumanAnchor />
      <Timeline />
      <BillOfRights />
      
      <ActionBreak 
        headline="100% Ownership. 0% Risk."
        subheadline="We've removed all the guesswork. You keep the rights, the royalties, and the peace of mind."
        buttonText="Secure Your Roadmap"
        variant="dark"
      />

      <Comparison />
      <AuthorSuccessSpotlight />
      <TrustCertifications />
      <KillerFAQ />
      <ConversionForm />
      
      {/* Simple Footer */}
      <footer className="bg-white border-t border-zinc-100 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-black tracking-tighter text-black uppercase">The Pulp House</p>
            <p className="text-zinc-400 text-sm font-medium">© 2026 The Pulp House Publishing LLC. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}