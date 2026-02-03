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
      src="https://static.zdassets.com/ekr/snippet.js?key=37ff574c-9995-4c33-a0be-8b424905c4a0"
      strategy="afterInteractive"
      onLoad={handleZendeskLoad}
    />
  );
}
