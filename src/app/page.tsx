import Image from "next/image";
import Link from "next/link";
import GoogleBadge from "@/components/ui/GoogleBadge";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { CITY, SCHOOL_NAME, PHONE, WHATSAPP } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Auto-école à ${CITY}`,
  description: `${SCHOOL_NAME} — auto-école à ${CITY}. Permis B, conduite accompagnée, boîte automatique, AAC. Financement CPF disponible.`,
  path: "/",
});

/* ── Icônes SVG inline ─────────────────────────────────────── */
const IcoShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IcoStar = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IcoCard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const IcoBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
  </svg>
);

const IcoBolt = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IcoCar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
    <circle cx="6.5" cy="16.5" r="2.5"/>
    <circle cx="16.5" cy="16.5" r="2.5"/>
  </svg>
);

const IcoGear = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const IcoUsers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IcoPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IcoChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex items-center min-h-viewport overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=85"
            alt={`Route - ${SCHOOL_NAME} ${CITY}`}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay dégradé */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Contenu */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full py-32">
          {/* Badge sobre */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-compat border border-white/20 text-white text-xs font-bold px-5 py-2.5 rounded-full mb-8 tracking-widest uppercase animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] inline-block animate-pulse-glow" />
            Auto-école certifiée Qualiopi · {CITY}
          </div>

          {/* Titre */}
          <h1 className="font-bebas text-[72px] sm:text-[90px] md:text-[120px] leading-none text-white mb-6 max-w-4xl animate-slideInLeft">
            Votre permis à{" "}
            <span className="gradient-text">{CITY}</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-lg leading-relaxed animate-fadeIn">
            {SCHOOL_NAME} — formateurs certifiés, accompagnement personnalisé.
            Financement CPF et aide Région IDF disponibles.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl px-8 py-4 font-bold text-lg text-center shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <IcoPhone /> Appeler maintenant
            </a>
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-compat text-white border border-white/30 rounded-xl px-8 py-4 font-bold text-lg text-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <IcoChat /> WhatsApp
            </a>
          </div>

          <div className="animate-fadeIn">
            <GoogleBadge />
          </div>

          {/* Badge flottant avis */}
          <div className="absolute bottom-10 right-6 md:right-12 animate-float">
            <div className="bg-white/10 backdrop-blur-compat border border-white/20 rounded-2xl px-5 py-4 text-white text-center shadow-2xl">
              <div className="font-bebas text-[36px] leading-none gradient-text">5/5</div>
              <div className="text-white/80 text-xs font-medium mt-1">sur Google</div>
              <div className="flex items-center justify-center gap-0.5 text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => <IcoStar key={i} size={10} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/50 animate-bounce-slow">
          <span className="text-xs tracking-widest uppercase font-medium">Découvrir</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-[#0f172a] py-4 px-4 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-2 text-sm font-medium">
          {[
            { icon: <IcoShield />, label: "Certification Qualiopi" },
            { icon: <IcoStar />,   label: "5/5 · avis vérifiés" },
            { icon: <IcoCard />,   label: "Financement CPF" },
            { icon: <IcoBuilding />, label: "Aide IDF jusqu'à 1 000€" },
            { icon: <IcoBolt />,   label: "Véhicule électrique" },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <span className="text-[#2563eb]">{item.icon}</span>
              {item.label}
              {i < 4 && <span className="hidden md:inline text-white/20 ml-6">|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <Reveal stagger className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "5/5",  label: "Note Google\nvérifiée" },
            { value: "AAC",  label: "Conduite\naccompagnée" },
            { value: "CPF",  label: "Financement\ndisponible" },
            { value: "100%", label: "Indice de\nconfiance" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center px-4 md:px-8 py-8 card-lift"
            >
              <div className="font-bebas text-[64px] md:text-[80px] gradient-text leading-none">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm mt-2 whitespace-pre-line leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ─── SPLIT : photo + texte ─── */}
      <section className="bg-[#f8fafc]">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <Reveal variant="left" className="relative h-72 md:h-auto min-h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=900&q=80"
              alt={`Moniteur de conduite ${SCHOOL_NAME}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f8fafc] hidden md:block" />
          </Reveal>

          {/* Texte */}
          <Reveal variant="right" className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-lg">
              <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-4">
                Notre pédagogie
              </p>
              <h2 className="font-bebas text-[44px] md:text-[56px] text-gray-900 leading-tight mb-6">
                Apprendre à conduire avec les meilleurs
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Chez {SCHOOL_NAME}, chaque élève bénéficie d'un suivi
                personnalisé. Nos formateurs certifiés s'adaptent à votre rythme dans une
                atmosphère bienveillante.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Véhicules modernes et bien entretenus",
                  "Suivi pédagogique personnalisé",
                  "Formation post-permis disponible",
                  "Simulateur de conduite",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-xs shrink-0 shadow-md shadow-blue-200">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 mb-8 w-fit">
                <div>
                  <p className="text-[#2563eb] font-bold text-sm">Note 5/5 · 100% indice de confiance</p>
                  <p className="text-blue-400 text-xs">une des meilleures auto-écoles de {CITY}</p>
                </div>
              </div>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-8 py-3 font-bold hover:bg-gray-700 transition-all duration-300"
              >
                Découvrir l'équipe →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FORMATIONS ─── */}
      <section className="relative py-24 px-4 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
                Formations
              </p>
              <h2 className="font-bebas text-[44px] md:text-[60px] text-gray-900 leading-none">
                Choisissez votre formation
              </h2>
            </div>
            <Link
              href="/formations"
              className="text-[#2563eb] font-bold hover:underline shrink-0 flex items-center gap-1 hover:gap-2 transition-all duration-200"
            >
              Toutes les formations →
            </Link>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: <IcoCar />,
                title: "Permis B Manuel",
                desc: "Formation complète avec suivi personnalisé, code inclus. Devis sur demande.",
                href: "/formations",
              },
              {
                num: "02",
                icon: <IcoGear />,
                title: "Permis B Automatique",
                desc: "Formation en boîte automatique, idéale pour la ville. Devis sur demande.",
                href: "/formations",
              },
              {
                num: "03",
                icon: <IcoUsers />,
                title: "Conduite Accompagnée",
                desc: "Dès 15 ans. 20h de formation initiale, examen possible à 17 ans.",
                href: "/formations",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden card-lift flex flex-col"
              >
                {/* Barre colorée au hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

                {/* Numéro en filigrane */}
                <div className="font-bebas text-[80px] text-gray-100 group-hover:text-blue-50 transition-colors leading-none mb-2 select-none -ml-2">
                  {f.num}
                </div>

                <div className="text-[#2563eb] mb-3">{f.icon}</div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-[#2563eb] transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>

                <div className="mt-6 flex items-center justify-end">
                  <span className="text-gray-300 group-hover:text-[#2563eb] font-bold text-lg transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
            alt="Route ouverte"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-4">
              Pourquoi nous ?
            </p>
            <h2 className="font-bebas text-[44px] md:text-[60px] text-white leading-none mb-12">
              Une auto-école qui fait la différence
            </h2>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <IcoShield />,
                title: "Qualiopi",
                desc: "Certification officielle de qualité pédagogique reconnue par l'État.",
              },
              {
                icon: <IcoCard />,
                title: "CPF & Aide IDF",
                desc: "Jusqu'à 1 000€ d'aide région + financement CPF. Démarches accompagnées.",
              },
              {
                icon: <IcoStar />,
                title: "5/5 sur Google",
                desc: "100% d'indice de confiance. Tous nos avis sont vérifiés.",
              },
              {
                icon: <IcoBolt />,
                title: "Simulateur",
                desc: "Accès à notre simulateur de conduite pour pratiquer en toute sécurité.",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="group relative bg-white/5 backdrop-blur-compat border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-t-2xl" />
                <div className="text-white/70 mb-4">{r.icon}</div>
                <h3 className="font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── AVIS ─── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
                Témoignages
              </p>
              <h2 className="font-bebas text-[44px] md:text-[60px] text-gray-900 leading-none">
                Ils ont eu leur permis
              </h2>
            </div>
            <div className="shrink-0">
              <GoogleBadge />
            </div>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Marie L.",
                text: "Super auto-école ! Moniteurs très patients et pédagogues. J'ai eu mon permis du premier coup.",
                note: 5,
                formation: "Permis B",
              },
              {
                name: "Thomas R.",
                text: "Très bonne expérience. Les cours de code sont bien expliqués. Je recommande vivement.",
                note: 5,
                formation: "Permis B",
              },
              {
                name: "Sophie M.",
                text: "Équipe sympathique et professionnelle. Les horaires flexibles m'ont vraiment aidé.",
                note: 5,
                formation: "Conduite Accompagnée",
              },
            ].map((a) => (
              <div
                key={a.name}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 card-lift relative overflow-hidden"
              >
                {/* Grand guillemet décoratif */}
                <div className="absolute top-4 right-6 font-bebas text-[80px] leading-none text-blue-50 select-none group-hover:text-blue-100 transition-colors">
                  &ldquo;
                </div>

                <div className="flex gap-0.5 text-yellow-400 mb-4 relative z-10">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} size={14} />)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic relative z-10">
                  &ldquo;{a.text}&rdquo;
                </p>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-blue-200">
                      {a.name[0]}
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-sm block">{a.name}</span>
                      <span className="text-xs text-gray-400">Élève vérifié</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#2563eb] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full font-medium">
                    {a.formation}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="bottom" className="text-center">
            <Link
              href="/avis"
              className="shine-btn inline-block border-2 border-gray-900 text-gray-900 rounded-xl px-8 py-3 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Voir tous les avis →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── FINANCEMENT TEASER ─── */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white border-t border-blue-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <Reveal variant="left" className="flex-1">
            <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
              Financement
            </p>
            <h2 className="font-bebas text-[36px] md:text-[52px] text-gray-900 leading-tight mb-4">
              Votre permis, on vous aide à le financer
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              CPF, aide Région Île-de-France (jusqu'à 1 000€), permis à 1€/jour — plusieurs
              solutions existent pour financer votre formation.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["CPF", "Aide IDF · 1 000€", "Permis 1€/jour"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 border border-blue-200 rounded-full px-4 py-2 text-sm font-bold"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/financement"
                className="shine-btn bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl px-8 py-3 font-bold text-center shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300"
              >
                Voir les options →
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="border-2 border-gray-200 text-gray-700 rounded-xl px-8 py-3 font-bold text-center hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IcoPhone /> Nous appeler
              </a>
            </div>
          </Reveal>

          {/* Cartes visuelles sans emoji */}
          <Reveal variant="right" className="shrink-0 flex flex-col gap-4 items-center">
            <div className="animate-float">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-blue-100 flex flex-col items-center justify-center gap-1">
                <span className="text-blue-600"><IcoCard /></span>
                <span className="text-[10px] font-bold text-blue-600 tracking-wide">CPF</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center justify-center gap-1">
                <span className="text-blue-600"><IcoBuilding /></span>
                <span className="text-[9px] font-bold text-blue-600">IDF</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl shadow-md border border-violet-100 flex flex-col items-center justify-center gap-1">
                <span className="text-violet-600"><IcoShield /></span>
                <span className="text-[9px] font-bold text-violet-600">Qualité</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#7c3aed]" />
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <Reveal variant="scale" className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-2">
              Prêt à commencer ?
            </h2>
            <p className="text-blue-100 text-lg">
              Devis gratuit · CPF · Aide IDF · Permis 1€/jour
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn bg-white text-[#2563eb] rounded-xl px-8 py-4 font-bold text-lg text-center hover:bg-blue-50 shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-[#2563eb]"><IcoPhone /></span> {PHONE}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/60 text-white rounded-xl px-8 py-4 font-bold text-lg text-center hover:bg-white hover:text-[#2563eb] hover:border-white transition-all duration-300"
            >
              Nous contacter →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
