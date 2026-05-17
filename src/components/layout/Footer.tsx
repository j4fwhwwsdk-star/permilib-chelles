import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { SCHOOL_NAME, ADDRESS, CITY, HORAIRES_CODE, HORAIRES_CONDUITE } from "@/lib/site";

const navLinks = [
  { href: "/formations",  label: "Formations" },
  { href: "/tarifs",      label: "Tarifs" },
  { href: "/financement", label: "Financement" },
  { href: "/faq",         label: "FAQ" },
  { href: "/avis",        label: "Avis" },
  { href: "/a-propos",    label: "À propos" },
  { href: "/contact",     label: "Contact" },
];

const IcoMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IcoShield = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0f172a", color: "#f8fafc" }}>
      {/* Ligne verte top */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

      {/* Orb décoratif */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(22,163,74,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.04) 0%, transparent 70%)", filter: "blur(30px)" }}
      />

      {/* ── Corps principal ── */}
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-10">

        {/* ── 4 colonnes ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* ── Colonne 1 : Identité ── */}
          <Reveal variant="left" className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 20px rgba(22,163,74,0.35)" }}
              >
                <span className="font-bebas text-white text-[14px] leading-none tracking-wide">PL</span>
              </div>
              <div>
                <div className="font-bebas text-[18px] tracking-wide leading-none text-white">{SCHOOL_NAME}</div>
                <div className="text-[9px] font-bold tracking-[0.18em] uppercase mt-0.5" style={{ color: "rgba(74,222,128,0.70)" }}>
                  Auto-École · {CITY}
                </div>
              </div>
            </div>

            <div className="h-px w-10 mb-5" style={{ background: "linear-gradient(90deg, #16a34a, #4ade80)" }} />

            <p className="text-sm leading-[1.75] mb-5" style={{ color: "rgba(255,255,255,0.40)" }}>
              Auto-école certifiée Qualiopi à {CITY}.<br />
              Permis B, conduite accompagnée, boîte automatique.
            </p>

            <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span style={{ color: "#4ade80" }}><IcoMapPin /></span>
              <span className="text-xs leading-relaxed">{ADDRESS}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.22)", color: "#4ade80" }}
              >
                <IcoShield /> Certifié Qualiopi
              </span>
            </div>
          </Reveal>

          {/* ── Colonne 2 : Horaires code ── */}
          <Reveal variant="bottom" className="md:col-span-1">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-1">Code de la route</h4>
            <div className="h-px w-8 mb-5" style={{ background: "linear-gradient(90deg, #16a34a, #4ade80)" }} />
            <div className="space-y-2.5">
              {HORAIRES_CODE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-3">
                  <span style={{ color: "rgba(255,255,255,0.42)" }}>{jour}</span>
                  <span className={`font-semibold text-right whitespace-pre-line leading-relaxed ${heures === "Fermé" ? "" : ""}`}
                    style={{ color: heures === "Fermé" ? "rgba(248,113,113,0.55)" : "#4ade80" }}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Colonne 3 : Horaires conduite ── */}
          <Reveal variant="bottom" className="md:col-span-1">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-1">Conduite</h4>
            <div className="h-px w-8 mb-5" style={{ background: "linear-gradient(90deg, #16a34a, #4ade80)" }} />
            <div className="space-y-2.5">
              {HORAIRES_CONDUITE.map(({ jour, heures }) => (
                <div key={jour} className="flex justify-between text-xs gap-3">
                  <span style={{ color: "rgba(255,255,255,0.42)" }}>{jour}</span>
                  <span className="font-semibold text-right whitespace-pre-line leading-relaxed"
                    style={{ color: heures === "Fermé" ? "rgba(248,113,113,0.55)" : "#4ade80" }}>
                    {heures}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Colonne 4 : Navigation ── */}
          <Reveal variant="right" className="md:col-span-1">
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.14em] mb-1">Navigation</h4>
            <div className="h-px w-8 mb-5" style={{ background: "linear-gradient(90deg, #16a34a, #4ade80)" }} />
            <nav className="space-y-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-0 text-sm hover:text-green-400 transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 inline-block shrink-0">
                    <span style={{ color: "#4ade80", fontSize: "11px" }}>→</span>
                  </span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <div className="divider-glow mb-6" />

        {/* ── Barre basse ── */}
        <Reveal variant="bottom" className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.22)" }}>
          <p>© {new Date().getFullYear()} {SCHOOL_NAME} — Tous droits réservés</p>
          <div className="flex items-center gap-5 flex-wrap justify-center md:justify-end">
            <Link href="/mentions-legales" className="hover:text-green-400/70 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-green-400/70 transition-colors duration-200">
              Confidentialité
            </Link>
            <Link href="/politique-cookies" className="hover:text-green-400/70 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
