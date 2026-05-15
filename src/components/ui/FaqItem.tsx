"use client";
import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "#ffffff" : "#ffffff",
        border: open ? "1px solid rgba(22,163,74,0.28)" : "1px solid #e5e7eb",
        boxShadow: open ? "0 4px 24px rgba(22,163,74,0.10), 0 0 0 1px rgba(22,163,74,0.06)" : "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-bold transition-colors duration-200 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm leading-snug pr-4" style={{ color: open ? "#0f172a" : "#374151" }}>
          {question}
        </span>
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-base transition-all duration-300 font-bold"
          style={{
            background: open ? "rgba(22,163,74,0.10)" : "#f1f5f9",
            border: open ? "1px solid rgba(22,163,74,0.25)" : "1px solid #e2e8f0",
            color: open ? "#16a34a" : "#64748b",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 leading-relaxed text-sm border-t" style={{ borderColor: "rgba(22,163,74,0.12)", color: "#475569" }}>
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
}
