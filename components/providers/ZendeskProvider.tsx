"use client";

import Script from "next/script";

declare global {
  interface Window {
    zE?: any;
  }
}

export function ZendeskProvider() {
  const handleZendeskLoad = () => {
    // 1️⃣ Auto-open chat after 10 seconds
    setTimeout(() => {
      if (window.zE) {
        window.zE('webWidget', 'open');
      }
    }, 10000); // 10 seconds
  };

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=4231077b-5383-4fe2-abdc-3ed5f74287fe"
      strategy="afterInteractive"
      onLoad={handleZendeskLoad}
    />
  );
}
