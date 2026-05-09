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
          className="flex-1 bg-blue-600 text-white rounded-lg py-3 font-bold text-center text-sm hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Appeler
        </a>
        <a
          href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "sticky_bar" })}
          className="flex-1 bg-green-600 text-white rounded-lg py-3 font-bold text-center text-sm hover:bg-green-700 active:bg-green-800 transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
