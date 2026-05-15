import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { SCHOOL_NAME, CITY, PHONE, WHATSAPP, ADDRESS, HORAIRES_CODE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — Devis gratuit",
  description: `Contactez ${SCHOOL_NAME} à ${CITY}. Devis gratuit, réponse rapide. Appelez le ${PHONE} ou écrivez-nous.`,
  path: "/contact",
});

const IcoPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IcoPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div style={{ background: "var(--surface-0)", minHeight: "100vh" }}>

      {/* ── Hero full viewport ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        {/* Orbs */}
        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "680px", height: "680px",
            background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-20 -left-20 pointer-events-none"
          style={{ width: "340px", height: "340px",
            background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)" }} />

        {/* Géométrie */}
        <div aria-hidden className="geo-circle absolute top-[24%] right-[14%] animate-spin-slow hidden md:block"
          style={{ width: "180px", height: "180px" }} />
        <div aria-hidden className="geo-square absolute top-[43%] right-[7%] animate-float-slow hidden md:block"
          style={{ width: "36px", height: "36px", transform: "rotate(45deg)" }} />
        <div aria-hidden className="geo-dot absolute top-[31%] right-[34%] hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full py-32">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-green-500 line-reveal" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Contact</span>
          </div>
          <h1 className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: "clamp(60px, 11vw, 140px)" }}>
            Nous <span className="gradient-text-bright">contacter</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Prenez contact avec {SCHOOL_NAME} pour toute demande d&apos;information ou de devis gratuit.
          </p>

          {/* Boutons CTA avec bob animation */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg animate-bob-delayed">
            <a
              href={`tel:${PHONE}`}
              className="shine-btn flex-1 flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-6 py-4 font-bold hover:bg-green-700 transition-all duration-300"
              style={{ boxShadow: "0 8px 28px rgba(22,163,74,0.40)" }}
            >
              <IcoPhone /> Appeler — {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white rounded-xl px-6 py-4 font-bold transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <IcoChat /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="py-24 px-4" style={{ background: "#0e2644", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Formulaire */}
            <Reveal variant="left">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Message</span>
                </div>
                <h2 className="font-bebas text-[34px] text-white mb-6">Envoyer un message</h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Infos pratiques */}
            <Reveal variant="right" className="space-y-5">

              {/* Coordonnées */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.20)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Informations</span>
                </div>
                <h2 className="font-bebas text-[28px] text-white mb-4">Informations pratiques</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 shrink-0"><IcoPin /></span>
                    <span className="text-white/65 text-sm">{ADDRESS}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 shrink-0"><IcoPhone /></span>
                    <a href={`tel:${PHONE}`} className="text-white/65 text-sm font-semibold hover:text-green-400 transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.20)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">Horaires</span>
                </div>
                <h2 className="font-bebas text-[28px] text-white mb-4">Horaires du bureau</h2>
                <div className="space-y-0">
                  {HORAIRES_CODE.map((h) => (
                    <div
                      key={h.jour}
                      className="flex justify-between text-sm py-3 border-b last:border-0"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-white/60 font-medium">{h.jour}</span>
                      <span className={h.heures === "Fermé" ? "text-white/25" : "text-green-400 font-semibold"}>
                        {h.heures}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte */}
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.09)" }}>
                  <iframe
                    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                    title={`Localisation ${SCHOOL_NAME}`}
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div
                  className="rounded-2xl h-44 flex flex-col items-center justify-center gap-2 text-white/30 text-sm"
                  style={{ background: "linear-gradient(145deg, #112540 0%, #0e2038 100%)", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                  <IcoPin />
                  <span>Carte Google Maps</span>
                  <span className="text-xs text-white/20">{CITY}</span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
