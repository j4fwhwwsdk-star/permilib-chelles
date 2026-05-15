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
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero full viewport — sombre ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden" style={{ background: "#0f172a" }}>
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "700px", height: "700px",
            background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-24 -left-24 pointer-events-none"
          style={{ width: "350px", height: "350px",
            background: "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)" }} />

        <div aria-hidden className="geo-circle absolute top-[24%] right-[13%] animate-spin-slow hidden md:block"
          style={{ width: "190px", height: "190px" }} />
        <div aria-hidden className="geo-square absolute bottom-[25%] right-[22%] animate-float-slow hidden md:block"
          style={{ width: "40px", height: "40px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-dot absolute top-[35%] right-[32%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Témoignages</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 11vw, 140px)" }}>
            Ils ont eu<br />
            <span className="gradient-text-premium">leur permis</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Ce que pensent nos élèves de {SCHOOL_NAME} à {CITY}.
          </p>
          <div className="animate-bob-delayed inline-block">
            <a href={`tel:${PHONE}`}
              className="shine-btn inline-flex items-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-700 transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.38)" }}>
              <IcoPhone size={16} /> Nous rejoindre
            </a>
          </div>
        </div>
      </section>

      {/* ── Stat bar ── */}
      <section className="px-4 py-8" style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <IcoStar key={i} size={18} />)}
              </div>
              <p className="font-bold text-lg leading-none" style={{ color: "#0f172a" }}>5 / 5</p>
              <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>sur Google</p>
            </div>
            <div className="w-px h-12" style={{ background: "rgba(0,0,0,0.08)" }} />
            <div>
              <p className="font-bebas text-[36px] leading-none" style={{ color: "#16a34a" }}>100%</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>Indice de confiance</p>
            </div>
            <div className="w-px h-12 hidden sm:block" style={{ background: "rgba(0,0,0,0.08)" }} />
            <div className="hidden sm:block">
              <p className="font-bebas text-[36px] leading-none" style={{ color: "#0f172a" }}>{avis.length}</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>Avis récents</p>
            </div>
          </div>
          <GoogleBadge />
        </div>
      </section>

      {/* ── Avis grid ── */}
      <section className="py-32 px-4" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal variant="bottom" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500 line-reveal" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Témoignages</span>
            </div>
            <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(40px, 5.5vw, 68px)", color: "#0f172a" }}>
              Ce que disent <span className="gradient-text">nos élèves</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {avis.map((a) => (
              <div
                key={`${a.name}-${a.date}`}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }} />

                <div className="absolute top-4 right-6 font-bebas text-[80px] leading-none select-none pointer-events-none"
                  style={{ color: "rgba(22,163,74,0.07)" }}>&ldquo;</div>

                <div className="flex items-center gap-0.5 text-yellow-500 mb-4">
                  {[...Array(a.note)].map((_, i) => <IcoStar key={i} size={14} />)}
                  {a.note < 5 && [...Array(5 - a.note)].map((_, i) => (
                    <IcoStar key={`e${i}`} size={14} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed italic mb-6" style={{ color: "#475569" }}>
                  &ldquo;{a.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #f1f5f9" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                      style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 12px rgba(22,163,74,0.25)" }}
                    >
                      {a.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#0f172a" }}>{a.name}</p>
                      <p className="text-xs" style={{ color: "#94a3b8" }}>{a.date}</p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] px-3 py-1 rounded-full font-semibold"
                    style={{ color: "#16a34a", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)" }}
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
              Vous êtes un de nos élèves ?
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
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
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
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
