"use client";
import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open
          ? "linear-gradient(145deg, #142845 0%, #102238 100%)"
          : "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
        border: open ? "1px solid rgba(34,197,94,0.22)" : "1px solid rgba(255,255,255,0.09)",
        boxShadow: open ? "0 4px 24px rgba(0,0,0,0.30), 0 0 0 1px rgba(34,197,94,0.08)" : "0 2px 12px rgba(0,0,0,0.20)",
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-white transition-colors duration-200 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm leading-snug pr-4 group-hover:text-white text-white/85">{question}</span>
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-base transition-all duration-300"
          style={{
            background: open ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.07)",
            border: open ? "1px solid rgba(34,197,94,0.30)" : "1px solid rgba(255,255,255,0.10)",
            color: open ? "#4ade80" : "rgba(255,255,255,0.40)",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-white/65 leading-relaxed text-sm border-t" style={{ borderColor: "rgba(34,197,94,0.10)" }}>
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
}
