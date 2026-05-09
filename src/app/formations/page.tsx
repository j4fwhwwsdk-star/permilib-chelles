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

/* ── Formations principales (cards premium) ── */
const main = [
  {
    Icon: IcoCar,
    type: "Boîte manuelle",
    title: "Permis B Manuel",
    startPrice: null,
    popular: false,
    description:
      "La formation classique avec nos moniteurs certifiés. Véhicules modernes, suivi personnalisé et accompagnement bienveillant.",
    details: [
      "Formation complète personnalisée",
      "Code de la route inclus",
      "Frais d'examen inclus",
      "Suivi pédagogique",
    ],
  },
  {
    Icon: IcoGear,
    type: "Boîte automatique",
    title: "Permis B Auto",
    startPrice: null,
    popular: true,
    description:
      "Formation plus courte et accessible, idéale pour la ville. Véhicule automatique mis à disposition dès le 1er cours.",
    details: [
      "Formation en boîte automatique",
      "Code de la route inclus",
      "Frais d'examen inclus",
      "Idéal pour conduire en ville",
    ],
  },
  {
    Icon: IcoUsers,
    type: "Dès 15 ans",
    title: "Conduite Accompagnée (AAC)",
    startPrice: null,
    popular: false,
    description:
      "Commencez dès 15 ans, accumulez de l'expérience avec un proche. Moins de stress à l'examen, assurance réduite à l'obtention.",
    details: [
      "Formation initiale complète",
      "Examen possible à 17 ans",
      "Accompagnateur formé",
      "Prime d'assurance réduite",
    ],
  },
];

/* ── Formations secondaires (liste compacte) ── */
const secondary = [
  {
    Icon: IcoEye,
    title: "Conduite Supervisée",
    subtitle: "Pour les + de 18 ans",
    description:
      "Déjà titulaire du permis ? Accumulez de l'expérience sous supervision d'un proche, sans repasser d'examen.",
  },
  {
    Icon: IcoBolt,
    title: "Formation Post-Permis",
    subtitle: "Perfectionnement",
    description:
      "Améliorez votre conduite après l'obtention du permis. Éco-conduite, conduite défensive et prise en main autoroutière.",
  },
  {
    Icon: IcoGlobe,
    title: "Code de la route",
    subtitle: "Accès plateforme en ligne",
    description:
      "Préparez l'examen du code avec notre plateforme numérique et nos séances en salle. Accès illimité jusqu'à l'examen.",
  },
];

export default function FormationsPage() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Nos formations
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Choisissez votre permis
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            {SCHOOL_NAME} propose plusieurs formations à {CITY}. Certification Qualiopi,
            financement CPF et aide Région IDF disponibles.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { Icon: IcoShield, label: "Qualiopi" },
              { Icon: IcoCard,   label: "Financement CPF" },
              { Icon: IcoBuilding, label: "Aide IDF 1 000€" },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 border border-white/20 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Icon size={13} /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Formations principales ─── */}
      <section className="py-16 px-4 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">
              Nos offres principales
            </p>
            <h2 className="font-bebas text-[40px] md:text-[48px] text-gray-900 leading-none mb-10">
              Les formations les plus demandées
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {main.map((f) => (
              <div
                key={f.title}
                className="relative rounded-2xl overflow-hidden bg-white shadow-sm card-lift flex flex-col"
              >
                {/* Bandeau populaire */}
                {f.popular && (
                  <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-blue-600 to-violet-500 text-white text-[11px] font-bold tracking-widest uppercase text-center py-1.5">
                    Le plus choisi
                  </div>
                )}

                {/* Top sombre */}
                <div className={`relative bg-[#0f172a] px-7 pt-8 pb-8 ${f.popular ? "pt-10" : ""}`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600" />

                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5">
                    <f.Icon size={20} />
                  </div>
                  <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mb-1">
                    {f.type}
                  </p>
                  <h3 className="font-bebas text-[28px] text-white leading-tight mb-4">
                    {f.title}
                  </h3>

                  {f.startPrice ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/40 text-xs mr-1">dès</span>
                      <span className="font-bebas text-[44px] text-white leading-none">
                        {f.startPrice}
                      </span>
                      <span className="text-white/40 text-lg ml-0.5">€</span>
                    </div>
                  ) : (
                    <span className="font-bebas text-[28px] text-white/50 leading-none">
                      Sur devis
                    </span>
                  )}
                </div>

                {/* Bottom blanc */}
                <div className="flex flex-col flex-1 px-7 py-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {f.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white">
                          <IcoCheck size={9} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center rounded-lg px-5 py-2.5 font-bold text-sm transition-colors ${
                      f.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-200 text-gray-800 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    Demander un devis →
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Formations secondaires ─── */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">
              Autres formations
            </p>
            <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 leading-none mb-8">
              Besoins spécifiques
            </h2>
          </Reveal>

          <Reveal variant="bottom" className="rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {secondary.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 bg-white hover:bg-[#f8fafc] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <f.Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-[11px] text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-semibold">
                      {f.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug line-clamp-1">
                    {f.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1 text-sm font-bold text-gray-700 border border-gray-200 rounded-lg px-4 py-2 hover:border-blue-300 hover:text-blue-600 transition-colors whitespace-nowrap group-hover:border-blue-200"
                >
                  Nous contacter →
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <Reveal variant="bottom">
        <section className="py-16 px-4 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 leading-none mb-2">
                Une question sur nos formations ?
              </h2>
              <p className="text-gray-500 text-sm">
                Notre équipe est disponible du lundi au samedi pour vous conseiller.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="shine-btn inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-7 py-3 font-bold hover:bg-blue-700 transition-colors"
              >
                <IcoPhone /> Appeler
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg px-7 py-3 font-bold hover:bg-gray-50 transition-colors"
              >
                Envoyer un message →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
