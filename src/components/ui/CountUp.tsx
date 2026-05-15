"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  className?: string;
}

export default function CountUp({ value, className }: Props) {
  const [displayed, setDisplayed] = useState("0");
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const isNumeric = /^\d+$/.test(value.replace(/[%/]/g, ""));

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric) { setDisplayed(value); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setReady(true);

        const target = parseInt(value.replace(/\D/g, ""), 10);
        const suffix = value.replace(/\d/g, "");
        const duration = 1600;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplayed(Math.floor(eased * target) + suffix);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isNumeric]);

  if (!isNumeric) return <span className={className}>{value}</span>;

  return (
    <span
      ref={ref}
      className={`${className ?? ""} transition-all duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
    >
      {displayed || value.replace(/\d/g, "0")}
    </span>
  );
}
