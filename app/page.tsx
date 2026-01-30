import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import TrustAnchor from "@/components/sections/TrustAnchor";
import StickyCTA from "@/components/layout/StickyCTA";

// Lazy Load Components
const MadeInUSA = dynamic(() => import("@/components/sections/MadeInUSA"));
// const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const PainMirror = dynamic(() => import("@/components/sections/PainMirror"));
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"));
const ActionBreak = dynamic(() => import("@/components/sections/ActionBreak"));
const HumanAnchor = dynamic(() => import("@/components/sections/HumanAnchor"));
const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const BillOfRights = dynamic(
  () => import("@/components/sections/BillOfRights"),
);
const Comparison = dynamic(() => import("@/components/sections/Comparison"));
const AuthorSuccessSpotlight = dynamic(
  () => import("@/components/sections/AuthorSuccessSpotlight"),
);
// const TrustCertifications = dynamic(() => import("@/components/sections/TrustCertifications"));
// const KillerFAQ = dynamic(() => import("@/components/sections/KillerFAQ"));
const ConversionForm = dynamic(
  () => import("@/components/sections/ConversionForm"),
);
const InlineLeadForm = dynamic(() => import("@/components/sections/InlineLeadForm"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyCTA />
      <Hero />
      <TrustAnchor />
      <MadeInUSA />
      <AuthorSuccessSpotlight />

      {/* <Portfolio /> */}
      <PainMirror />
      <Timeline />
      <BeforeAfter />

      <InlineLeadForm />

      <HumanAnchor />
      <ActionBreak
        headline="Full Control. No Risk. "
        subheadline="Say goodbye to uncertainty. With us, you retain 100% ownership, 100% royalties, and the peace of mind that comes with knowing your legacy is secure."
        buttonText="Claim Your Full Ownership"
        variant="dark"
      />
      <BillOfRights />

      <Comparison />
      {/* <TrustCertifications /> */}
      {/* <KillerFAQ /> */}
      <ConversionForm />

      {/* Simple Footer */}
      <footer className="bg-white border-t border-zinc-100 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-black tracking-tighter text-black uppercase">
              The Pulp House
            </p>
            <p className="text-zinc-400 text-sm font-medium">
              © 2026 The Pulp House Publishing LLC. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a target="_blank" href="https://thepulphousepublishing.com/privacy-policy" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a target="_blank" href="https://thepulphousepublishing.com/terms-conditions" className="hover:text-black transition-colors">
              Terms
            </a>
            {/* <a href="#" className="hover:text-black transition-colors">
              Contact
            </a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
