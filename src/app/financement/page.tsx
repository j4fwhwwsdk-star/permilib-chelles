import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IcoCard, IcoBuilding, IcoCalendar, IcoWallet, IcoCheck, IcoPhone } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Financement permis — CPF, Aide IDF",
  description: `CPF, aide Région Île-de-France jusqu'à 1 000€, permis à 1€/jour. Plusieurs solutions pour financer votre permis avec ${SCHOOL_NAME} à ${CITY}.`,
  path: "/financement",
});

const options = [
  {
    Icon: IcoCard,
    title: "CPF — Compte Personnel de Formation",
    badge: "Disponible",
    badgeClass: "bg-green-50 text-green-700 border-green-200",
    desc: `Tous les actifs (salariés, demandeurs d'emploi) cumulent des droits CPF utilisables pour le permis B. ${SCHOOL_NAME} vous accompagne dans les démarches.`,
    details: [
      "Accessible via Mon Compte Formation",
      "Montant selon votre solde CPF",
      "Cumulable avec d'autres aides",
      "Démarches accompagnées",
    ],
    cta: "Vérifier mon solde CPF",
    ctaHref: "https://www.moncompteformation.gouv.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoBuilding,
    title: "Aide Région Île-de-France",
    badge: "Jusqu'à 1 000€",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "La Région Île-de-France subventionne le permis des jeunes de 18 à 25 ans résidant en IDF, sous conditions de ressources.",
    details: [
      "Pour les 18–25 ans résidant en IDF",
      "Jusqu'à 1 000€ de prise en charge",
      "Sous conditions de ressources",
      "Demande sur le site Région IDF",
    ],
    cta: "En savoir plus",
    ctaHref: "https://www.iledefrance.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoCalendar,
    title: "Permis à 1€ par jour",
    badge: "15 – 25 ans",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    desc: "Prêt à taux zéro garanti par l'État, remboursable sur 3 ans. Accessible aux jeunes de 15 à 25 ans via leur banque partenaire.",
    details: [
      "Pour les 15 à 25 ans",
      "Prêt à taux zéro garanti par l'État",
      "Remboursement sur 3 ans (~30€/mois)",
      "À demander auprès de votre banque",
    ],
    cta: "Voir les banques partenaires",
    ctaHref: "https://www.securite-routiere.gouv.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoWallet,
    title: "Paiement échelonné",
    badge: "Sur demande",
    badgeClass: "bg-gray-50 text-gray-600 border-gray-200",
    desc: "Nous proposons de payer votre formation en plusieurs fois. Contactez-nous pour convenir des modalités adaptées à votre situation.",
    details: [
      "Paiement en plusieurs fois sans frais",
      "Modalités définies ensemble",
      "Devis gratuit et sans engagement",
      "Réponse rapide",
    ],
    cta: "Nous contacter",
    ctaHref: "/contact",
    ctaExternal: false,
  },
];

export default function FinancementPage() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative py-20 px-4 overflow-hidden bg-[#0f172a]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
          alt="Financement permis"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Financement
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Votre permis,<br />on vous aide à le financer
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Plusieurs dispositifs permettent de réduire significativement le coût de votre permis.{" "}
            {SCHOOL_NAME} vous guide dans chaque démarche.
          </p>
        </div>
      </section>

      {/* ─── Options ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* En-tête de la carte */}
                <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                      <opt.Icon size={20} />
                    </div>
                    <h2 className="font-bold text-gray-900 text-base leading-tight">{opt.title}</h2>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border shrink-0 ml-3 ${opt.badgeClass}`}>
                    {opt.badge}
                  </span>
                </div>

                {/* Corps */}
                <div className="px-7 py-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{opt.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {opt.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white">
                          <IcoCheck size={9} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {opt.ctaExternal ? (
                    <a
                      href={opt.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-gray-300 text-gray-800 rounded-lg px-5 py-2 font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      {opt.cta} ↗
                    </a>
                  ) : (
                    <Link
                      href={opt.ctaHref}
                      className="inline-block border border-gray-300 text-gray-800 rounded-lg px-5 py-2 font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      {opt.cta} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <Reveal variant="bottom">
        <section className="py-16 px-4 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-[36px] md:text-[48px] text-gray-900 leading-none mb-3">
              Vous ne savez pas quelle aide choisir ?
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Notre équipe vous aide à identifier le dispositif le plus avantageux pour votre
              situation. Contactez-nous, c'est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-7 py-3 font-bold hover:bg-blue-700 transition-colors"
              >
                <IcoPhone /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg px-7 py-3 font-bold hover:bg-gray-50 transition-colors"
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
