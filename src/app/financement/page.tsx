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
    badgeColor: "rgba(34,197,94,0.12)",
    badgeBorder: "rgba(34,197,94,0.25)",
    badgeText: "#4ade80",
    desc: `Tous les actifs cumulent des droits CPF utilisables pour le permis B. ${SCHOOL_NAME} vous accompagne dans toutes les démarches.`,
    details: ["Accessible via Mon Compte Formation", "Montant selon votre solde CPF", "Cumulable avec d'autres aides", "Démarches accompagnées"],
    cta: "Vérifier mon solde CPF",
    ctaHref: "https://www.moncompteformation.gouv.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoBuilding,
    title: "Aide Région Île-de-France",
    badge: "Jusqu'à 1 000€",
    badgeColor: "rgba(59,130,246,0.12)",
    badgeBorder: "rgba(59,130,246,0.25)",
    badgeText: "#93c5fd",
    desc: "La Région Île-de-France subventionne le permis des jeunes de 18 à 25 ans résidant en IDF, sous conditions de ressources.",
    details: ["Pour les 18–25 ans résidant en IDF", "Jusqu'à 1 000€ de prise en charge", "Sous conditions de ressources", "Demande sur le site Région IDF"],
    cta: "En savoir plus",
    ctaHref: "https://www.iledefrance.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoCalendar,
    title: "Permis à 1€ par jour",
    badge: "15 – 25 ans",
    badgeColor: "rgba(251,191,36,0.12)",
    badgeBorder: "rgba(251,191,36,0.25)",
    badgeText: "#fcd34d",
    desc: "Prêt à taux zéro garanti par l'État, remboursable sur 3 ans. Accessible aux jeunes de 15 à 25 ans via leur banque partenaire.",
    details: ["Pour les 15 à 25 ans", "Prêt à taux zéro garanti par l'État", "Remboursement sur 3 ans (~30€/mois)", "À demander auprès de votre banque"],
    cta: "Voir les banques partenaires",
    ctaHref: "https://www.securite-routiere.gouv.fr",
    ctaExternal: true,
  },
  {
    Icon: IcoWallet,
    title: "Paiement échelonné",
    badge: "Sur demande",
    badgeColor: "rgba(255,255,255,0.06)",
    badgeBorder: "rgba(255,255,255,0.15)",
    badgeText: "rgba(255,255,255,0.55)",
    desc: "Nous proposons de payer votre formation en plusieurs fois. Contactez-nous pour convenir des modalités adaptées à votre situation.",
    details: ["Paiement en plusieurs fois sans frais", "Modalités définies ensemble", "Devis gratuit et sans engagement", "Réponse rapide"],
    cta: "Nous contacter",
    ctaHref: "/contact",
    ctaExternal: false,
  },
];

export default function FinancementPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
            alt="Financement permis"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-600/6 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Financement</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Votre permis,<br />
            <span className="gradient-text-bright">on vous aide à le financer</span>
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Plusieurs dispositifs permettent de réduire significativement le coût de votre permis.{" "}
            {SCHOOL_NAME} vous guide dans chaque démarche.
          </p>
        </div>
      </section>

      {/* ── Options ── */}
      <section className="py-20 px-4" style={{ background: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="group rounded-2xl hover:border-green-500/25 transition-all duration-400 overflow-hidden"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* En-tête */}
                <div
                  className="flex items-center justify-between px-7 py-5 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-sm shadow-green-900/30">
                      <opt.Icon size={20} />
                    </div>
                    <h2 className="font-bold text-white text-sm leading-tight">{opt.title}</h2>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-3"
                    style={{ background: opt.badgeColor, border: `1px solid ${opt.badgeBorder}`, color: opt.badgeText }}
                  >
                    {opt.badge}
                  </span>
                </div>

                {/* Corps */}
                <div className="px-7 py-6">
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{opt.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {opt.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-white/60">
                        <span className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center shrink-0 text-white">
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
                      className="inline-flex items-center gap-1.5 text-white/55 rounded-xl px-5 py-2.5 font-semibold text-sm hover:text-green-400 transition-all duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      {opt.cta} ↗
                    </a>
                  ) : (
                    <Link
                      href={opt.ctaHref}
                      className="inline-flex items-center gap-1.5 bg-green-600 text-white rounded-xl px-5 py-2.5 font-semibold text-sm hover:bg-green-700 transition-all duration-200"
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

      {/* ── CTA ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-bebas text-[38px] md:text-[52px] text-white leading-none mb-3">
            Vous ne savez pas quelle aide choisir ?
          </h2>
          <p className="text-white/45 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Notre équipe vous aide à identifier le dispositif le plus avantageux pour votre
            situation. Contactez-nous, c&apos;est gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
