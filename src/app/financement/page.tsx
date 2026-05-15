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
    accentColor: "#22c55e",
    accentBg: "rgba(34,197,94,0.12)",
    accentBorder: "rgba(34,197,94,0.25)",
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
    accentColor: "#93c5fd",
    accentBg: "rgba(59,130,246,0.12)",
    accentBorder: "rgba(59,130,246,0.25)",
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
    accentColor: "#fcd34d",
    accentBg: "rgba(251,191,36,0.12)",
    accentBorder: "rgba(251,191,36,0.25)",
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
    accentColor: "rgba(255,255,255,0.55)",
    accentBg: "rgba(255,255,255,0.06)",
    accentBorder: "rgba(255,255,255,0.15)",
    desc: "Nous proposons de payer votre formation en plusieurs fois. Contactez-nous pour convenir des modalités adaptées à votre situation.",
    details: ["Paiement en plusieurs fois sans frais", "Modalités définies ensemble", "Devis gratuit et sans engagement", "Réponse rapide"],
    cta: "Nous contacter",
    ctaHref: "/contact",
    ctaExternal: false,
  },
];

export default function FinancementPage() {
  return (
    <div style={{ background: "linear-gradient(180deg, #081428 0%, #0b1d38 100%)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,20,40,0.92) 0%, rgba(11,29,56,0.88) 100%)" }} />
        <div className="absolute -top-10 right-0 w-96 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Financement</span>
          </div>
          <h1 className="font-bebas text-[58px] md:text-[80px] text-white leading-none mb-5">
            Votre permis,<br />
            <span className="gradient-text-bright">on vous aide à le financer</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Plusieurs dispositifs permettent de réduire significativement le coût de votre permis.{" "}
            {SCHOOL_NAME} vous guide dans chaque démarche.
          </p>
        </div>
      </section>

      {/* ── Options ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Les solutions</span>
            </div>
            <h2 className="font-bebas text-[44px] md:text-[58px] text-white leading-none">
              Choisissez votre <span className="gradient-text">dispositif</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="group rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(34,197,94,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)"; }}
              >
                {/* En-tête */}
                <div className="flex items-center justify-between px-7 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.15)" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: opt.accentBg, border: `1px solid ${opt.accentBorder}`, color: opt.accentColor, boxShadow: `0 0 16px ${opt.accentBg}` }}
                    >
                      <opt.Icon size={20} />
                    </div>
                    <h2 className="font-bold text-white text-sm leading-tight">{opt.title}</h2>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ml-3"
                    style={{ background: opt.accentBg, border: `1px solid ${opt.accentBorder}`, color: opt.accentColor }}
                  >
                    {opt.badge}
                  </span>
                </div>

                {/* Corps */}
                <div className="px-7 py-6">
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{opt.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {opt.details.map((d) => (
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
                  {opt.ctaExternal ? (
                    <a
                      href={opt.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/55 rounded-xl px-5 py-2.5 font-semibold text-sm hover:text-white transition-all duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                    >
                      {opt.cta} ↗
                    </a>
                  ) : (
                    <Link
                      href={opt.ctaHref}
                      className="inline-flex items-center gap-1.5 bg-green-600 text-white rounded-xl px-5 py-2.5 font-semibold text-sm hover:bg-green-500 transition-all duration-200"
                      style={{ boxShadow: "0 4px 14px rgba(22,163,74,0.35)" }}
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
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-12 relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #0f3320 0%, #0a2016 50%, #112a1a 100%)",
            border: "1px solid rgba(34,197,94,0.20)",
            boxShadow: "0 0 60px rgba(22,163,74,0.12)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #22c55e 50%, transparent)" }} />
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="relative">
            <h2 className="font-bebas text-[40px] md:text-[52px] text-white leading-none mb-3">
              Vous ne savez pas quelle aide choisir ?
            </h2>
            <p className="text-white/55 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Notre équipe vous aide à identifier le dispositif le plus avantageux. C&apos;est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-500 transition-colors"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
              >
                <IcoPhone /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-white/80 rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              >
                Formulaire de contact →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
