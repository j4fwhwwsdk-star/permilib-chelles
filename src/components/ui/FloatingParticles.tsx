"use client";
import { useEffect, useRef } from "react";

interface Dot {
  x: string;
  delay: number;
  dur: number;
  size: number;
  color: string;
}

const DOTS: Dot[] = [
  { x: "7%",  delay: 0,    dur: 8,  size: 5,   color: "rgba(74,222,128,0.80)" },
  { x: "17%", delay: 2.2,  dur: 11, size: 4,   color: "rgba(240,253,244,0.65)" },
  { x: "29%", delay: 4.5,  dur: 9,  size: 6,   color: "rgba(74,222,128,0.72)" },
  { x: "41%", delay: 1.0,  dur: 7,  size: 5,   color: "rgba(52,211,153,0.75)" },
  { x: "54%", delay: 5.8,  dur: 10, size: 4,   color: "rgba(240,253,244,0.60)" },
  { x: "67%", delay: 2.8,  dur: 8,  size: 5,   color: "rgba(74,222,128,0.78)" },
  { x: "78%", delay: 0.5,  dur: 12, size: 3,   color: "rgba(52,211,153,0.65)" },
  { x: "88%", delay: 3.5,  dur: 9,  size: 5,   color: "rgba(240,253,244,0.58)" },
  { x: "23%", delay: 6.5,  dur: 10, size: 4,   color: "rgba(74,222,128,0.70)" },
  { x: "73%", delay: 1.8,  dur: 7,  size: 6,   color: "rgba(52,211,153,0.75)" },
  { x: "45%", delay: 3.0,  dur: 9,  size: 4,   color: "rgba(74,222,128,0.68)" },
  { x: "60%", delay: 5.2,  dur: 11, size: 5,   color: "rgba(240,253,244,0.62)" },
];

export function FloatingParticles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width:767px)").matches) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("ptcl-on");
        else el.classList.remove("ptcl-on");
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`ptcl-wrap absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {DOTS.map((d, i) => (
        <div
          key={i}
          className="ptcl-dot absolute bottom-0 rounded-full"
          style={{
            left: d.x,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 ${d.size * 3}px ${d.color}`,
            "--pd":  `${d.delay}s`,
            "--pdr": `${d.dur}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
