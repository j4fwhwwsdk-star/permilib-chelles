import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IcoTarget, IcoShield, IcoHandshake, IcoLeaf, IcoPhone, IcoMapPin, IcoClock } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos — Notre équipe",
  description: `Découvrez l'équipe de ${SCHOOL_NAME} à ${CITY}. Formateurs certifiés Qualiopi, accompagnement personnalisé, formations post-permis.`,
  path: "/a-propos",
});

const equipe = [
  { prenom: "L'équipe", role: "Moniteurs & Enseignants", spec: "Permis B" },
];

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
    desc: "Véhicules récents dont un véhicule électrique. Supports numériques inclus.",
  },
];

const horaires = [
  { jour: "Lundi", bureau: "Fermé", conduite: "Fermé" },
  { jour: "Mardi – Vendredi", bureau: "15h – 19h", conduite: "9h – 20h" },
  { jour: "Samedi", bureau: "10h–12h / 14h–16h", conduite: "9h – 18h" },
  { jour: "Dimanche", bureau: "Fermé", conduite: "Fermé" },
];

export default function AProposPage() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            À propos
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            {SCHOOL_NAME}
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Auto-école certifiée Qualiopi, située au 12 Av. du Général de Gaulle à {CITY}.
            Bienvenue pour l'apprentissage de la conduite et de la sécurité routière.
          </p>
        </div>
      </section>

      {/* ─── Approche + Stats ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Texte */}
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                Notre approche
              </p>
              <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 leading-tight mb-5">
                Apprendre à conduire<br />en confiance
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {SCHOOL_NAME} met l'accent sur un accompagnement pédagogique adapté aux besoins de
                chaque candidat. Nos formateurs certifiés utilisent des véhicules modernes et des
                programmes de formation rigoureux.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Avec une note parfaite de 5/5 sur Google et un indice de confiance de 100%,
                nous sommes fiers de la confiance que nos élèves nous accordent.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: "5/5", label: "Note Google\nvérifiée" },
                { value: "AAC", label: "Conduite\naccompagnée" },
                { value: "CPF", label: "Financement\ndisponible" },
                { value: "100%", label: "Indice de\nconfiance" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f8fafc] rounded-xl border border-gray-100 p-5 text-center">
                  <div className="font-bebas text-[44px] gradient-text leading-none">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-1 whitespace-pre-line leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Valeurs ─── */}
      <section className="py-16 px-4 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Nos valeurs</p>
            <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 leading-none mb-10">
              Ce qui nous différencie
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-4">
                  <v.Icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Équipe ─── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">L'équipe</p>
            <h2 className="font-bebas text-[36px] md:text-[44px] text-gray-900 leading-none mb-10">
              Des formateurs à votre écoute
            </h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {equipe.map((m) => (
              <div key={m.prenom} className="bg-[#f8fafc] rounded-xl border border-gray-100 p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-md shadow-blue-200">
                  {m.prenom[0]}
                </div>
                <p className="font-bold text-gray-900 text-sm">{m.prenom}</p>
                <p className="text-gray-500 text-xs mt-0.5">{m.role}</p>
                <span className="inline-block mt-2 text-[11px] text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-medium">
                  {m.spec}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Horaires ─── */}
      <section className="py-16 px-4 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-500"><IcoClock size={20} /></span>
              <h2 className="font-bebas text-[36px] text-gray-900">Horaires d'ouverture</h2>
            </div>
          </Reveal>
          <Reveal variant="bottom">
            <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>Jour</span>
                <span>Bureau</span>
                <span>Conduite</span>
              </div>
              {horaires.map((h, i) => (
                <div
                  key={h.jour}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i > 0 ? "border-t border-gray-100" : ""} ${h.bureau === "Fermé" ? "opacity-40" : ""}`}
                >
                  <span className="font-medium text-gray-900">{h.jour}</span>
                  <span className="text-gray-600">{h.bureau}</span>
                  <span className="text-gray-600">{h.conduite}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <Reveal variant="bottom">
        <section className="py-16 px-4 bg-blue-700">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="font-bebas text-[36px] md:text-[48px] text-white leading-none mb-2">
                Venez nous rencontrer
              </h2>
              <div className="flex items-start gap-2 text-blue-200 text-sm">
                <span className="shrink-0 mt-0.5"><IcoMapPin size={16} /></span>
                12 Av. du Général de Gaulle, 77330 {CITY}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 rounded-lg px-7 py-3 font-bold hover:bg-blue-50 transition-colors"
              >
                <IcoPhone /> Appeler
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/50 text-white rounded-lg px-7 py-3 font-bold hover:bg-white/10 transition-colors"
              >
                Nous écrire →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
