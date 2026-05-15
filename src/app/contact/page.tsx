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
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero full viewport — sombre ── */}
      <section className="relative min-h-screen flex items-center px-4 overflow-hidden" style={{ background: "#0f172a" }}>
        <div className="absolute inset-0 bg-mesh-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        <div aria-hidden className="hero-glow-orb absolute -top-48 -right-48 pointer-events-none"
          style={{ width: "680px", height: "680px",
            background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.07) 40%, transparent 70%)" }} />
        <div aria-hidden className="hero-glow-orb-sm absolute -bottom-20 -left-20 pointer-events-none"
          style={{ width: "340px", height: "340px",
            background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)" }} />

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
            Nous <span className="gradient-text-premium">contacter</span>
          </h1>
          <p className="max-w-xl mb-10 leading-[1.75]"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.62)" }}>
            Prenez contact avec {SCHOOL_NAME} pour toute demande d&apos;information ou de devis gratuit.
          </p>

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
      <section className="py-24 px-4" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Formulaire */}
            <Reveal variant="left">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Message</span>
                </div>
                <h2 className="font-bebas text-[34px] mb-6" style={{ color: "#0f172a" }}>Envoyer un message</h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Infos pratiques */}
            <Reveal variant="right" className="space-y-5">

              {/* Coordonnées */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Informations</span>
                </div>
                <h2 className="font-bebas text-[28px] mb-4" style={{ color: "#0f172a" }}>Informations pratiques</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: "#16a34a" }}><IcoPin /></span>
                    <span className="text-sm" style={{ color: "#64748b" }}>{ADDRESS}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0" style={{ color: "#16a34a" }}><IcoPhone /></span>
                    <a href={`tel:${PHONE}`} className="text-sm font-semibold hover:text-green-600 transition-colors"
                      style={{ color: "#374151" }}>
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#16a34a" }}>Horaires</span>
                </div>
                <h2 className="font-bebas text-[28px] mb-4" style={{ color: "#0f172a" }}>Horaires du bureau</h2>
                <div className="space-y-0">
                  {HORAIRES_CODE.map((h) => (
                    <div
                      key={h.jour}
                      className="flex justify-between text-sm py-3 border-b last:border-0"
                      style={{ borderColor: "#f1f5f9" }}
                    >
                      <span className="font-medium" style={{ color: "#374151" }}>{h.jour}</span>
                      <span className="font-semibold"
                        style={{ color: h.heures === "Fermé" ? "#ef4444" : "#16a34a" }}>
                        {h.heures}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte */}
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
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
                  className="rounded-2xl h-44 flex flex-col items-center justify-center gap-2 text-sm"
                  style={{ background: "#f8fafc", border: "1px solid #e5e7eb", color: "#94a3b8" }}
                >
                  <IcoPin />
                  <span>Carte Google Maps</span>
                  <span className="text-xs" style={{ color: "#cbd5e1" }}>{CITY}</span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
