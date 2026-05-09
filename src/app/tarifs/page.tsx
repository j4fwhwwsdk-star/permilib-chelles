import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IcoShield, IcoCard, IcoBuilding, IcoCalendar, IcoCheck, IcoPhone } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, CITY, SCHOOL_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Tarifs permis de conduire",
  description: `Forfait 20h à 1 180€, 30h à 1 580€. Boîte auto dès 850€. CPF, aide IDF jusqu'à 1 000€. ${SCHOOL_NAME} à ${CITY}.`,
  path: "/tarifs",
});

const forfaits = [
  {
    title: "Forfait 20h",
    type: "Boîte manuelle",
    price: "1 180",
    desc: "L'essentiel pour obtenir votre permis en boîte manuelle.",
    features: ["20h de conduite", "Code de la route inclus", "Frais d'examen inclus", "Suivi pédagogique"],
    popular: false,
  },
  {
    title: "Forfait 30h",
    type: "Boîte manuelle",
    price: "1 580",
    desc: "Formation complète pour aborder l'examen avec sérénité.",
    features: ["30h de conduite", "Code de la route inclus", "Frais d'examen inclus", "Séance bilan incluse"],
    popular: true,
  },
  {
    title: "Forfait 13h",
    type: "Boîte automatique",
    price: "850",
    desc: "Le minimum réglementaire en véhicule automatique.",
    features: ["13h de conduite", "Code de la route inclus", "Frais d'examen inclus", "Véhicule automatique"],
    popular: false,
  },
  {
    title: "Forfait 20h",
    type: "Boîte automatique",
    price: "1 250",
    desc: "Formation recommandée pour une conduite sereine.",
    features: ["20h de conduite", "Code de la route inclus", "Frais d'examen inclus", "Recommandé"],
    popular: false,
  },
  {
    title: "Conduite Accompagnée",
    type: "AAC — dès 15 ans",
    price: "Sur devis",
    desc: "Formation complète dès 15 ans avec un accompagnateur.",
    features: ["20h de formation initiale", "Suivi AAC complet", "Rendez-vous pédagogiques inclus", "Examen inclus"],
    popular: false,
    devis: true,
  },
];

const lecons = [
  { label: "Leçon 1h — Boîte manuelle", price: "55 €" },
  { label: "Leçon 1h — Boîte automatique", price: "60 €" },
  { label: "Code de la route (seul)", price: "Sur demande" },
];

const financements = [
  {
    Icon: IcoCard,
    title: "CPF",
    desc: "Utilisez votre Compte Personnel de Formation. Démarches accompagnées par notre équipe.",
  },
  {
    Icon: IcoBuilding,
    title: "Aide Région IDF",
    desc: "Jusqu'à 1 000€ pour les résidents d'Île-de-France. Renseignez-vous auprès de nous.",
  },
  {
    Icon: IcoCalendar,
    title: "Permis à 1€/jour",
    desc: "Pour les 15–25 ans. Prêt à taux zéro remboursable sur 3 ans via votre banque.",
  },
];

export default function TarifsPage() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Tarifs
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Des tarifs transparents
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Aucun frais caché. Financement CPF et aide Région Île-de-France disponibles.
          </p>
        </div>
      </section>

      {/* ─── Forfaits ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 mb-8">Forfaits</h2>
          </Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-5">
            {forfaits.map((f) => (
              <div
                key={`${f.title}-${f.type}`}
                className={`relative rounded-xl border-2 flex flex-col overflow-hidden ${
                  f.popular ? "border-blue-600" : "border-gray-100"
                } bg-white`}
              >
                {f.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 text-center tracking-wide">
                    Le plus populaire
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-1">
                    {f.type}
                  </p>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-xs mb-5">{f.desc}</p>

                  <div className="mb-6">
                    {f.devis ? (
                      <span className="font-bold text-2xl text-gray-900">{f.price}</span>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="font-bebas text-[52px] text-gray-900 leading-none">{f.price}</span>
                        <span className="text-gray-400 text-lg mb-1">€</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white">
                          <IcoCheck size={9} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center rounded-lg px-5 py-2.5 font-bold text-sm transition-colors ${
                      f.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Leçons à l'unité ─── */}
      <section className="py-12 px-4 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <h2 className="font-bebas text-[32px] text-gray-900 mb-6">Leçons à l'unité</h2>
          </Reveal>
          <Reveal variant="bottom">
            <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
              {lecons.map((l, i) => (
                <div
                  key={l.label}
                  className={`flex items-center justify-between px-6 py-4 text-sm ${
                    i > 0 ? "border-t border-gray-100" : ""
                  }`}
                >
                  <span className="text-gray-700">{l.label}</span>
                  <span className="font-bold text-gray-900 tabular-nums">{l.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Financement ─── */}
      <section className="py-12 px-4 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-600"><IcoShield size={20} /></span>
              <h2 className="font-bebas text-[32px] text-gray-900">Options de financement</h2>
            </div>
          </Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-4">
            {financements.map((opt) => (
              <div key={opt.title} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                  <opt.Icon size={18} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{opt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </Reveal>
          <Reveal variant="bottom">
            <div className="mt-6 text-center">
              <Link
                href="/financement"
                className="inline-block text-blue-600 font-semibold text-sm hover:underline"
              >
                Voir le détail des aides disponibles →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <Reveal variant="bottom">
        <section className="py-16 px-4 bg-blue-700">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bebas text-[36px] md:text-[48px] text-white leading-none mb-1">
                Prêt à démarrer ?
              </h2>
              <p className="text-blue-200 text-sm">Devis gratuit · Réponse rapide</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 rounded-lg px-7 py-3 font-bold hover:bg-blue-50 transition-colors"
              >
                <IcoPhone /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/50 text-white rounded-lg px-7 py-3 font-bold hover:bg-white/10 transition-colors"
              >
                Formulaire de contact →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
