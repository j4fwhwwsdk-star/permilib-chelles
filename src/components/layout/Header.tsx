"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]     = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 24);

      if (y > 100) {
        /* Descendant → cache ; montant → révèle */
        setHidden(y > lastScrollY.current);
      } else {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ferme le menu mobile si on agrandit l'écran */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-white/80 backdrop-blur-[20px] saturate-150 shadow-[0_1px_0_rgba(0,0,0,0.06)] border-b border-white/40"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Bandeau Qualiopi */}
      <div className="bg-[#050d18] text-white/50 text-[11px] font-medium py-1.5 px-4 text-center tracking-wide">
        Auto-école certifiée{" "}
        <span className="text-green-400 font-bold tracking-wider">Qualiopi</span>
        {" "}· Permis B, AAC, Boîte Auto · Financement CPF · Chelles 77500
      </div>

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 bg-[#050d18] rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-all duration-300 shadow-sm">
            <span className="font-bebas text-white text-[13px] leading-none tracking-wider">PL</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-bebas text-[17px] text-gray-900 tracking-wide leading-none group-hover:text-green-700 transition-colors duration-300">
              {SCHOOL_NAME}
            </span>
            <span className="block text-[9px] text-green-600 font-bold tracking-[0.18em] uppercase leading-none mt-0.5">
              Auto-École · Chelles
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-lg transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute bottom-1.5 left-3 right-3 h-[1.5px] bg-gradient-to-r from-green-600 to-green-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Contact
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="relative overflow-hidden bg-green-600 text-white rounded-xl px-5 py-2.5 font-bold text-sm flex items-center gap-2 shadow-[0_4px_14px_rgba(22,163,74,0.3)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {PHONE}
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer" : "Menu"}
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100/60 px-4 py-5">
          <nav className="grid grid-cols-2 gap-1 mb-5">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50/70 rounded-lg transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-4 py-3.5 font-bold text-center text-sm shadow-[0_6px_20px_rgba(22,163,74,0.35)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Appeler — {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
