import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import { ZendeskProvider } from "@/components/providers/ZendeskProvider";
import Navbar from "@/components/layout/Navbar";
import { Spotlight } from "@/components/ui/spotlight";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
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
  title: "Pulp House Publishing - Children Publications",
  description:
    "With The Pulp House Publishing, your children’s book stays 100% yours. Keep all creative rights and royalties. No exceptions, just success.",
  openGraph: {
    title: "Pulp House Publishing - Children Publications",
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
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${poppins.variable} ${lora.variable} antialiased font-sans bg-white text-zinc-900`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-701839010"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-701839010');
          `}
        </Script>

        {/* Click to call conversion tracking */}
        <Script id="gtag-click-to-call" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-701839010/0By-CNWtu_EbEKLt1M4C',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* Phone conversion configuration */}
        <Script id="gtag-phone-conversion" strategy="lazyOnload">
          {`
            gtag('config', 'AW-701839010/ulsBCNKtu_EbEKLt1M4C', {
              'phone_conversion_number': '(888) 908-0775'
            });
          `}
        </Script>

        <ZendeskProvider />

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
