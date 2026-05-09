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
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="font-bebas text-xl text-gray-900 tracking-wide shrink-0">
          {SCHOOL_NAME}
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
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
            className="bg-[#2563eb] text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            📞 {PHONE}
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
            className="block bg-[#2563eb] text-white rounded-xl px-4 py-3 font-bold text-center"
          >
            📞 Appeler maintenant
          </a>
        </div>
      )}
    </header>
  );
}
