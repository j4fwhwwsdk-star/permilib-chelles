import Link from "next/link";
import { SCHOOL_NAME, PHONE, ADDRESS, CITY, HORAIRES_CODE, HORAIRES_CONDUITE } from "@/lib/site";

const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/financement", label: "Financement" },
  { href: "/faq", label: "FAQ" },
  { href: "/avis", label: "Avis" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1f4a] text-white">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Colonne 1 : Identité */}
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-1">{SCHOOL_NAME}</div>
            <div className="w-10 h-1 bg-[#f97316] rounded-full mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Auto-école certifiée Qualiopi à {CITY}.<br />
              Permis B, conduite accompagnée, boîte automatique.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#f97316] text-white rounded-xl px-5 py-3 font-bold text-sm hover:bg-orange-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">{ADDRESS}</p>
          </div>

          {/* Colonne 2 : Horaires */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">Horaires</h4>
            <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5" />

            <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Code</p>
            <div className="space-y-1.5 mb-5">
              {HORAIRES_CODE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-4">
                  <span className="text-white/60">{jour}</span>
                  <span className={heures === "Fermé" ? "text-red-400 font-medium" : "text-white font-semibold text-right whitespace-pre-line"}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">Conduite</p>
            <div className="space-y-1.5">
              {HORAIRES_CONDUITE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-4">
                  <span className="text-white/60">{jour}</span>
                  <span className={heures === "Fermé" ? "text-red-400 font-medium" : "text-white font-semibold text-right whitespace-pre-line"}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 3 : Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">Navigation</h4>
            <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5" />
            <nav className="space-y-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-white/60 text-sm hover:text-[#f97316] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Barre basse */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME} — Tous droits réservés</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/70 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
