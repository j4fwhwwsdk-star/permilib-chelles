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
    accentColor: "#16a34a",
    accentBg: "rgba(22,163,74,0.08)",
    accentBorder: "rgba(22,163,74,0.20)",
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
    accentColor: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.20)",
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
    accentColor: "#d97706",
    accentBg: "rgba(217,119,6,0.08)",
    accentBorder: "rgba(217,119,6,0.20)",
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
    accentColor: "#64748b",
    accentBg: "rgba(100,116,139,0.08)",
    accentBorder: "rgba(100,116,139,0.20)",
    desc: "Nous proposons de payer votre formation en plusieurs fois. Contactez-nous pour convenir des modalités adaptées à votre situation.",
    details: ["Paiement en plusieurs fois sans frais", "Modalités définies ensemble", "Devis gratuit et sans engagement", "Réponse rapide"],
    cta: "Nous contacter",
    ctaHref: "/contact",
    ctaExternal: false,
  },
];

export default function FinancementPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero full viewport — sombre ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden" style={{ background: "#0f172a" }}>
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "720px", height: "720px",
            background: "radial-gradient(circle, rgba(22,163,74,0.20) 0%, rgba(22,163,74,0.08) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-24 -left-24 pointer-events-none"
          style={{ width: "380px", height: "380px",
            background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)" }} />

        <div aria-hidden className="geo-circle absolute top-[22%] right-[13%] animate-spin-slow hidden md:block"
          style={{ width: "195px", height: "195px" }} />
        <div aria-hidden className="geo-square absolute top-[44%] right-[6%] animate-float-slow hidden md:block"
          style={{ width: "38px", height: "38px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-line-h absolute top-[70%] right-[9%] hidden md:block"
          style={{ width: "110px" }} />
        <div aria-hidden className="geo-dot absolute top-[33%] right-[34%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Financement</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 10vw, 130px)" }}>
            Votre permis,<br />
            <span className="gradient-text-premium">on vous aide</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Plusieurs dispositifs permettent de réduire significativement le coût de votre permis.{" "}
            {SCHOOL_NAME} vous guide dans chaque démarche.
          </p>
          <div className="animate-bob-delayed inline-block">
            <a href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-700 transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.38)" }}>
              <IcoPhone size={16} /> Vérifier mon éligibilité
            </a>
          </div>
        </div>
      </section>

      {/* ── Options ── */}
      <section className="py-32 px-4 relative overflow-hidden"
        style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Les solutions</span>
            </div>
            <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "#0f172a" }}>
              Choisissez votre <span className="gradient-text">dispositif</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* En-tête */}
                <div className="flex items-center justify-between px-7 py-5 border-b"
                  style={{ borderColor: "#f1f5f9", background: "#f8fafc" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: opt.accentBg, border: `1px solid ${opt.accentBorder}`, color: opt.accentColor }}
                    >
                      <opt.Icon size={20} />
                    </div>
                    <h2 className="font-bold text-sm leading-tight" style={{ color: "#0f172a" }}>{opt.title}</h2>
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
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>{opt.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {opt.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm" style={{ color: "#374151" }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                          style={{ background: "#16a34a", boxShadow: "0 0 8px rgba(22,163,74,0.25)" }}
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
                      className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 font-semibold text-sm hover:border-green-400 hover:text-green-700 transition-all duration-200"
                      style={{ border: "1px solid #e5e7eb", color: "#374151" }}
                    >
                      {opt.cta} ↗
                    </a>
                  ) : (
                    <Link
                      href={opt.ctaHref}
                      className="inline-flex items-center gap-1.5 bg-green-600 text-white rounded-xl px-5 py-2.5 font-semibold text-sm hover:bg-green-700 transition-all duration-200"
                      style={{ boxShadow: "0 4px 14px rgba(22,163,74,0.30)" }}
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
      <section className="py-32 px-4" style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb" }}>
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
            <p className="text-base mb-8 max-w-lg mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}>
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
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
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
