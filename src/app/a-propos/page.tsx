import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IcoTarget, IcoShield, IcoHandshake, IcoLeaf, IcoPhone, IcoMapPin, IcoClock } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY, ADDRESS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos — Notre équipe",
  description: `Découvrez l'équipe de ${SCHOOL_NAME} à ${CITY}. Formateurs certifiés Qualiopi, accompagnement personnalisé.`,
  path: "/a-propos",
});

const valeurs = [
  { Icon: IcoTarget,    title: "Pédagogie bienveillante",  desc: "Chaque élève avance à son rythme dans un environnement serein et encourageant." },
  { Icon: IcoShield,    title: "Certification Qualiopi",   desc: "Label de qualité officiel reconnu par l'État, gage de sérieux et de rigueur." },
  { Icon: IcoHandshake, title: "Transparence totale",      desc: "Tarifs clairs, sans frais cachés. Devis gratuit sur demande." },
  { Icon: IcoLeaf,      title: "Modernité",                desc: "Véhicules récents et modernes. Supports numériques inclus dans chaque formation." },
];

const horaires = [
  { jour: "Lundi",            bureau: "Fermé",              conduite: "Fermé" },
  { jour: "Mardi – Vendredi", bureau: "15h – 19h",          conduite: "9h – 20h" },
  { jour: "Samedi",           bureau: "10h–12h / 14h–16h",  conduite: "9h – 18h" },
  { jour: "Dimanche",         bureau: "Fermé",              conduite: "Fermé" },
];

export default function AProposPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero full viewport — sombre ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden" style={{ background: "#0f172a" }}>
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "720px", height: "720px",
            background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-24 -left-24 pointer-events-none"
          style={{ width: "360px", height: "360px",
            background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)" }} />

        <div aria-hidden className="geo-circle absolute top-[25%] right-[14%] animate-spin-slow hidden md:block"
          style={{ width: "200px", height: "200px" }} />
        <div aria-hidden className="geo-circle absolute bottom-[22%] right-[30%] hidden md:block"
          style={{ width: "64px", height: "64px", animation: "spinSlow 18s linear infinite reverse" }} />
        <div aria-hidden className="geo-square absolute top-[42%] right-[7%] animate-float-slow hidden md:block"
          style={{ width: "40px", height: "40px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-dot absolute top-[30%] right-[36%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">À propos</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 11vw, 140px)" }}>
            {SCHOOL_NAME}
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Auto-école certifiée Qualiopi à {CITY}.
            Bienvenue pour l&apos;apprentissage de la conduite et de la sécurité routière.
          </p>
          <div className="animate-bob-delayed inline-block">
            <Link href="/contact"
              className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-700 transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.38)" }}>
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Approche + Stats ── */}
      <section className="py-32 px-4 relative overflow-hidden"
        style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal variant="bottom" className="grid md:grid-cols-2 gap-16">
            {/* Texte */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500 line-reveal" />
                <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Notre approche</span>
              </div>
              <h2 className="font-bebas leading-tight mb-5"
                style={{ fontSize: "clamp(42px, 5.5vw, 64px)", color: "#0f172a" }}>
                Apprendre à conduire<br />en <span className="gradient-text">confiance</span>
              </h2>
              <p className="leading-[1.75] mb-4" style={{ fontSize: "17px", color: "#64748b" }}>
                {SCHOOL_NAME} met l&apos;accent sur un accompagnement pédagogique adapté aux besoins de
                chaque candidat. Nos formateurs certifiés utilisent des véhicules modernes et des
                programmes de formation rigoureux.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
                Avec une note parfaite de 5/5 sur Google et un indice de confiance de 100%,
                nous sommes fiers de la confiance que nos élèves nous accordent à {CITY}.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: "5/5",  label: "Note Google",  sub: "vérifiée",    color: "#d97706" },
                { value: "AAC",  label: "Conduite",     sub: "accompagnée", color: "#16a34a" },
                { value: "CPF",  label: "Financement",  sub: "disponible",  color: "#3b82f6" },
                { value: "100%", label: "Indice de",    sub: "confiance",   color: "#16a34a" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="font-bebas text-[48px] leading-none mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs font-semibold" style={{ color: "#374151" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-32 px-4" style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Nos valeurs</span>
            </div>
            <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(42px, 5.5vw, 66px)", color: "#0f172a" }}>
              Ce qui nous <span className="gradient-text">différencie</span>
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {valeurs.map((v) => (
              <div
                key={v.title}
                className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)", color: "#16a34a" }}
                >
                  <v.Icon size={20} />
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#0f172a" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Horaires ── */}
      <section className="py-32 px-4" style={{ background: "#f0fdf4", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ color: "#16a34a" }}><IcoClock size={20} /></span>
              <h2 className="font-bebas text-[44px]" style={{ color: "#0f172a" }}>Horaires d&apos;ouverture</h2>
            </div>
            <p className="text-sm flex items-center gap-2" style={{ color: "#64748b" }}>
              <IcoMapPin size={14} /> {ADDRESS}
            </p>
          </Reveal>
          <Reveal variant="bottom">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="grid grid-cols-3 px-6 py-4 text-[10px] font-bold uppercase tracking-widest border-b"
                style={{ background: "#f8fafc", borderColor: "#e5e7eb", color: "#94a3b8" }}
              >
                <span>Jour</span>
                <span>Bureau</span>
                <span>Conduite</span>
              </div>
              {horaires.map((h, i) => (
                <div
                  key={h.jour}
                  className={`grid grid-cols-3 px-6 py-4 text-sm transition-colors duration-200 ${h.bureau === "Fermé" ? "opacity-50" : "hover:bg-green-50"} ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: "#f1f5f9" }}
                >
                  <span className="font-semibold" style={{ color: "#374151" }}>{h.jour}</span>
                  <span className="font-semibold"
                    style={{ color: h.bureau === "Fermé" ? "#94a3b8" : "#16a34a" }}>{h.bureau}</span>
                  <span className="font-semibold"
                    style={{ color: h.conduite === "Fermé" ? "#94a3b8" : "#16a34a" }}>{h.conduite}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div
          className="max-w-4xl mx-auto rounded-2xl p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f3320 0%, #0a2016 50%, #112a1a 100%)",
            border: "1px solid rgba(34,197,94,0.20)",
            boxShadow: "0 0 60px rgba(22,163,74,0.12)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #22c55e 50%, transparent)" }} />
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bebas text-[42px] md:text-[52px] text-white leading-none mb-2">
                Venez nous rencontrer
              </h2>
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                <span className="shrink-0 mt-0.5"><IcoMapPin size={15} /></span>
                {ADDRESS}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold hover:bg-green-500 transition-colors"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
              >
                <IcoPhone /> Appeler
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
              >
                Nous écrire →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
