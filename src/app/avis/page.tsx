import Link from "next/link";
import GoogleBadge from "@/components/ui/GoogleBadge";
import Reveal from "@/components/ui/Reveal";
import { IcoStar, IcoPhone } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Avis élèves — Note 5/5",
  description: `${SCHOOL_NAME} à ${CITY} — 5/5 sur Google, 100% d'indice de confiance. Lisez les témoignages de nos élèves.`,
  path: "/avis",
});

const avis = [
  { name: "Marie L.",  date: "Novembre 2024", note: 5, formation: "Permis B",             text: "Excellente auto-école ! Les moniteurs sont très patients et pédagogues. J'ai obtenu mon permis du premier coup grâce à leur suivi. Je recommande vivement !" },
  { name: "Thomas R.", date: "Octobre 2024",  note: 5, formation: "Permis B",             text: "Très bonne expérience. Les cours de code sont bien expliqués et les moniteurs s'adaptent au niveau de chaque élève. Ambiance très agréable." },
  { name: "Sophie M.", date: "Septembre 2024",note: 5, formation: "Conduite Accompagnée", text: "Je recommande cette auto-école à 100%. Équipe sympathique et très professionnelle. Les horaires flexibles m'ont vraiment aidé à organiser ma formation." },
  { name: "Lucas D.",  date: "Août 2024",     note: 4, formation: "Permis B",             text: "Bonne formation dans l'ensemble. Moniteurs compétents et disponibles. Quelques délais pour les examens mais c'est lié à la préfecture." },
  { name: "Emma B.",   date: "Juillet 2024",  note: 5, formation: "Boîte automatique",    text: "Super expérience ! J'avais peur de conduire mais les moniteurs m'ont mis en confiance rapidement. Permis obtenu en 4 mois." },
  { name: "Julien P.", date: "Juin 2024",     note: 5, formation: "Conduite Accompagnée", text: "Très satisfait de ma formation. L'équipe est à l'écoute et les conseils sont précieux. Je reviendrai pour d'autres formations." },
];

export default function AvisPage() {
  return (
    <div style={{ background: "linear-gradient(180deg, #081428 0%, #0b1d38 100%)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute -top-10 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Témoignages</span>
          </div>
          <h1 className="font-bebas text-[58px] md:text-[84px] text-white leading-none mb-5">
            Ils ont eu<br />
            <span className="gradient-text">leur permis</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Ce que pensent nos élèves de {SCHOOL_NAME} à {CITY}.
          </p>
        </div>
      </section>

      {/* ── Stat bar ── */}
      <section className="px-4 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <IcoStar key={i} size={18} />)}
              </div>
              <p className="text-white font-bold text-lg leading-none">5 / 5</p>
              <p className="text-white/40 text-xs mt-0.5">sur Google</p>
            </div>
            <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.10)" }} />
            <div>
              <p className="font-bebas text-[36px] text-green-400 leading-none">100%</p>
              <p className="text-white/40 text-xs">Indice de confiance</p>
            </div>
            <div className="w-px h-12 hidden sm:block" style={{ background: "rgba(255,255,255,0.10)" }} />
            <div className="hidden sm:block">
              <p className="font-bebas text-[36px] text-white leading-none">{avis.length}</p>
              <p className="text-white/40 text-xs">Avis récents</p>
            </div>
          </div>
          <GoogleBadge />
        </div>
      </section>

      {/* ── Avis grid ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {avis.map((a) => (
              <div
                key={`${a.name}-${a.date}`}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-green-500/20"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }} />

                {/* Guillemet */}
                <div className="absolute top-4 right-6 font-bebas text-[80px] leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.04)" }}>&ldquo;</div>

                {/* Étoiles */}
                <div className="flex items-center gap-0.5 text-yellow-400 mb-4">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} size={14} />)}
                  {a.note < 5 && [...Array(5 - a.note)].map((_, i) => (
                    <IcoStar key={`e${i}`} size={14} />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                  &ldquo;{a.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                      style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 12px rgba(22,163,74,0.35)" }}
                    >
                      {a.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{a.name}</p>
                      <p className="text-white/35 text-xs">{a.date}</p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] text-green-400 px-3 py-1 rounded-full font-semibold"
                    style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.22)" }}
                  >
                    {a.formation}
                  </span>
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
              Vous êtes un de nos élèves ?
            </h2>
            <p className="text-white/55 text-base mb-8">
              Laissez-nous un avis Google — ça aide beaucoup les futurs élèves !
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-500 transition-colors"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
              >
                <IcoPhone /> Nous contacter
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-white/80 rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              >
                Envoyer un message →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
