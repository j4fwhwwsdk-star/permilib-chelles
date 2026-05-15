"use client";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  opacity?: number;
}

export function SectionLine({ className = "", opacity = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sline-in");
          io.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const lineColor = `rgba(22,163,74,${opacity})`;
  const dotColor  = `rgba(22,163,74,${Math.min(1, opacity * 1.8)})`;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`sline flex items-center ${className}`}
    >
      <div
        className="sline-arm sline-l flex-1"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${lineColor} 100%)` }}
      />
      <div
        className="sline-dot flex-shrink-0"
        style={{ background: dotColor }}
      />
      <div
        className="sline-arm sline-r flex-1"
        style={{ background: `linear-gradient(90deg, ${lineColor} 0%, transparent 100%)` }}
      />
    </div>
  );
}
