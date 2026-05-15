"use client";
import { useState } from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#132540" }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-white transition-colors duration-200"
        style={{ background: open ? "rgba(255,255,255,0.03)" : "transparent" }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`text-xl ml-4 shrink-0 transition-colors duration-200 ${open ? "text-green-400" : "text-white/25"}`}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-white/55 leading-relaxed text-sm">{answer}</div>
      )}
    </div>
  );
}
