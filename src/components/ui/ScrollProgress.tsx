"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[300] h-[3px] pointer-events-none"
      style={{ background: "rgba(0,0,0,0.04)" }}
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #16a34a, #22c55e, #4ade80)",
          boxShadow: "0 0 10px rgba(34,197,94,0.70), 0 0 20px rgba(34,197,94,0.30)",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}
