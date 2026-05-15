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
    <div style={{ background: "linear-gradient(180deg, #081428 0%, #0b1d38 100%)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute -top-10 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">À propos</span>
          </div>
          <h1 className="font-bebas text-[58px] md:text-[84px] text-white leading-none mb-5">
            {SCHOOL_NAME}
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Auto-école certifiée Qualiopi à {CITY}.
            Bienvenue pour l&apos;apprentissage de la conduite et de la sécurité routière.
          </p>
        </div>
      </section>

      {/* ── Approche + Stats ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="grid md:grid-cols-2 gap-16">
            {/* Texte */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Notre approche</span>
              </div>
              <h2 className="font-bebas text-[44px] md:text-[52px] text-white leading-tight mb-5">
                Apprendre à conduire<br />en <span className="gradient-text">confiance</span>
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-4">
                {SCHOOL_NAME} met l&apos;accent sur un accompagnement pédagogique adapté aux besoins de
                chaque candidat. Nos formateurs certifiés utilisent des véhicules modernes et des
                programmes de formation rigoureux.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                Avec une note parfaite de 5/5 sur Google et un indice de confiance de 100%,
                nous sommes fiers de la confiance que nos élèves nous accordent à {CITY}.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: "5/5",  label: "Note Google",  sub: "vérifiée",   color: "#fcd34d" },
                { value: "AAC",  label: "Conduite",     sub: "accompagnée", color: "#4ade80" },
                { value: "CPF",  label: "Financement",  sub: "disponible",  color: "#93c5fd" },
                { value: "100%", label: "Indice de",    sub: "confiance",   color: "#4ade80" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl p-6 text-center transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.40), 0 0 0 1px rgba(34,197,94,0.15)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)"; }}
                >
                  <div className="font-bebas text-[48px] leading-none mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-white/70 text-xs font-semibold">{s.label}</div>
                  <div className="text-white/35 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Nos valeurs</span>
            </div>
            <h2 className="font-bebas text-[44px] md:text-[54px] text-white leading-none">
              Ce qui nous <span className="gradient-text">différencie</span>
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {valeurs.map((v) => (
              <div
                key={v.title}
                className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.40), 0 0 0 1px rgba(34,197,94,0.20)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)"; }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-green-400 mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", boxShadow: "0 0 16px rgba(34,197,94,0.10)" }}
                >
                  <v.Icon size={20} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{v.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Horaires ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-400"><IcoClock size={20} /></span>
              <h2 className="font-bebas text-[44px] text-white">Horaires d&apos;ouverture</h2>
            </div>
            <p className="text-white/50 text-sm flex items-center gap-2">
              <IcoMapPin size={14} /> {ADDRESS}
            </p>
          </Reveal>
          <Reveal variant="bottom">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              }}
            >
              <div
                className="grid grid-cols-3 px-6 py-4 text-[10px] font-bold text-white/35 uppercase tracking-widest border-b"
                style={{ background: "rgba(0,0,0,0.20)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span>Jour</span>
                <span>Bureau</span>
                <span>Conduite</span>
              </div>
              {horaires.map((h, i) => (
                <div
                  key={h.jour}
                  className={`grid grid-cols-3 px-6 py-4 text-sm transition-colors duration-200 ${h.bureau === "Fermé" ? "opacity-40" : "hover:bg-white/[0.03]"} ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="font-semibold text-white">{h.jour}</span>
                  <span className={h.bureau === "Fermé" ? "text-white/30" : "text-green-400 font-semibold"}>{h.bureau}</span>
                  <span className={h.conduite === "Fermé" ? "text-white/30" : "text-green-400 font-semibold"}>{h.conduite}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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
              <div className="flex items-start gap-2 text-white/50 text-sm">
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
                className="inline-flex items-center justify-center text-white/80 rounded-xl px-7 py-3.5 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
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
