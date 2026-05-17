"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_KEY } from "@/components/ui/CookieBanner";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      setConsented(true);
    }
    const onAccept = () => setConsented(true);
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  if (!gaId || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
