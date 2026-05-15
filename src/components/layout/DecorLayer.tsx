"use client";

import { useEffect, useRef, useState } from "react";

/* ── Chip flottant (apparaît/disparaît au scroll) ─────────── */
function FloatChip({
  visible,
  label,
  style,
  delay = "0s",
}: {
  visible: boolean;
  label: string;
  style: React.CSSProperties;
  delay?: string;
}) {
  return (
    <div
      className="hidden lg:block absolute"
      style={{
        ...style,
        transition: `opacity 0.65s ease ${delay}, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}`,
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(14px) scale(0.93)",
        willChange: "opacity, transform",
      }}
    >
      <div
        className="text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap tracking-wide"
        style={{
          background:           "rgba(8,20,42,0.82)",
          border:               "1px solid rgba(22,163,74,0.22)",
          color:                "rgba(74,222,128,0.88)",
          backdropFilter:       "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:            "0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(22,163,74,0.07)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ══ COMPOSANT PRINCIPAL ══════════════════════════════════════ */
export default function DecorLayer() {
  const [loaded, setLoaded]   = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const rafRef                = useRef<number>(0);

  useEffect(() => {
    /* Délai court pour que le browser ait rendu la page avant d'animer */
    const t = setTimeout(() => setLoaded(true), 120);

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ── Orbes ambiants ─────────────────────────────────────
          Position fixe, z-index 2 (sous header z-40), pointer-events:none
          Opacité très basse → visible comme teinte subtile sur les sections
          ─────────────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        {/* Orbe 1 — haut droite, le plus visible */}
        <div
          style={{
            position: "absolute",
            width: "900px", height: "900px",
            top: "-360px", right: "-280px",
            background: "radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 65%)",
            borderRadius: "50%",
            filter: "blur(90px)",
            animation: "aurora 14s ease infinite alternate",
            opacity: loaded ? 1 : 0,
            transition: "opacity 2s ease 0.2s",
          }}
        />
        {/* Orbe 2 — bas gauche */}
        <div
          style={{
            position: "absolute",
            width: "700px", height: "700px",
            bottom: "-220px", left: "-180px",
            background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 65%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "aurora 18s ease 5s infinite alternate",
            opacity: loaded ? 1 : 0,
            transition: "opacity 2.5s ease 0.5s",
          }}
        />
        {/* Orbe 3 — milieu gauche, très subtil */}
        <div
          style={{
            position: "absolute",
            width: "500px", height: "500px",
            top: "38%", left: "-160px",
            background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 65%)",
            borderRadius: "50%",
            filter: "blur(70px)",
            animation: "aurora 11s ease 2s infinite alternate",
            opacity: loaded ? 1 : 0,
            transition: "opacity 3s ease 0.9s",
          }}
        />
      </div>

      {/* ── Coins décoratifs — fade in au chargement ─────────── */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none hidden lg:block"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        {/* Haut gauche */}
        <div style={{
          position: "absolute", top: 76, left: 18,
          width: 38, height: 38,
          borderTop:  "1px solid rgba(22,163,74,0.22)",
          borderLeft: "1px solid rgba(22,163,74,0.22)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.1s",
        }} />
        {/* Haut droite */}
        <div style={{
          position: "absolute", top: 76, right: 18,
          width: 38, height: 38,
          borderTop:   "1px solid rgba(22,163,74,0.14)",
          borderRight: "1px solid rgba(22,163,74,0.14)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }} />
        {/* Bas gauche */}
        <div style={{
          position: "absolute", bottom: 92, left: 18,
          width: 28, height: 28,
          borderBottom: "1px solid rgba(22,163,74,0.13)",
          borderLeft:   "1px solid rgba(22,163,74,0.13)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.7s",
        }} />
        {/* Bas droite */}
        <div style={{
          position: "absolute", bottom: 92, right: 18,
          width: 28, height: 28,
          borderBottom: "1px solid rgba(22,163,74,0.11)",
          borderRight:  "1px solid rgba(22,163,74,0.11)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 2s",
        }} />

        {/* Ligne horizontale haut-gauche */}
        <div style={{
          position: "absolute", top: 95, left: 56,
          width: loaded ? 80 : 0, height: 1,
          background: "rgba(22,163,74,0.12)",
          transition: "width 0.8s ease 1.5s",
        }} />
        {/* Ligne horizontale bas-droite */}
        <div style={{
          position: "absolute", bottom: 111, right: 56,
          width: loaded ? 60 : 0, height: 1,
          background: "rgba(22,163,74,0.09)",
          transition: "width 0.7s ease 2.2s",
        }} />
      </div>

      {/* ── Chips flottants au scroll ─────────────────────────── */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <FloatChip
          visible={scrollY > 320 && scrollY < 1050}
          label="✓ Certifié Qualiopi"
          style={{ top: "30%", left: "22px" }}
          delay="0s"
        />
        <FloatChip
          visible={scrollY > 750 && scrollY < 1700}
          label="★ 5/5 Google"
          style={{ top: "44%", right: "22px" }}
          delay="0.07s"
        />
        <FloatChip
          visible={scrollY > 1450 && scrollY < 2500}
          label="CPF · Sans avance"
          style={{ top: "32%", left: "22px" }}
          delay="0.05s"
        />
        <FloatChip
          visible={scrollY > 2100 && scrollY < 3200}
          label="Aide IDF · 1 000€"
          style={{ top: "40%", right: "22px" }}
          delay="0.08s"
        />
        <FloatChip
          visible={scrollY > 2900 && scrollY < 3900}
          label="Permis 1€/jour"
          style={{ top: "34%", left: "22px" }}
          delay="0.04s"
        />
      </div>
    </>
  );
}
