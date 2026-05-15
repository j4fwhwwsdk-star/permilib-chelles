"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PHONE, SCHOOL_NAME } from "@/lib/site";

const navLinks = [
  { href: "/",            label: "Accueil" },
  { href: "/formations",  label: "Formations" },
  { href: "/tarifs",      label: "Tarifs" },
  { href: "/financement", label: "Financement" },
  { href: "/avis",        label: "Avis" },
  { href: "/faq",         label: "FAQ" },
  { href: "/a-propos",    label: "À propos" },
];

const IcoPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IcoCheck = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Glassmorphism plus opaque après 24px de scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ferme le menu burger si on agrandit la fenêtre */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(12,28,55,0.95)"
          : "rgba(12,28,55,0.78)",
        backdropFilter:       "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(255,255,255,0.04)",
        boxShadow: scrolled ? "0 1px 0 rgba(22,163,74,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-green-500/30 group-hover:bg-green-500/10"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            <span className="font-bebas text-white text-[13px] leading-none tracking-wider">PL</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-bebas text-[17px] text-white tracking-wide leading-none group-hover:text-green-400 transition-colors duration-300">
              {SCHOOL_NAME}
            </span>
            <span className="block text-[9px] font-bold tracking-[0.18em] uppercase leading-none mt-0.5" style={{ color: "rgba(34,197,94,0.65)" }}>
              Auto-École · Chelles
            </span>
          </div>
          {/* Pill Qualiopi */}
          <span
            className="hidden lg:flex items-center gap-1.5 ml-1 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-[0.10em] uppercase"
            style={{
              background: "rgba(22,163,74,0.10)",
              border:     "1px solid rgba(22,163,74,0.22)",
              color:      "#4ade80",
            }}
          >
            <IcoCheck /> Qualiopi
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group"
              style={{ color: "rgba(255,255,255,0.50)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.92)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.50)")}
            >
              {l.label}
              <span
                className="absolute bottom-1.5 left-3 right-3 h-[1.5px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.40)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.40)")}
          >
            Contact
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="relative overflow-hidden bg-green-600 text-white rounded-xl px-5 py-2.5 font-bold text-sm flex items-center gap-2 transition-all duration-200 group hover:-translate-y-0.5"
            style={{ boxShadow: "0 4px 14px rgba(22,163,74,0.34)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 22px rgba(22,163,74,0.50)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(22,163,74,0.34)")}
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] skew-x-[-20deg]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
            />
            <IcoPhone />
            {PHONE}
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.60)" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 py-5"
          style={{
            background: "rgba(12,28,55,0.99)",
            borderTop:  "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <nav className="grid grid-cols-2 gap-1 mb-5">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.52)" }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color      = "rgba(255,255,255,0.92)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color      = "rgba(255,255,255,0.52)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-4 py-3.5 font-bold text-center text-sm"
            style={{ boxShadow: "0 6px 20px rgba(22,163,74,0.38)" }}
          >
            <IcoPhone />
            Appeler — {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
