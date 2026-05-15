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
    <div>
      {/* ── En-tête ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Témoignages</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Ils ont eu leur permis
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Ce que pensent nos élèves de {SCHOOL_NAME} à {CITY}.
          </p>
        </div>
      </section>

      {/* ── Stat bar ── */}
      <section className="py-6 px-4 border-b" style={{ background: "#0e1e38", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => <IcoStar key={i} size={15} />)}
              </div>
              <p className="text-xs text-white/40 font-medium">5/5 sur Google</p>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.10)" }} />
            <div>
              <p className="font-bebas text-[28px] text-green-400 leading-none">100%</p>
              <p className="text-xs text-white/40 font-medium">Indice de confiance</p>
            </div>
          </div>
          <GoogleBadge />
        </div>
      </section>

      {/* ── Avis ── */}
      <section className="py-20 px-4" style={{ background: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal stagger className="grid md:grid-cols-2 gap-5">
            {avis.map((a) => (
              <div
                key={`${a.name}-${a.date}`}
                className="group rounded-2xl hover:border-green-500/25 transition-all duration-400 p-7 relative overflow-hidden"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Barre verte basse au hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Guillemet décoratif */}
                <div
                  className="absolute top-5 right-6 font-bebas text-[72px] leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.04)" }}
                >
                  &ldquo;
                </div>

                {/* Étoiles */}
                <div className="flex items-center gap-0.5 text-yellow-400 mb-3 relative z-10">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} size={13} />)}
                  {a.note < 5 && [...Array(5 - a.note)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "rgba(255,255,255,0.15)" }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                <p className="text-white/50 text-sm leading-relaxed italic mb-5 relative z-10">
                  &ldquo;{a.text}&rdquo;
                </p>

                <div
                  className="flex items-center justify-between relative z-10 pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
                      {a.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{a.name}</p>
                      <p className="text-white/35 text-xs">{a.date}</p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] text-green-400 px-2.5 py-1 rounded-full font-semibold"
                    style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                  >
                    {a.formation}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA laisser un avis ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-bebas text-[38px] md:text-[52px] text-white leading-none mb-3">
            Vous êtes un de nos élèves ?
          </h2>
          <p className="text-white/45 text-sm mb-8">
            Laissez-nous un avis Google, ça nous aide beaucoup et ça aide les futurs élèves !
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-7 py-3.5 font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-900/30"
            >
              <IcoPhone /> Nous contacter
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 text-white/80 rounded-xl px-7 py-3.5 font-semibold hover:bg-white/8 hover:text-white transition-colors"
            >
              Envoyer un message →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
