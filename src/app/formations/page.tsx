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
    <div style={{ background: "linear-gradient(180deg, #081428 0%, #0b1d38 100%)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Nos formations</span>
          </div>
          <h1 className="font-bebas text-[58px] md:text-[84px] text-white leading-none mb-5">
            Choisissez<br />
            <span className="gradient-text">votre permis</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-8">
            {SCHOOL_NAME} propose plusieurs formations à {CITY}. Certification Qualiopi,
            financement CPF et aide Région IDF disponibles.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { Icon: IcoShield,   label: "Certifié Qualiopi" },
              { Icon: IcoCard,     label: "Financement CPF" },
              { Icon: IcoBuilding, label: "Aide IDF jusqu'à 1 000€" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span className="text-green-400"><Icon size={13} /></span> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formations principales ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Offres principales</span>
            </div>
            <h2 className="font-bebas text-[44px] md:text-[58px] text-white leading-none">
              Les formations les plus <span className="gradient-text">demandées</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {main.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-green-500/25"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
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

                {/* En-tête carte */}
                <div className="relative px-7 pt-7 pb-6" style={{ background: "rgba(0,0,0,0.20)" }}>
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(90deg, transparent, #22c55e 50%, transparent)" }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-green-400 mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", boxShadow: "0 0 16px rgba(34,197,94,0.12)" }}
                  >
                    <f.Icon size={20} />
                  </div>
                  <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-1">{f.type}</p>
                  <h3 className="font-bebas text-[30px] text-white leading-tight mb-3">{f.title}</h3>
                  <span className="font-bebas text-[22px] text-white/35 leading-none">Sur devis</span>
                </div>

                {/* Corps carte */}
                <div className="flex flex-col flex-1 px-7 py-6">
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{f.description}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-white/70">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                          style={{ background: "#16a34a", boxShadow: "0 0 8px rgba(22,163,74,0.40)" }}
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
                        ? "bg-green-600 text-white hover:bg-green-500"
                        : "text-white/70 hover:text-white hover:border-green-500/40"
                    }`}
                    style={f.popular
                      ? { boxShadow: "0 4px 16px rgba(22,163,74,0.35)" }
                      : { border: "1px solid rgba(255,255,255,0.14)" }
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
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Autres formations</span>
            </div>
            <h2 className="font-bebas text-[40px] md:text-[52px] text-white leading-none">
              Besoins <span className="gradient-text">spécifiques</span>
            </h2>
          </Reveal>

          <Reveal variant="bottom" className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {secondary.map((f, i) => (
              <div
                key={f.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 transition-all duration-200"
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                  borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-green-400 shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)", boxShadow: "0 0 12px rgba(34,197,94,0.08)" }}
                >
                  <f.Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-white text-sm">{f.title}</h3>
                    <span
                      className="text-[11px] text-green-400 px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                    >
                      {f.subtitle}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs leading-snug">{f.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-white/55 rounded-xl px-4 py-2.5 hover:text-green-400 hover:border-green-500/30 transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  Nous contacter →
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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
            <p className="text-white/55 text-base mb-8">Notre équipe est disponible du mardi au samedi pour vous conseiller.</p>
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
                className="inline-flex items-center justify-center text-white/80 rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
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
