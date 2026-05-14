import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import TarifsCards from "@/components/ui/TarifsCards";
import { IcoShield, IcoCard, IcoBuilding, IcoCalendar, IcoCheck, IcoPhone } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, CITY, SCHOOL_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Tarifs permis de conduire",
  description: `Tarifs formation permis B, boîte auto, AAC. CPF, aide IDF jusqu'à 1 000€. Devis gratuit. ${SCHOOL_NAME} à ${CITY}.`,
  path: "/tarifs",
});

const lecons = [
  { label: "Leçon 1h — Boîte manuelle",    price: "Sur devis" },
  { label: "Leçon 1h — Boîte automatique", price: "Sur devis" },
  { label: "Code de la route (seul)",       price: "Sur demande" },
];

const financements = [
  { Icon: IcoCard,     title: "CPF",            desc: "Utilisez votre Compte Personnel de Formation. Démarches accompagnées par notre équipe." },
  { Icon: IcoBuilding, title: "Aide Région IDF", desc: "Jusqu'à 1 000€ pour les résidents d'Île-de-France. Nous vous guidons dans la demande." },
  { Icon: IcoCalendar, title: "Permis 1€/jour",  desc: "Pour les 15–25 ans. Prêt à taux zéro remboursable sur 3 ans via votre banque." },
];

export default function TarifsPage() {
  return (
    <div>
      {/* ── En-tête ── */}
      <section className="bg-[#0f172a] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Tarifs</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Des tarifs transparents
          </h1>
          <p className="text-white/45 text-base max-w-xl leading-relaxed">
            Aucun frais caché. Devis gratuit sur demande. Financement CPF et aide Région Île-de-France disponibles.
          </p>
        </div>
      </section>

      {/* ── Forfaits (dark, interactive) ── */}
      <section className="py-20 px-4 bg-[#0f172a] relative overflow-hidden">
        {/* Layered ambient background */}
        <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/[0.04] blur-[120px] rounded-full pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-teal-500/[0.03] blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Section header */}
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Formules</span>
            </div>
            <h2 className="font-bebas text-[42px] md:text-[60px] text-white leading-none mb-4">
              Choisissez votre{" "}
              <span className="gradient-text-bright">formation</span>
            </h2>
            <p className="text-white/35 text-sm max-w-lg leading-relaxed">
              Cliquez sur une formule pour découvrir le détail et les tarifs.
              Devis gratuit · Réponse sous 24h.
            </p>
          </Reveal>

          <TarifsCards />
        </div>
      </section>

      {/* ── Leçons à l'unité ── */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="mb-6">
            <h2 className="font-bebas text-[34px] text-gray-900">Leçons à l&apos;unité</h2>
          </Reveal>
          <Reveal variant="bottom">
            <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
              {lecons.map((l, i) => (
                <div
                  key={l.label}
                  className={`flex items-center justify-between px-6 py-4 text-sm hover:bg-green-50/30 transition-colors duration-200 ${i > 0 ? "border-t border-gray-100" : ""}`}
                >
                  <span className="text-gray-700">{l.label}</span>
                  <span className="font-bold text-green-700">{l.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Financement ── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-600"><IcoShield size={18} /></span>
              <h2 className="font-bebas text-[34px] text-gray-900">Options de <span className="gradient-text">financement</span></h2>
            </div>
          </Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-4">
            {financements.map((opt) => (
              <div key={opt.title} className="group bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:border-green-100 hover:shadow-md transition-all duration-400 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center text-white mb-3 shadow-sm shadow-green-100">
                  <opt.Icon size={17} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{opt.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </Reveal>
          <Reveal variant="bottom" className="mt-6 text-center">
            <Link href="/financement" className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors duration-200">
              Voir le détail des aides disponibles →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-[38px] md:text-[52px] text-white leading-none mb-1">Prêt à démarrer ?</h2>
            <p className="text-white/45 text-sm">Devis gratuit · Réponse rapide</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-900/30"
            >
              <IcoPhone /> {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 text-white/80 rounded-xl px-7 py-3.5 font-semibold hover:bg-white/8 hover:text-white transition-colors"
            >
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
