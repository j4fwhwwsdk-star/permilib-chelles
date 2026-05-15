"use client";
import { useEffect, useRef } from "react";

interface Props {
  color: string;
  size: number;
  blurPx?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  floatDuration?: number;
  floatDelay?: number;
  enterDelay?: number;
}

export function ScrollOrb({
  color,
  size,
  blurPx,
  top,
  left,
  right,
  bottom,
  floatDuration = 7,
  floatDelay = 0,
  enterDelay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width:767px)").matches) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${enterDelay}s`;
          el.classList.add("orb-in");
          io.unobserve(el);
        }
      },
      { threshold: 0.04, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enterDelay]);

  const blur = blurPx ?? Math.round(size * 0.18);

  return (
    <div
      ref={ref}
      aria-hidden
      className="scroll-orb absolute pointer-events-none"
      /* NE PAS mettre opacity ici — la CSS gère l'animation opacity 0→1 */
      style={{ width: size, height: size, top, left, right, bottom }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: color,
          filter: `blur(${blur}px)`,
          animation: `floatSoft ${floatDuration}s ease-in-out ${floatDelay}s infinite`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
