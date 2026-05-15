"use client";
import { useEffect, useRef } from "react";

/* Lerp helper */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function CustomCursor() {
  const dotRef      = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Désactivé sur écrans tactiles */
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) return;

    const dot      = dotRef.current!;
    const follower = followerRef.current!;
    if (!dot || !follower) return;

    /* Cache le curseur natif */
    document.documentElement.style.cursor = "none";

    /* Positions réelles de la souris */
    let mx = -100, my = -100;
    /* Positions interpolées */
    let dx = -100, dy = -100;   /* dot      lerp 0.18 */
    let fx = -100, fy = -100;   /* follower lerp 0.09 */

    let followerSize  = 36;
    let followerOpacity = 0.3;
    let followerBlend: string = "normal";

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    /* Hover sur liens / boutons → follower grossit */
    const onMouseEnterInteractive = () => {
      followerSize    = 56;
      followerOpacity = 0.5;
      followerBlend   = "normal";
    };
    const onMouseLeaveInteractive = () => {
      followerSize    = 36;
      followerOpacity = 0.3;
      followerBlend   = "normal";
    };

    /* Hover sur cartes → follower encore plus grand + difference */
    const onMouseEnterCard = () => {
      followerSize    = 80;
      followerOpacity = 0.55;
      followerBlend   = "difference";
    };
    const onMouseLeaveCard = () => {
      followerSize    = 36;
      followerOpacity = 0.3;
      followerBlend   = "normal";
    };

    /* Click → pulse rapide sur le dot */
    const onClick = () => {
      dot.style.transform = "translate(-50%,-50%) scale(0.7)";
      dot.style.transition = "transform 80ms ease-out";
      setTimeout(() => {
        dot.style.transform = "translate(-50%,-50%) scale(1.2)";
        setTimeout(() => {
          dot.style.transform = "translate(-50%,-50%) scale(1)";
        }, 120);
      }, 80);
    };

    /* Attache les listeners sur les éléments interactifs */
    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnterInteractive);
          el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });

      document.querySelectorAll(".card-hover, .card-lift, .card-glow, [data-cursor='card']").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterCard);
        el.addEventListener("mouseleave", onMouseLeaveCard);
      });
    };

    /* RAF loop */
    let rafId: number;
    const loop = () => {
      dx = lerp(dx, mx, 0.18);
      dy = lerp(dy, my, 0.18);
      fx = lerp(fx, mx, 0.09);
      fy = lerp(fy, my, 0.09);

      /* Follower size lerp */
      const currentSize = parseFloat(follower.style.width || "36");
      const newSize = lerp(currentSize, followerSize, 0.12);

      dot.style.left = `${dx}px`;
      dot.style.top  = `${dy}px`;

      follower.style.left   = `${fx}px`;
      follower.style.top    = `${fy}px`;
      follower.style.width  = `${newSize}px`;
      follower.style.height = `${newSize}px`;
      follower.style.opacity      = String(followerOpacity);
      follower.style.mixBlendMode = followerBlend;

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove",  onMouseMove, { passive: true });
    document.addEventListener("click",      onClick);

    /* Petite attente pour que le DOM soit complet */
    const timer = setTimeout(attachListeners, 500);

    loop();

    /* Révèle les curseurs */
    dot.style.opacity      = "1";
    follower.style.opacity = String(followerOpacity);

    return () => {
      document.removeEventListener("mousemove",  onMouseMove);
      document.removeEventListener("click",      onClick);
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Dot principal — 12px */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed z-[10000] pointer-events-none select-none"
        style={{
          width:           12,
          height:          12,
          borderRadius:    "50%",
          backgroundColor: "#16a34a",
          opacity:         0,
          top:             0,
          left:            0,
          transform:       "translate(-50%, -50%)",
          willChange:      "left, top",
          boxShadow:       "0 0 8px rgba(22,163,74,0.6)",
        }}
      />

      {/* Follower — outline 36px */}
      <div
        ref={followerRef}
        aria-hidden
        className="fixed z-[9999] pointer-events-none select-none"
        style={{
          width:         36,
          height:        36,
          borderRadius:  "50%",
          border:        "1.5px solid #16a34a",
          opacity:       0,
          top:           0,
          left:          0,
          transform:     "translate(-50%, -50%)",
          willChange:    "left, top, width, height",
          transition:    "opacity 0.25s ease",
        }}
      />
    </>
  );
}
