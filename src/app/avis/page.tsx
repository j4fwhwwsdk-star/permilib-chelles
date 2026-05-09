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
  { name: "Marie L.", date: "Novembre 2024", note: 5, formation: "Permis B", text: "Excellente auto-école ! Les moniteurs sont très patients et pédagogues. J'ai obtenu mon permis du premier coup grâce à leur suivi. Je recommande vivement !" },
  { name: "Thomas R.", date: "Octobre 2024", note: 5, formation: "Permis B", text: "Très bonne expérience. Les cours de code sont bien expliqués et les moniteurs s'adaptent au niveau de chaque élève. Ambiance très agréable." },
  { name: "Sophie M.", date: "Septembre 2024", note: 5, formation: "Conduite Accompagnée", text: "Je recommande cette auto-école à 100%. Équipe sympathique et très professionnelle. Les horaires flexibles m'ont vraiment aidé à organiser ma formation." },
  { name: "Lucas D.", date: "Août 2024", note: 4, formation: "Permis B", text: "Bonne formation dans l'ensemble. Moniteurs compétents et disponibles. Quelques délais pour les examens mais c'est lié à la préfecture." },
  { name: "Emma B.", date: "Juillet 2024", note: 5, formation: "Boîte automatique", text: "Super expérience ! J'avais peur de conduire mais les moniteurs m'ont mis en confiance rapidement. Permis obtenu en 4 mois." },
  { name: "Julien P.", date: "Juin 2024", note: 5, formation: "Conduite Accompagnée", text: "Très satisfait de ma formation. L'équipe est à l'écoute et les conseils sont précieux. Je reviendrai pour d'autres formations." },
];

export default function AvisPage() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Témoignages
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Ils ont eu leur permis
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Ce que pensent nos élèves de {SCHOOL_NAME}.
          </p>
        </div>
      </section>

      {/* ─── Stat bar ─── */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => <IcoStar key={i} size={16} />)}
              </div>
              <p className="text-xs text-gray-500">5/5 sur Google</p>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div>
              <p className="font-bebas text-[28px] text-blue-600 leading-none">100%</p>
              <p className="text-xs text-gray-500">Indice de confiance</p>
            </div>
          </div>
          <GoogleBadge />
        </div>
      </section>

      {/* ─── Avis ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal stagger className="grid md:grid-cols-2 gap-5">
            {avis.map((a) => (
              <div
                key={`${a.name}-${a.date}`}
                className="group border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow duration-300 p-6 relative overflow-hidden"
              >
                {/* Guillemet décoratif */}
                <div className="absolute top-4 right-5 font-bebas text-[64px] leading-none text-gray-50 select-none group-hover:text-blue-50 transition-colors">
                  &ldquo;
                </div>

                {/* Étoiles SVG */}
                <div className="flex items-center gap-0.5 text-yellow-400 mb-3 relative z-10">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} size={14} />)}
                  {a.note < 5 && [...Array(5 - a.note)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-200">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic mb-5 relative z-10">
                  &ldquo;{a.text}&rdquo;
                </p>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {a.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{a.name}</p>
                      <p className="text-gray-400 text-xs">{a.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full font-medium">
                    {a.formation}
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CTA laisser un avis ─── */}
      <Reveal variant="bottom">
        <section className="py-16 px-4 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-[36px] md:text-[48px] text-gray-900 leading-none mb-3">
              Vous êtes un de nos élèves ?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Laissez-nous un avis Google, ça nous aide beaucoup et ça aide les futurs élèves !
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-7 py-3 font-bold hover:bg-blue-700 transition-colors"
            >
              <IcoPhone /> Nous contacter
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
