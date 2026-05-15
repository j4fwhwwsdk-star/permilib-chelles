"use client";

import { trackEvent } from "@/lib/analytics";
import { PHONE, WHATSAPP } from "@/lib/site";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg pb-safe">
      <div className="flex gap-3 p-3">
        <a
          href={`tel:${PHONE}`}
          onClick={() => trackEvent("call_click", { location: "sticky_bar" })}
          className="flex-1 bg-[#16a34a] text-white rounded-xl py-3.5 font-bold text-center text-sm active:bg-[#15803d] transition-colors shadow-[0_4px_14px_rgba(22,163,74,0.35)]"
        >
          Appeler
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "sticky_bar" })}
          className="flex-1 bg-[#050d18] text-white rounded-xl py-3.5 font-bold text-center text-sm active:bg-[#0c1628] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
