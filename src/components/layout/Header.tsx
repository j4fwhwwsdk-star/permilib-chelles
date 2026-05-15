"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Ferme le menu sur changement de page */
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,20,42,0.97)"
          : "rgba(8,20,42,0.88)",
        backdropFilter:       "blur(32px) saturate(180%)",
        WebkitBackdropFilter: "blur(32px) saturate(180%)",
        borderBottom:         "1px solid rgba(34,197,94,0.12)",
        boxShadow:            scrolled
          ? "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(34,197,94,0.10)"
          : "0 1px 0 rgba(34,197,94,0.07)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(22,163,74,0.25) 0%, rgba(22,163,74,0.10) 100%)",
              border: "1px solid rgba(22,163,74,0.30)",
              boxShadow: "0 0 12px rgba(22,163,74,0.15)",
            }}
          >
            <span className="font-bebas text-green-400 text-[13px] leading-none tracking-wider">PL</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-bebas text-[17px] text-white tracking-wide leading-none group-hover:text-green-400 transition-colors duration-300">
              {SCHOOL_NAME}
            </span>
            <span className="block text-[9px] font-bold tracking-[0.18em] uppercase leading-none mt-0.5 text-green-400/60">
              Auto-École · Chelles
            </span>
          </div>
          <span
            className="hidden lg:flex items-center gap-1.5 ml-1 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-[0.10em] uppercase"
            style={{
              background: "rgba(22,163,74,0.12)",
              border:     "1px solid rgba(22,163,74,0.28)",
              color:      "#4ade80",
            }}
          >
            <IcoCheck /> Qualiopi
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: active ? "#ffffff" : "rgba(255,255,255,0.52)",
                  background: active ? "rgba(255,255,255,0.07)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.52)";
                }}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors duration-200 text-white/40 hover:text-white/80"
          >
            Contact
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="relative overflow-hidden bg-green-600 text-white rounded-xl px-5 py-2.5 font-bold text-sm flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500"
            style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
          >
            <IcoPhone />
            {PHONE}
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200 text-white/70 hover:text-white"
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

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 py-5"
          style={{
            background: "rgba(8,20,42,0.99)",
            borderTop:  "1px solid rgba(34,197,94,0.10)",
          }}
        >
          <nav className="grid grid-cols-2 gap-1 mb-5">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: active ? "#4ade80" : "rgba(255,255,255,0.55)",
                    background: active ? "rgba(34,197,94,0.10)" : "transparent",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-4 py-3.5 font-bold text-center text-sm hover:bg-green-500 transition-colors"
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
