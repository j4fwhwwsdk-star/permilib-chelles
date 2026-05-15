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

/* ══ PAGE ════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ╔══════════════════════════════════════════════════════╗
          ║  TRUST BAR — fond très sombre                        ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="bg-[#0f172a] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-5 gap-y-2">
          {[
            { icon: <IcoShield s={14} />, label: "Certification Qualiopi" },
            { icon: <IcoStar s={14} />,   label: "5/5 · avis vérifiés" },
            { icon: <IcoCard s={14} />,   label: "Financement CPF" },
            { icon: <IcoBuilding s={14}/>, label: "Aide IDF jusqu'à 1 000€" },
            { icon: <IcoBolt s={14} />,   label: "Véhicules récents" },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-white/45 text-xs font-medium hover:text-white/75 transition-colors duration-200">
              <span className="text-green-500">{item.icon}</span>
              {item.label}
              {i < 4 && <span className="hidden md:inline w-px h-3 bg-white/10 ml-3" />}
            </span>
          ))}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  STATS — fond blanc, chiffres en vert animés         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

        <Reveal stagger className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "5",   suffix: "/5",  label: "Note Google vérifiée",  sub: "100% avis positifs" },
            { value: "AAC", suffix: "",    label: "Conduite accompagnée",  sub: "Dès 15 ans" },
            { value: "CPF", suffix: "",    label: "Financement disponible", sub: "Sans avance de frais" },
            { value: "100", suffix: "%",   label: "Indice de confiance",   sub: "Qualiopi certifié" },
          ].map((s) => (
            <div
              key={s.label}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-100 transition-all duration-500 text-center px-4 md:px-8 py-8 card-glow relative overflow-hidden"
            >
              {/* Ligne verte en haut au hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="font-bebas text-[58px] md:text-[72px] leading-none text-green-600 mb-2">
                <CountUp value={s.value} />{s.suffix}
              </div>
              <div className="font-semibold text-gray-800 text-sm">{s.label}</div>
              <div className="text-gray-400 text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  SPLIT — fond gris très clair, texte + photo         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="bg-gray-50">
        <div className="grid md:grid-cols-2">

          {/* Photo */}
          <Reveal variant="left" className="relative h-72 md:h-auto min-h-[500px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=900&q=80"
              alt={`Moniteur ${SCHOOL_NAME}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge sur photo */}
            <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-compat rounded-xl px-4 py-2.5 shadow-lg border border-gray-100">
              <span className="text-green-600"><IcoShield s={15} /></span>
              <span className="text-gray-900 font-semibold text-sm">Certifié Qualiopi</span>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal variant="right" className="flex items-center px-8 md:px-16 py-16 bg-gray-50">
            <div className="max-w-lg">
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-bold tracking-[0.15em] uppercase">Notre pédagogie</span>
              </div>

              <h2 className="font-bebas text-[42px] md:text-[54px] text-gray-900 leading-none mb-5">
                Apprendre à conduire<br />
                avec les <span className="gradient-text">meilleurs</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
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
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-green-200">
                      <IcoCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note visuelle */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <IcoStar key={i} s={12} />)}
                </div>
                <span className="text-gray-600 text-sm font-semibold">5/5</span>
                <span className="text-gray-400 text-sm">— Meilleure auto-école de {CITY}</span>
              </div>

              <Link
                href="/a-propos"
                className="fill-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold text-sm hover:bg-green-700 transition-all duration-300 shadow-md shadow-green-100"
              >
                Découvrir l&apos;équipe <IcoArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  FORMATIONS — fond blanc, cartes éditoriales         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-bold tracking-[0.15em] uppercase">Nos formations</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[60px] text-gray-900 leading-none">
                Choisissez votre<br /><span className="gradient-text">formation</span>
              </h2>
            </div>
            <Link
              href="/formations"
              className="link-underline text-gray-600 font-semibold text-sm shrink-0 flex items-center gap-2 hover:text-green-600 transition-colors duration-200"
            >
              Toutes les formations <IcoArrow />
            </Link>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
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
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden card-lift flex flex-col"
              >
                {/* Barre verte qui se dessine en haut */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Numéro filigrane */}
                <div className="font-bebas text-[88px] text-gray-100 group-hover:text-green-50 transition-colors duration-300 leading-none mb-3 select-none -ml-1">
                  {f.num}
                </div>

                {/* Tag */}
                <span className="inline-flex w-fit text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-4">
                  {f.tag}
                </span>

                {/* Icône */}
                <div className="text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {f.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2.5 group-hover:text-green-700 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-gray-300 group-hover:text-green-600 text-sm font-semibold transition-all duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                    Voir la formation <IcoArrow />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  POURQUOI NOUS — fond très sombre                    ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 px-4 bg-[#0f172a] overflow-hidden">
        {/* Image fond très assombrie */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
            alt="Route"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Nos avantages</span>
            </div>
            <h2 className="font-bebas text-[42px] md:text-[60px] text-white leading-none mb-14">
              Pourquoi choisir<br />
              <span className="gradient-text-bright">{SCHOOL_NAME} ?</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <IcoShield s={20} />, title: "Qualiopi",     desc: "Certification officielle de qualité pédagogique, reconnue par l'État." },
              { icon: <IcoCard s={20} />,   title: "CPF & Aide IDF", desc: "Jusqu'à 1 000€ d'aide région + CPF. Démarches entièrement accompagnées." },
              { icon: <IcoStar s={20} />,   title: "5/5 Google",   desc: "100% d'indice de confiance. Avis authentiques et vérifiés." },
              { icon: <IcoBolt s={20} />,   title: "Simulateur",   desc: "Accès à notre simulateur pour progresser avant les heures de route." },
            ].map((r) => (
              <div
                key={r.title}
                className="group relative border border-white/8 rounded-2xl p-6 hover:border-green-500/25 transition-all duration-400 hover:bg-white/3"
              >
                {/* Ligne verte en haut au hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Icône */}
                <div className="w-10 h-10 rounded-xl bg-green-600/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-5 group-hover:bg-green-600/20 transition-colors duration-300">
                  {r.icon}
                </div>

                <h3 className="font-bold text-white text-base mb-2">{r.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{r.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  AVIS — fond gris très clair                         ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-bold tracking-[0.15em] uppercase">Témoignages</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[60px] text-gray-900 leading-none">
                Ils ont eu leur <span className="gradient-text">permis</span>
              </h2>
            </div>
            <div className="shrink-0">
              <GoogleBadge />
            </div>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Marie L.",  note: 5, formation: "Permis B",           text: "Moniteurs très patients et pédagogues. J'ai obtenu mon permis du premier coup grâce à leur accompagnement. Je recommande vivement !" },
              { name: "Thomas R.", note: 5, formation: "Permis B",           text: "Très bonne expérience à Chelles. Les cours sont bien expliqués, l'ambiance est bienveillante. Bravo à toute l'équipe." },
              { name: "Sophie M.", note: 5, formation: "Conduite accompagnée", text: "Équipe professionnelle et disponible. Les horaires flexibles m'ont aidé à concilier travail et formation. Merci !" },
            ].map((a) => (
              <div
                key={a.name}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 card-glow relative overflow-hidden flex flex-col"
              >
                {/* Ligne verte basse au hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Guillemet décoratif */}
                <div className="absolute top-5 right-6 font-bebas text-[72px] leading-none text-gray-100 select-none group-hover:text-green-50 transition-colors duration-300">
                  &ldquo;
                </div>

                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} s={13} />)}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed italic mb-6 flex-1">
                  &ldquo;{a.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-base shrink-0">
                      {a.name[0]}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm block">{a.name}</span>
                      <span className="text-xs text-gray-400">Élève vérifié</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full font-semibold">
                    {a.formation}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="bottom" className="text-center">
            <Link
              href="/avis"
              className="fill-btn inline-flex items-center gap-2 border border-gray-200 text-gray-700 bg-white rounded-xl px-8 py-3.5 font-semibold text-sm hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm"
            >
              Voir tous les avis <IcoArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  FINANCEMENT — fond blanc                            ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <Reveal variant="left">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-bold tracking-[0.15em] uppercase">Financement</span>
              </div>
              <h2 className="font-bebas text-[42px] md:text-[56px] text-gray-900 leading-none mb-5">
                On vous aide à<br /><span className="gradient-text">financer votre permis</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Plusieurs dispositifs existent pour financer votre formation à {CITY} :
                CPF, aide Région Île-de-France (jusqu'à 1 000€), permis à 1€/jour.
                Nous vous accompagnons dans toutes les démarches.
              </p>

              {/* Badges financement */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "CPF",             icon: <IcoCard s={14} /> },
                  { label: "Aide IDF 1 000€", icon: <IcoBuilding s={14} /> },
                  { label: "Permis 1€/jour",  icon: <IcoShield s={14} /> },
                ].map((b) => (
                  <span key={b.label} className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-full hover:bg-green-100 transition-colors duration-200">
                    <span className="text-green-500">{b.icon}</span>{b.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/financement"
                  className="shine-btn bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold text-sm text-center hover:bg-green-700 transition-all duration-300 shadow-md shadow-green-100 hover:-translate-y-0.5"
                >
                  Voir toutes les options →
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="border border-gray-200 text-gray-700 rounded-xl px-7 py-3.5 font-semibold text-sm text-center hover:border-green-600 hover:text-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <IcoPhone /> Nous appeler
                </a>
              </div>
            </Reveal>

            {/* Visuel droit — cartes flottantes */}
            <Reveal variant="right" className="flex justify-center">
              <div className="relative w-[280px] h-[280px]">
                {/* Carte centrale */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-2xl shadow-xl border border-gray-100 w-36 h-36 flex flex-col items-center justify-center gap-2 animate-float">
                  <span className="text-green-600"><IcoCard s={28} /></span>
                  <span className="text-green-700 font-bold text-sm">CPF</span>
                  <span className="text-gray-400 text-[10px] font-medium">Sans avance</span>
                </div>
                {/* Carte haut-gauche */}
                <div className="absolute top-0 left-0 bg-gray-50 border border-gray-100 rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-1.5 shadow-md animate-float" style={{ animationDelay: "0.8s" }}>
                  <span className="text-green-600"><IcoBuilding s={22} /></span>
                  <span className="text-gray-700 font-bold text-xs">Aide IDF</span>
                  <span className="text-green-600 text-[10px] font-semibold">1 000€</span>
                </div>
                {/* Carte bas-droite */}
                <div className="absolute bottom-0 right-0 bg-gray-50 border border-gray-100 rounded-2xl w-28 h-28 flex flex-col items-center justify-center gap-1.5 shadow-md animate-float" style={{ animationDelay: "1.4s" }}>
                  <span className="text-green-600"><IcoShield s={22} /></span>
                  <span className="text-gray-700 font-bold text-xs">Permis</span>
                  <span className="text-green-600 text-[10px] font-semibold">1€/jour</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  HORAIRES — fond blanc propre                        ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-600 text-xs font-bold tracking-[0.15em] uppercase">Horaires</span>
              <div className="h-px w-8 bg-green-500" />
            </div>
            <h2 className="font-bebas text-[40px] md:text-[56px] text-gray-900 leading-none mb-3">
              Quand nous <span className="gradient-text">trouver ?</span>
            </h2>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1.5">
              <IcoClock /> {SCHOOL_NAME} — {ADDRESS}
            </p>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Code */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-green-100 hover:shadow-md transition-all duration-400">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-50">
                <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-wide">CODE</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Cours de Code</h3>
                  <p className="text-gray-400 text-xs">Apprentissage du code de la route</p>
                </div>
              </div>
              <div className="space-y-0">
                {HORAIRES_CODE.map(({ jour, heures }) => (
                  <div key={jour} className="flex justify-between items-center text-sm py-2.5 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 font-medium">{jour}</span>
                    <span className={heures === "Fermé"
                      ? "text-red-400 font-semibold text-xs"
                      : "text-green-700 font-bold text-right whitespace-pre-line text-xs leading-relaxed"
                    }>
                      {heures}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conduite */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-green-100 hover:shadow-md transition-all duration-400">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-50">
                <div className="w-9 h-9 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                  <IcoCar s={18} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Conduite</h3>
                  <p className="text-gray-400 text-xs">Leçons de conduite sur route</p>
                </div>
              </div>
              <div className="space-y-0">
                {HORAIRES_CONDUITE.map(({ jour, heures }) => (
                  <div key={jour} className="flex justify-between items-center text-sm py-2.5 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 font-medium">{jour}</span>
                    <span className={heures === "Fermé"
                      ? "text-red-400 font-semibold text-xs"
                      : "text-green-700 font-bold text-right whitespace-pre-line text-xs leading-relaxed"
                    }>
                      {heures}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="bottom" className="text-center">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center gap-2.5 bg-gray-900 text-white rounded-xl px-8 py-4 font-bold text-sm hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <IcoPhone s={16} /> {PHONE} — Prendre rendez-vous
            </a>
          </Reveal>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════╗
          ║  CTA FINAL — fond très sombre                        ║
          ╚══════════════════════════════════════════════════════╝ */}
      <section className="relative py-24 px-4 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        {/* Accent vert en coin */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-600/6 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-green-600/5 blur-3xl pointer-events-none" />

        <Reveal variant="scale" className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Commencez maintenant</span>
            </div>
            <h2 className="font-bebas text-[50px] md:text-[72px] text-white leading-none mb-3">
              Prêt à commencer ?
            </h2>
            <p className="text-white/45 text-base">
              Devis gratuit · CPF · Aide IDF · Permis 1€/jour
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn bg-green-600 text-white rounded-xl px-8 py-4 font-bold text-base text-center hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <IcoPhone /> {PHONE}
            </a>
            <Link
              href="/contact"
              className="border border-white/15 text-white/80 rounded-xl px-8 py-4 font-semibold text-base text-center hover:bg-white/8 hover:text-white hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Nous contacter →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
