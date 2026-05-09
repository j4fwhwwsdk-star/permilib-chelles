"use client";
import Link from "next/link";
import { useState } from "react";
import { PHONE, SCHOOL_NAME } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/financement", label: "Financement" },
  { href: "/avis", label: "Avis" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Barre orange Qualiopi en haut */}
      <div className="bg-[#0c1f4a] text-white text-[11px] font-medium py-1.5 px-4 text-center tracking-wide">
        Auto-école certifiée <span className="text-[#f97316] font-bold">Qualiopi</span> · Permis B, AAC, Boîte Automatique · Financement CPF disponible
      </div>

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        {/* Logo texte */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-[#0c1f4a] rounded-lg flex items-center justify-center">
            <span className="font-bebas text-white text-[13px] leading-none">EST</span>
          </div>
          <span className="font-bebas text-lg text-[#0c1f4a] tracking-wide leading-tight hidden sm:block">
            {SCHOOL_NAME}
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0c1f4a] hover:bg-gray-50 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="bg-[#f97316] text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-orange-600 transition-colors shadow-sm shadow-orange-200"
          >
            {PHONE}
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-50"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer" : "Menu"}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="space-y-1 mb-4">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="block bg-[#f97316] text-white rounded-xl px-4 py-3 font-bold text-center hover:bg-orange-600 transition-colors"
          >
            Appeler maintenant — {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
