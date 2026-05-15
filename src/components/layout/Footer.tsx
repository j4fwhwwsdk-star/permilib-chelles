import Link from "next/link";
import { SCHOOL_NAME, PHONE, ADDRESS, CITY, HORAIRES_CODE, HORAIRES_CONDUITE } from "@/lib/site";

const navLinks = [
  { href: "/formations",  label: "Formations" },
  { href: "/tarifs",      label: "Tarifs" },
  { href: "/financement", label: "Financement" },
  { href: "/faq",         label: "FAQ" },
  { href: "/avis",        label: "Avis" },
  { href: "/a-propos",    label: "À propos" },
  { href: "/contact",     label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0e2644" }}>
      {/* Ligne verte en haut */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* ── Colonne 1 : Identité ── */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="font-bebas text-white text-[13px] leading-none tracking-wide">PL</span>
              </div>
              <div>
                <div className="font-bebas text-[18px] tracking-wide leading-none">{SCHOOL_NAME}</div>
                <div className="text-[9px] text-green-400/70 font-bold tracking-[0.18em] uppercase mt-0.5">Auto-École · {CITY}</div>
              </div>
            </div>

            <div className="h-px w-10 bg-green-500 mb-5" />

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Auto-école certifiée Qualiopi à {CITY}.<br />
              Permis B, conduite accompagnée, boîte automatique.<br />
              Financement CPF & aide IDF disponibles.
            </p>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-5 py-3 font-bold text-sm hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-green-900/40 hover:-translate-y-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>

            <p className="text-white/25 text-xs mt-4 leading-relaxed">{ADDRESS}</p>
          </div>

          {/* ── Colonne 2 : Horaires ── */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-[0.12em] mb-1">Horaires</h4>
            <div className="h-px w-8 bg-green-500 mb-6" />

            <p className="text-green-400/60 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Cours de Code</p>
            <div className="space-y-2 mb-6">
              {HORAIRES_CODE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-4">
                  <span className="text-white/40">{jour}</span>
                  <span className={heures === "Fermé" ? "text-red-400/70 font-medium" : "text-green-400 font-semibold text-right whitespace-pre-line"}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-green-400/60 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Conduite</p>
            <div className="space-y-2">
              {HORAIRES_CONDUITE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-4">
                  <span className="text-white/40">{jour}</span>
                  <span className={heures === "Fermé" ? "text-red-400/70 font-medium" : "text-green-400 font-semibold text-right whitespace-pre-line"}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne 3 : Navigation ── */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-[0.12em] mb-1">Navigation</h4>
            <div className="h-px w-8 bg-green-500 mb-6" />
            <nav className="space-y-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-0 text-white/40 text-sm hover:text-green-400 transition-all duration-200"
                >
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 inline-block">
                    <span className="text-green-500 text-xs">→</span>
                  </span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Barre basse */}
        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/25 text-xs">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME} — Tous droits réservés</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-green-400/70 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-green-400/70 transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
