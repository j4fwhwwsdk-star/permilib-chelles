import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { SCHOOL_NAME, CITY, PHONE, WHATSAPP } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — Devis gratuit",
  description: `Contactez ${SCHOOL_NAME} à ${CITY}. Devis gratuit, réponse rapide. Appelez le ${PHONE} ou écrivez-nous.`,
  path: "/contact",
});

const horaires = [
  { jour: "Lundi", heures: "Fermé" },
  { jour: "Mardi – Vendredi", heures: "15h – 19h (bureau)" },
  { jour: "Samedi", heures: "10h–12h · 14h–16h (bureau)" },
  { jour: "Dimanche", heures: "Fermé" },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-bebas text-[48px] md:text-[64px] text-gray-900 mb-4">
        Nous contacter
      </h1>
      <p className="text-gray-500 text-lg mb-10">
        Prenez contact avec {SCHOOL_NAME} pour toute demande d'information
        ou de devis gratuit.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        <a
          href={`tel:${PHONE}`}
          className="bg-[#2563eb] text-white rounded-xl p-4 text-center font-bold hover:bg-blue-700 transition-colors"
        >
          📞 Appeler
        </a>
        <a
          href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-xl p-4 text-center font-bold hover:bg-green-600 transition-colors"
        >
          💬 WhatsApp
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-bold text-xl mb-6">Envoyer un message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-bold text-xl mb-4">Informations pratiques</h2>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-gray-600">
                <span className="mt-0.5">📍</span>
                <span>12 Av. du Général de Gaulle<br />77330 {CITY}</span>
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <span>📞</span>
                <a href={`tel:${PHONE}`} className="hover:text-[#2563eb]">
                  {PHONE}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4">Horaires du bureau</h2>
            <div className="space-y-2">
              {horaires.map((h) => (
                <div key={h.jour} className="flex justify-between text-sm py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">{h.jour}</span>
                  <span className="text-gray-500">{h.heures}</span>
                </div>
              ))}
            </div>
          </div>

          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
            <iframe
              src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
              title={`Localisation ${SCHOOL_NAME}`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          ) : (
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center text-gray-400 text-sm text-center px-4">
              Carte Google Maps à configurer<br />
              (ajouter NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL dans .env.local)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
