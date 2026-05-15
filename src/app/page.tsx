import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import GoogleBadge from "@/components/ui/GoogleBadge";
import HeroSection from "@/components/sections/HeroSection";
import { buildMetadata } from "@/lib/metadata";
import {
  CITY, SCHOOL_NAME, PHONE,
  ADDRESS, HORAIRES_CODE, HORAIRES_CONDUITE,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: `Permis de conduire à ${CITY} — ${SCHOOL_NAME}`,
  description: `${SCHOOL_NAME} — auto-école à ${CITY}. Permis B, conduite accompagnée, boîte automatique. Financement CPF et aide Région IDF disponibles.`,
  path: "/",
});

/* ══ ICÔNES ══════════════════════════════════════════════════ */
const IcoPhone = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoStar = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IcoShield = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IcoCard = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);
const IcoBuilding = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
  </svg>
);
const IcoBolt = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IcoCar = ({ s = 26 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
    <circle cx="6.5" cy="16.5" r="2.5"/>
    <circle cx="16.5" cy="16.5" r="2.5"/>
  </svg>
);
const IcoGear = ({ s = 26 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IcoUsers = ({ s = 26 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IcoCheck = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IcoArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IcoClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

/* ══ MARQUEE ITEMS ════════════════════════════════════════════ */
const TRUST_ITEMS = [
  { icon: <IcoShield s={12} />, label: "Certification Qualiopi" },
  { icon: <IcoStar s={12} />,   label: "5/5 · avis vérifiés" },
  { icon: <IcoCard s={12} />,   label: "Financement CPF" },
  { icon: <IcoBuilding s={12}/>, label: "Aide IDF jusqu'à 1 000€" },
  { icon: <IcoBolt s={12} />,   label: "Véhicules récents 2024" },
  { icon: <IcoCar s={12} />,    label: "Permis B · AAC · Boîte auto" },
];

/* ══ PAGE ════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ╔══════════════════════════════════════════════════════╗
          ║  MARQUEE — défilement infini                         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section
        className="marquee-container overflow-hidden py-3.5"
        style={{
          background: "#1a3a58",
          borderTop:    "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="marquee-track">
          {/* Premier set visible */}
          {TRUST_ITEMS.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs font-medium shrink-0 mx-7"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              <span style={{ color: "rgba(34,197,94,0.65)" }}>{item.icon}</span>
              {item.label}
              <span
                className="inline-block w-px h-3 ml-5"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
            </span>
          ))}
          {/* Doublon pour le loop sans coupure */}
          {TRUST_ITEMS.map((item, i) => (
            <span
              key={`b-${i}`}
              aria-hidden="true"
              className="flex items-center gap-2 text-xs font-medium shrink-0 mx-7"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              <span style={{ color: "rgba(34,197,94,0.65)" }}>{item.icon}</span>
              {item.label}
              <span
                className="inline-block w-px h-3 ml-5"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
            </span>
          ))}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  BENTO GRID — stats + avantages fusionnés            ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="py-20 px-4" style={{ background: "#0e2644" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:[grid-auto-rows:170px]">

            {/* Grande cellule — 5★ Google (2 col × 2 row) */}
            <div
              className="col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between min-h-[200px]"
              style={{
                background: "linear-gradient(145deg, #132540 0%, #182c48 100%)",
                border:     "1px solid rgba(22,163,74,0.16)",
              }}
            >
              {/* Ligne glow top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.55) 50%, transparent)" }}
              />
              {/* Aurora */}
              <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <IcoStar key={i} s={15} />)}
                </div>
                <div
                  className="font-bebas leading-none mb-1"
                  style={{ fontSize: "clamp(52px, 8vw, 76px)", color: "#fff", textShadow: "0 0 30px rgba(34,197,94,0.35), 0 0 60px rgba(34,197,94,0.15)" }}
                >
                  <CountUp value="5" />/5
                </div>
                <div className="font-semibold text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>Note Google vérifiée</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>100% avis positifs</div>
              </div>

              <div className="relative z-10 mt-5">
                <GoogleBadge />
              </div>
            </div>

            {/* Qualiopi */}
            <div className="bento-cell rounded-2xl p-5 flex flex-col justify-between">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-auto"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)", color: "#4ade80" }}
              >
                <IcoShield s={16} />
              </div>
              <div className="mt-4">
                <div className="font-bold text-white text-sm">Qualiopi</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>Certification d'État</div>
              </div>
            </div>

            {/* CPF */}
            <div className="bento-cell rounded-2xl p-5 flex flex-col justify-between">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-auto"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)", color: "#4ade80" }}
              >
                <IcoCard s={16} />
              </div>
              <div className="mt-4">
                <div className="font-bold text-white text-sm">CPF & Aide IDF</div>
                <div className="text-xs mt-0.5 font-semibold" style={{ color: "#4ade80" }}>Jusqu'à 1 000€</div>
              </div>
            </div>

            {/* AAC */}
            <div className="bento-cell rounded-2xl p-5 flex flex-col justify-between">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-auto"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)", color: "#4ade80" }}
              >
                <IcoUsers s={16} />
              </div>
              <div className="mt-4">
                <div className="font-bold text-white text-sm">Conduite acc.</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>Permis dès 17 ans</div>
              </div>
            </div>

            {/* Simulateur */}
            <div className="bento-cell rounded-2xl p-5 flex flex-col justify-between">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-auto"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)", color: "#4ade80" }}
              >
                <IcoBolt s={16} />
              </div>
              <div className="mt-4">
                <div className="font-bold text-white text-sm">Simulateur</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>Inclus dans la formation</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  PÉDAGOGIE — split dark                              ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section style={{ background: "#1a3a58", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="grid md:grid-cols-2">

          {/* Photo */}
          <Reveal variant="left" className="relative h-72 md:h-auto min-h-[500px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=900&q=80"
              alt={`Moniteur ${SCHOOL_NAME}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Fondu droit vers la section texte */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, #080f1f)" }}
            />
            {/* Badge */}
            <div
              className="absolute bottom-6 left-6 hidden md:flex items-center gap-2 rounded-xl px-4 py-2.5"
              style={{
                background:           "rgba(8,15,31,0.88)",
                backdropFilter:       "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border:               "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ color: "#4ade80" }}><IcoShield s={15} /></span>
              <span className="text-white font-semibold text-sm">Certifié Qualiopi</span>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal variant="right" className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Notre pédagogie</span>
              </div>

              <h2 className="font-bebas text-[42px] md:text-[54px] text-white leading-none mb-5">
                Apprendre à conduire<br />
                avec les <span className="gradient-text-bright">meilleurs</span>
              </h2>
              <p className="mb-8 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.48)" }}>
                Chez {SCHOOL_NAME}, chaque élève bénéficie d&apos;un accompagnement sur mesure.
                Nos formateurs s&apos;adaptent à votre rythme dans un cadre bienveillant et professionnel.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Véhicules modernes et bien entretenus",
                  "Suivi pédagogique individualisé",
                  "Simulation de conduite incluse",
                  "Formation post-permis disponible",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ background: "#16a34a", boxShadow: "0 0 14px rgba(22,163,74,0.45)" }}
                    >
                      <IcoCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <IcoStar key={i} s={12} />)}
                </div>
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>5/5</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.30)" }}>— Meilleure auto-école de {CITY}</span>
              </div>

              <Link
                href="/a-propos"
                className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold text-sm hover:bg-green-700 transition-all duration-300"
                style={{ boxShadow: "0 8px 24px rgba(22,163,74,0.30)" }}
              >
                Découvrir l&apos;équipe <IcoArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  FORMATIONS — spotlight dark                         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "#0e2644", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Nos formations</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[60px] text-white leading-none">
                Choisissez votre<br /><span className="gradient-text-bright">formation</span>
              </h2>
            </div>
            <Link
              href="/formations"
              className="link-underline font-semibold text-sm shrink-0 flex items-center gap-2 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Toutes les formations <IcoArrow />
            </Link>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                icon: <IcoCar />,
                title: "Permis B Manuel",
                desc: "Formation complète avec suivi personnalisé, code inclus. Financements disponibles (CPF, aide IDF).",
                tag: "Le plus populaire",
              },
              {
                num: "02",
                icon: <IcoGear />,
                title: "Boîte Automatique",
                desc: "Idéal pour la conduite en ville. Formation en boîte automatique, plus rapide et confortable.",
                tag: "Pratique & rapide",
              },
              {
                num: "03",
                icon: <IcoUsers />,
                title: "Conduite Accompagnée",
                desc: "Dès 15 ans. 20h de formation initiale avec passage de l'examen possible dès 17 ans.",
                tag: "Dès 15 ans",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href="/formations"
                className="group card-dark relative rounded-2xl p-8 flex flex-col overflow-hidden"
              >
                {/* Ligne top glow au hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.45) 50%, transparent)" }}
                />

                {/* Numéro watermark */}
                <div
                  className="font-bebas text-[88px] leading-none mb-2 select-none -ml-1 -mt-4 transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.03)" }}
                >
                  {f.num}
                </div>

                {/* Tag */}
                <span
                  className="inline-flex w-fit text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{
                    color:      "#4ade80",
                    background: "rgba(22,163,74,0.10)",
                    border:     "1px solid rgba(22,163,74,0.20)",
                  }}
                >
                  {f.tag}
                </span>

                {/* Icône */}
                <div
                  className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit"
                  style={{ color: "#4ade80" }}
                >
                  {f.icon}
                </div>

                <h3 className="font-bold text-white text-lg mb-2.5">{f.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.42)" }}>{f.desc}</p>

                <div
                  className="mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  Voir la formation <IcoArrow />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  AVIS — dark cards                                   ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section
        className="py-24 px-4"
        style={{ background: "#1a3a58", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Témoignages</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[60px] text-white leading-none">
                Ils ont eu leur <span className="gradient-text-bright">permis</span>
              </h2>
            </div>
            <div className="shrink-0">
              <GoogleBadge />
            </div>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { name: "Marie L.",  note: 5, formation: "Permis B",            text: "Moniteurs très patients et pédagogues. J'ai obtenu mon permis du premier coup grâce à leur accompagnement. Je recommande vivement !" },
              { name: "Thomas R.", note: 5, formation: "Permis B",            text: "Très bonne expérience à Chelles. Les cours sont bien expliqués, l'ambiance est bienveillante. Bravo à toute l'équipe." },
              { name: "Sophie M.", note: 5, formation: "Conduite accompagnée", text: "Équipe professionnelle et disponible. Les horaires flexibles m'ont aidé à concilier travail et formation. Merci !" },
            ].map((a) => (
              <div
                key={a.name}
                className="card-dark relative rounded-2xl p-7 flex flex-col overflow-hidden group"
              >
                {/* Ligne top glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.38) 50%, transparent)" }}
                />

                {/* Guillemet déco */}
                <div
                  className="absolute top-5 right-6 font-bebas text-[64px] leading-none select-none transition-colors duration-300"
                  style={{ color: "rgba(34,197,94,0.06)" }}
                >
                  &ldquo;
                </div>

                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} s={13} />)}
                </div>

                <p className="text-sm leading-relaxed italic mb-6 flex-1 relative z-10" style={{ color: "rgba(255,255,255,0.48)" }}>
                  &ldquo;{a.text}&rdquo;
                </p>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 text-white rounded-xl flex items-center justify-center font-bold text-base shrink-0"
                      style={{ background: "#16a34a", boxShadow: "0 0 16px rgba(22,163,74,0.32)" }}
                    >
                      {a.name[0]}
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm block">{a.name}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>Élève vérifié</span>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      color:      "#4ade80",
                      background: "rgba(22,163,74,0.10)",
                      border:     "1px solid rgba(22,163,74,0.20)",
                    }}
                  >
                    {a.formation}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="bottom" className="text-center">
            <Link
              href="/avis"
              className="shine-btn inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-sm transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                color:  "rgba(255,255,255,0.55)",
              }}
            >
              Voir tous les avis <IcoArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  FINANCEMENT — dark                                  ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section
        className="py-24 px-4"
        style={{ background: "#0e2644", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <Reveal variant="left">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Financement</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[56px] text-white leading-none mb-5">
                On vous aide à<br /><span className="gradient-text-bright">financer votre permis</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.48)" }}>
                Plusieurs dispositifs existent pour financer votre formation à {CITY} :
                CPF, aide Région Île-de-France (jusqu'à 1 000€), permis à 1€/jour.
                Nous vous accompagnons dans toutes les démarches.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "CPF",             icon: <IcoCard s={14} /> },
                  { label: "Aide IDF 1 000€", icon: <IcoBuilding s={14} /> },
                  { label: "Permis 1€/jour",  icon: <IcoShield s={14} /> },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                    style={{
                      color:      "#4ade80",
                      background: "rgba(22,163,74,0.10)",
                      border:     "1px solid rgba(22,163,74,0.20)",
                    }}
                  >
                    {b.icon}{b.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/financement"
                  className="shine-btn bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold text-sm text-center hover:bg-green-700 transition-all duration-300"
                  style={{ boxShadow: "0 8px 24px rgba(22,163,74,0.30)" }}
                >
                  Voir toutes les options →
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color:  "rgba(255,255,255,0.55)",
                  }}
                >
                  <IcoPhone /> Nous appeler
                </a>
              </div>
            </Reveal>

            {/* Cartes flottantes */}
            <Reveal variant="right" className="flex justify-center">
              <div className="relative w-[280px] h-[280px]">
                {/* Carte centrale */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 card-dark rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-2 animate-float"
                  style={{ border: "1px solid rgba(22,163,74,0.22)" }}
                >
                  <span style={{ color: "#4ade80" }}><IcoCard s={28} /></span>
                  <span className="text-white font-bold text-sm">CPF</span>
                  <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Sans avance</span>
                </div>
                {/* Haut gauche */}
                <div
                  className="absolute top-0 left-0 card-dark rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-1.5 animate-float"
                  style={{ animationDelay: "0.8s" }}
                >
                  <span style={{ color: "#4ade80" }}><IcoBuilding s={22} /></span>
                  <span className="text-white font-bold text-xs">Aide IDF</span>
                  <span className="text-xs font-semibold" style={{ color: "#4ade80" }}>1 000€</span>
                </div>
                {/* Bas droite */}
                <div
                  className="absolute bottom-0 right-0 card-dark rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-1.5 animate-float"
                  style={{ animationDelay: "1.4s" }}
                >
                  <span style={{ color: "#4ade80" }}><IcoShield s={22} /></span>
                  <span className="text-white font-bold text-xs">Permis</span>
                  <span className="text-xs font-semibold" style={{ color: "#4ade80" }}>1€/jour</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  HORAIRES — dark, table propre                       ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section
        className="py-20 px-4"
        style={{ background: "#1a3a58", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Horaires</span>
              <div className="h-px w-8 bg-green-500" />
            </div>
            <h2 className="font-bebas text-[40px] md:text-[56px] text-white leading-none mb-3">
              Quand nous <span className="gradient-text-bright">trouver ?</span>
            </h2>
            <p className="text-sm flex items-center justify-center gap-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              <IcoClock /> {SCHOOL_NAME} — {ADDRESS}
            </p>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-2 gap-5 mb-10">

            {/* Code */}
            <div className="card-dark rounded-2xl p-7">
              <div
                className="flex items-center gap-3 mb-5 pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#16a34a", boxShadow: "0 0 16px rgba(22,163,74,0.38)" }}
                >
                  <span className="text-white text-[10px] font-bold tracking-wide">CODE</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Cours de Code</h3>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>Apprentissage du code de la route</p>
                </div>
              </div>
              {HORAIRES_CODE.map(({ jour, heures }) => (
                <div
                  key={jour}
                  className="flex justify-between items-center text-sm py-2.5 last:pb-0"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <span className="font-medium" style={{ color: "rgba(255,255,255,0.48)" }}>{jour}</span>
                  <span className={`font-bold text-right whitespace-pre-line text-xs leading-relaxed ${
                    heures === "Fermé" ? "" : ""
                  }`}
                    style={{ color: heures === "Fermé" ? "rgba(248,113,113,0.65)" : "#4ade80" }}
                  >
                    {heures}
                  </span>
                </div>
              ))}
            </div>

            {/* Conduite */}
            <div className="card-dark rounded-2xl p-7">
              <div
                className="flex items-center gap-3 mb-5 pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border:     "1px solid rgba(255,255,255,0.08)",
                    color:      "rgba(255,255,255,0.65)",
                  }}
                >
                  <IcoCar s={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Conduite</h3>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>Leçons de conduite sur route</p>
                </div>
              </div>
              {HORAIRES_CONDUITE.map(({ jour, heures }) => (
                <div
                  key={jour}
                  className="flex justify-between items-center text-sm py-2.5 last:pb-0"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <span className="font-medium" style={{ color: "rgba(255,255,255,0.48)" }}>{jour}</span>
                  <span
                    className="font-bold text-right whitespace-pre-line text-xs leading-relaxed"
                    style={{ color: heures === "Fermé" ? "rgba(248,113,113,0.65)" : "#4ade80" }}
                  >
                    {heures}
                  </span>
                </div>
              ))}
            </div>

          </Reveal>

          <Reveal variant="bottom" className="text-center">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center gap-2.5 rounded-xl px-8 py-4 font-bold text-sm text-white transition-all duration-300 hover:bg-green-600 hover:border-green-600"
              style={{
                background: "rgba(255,255,255,0.05)",
                border:     "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <IcoPhone s={16} /> {PHONE} — Prendre rendez-vous
            </a>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  CTA FINAL — mesh gradient dramatique                ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="relative py-28 px-4 overflow-hidden bg-mesh-cta">
        <div className="absolute inset-0 bg-grid opacity-[0.14] pointer-events-none" />

        <Reveal variant="scale" className="relative z-10 max-w-4xl mx-auto text-center">

          {/* Badge live */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{
              border:     "1px solid rgba(22,163,74,0.22)",
              background: "rgba(22,163,74,0.10)",
            }}
          >
            <span className="dot-live" />
            <span className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: "#4ade80" }}>
              Disponible maintenant
            </span>
          </div>

          <h2 className="font-bebas text-[52px] md:text-[80px] text-white leading-none mb-4">
            Prêt à passer<br />
            <span className="gradient-text-bright">votre permis ?</span>
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.42)" }}>
            Devis gratuit · CPF · Aide IDF · Permis 1€/jour
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn bg-green-600 text-white rounded-xl px-8 py-4 font-bold text-base text-center hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.42)" }}
            >
              <IcoPhone /> {PHONE}
            </a>
            <Link
              href="/contact"
              className="rounded-xl px-8 py-4 font-semibold text-base text-center transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color:  "rgba(255,255,255,0.65)",
              }}
            >
              Nous contacter →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
