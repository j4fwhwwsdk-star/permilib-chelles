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
    <div style={{ background: "var(--surface-0)", minHeight: "100vh" }}>
      {/* ── Hero full viewport ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        {/* Orbs */}
        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "700px", height: "700px",
            background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-28 -left-28 pointer-events-none"
          style={{ width: "380px", height: "380px",
            background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)" }} />

        {/* Géométrie */}
        <div aria-hidden className="geo-circle absolute top-[20%] right-[12%] animate-spin-slow hidden md:block"
          style={{ width: "180px", height: "180px" }} />
        <div aria-hidden className="geo-square absolute top-[45%] right-[22%] animate-float-slow hidden md:block"
          style={{ width: "36px", height: "36px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-line-h absolute top-[68%] right-[8%] hidden md:block"
          style={{ width: "120px" }} />
        <div aria-hidden className="geo-dot absolute top-[30%] right-[38%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Tarifs</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 11vw, 140px)" }}>
            Des tarifs<br />
            <span className="gradient-text-bright">transparents</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Aucun frais caché. Devis gratuit sur demande. Financement CPF et aide Région Île-de-France disponibles.
          </p>
          <div className="animate-bob-delayed inline-block">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-700 transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.38)" }}
            >
              <IcoPhone /> Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* ── Forfaits (dark, interactive) ── */}
      <section className="py-32 px-4 relative overflow-hidden"
        style={{ background: "#0e2644", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
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
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Formules</span>
            </div>
            <h2 className="font-bebas text-white leading-none mb-4"
              style={{ fontSize: "clamp(42px, 6vw, 72px)" }}>
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
      <section className="py-28 px-4"
        style={{ background: "#1a3a58", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Leçons</span>
            </div>
            <h2 className="font-bebas text-white leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>Leçons à l&apos;unité</h2>
          </Reveal>
          <Reveal variant="bottom">
            <div className="card-dark card-border-glow rounded-2xl overflow-hidden">
              {lecons.map((l, i) => (
                <div
                  key={l.label}
                  className="flex items-center justify-between px-6 py-5 text-sm transition-colors duration-200 hover:bg-white/[0.03]"
                  style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <span style={{ color: "rgba(255,255,255,0.65)" }}>{l.label}</span>
                  <span className="font-bold" style={{ color: "#4ade80" }}>{l.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Financement ── */}
      <section className="py-28 px-4"
        style={{ background: "#0e2644", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Aides</span>
            </div>
            <h2 className="font-bebas text-white leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Options de <span className="gradient-text-bright">financement</span>
            </h2>
          </Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-5">
            {financements.map((opt) => (
              <div key={opt.title} className="group card-dark card-border-glow rounded-2xl p-6 relative overflow-hidden transition-all duration-400 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.45) 50%, transparent)" }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-green-400 mb-4"
                  style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.22)", boxShadow: "0 0 16px rgba(22,163,74,0.10)" }}>
                  <opt.Icon size={18} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{opt.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{opt.desc}</p>
              </div>
            ))}
          </Reveal>
          <Reveal variant="bottom" className="mt-8 text-center">
            <Link href="/financement" className="link-underline inline-flex items-center gap-1 font-semibold text-sm transition-colors duration-200"
              style={{ color: "#4ade80" }}>
              Voir le détail des aides disponibles →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4 relative overflow-hidden bg-mesh-cta">
        <div className="absolute inset-0 bg-dots opacity-[0.15] pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-white leading-none mb-1"
              style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}>Prêt à démarrer ?</h2>
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
