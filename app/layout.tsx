import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import Navbar from "@/components/layout/Navbar";
import { Spotlight } from "@/components/ui/spotlight";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pulp House | Full Service Publishing",
  description:
    "We turn your manuscript into a global bestseller in 90 days. Keep 100% of your royalties and rights.",
  openGraph: {
    title: "The Pulp House | Full Service Publishing",
    description: "Full service publishing with 100% ownership and royalties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body
        className={`${poppins.variable} ${lora.variable} antialiased font-sans bg-white text-zinc-900`}
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="oklch(0.705 0.213 47.6)"
        />
        <LazyMotionProvider>
          <ModalProvider>
            <Navbar />
            {children}
          </ModalProvider>
        </LazyMotionProvider>
      </body>
    </html>
  );
}
