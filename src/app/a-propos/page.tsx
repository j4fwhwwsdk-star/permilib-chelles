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
  {
    Icon: IcoTarget,
    title: "Pédagogie bienveillante",
    desc: "Chaque élève avance à son rythme dans un environnement serein et encourageant.",
  },
  {
    Icon: IcoShield,
    title: "Certification Qualiopi",
    desc: "Label de qualité officiel reconnu par l'État, gage de sérieux et de rigueur.",
  },
  {
    Icon: IcoHandshake,
    title: "Transparence totale",
    desc: "Tarifs clairs, sans frais cachés. Devis gratuit sur demande.",
  },
  {
    Icon: IcoLeaf,
    title: "Modernité",
    desc: "Véhicules récents et modernes. Supports numériques inclus dans chaque formation.",
  },
];

const horaires = [
  { jour: "Lundi",            bureau: "Fermé",              conduite: "Fermé" },
  { jour: "Mardi – Vendredi", bureau: "15h – 19h",          conduite: "9h – 20h" },
  { jour: "Samedi",           bureau: "10h–12h / 14h–16h",  conduite: "9h – 18h" },
  { jour: "Dimanche",         bureau: "Fermé",              conduite: "Fermé" },
];

export default function AProposPage() {
  return (
    <div>
      {/* ── En-tête de page ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-600/6 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">À propos</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            {SCHOOL_NAME}
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Auto-école certifiée Qualiopi à {CITY}.
            Bienvenue pour l&apos;apprentissage de la conduite et de la sécurité routière.
          </p>
        </div>
      </section>

      {/* ── Approche + Stats ── */}
      <section className="py-20 px-4" style={{ background: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Texte */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-green-500" />
                <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Notre approche</span>
              </div>
              <h2 className="font-bebas text-[38px] md:text-[48px] text-white leading-tight mb-5">
                Apprendre à conduire<br />en <span className="gradient-text">confiance</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {SCHOOL_NAME} met l&apos;accent sur un accompagnement pédagogique adapté aux besoins de
                chaque candidat. Nos formateurs certifiés utilisent des véhicules modernes et des
                programmes de formation rigoureux.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Avec une note parfaite de 5/5 sur Google et un indice de confiance de 100%,
                nous sommes fiers de la confiance que nos élèves nous accordent à {CITY}.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: "5/5",  label: "Note Google",    sub: "vérifiée" },
                { value: "AAC",  label: "Conduite",       sub: "accompagnée" },
                { value: "CPF",  label: "Financement",    sub: "disponible" },
                { value: "100%", label: "Indice de",      sub: "confiance" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl p-5 text-center hover:border-green-500/25 transition-all duration-400"
                  style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="font-bebas text-[44px] gradient-text leading-none">{s.value}</div>
                  <div className="text-white/55 text-xs font-semibold mt-1">{s.label}</div>
                  <div className="text-white/30 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-20 px-4 border-t" style={{ background: "#0e1e38", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Nos valeurs</span>
            </div>
            <h2 className="font-bebas text-[38px] md:text-[48px] text-white leading-none">
              Ce qui nous <span className="gradient-text">différencie</span>
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {valeurs.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl p-6 hover:border-green-500/25 transition-all duration-400 relative overflow-hidden"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <v.Icon size={20} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{v.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Équipe ── */}
      <section className="py-20 px-4 border-t" style={{ background: "#0a1628", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">L&apos;équipe</span>
            </div>
            <h2 className="font-bebas text-[38px] md:text-[48px] text-white leading-none">
              Des formateurs à <span className="gradient-text">votre écoute</span>
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { prenom: "L'équipe", role: "Moniteurs & Enseignants", spec: "Permis B" },
            ].map((m) => (
              <div
                key={m.prenom}
                className="rounded-2xl p-6 text-center hover:border-green-500/25 transition-all duration-300"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-md shadow-green-900/30">
                  {m.prenom[0]}
                </div>
                <p className="font-bold text-white text-sm">{m.prenom}</p>
                <p className="text-white/45 text-xs mt-0.5">{m.role}</p>
                <span
                  className="inline-block mt-2 text-[11px] text-green-400 px-2.5 py-0.5 rounded-full font-semibold"
                  style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                >
                  {m.spec}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Horaires ── */}
      <section className="py-20 px-4 border-t" style={{ background: "#0e1e38", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal variant="bottom" className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-400"><IcoClock size={18} /></span>
              <h2 className="font-bebas text-[38px] text-white">Horaires d&apos;ouverture</h2>
            </div>
            <p className="text-white/35 text-sm flex items-center gap-2">
              <IcoMapPin size={14} /> {ADDRESS}
            </p>
          </Reveal>
          <Reveal variant="bottom">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#132540" }}
            >
              <div
                className="grid grid-cols-3 px-6 py-3.5 text-[10px] font-bold text-white/30 uppercase tracking-widest border-b"
                style={{ background: "#0e1e38", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <span>Jour</span>
                <span>Bureau</span>
                <span>Conduite</span>
              </div>
              {horaires.map((h, i) => (
                <div
                  key={h.jour}
                  className={`grid grid-cols-3 px-6 py-4 text-sm transition-colors duration-200 ${i > 0 ? "border-t" : ""} ${h.bureau === "Fermé" ? "opacity-40" : ""}`}
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
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-[40px] md:text-[52px] text-white leading-none mb-2">
              Venez nous rencontrer
            </h2>
            <div className="flex items-start gap-2 text-white/40 text-sm">
              <span className="shrink-0 mt-0.5"><IcoMapPin size={15} /></span>
              {ADDRESS}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-900/30"
            >
              <IcoPhone /> Appeler
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 text-white/80 rounded-xl px-7 py-3.5 font-semibold hover:bg-white/8 hover:text-white transition-colors"
            >
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
