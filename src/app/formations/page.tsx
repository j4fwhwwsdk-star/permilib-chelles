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
    description: "La formation classique avec nos moniteurs certifiés. Véhicules modernes, suivi personnalisé et accompagnement bienveillant.",
    details: ["Formation complète personnalisée", "Code de la route inclus", "Frais d'examen inclus", "Suivi pédagogique"],
  },
  {
    Icon: IcoGear,
    type: "Boîte automatique",
    title: "Permis B Auto",
    popular: true,
    description: "Formation plus courte et accessible, idéale pour la ville. Véhicule automatique mis à disposition dès le 1er cours.",
    details: ["Formation en boîte automatique", "Code de la route inclus", "Frais d'examen inclus", "Idéal pour conduire en ville"],
  },
  {
    Icon: IcoUsers,
    type: "Dès 15 ans",
    title: "Conduite Accompagnée (AAC)",
    popular: false,
    description: "Commencez dès 15 ans, accumulez de l'expérience avec un proche. Moins de stress à l'examen.",
    details: ["Formation initiale complète", "Examen possible à 17 ans", "Accompagnateur formé", "Prime d'assurance réduite"],
  },
];

const secondary = [
  {
    Icon: IcoEye,
    title: "Conduite Supervisée",
    subtitle: "Pour les + de 18 ans",
    description: "Déjà titulaire du permis ? Accumulez de l'expérience sous supervision d'un proche, sans repasser d'examen.",
  },
  {
    Icon: IcoBolt,
    title: "Formation Post-Permis",
    subtitle: "Perfectionnement",
    description: "Améliorez votre conduite après l'obtention du permis. Éco-conduite, conduite défensive et prise en main autoroutière.",
  },
  {
    Icon: IcoGlobe,
    title: "Code de la route",
    subtitle: "Plateforme en ligne",
    description: "Préparez l'examen du code avec notre plateforme numérique et nos séances en salle. Accès illimité jusqu'à l'examen.",
  },
];

export default function FormationsPage() {
  return (
    <div>
      {/* ── En-tête ── */}
      <section className="py-28 px-4 relative overflow-hidden" style={{ background: "#0e2644" }}>
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-600/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Nos formations</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Choisissez votre permis
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            {SCHOOL_NAME} propose plusieurs formations à {CITY}. Certification Qualiopi,
            financement CPF et aide Région IDF disponibles.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { Icon: IcoShield,   label: "Qualiopi" },
              { Icon: IcoCard,     label: "Financement CPF" },
              { Icon: IcoBuilding, label: "Aide IDF 1 000€" },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 border border-white/15 text-white/55 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="text-green-400"><Icon size={13} /></span> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formations principales ── */}
      <section className="py-28 px-4" style={{ background: "#0e2644" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Offres principales</span>
            </div>
            <h2 className="font-bebas text-[38px] md:text-[52px] text-white leading-none">
              Les formations les plus <span className="gradient-text">demandées</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {main.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl overflow-hidden border hover:border-green-500/30 transition-all duration-500 flex flex-col"
                style={{ background: "#1a3a58", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Bandeau populaire */}
                {f.popular && (
                  <div className="bg-green-600 text-white text-[10px] font-bold tracking-widest uppercase text-center py-2">
                    Le plus choisi
                  </div>
                )}

                {/* Top sombre */}
                <div
                  className={`relative px-7 pt-8 pb-8 ${f.popular ? "pt-6" : ""}`}
                  style={{ background: "#122e4c" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500" />

                  <div className="w-10 h-10 rounded-xl bg-green-600/20 border border-green-500/25 flex items-center justify-center text-green-400 mb-5 group-hover:bg-green-600/30 transition-colors duration-300">
                    <f.Icon size={20} />
                  </div>
                  <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-1">{f.type}</p>
                  <h3 className="font-bebas text-[28px] text-white leading-tight mb-4">{f.title}</h3>
                  <span className="font-bebas text-[26px] text-white/40 leading-none">Sur devis</span>
                </div>

                {/* Bas sombre */}
                <div className="flex flex-col flex-1 px-7 py-6">
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{f.description}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-white/60">
                        <span className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center shrink-0 text-white">
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
                        ? "bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-900/30"
                        : "border text-white/70 hover:border-green-500/40 hover:text-green-400"
                    }`}
                    style={!f.popular ? { borderColor: "rgba(255,255,255,0.15)" } : {}}
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
      <section className="py-24 px-4 border-t" style={{ background: "#122e4c", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Autres formations</span>
            </div>
            <h2 className="font-bebas text-[36px] md:text-[46px] text-white leading-none">
              Besoins <span className="gradient-text">spécifiques</span>
            </h2>
          </Reveal>

          <Reveal variant="bottom" className="rounded-2xl overflow-hidden shadow-sm divide-y" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#1a3a58", borderColor: "rgba(255,255,255,0.08)" }}>
            {secondary.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 transition-colors duration-200"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-green-400 shrink-0 transition-colors duration-200 group-hover:bg-green-500/15"
                  style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                >
                  <f.Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-sm">{f.title}</h3>
                    <span
                      className="text-[11px] text-green-400 px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                    >
                      {f.subtitle}
                    </span>
                  </div>
                  <p className="text-white/45 text-xs mt-0.5 leading-snug line-clamp-1">{f.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-white/55 rounded-xl px-4 py-2 hover:text-green-400 transition-all duration-200"
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
      <section className="py-28 px-4 relative overflow-hidden" style={{ background: "#0e2644" }}>
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-[38px] md:text-[52px] text-white leading-none mb-2">
              Une question sur nos formations ?
            </h2>
            <p className="text-white/45 text-sm">Notre équipe est disponible du mardi au samedi pour vous conseiller.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-900/30"
            >
              <IcoPhone /> Appeler
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 text-white/80 rounded-xl px-7 py-3.5 font-semibold hover:bg-white/8 hover:text-white transition-colors"
            >
              Envoyer un message →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
