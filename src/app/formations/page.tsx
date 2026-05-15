import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  IcoCar, IcoGear, IcoUsers, IcoEye, IcoBolt, IcoGlobe,
  IcoShield, IcoCard, IcoBuilding, IcoPhone, IcoCheck,
} from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, CITY, SCHOOL_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Formations permis de conduire",
  description: `Permis B manuel, automatique, conduite accompagnée à ${CITY}. Certification Qualiopi, financement CPF. ${SCHOOL_NAME}.`,
  path: "/formations",
});

const main = [
  {
    Icon: IcoCar,
    type: "Boîte manuelle",
    title: "Permis B Manuel",
    popular: false,
    description: "La formation classique avec nos moniteurs certifiés. Véhicules modernes, suivi personnalisé.",
    details: ["Formation complète personnalisée", "Code de la route inclus", "Frais d'examen inclus", "Suivi pédagogique"],
  },
  {
    Icon: IcoGear,
    type: "Boîte automatique",
    title: "Permis B Auto",
    popular: true,
    description: "Formation plus courte et accessible, idéale pour la ville. Véhicule automatique dès le 1er cours.",
    details: ["Formation en boîte automatique", "Code de la route inclus", "Frais d'examen inclus", "Idéal pour la ville"],
  },
  {
    Icon: IcoUsers,
    type: "Dès 15 ans",
    title: "Conduite Accompagnée",
    popular: false,
    description: "Commencez dès 15 ans, accumulez de l'expérience. Moins de stress à l'examen.",
    details: ["Formation initiale complète", "Examen possible à 17 ans", "Accompagnateur formé", "Prime d'assurance réduite"],
  },
];

const secondary = [
  { Icon: IcoEye,   title: "Conduite Supervisée",   subtitle: "Pour les + de 18 ans", description: "Accumulez de l'expérience sous supervision d'un proche, sans repasser d'examen." },
  { Icon: IcoBolt,  title: "Formation Post-Permis",  subtitle: "Perfectionnement",     description: "Améliorez votre conduite après le permis. Éco-conduite et conduite défensive." },
  { Icon: IcoGlobe, title: "Code de la route",       subtitle: "Plateforme en ligne",  description: "Préparez l'examen avec notre plateforme numérique. Accès illimité jusqu'à l'examen." },
];

export default function FormationsPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero full viewport — sombre ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden" style={{ background: "#0f172a" }}>
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "750px", height: "750px",
            background: "radial-gradient(circle, rgba(22,163,74,0.20) 0%, rgba(22,163,74,0.08) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-32 -left-32 pointer-events-none"
          style={{ width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)" }} />

        <div aria-hidden className="geo-circle absolute top-[22%] right-[14%] animate-spin-slow hidden md:block"
          style={{ width: "200px", height: "200px" }} />
        <div aria-hidden className="geo-circle absolute bottom-[18%] right-[28%] hidden md:block"
          style={{ width: "72px", height: "72px", animation: "spinSlow 20s linear infinite reverse" }} />
        <div aria-hidden className="geo-square absolute top-[40%] right-[8%] animate-float-slow hidden md:block"
          style={{ width: "44px", height: "44px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-dot absolute top-[32%] right-[35%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Nos formations</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 11vw, 140px)" }}>
            Choisissez<br />
            <span className="gradient-text-premium">votre permis</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            {SCHOOL_NAME} propose plusieurs formations à {CITY}. Certification Qualiopi,
            financement CPF et aide Région IDF disponibles.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { Icon: IcoShield,   label: "Certifié Qualiopi" },
              { Icon: IcoCard,     label: "Financement CPF" },
              { Icon: IcoBuilding, label: "Aide IDF jusqu'à 1 000€" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.70)" }}
              >
                <span className="text-green-400"><Icon size={13} /></span> {label}
              </span>
            ))}
          </div>
          <div className="animate-bob-delayed inline-block">
            <Link
              href="/contact"
              className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-700 transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.38)" }}
            >
              Demander un devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Formations principales ── */}
      <section className="py-32 px-4 relative overflow-hidden"
        style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Offres principales</span>
            </div>
            <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "#0f172a" }}>
              Les formations les plus <span className="gradient-text">demandées</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {main.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: f.popular ? "1px solid rgba(22,163,74,0.30)" : "1px solid #e5e7eb",
                  boxShadow: f.popular ? "0 4px 24px rgba(22,163,74,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {f.popular && (
                  <div
                    className="text-white text-[10px] font-bold tracking-widest uppercase text-center py-2"
                    style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                  >
                    ★ Le plus choisi
                  </div>
                )}

                <div className="relative px-7 pt-7 pb-6" style={{ background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-green-600 mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)" }}
                  >
                    <f.Icon size={20} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#94a3b8" }}>{f.type}</p>
                  <h3 className="font-bebas text-[30px] leading-tight mb-3" style={{ color: "#0f172a" }}>{f.title}</h3>
                  <span className="font-bebas text-[22px] leading-none" style={{ color: "#94a3b8" }}>Sur devis</span>
                </div>

                <div className="flex flex-col flex-1 px-7 py-6">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>{f.description}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                          style={{ background: "#16a34a", boxShadow: "0 0 8px rgba(22,163,74,0.30)" }}
                        >
                          <IcoCheck size={9} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center rounded-xl px-5 py-3 font-bold text-sm transition-all duration-300 ${
                      f.popular
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "hover:border-green-400 hover:text-green-700"
                    }`}
                    style={f.popular
                      ? { boxShadow: "0 4px 16px rgba(22,163,74,0.30)" }
                      : { border: "1px solid #e5e7eb", color: "#374151" }
                    }
                  >
                    Demander un devis →
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Formations secondaires ── */}
      <section className="py-32 px-4" style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Autres formations</span>
            </div>
            <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(40px, 5.5vw, 64px)", color: "#0f172a" }}>
              Besoins <span className="gradient-text">spécifiques</span>
            </h2>
          </Reveal>

          <Reveal variant="bottom" className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #e5e7eb", background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {secondary.map((f, i) => (
              <div
                key={f.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 transition-colors duration-200 hover:bg-green-50"
                style={{
                  borderTop: i > 0 ? "1px solid #f1f5f9" : "none",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)", color: "#16a34a" }}
                >
                  <f.Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-sm" style={{ color: "#0f172a" }}>{f.title}</h3>
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
                      style={{ color: "#16a34a", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)" }}
                    >
                      {f.subtitle}
                    </span>
                  </div>
                  <p className="text-xs leading-snug" style={{ color: "#64748b" }}>{f.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold rounded-xl px-4 py-2.5 hover:border-green-400 hover:text-green-700 transition-all duration-200"
                  style={{ border: "1px solid #e5e7eb", color: "#374151" }}
                >
                  Nous contacter →
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div
          className="max-w-4xl mx-auto rounded-2xl p-12 relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #0f3320 0%, #0a2016 50%, #112a1a 100%)",
            border: "1px solid rgba(34,197,94,0.20)",
            boxShadow: "0 0 60px rgba(22,163,74,0.12)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #22c55e 50%, transparent)" }} />
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="relative">
            <h2 className="font-bebas text-[42px] md:text-[56px] text-white leading-none mb-3">
              Une question sur nos formations ?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Notre équipe est disponible du mardi au samedi pour vous conseiller.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-500 transition-colors"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
              >
                <IcoPhone /> Appeler maintenant
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
              >
                Envoyer un message →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
