"use client";

import Script from "next/script";

declare global {
  interface Window {
    zE?: any;
  }
}

export function ZendeskProvider() {
  const handleZendeskLoad = () => {
    // Open chat widget when agent sends a message
    if (window.zE) {
      window.zE("webWidget:on", "chat:unreadMessages", (count: number) => {
        if (count > 0) {
          window.zE("webWidget", "open");
        }
      });
    }
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
