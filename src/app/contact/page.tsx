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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <div>
      {/* ── En-tête ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Contact</span>
          </div>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Nous contacter
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Prenez contact avec {SCHOOL_NAME} pour toute demande d&apos;information ou de devis gratuit.
          </p>
        </div>
      </section>

      {/* ── Boutons rapides ── */}
      <section className="px-4 py-5 border-b" style={{ background: "#0e1e38", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 shine-btn bg-green-600 text-white rounded-xl p-4 text-center font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-green-900/30"
          >
            <IcoPhone /> Appeler — {PHONE}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-white rounded-xl p-4 text-center font-bold transition-all duration-300 flex items-center justify-center gap-2"
            style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <IcoChat /> WhatsApp
          </a>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <section className="py-16 px-4" style={{ background: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Formulaire */}
            <Reveal variant="left">
              <div
                className="rounded-2xl p-8"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Message</span>
                </div>
                <h2 className="font-bebas text-[30px] text-white mb-6">Envoyer un message</h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Infos pratiques */}
            <Reveal variant="right" className="space-y-6">

              {/* Coordonnées */}
              <div
                className="rounded-2xl p-7"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Informations</span>
                </div>
                <h2 className="font-bebas text-[26px] text-white mb-4">Informations pratiques</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 shrink-0"><IcoPin /></span>
                    <span className="text-white/55 text-sm">{ADDRESS}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 shrink-0"><IcoPhone /></span>
                    <a href={`tel:${PHONE}`} className="text-white/55 text-sm font-semibold hover:text-green-400 transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires bureau */}
              <div
                className="rounded-2xl p-7"
                style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.15em] uppercase">Horaires</span>
                </div>
                <h2 className="font-bebas text-[26px] text-white mb-4">Horaires du bureau</h2>
                <div className="space-y-0">
                  {HORAIRES_CODE.map((h) => (
                    <div
                      key={h.jour}
                      className="flex justify-between text-sm py-2.5 border-b last:border-0"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-white/55 font-medium">{h.jour}</span>
                      <span className={h.heures === "Fermé" ? "text-white/30" : "text-green-400 font-semibold"}>
                        {h.heures}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte Google Maps */}
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <iframe
                    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                    title={`Localisation ${SCHOOL_NAME}`}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div
                  className="rounded-2xl h-48 flex flex-col items-center justify-center gap-2 text-white/30 text-sm"
                  style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.08)" }}
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
