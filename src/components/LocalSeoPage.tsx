import Image from "next/image";
import Link from "next/link";
import GoogleBadge from "@/components/ui/GoogleBadge";
import { PHONE, CITY, SCHOOL_NAME } from "@/lib/site";

interface Props {
  ville: string;
  distance: string;
  description: string;
}

export default function LocalSeoPage({ ville, distance, description }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
          alt={`Auto-école près de ${ville}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-[#2563eb] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            Auto-école · {CITY}
          </span>
          <h1 className="font-bebas text-[60px] md:text-[84px] text-white leading-none mb-6">
            Auto-école<br />près de {ville}
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE}`}
              className="bg-[#2563eb] text-white rounded-xl px-8 py-4 font-bold text-lg text-center hover:bg-blue-500 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-compat text-white border border-white/30 rounded-xl px-8 py-4 font-bold text-lg text-center hover:bg-white/20 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-bold text-gray-900">12 Av. du Général de Gaulle</p>
              <p className="text-sm text-gray-500">77330 {CITY}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚗</span>
            <div>
              <p className="font-bold text-gray-900">À {distance} de {ville}</p>
              <p className="text-sm text-gray-500">Facilement accessible</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="font-bold text-gray-900">5/5 · avis vérifiés</p>
              <p className="text-sm text-gray-500">100% d'indice de confiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 px-4 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
            Formations
          </p>
          <h2 className="font-bebas text-[40px] md:text-[52px] text-gray-900 mb-10">
            Nos formations depuis {ville}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🚗", title: "Permis B Manuel", details: "Formation complète, code inclus — devis sur demande" },
              { icon: "⚙️", title: "Permis B Automatique", details: "Idéal pour la ville — devis sur demande" },
              { icon: "👨‍👦", title: "Conduite Accompagnée (AAC)", details: "Dès 15 ans — formation initiale incluse" },
              { icon: "📚", title: "Formation Post-Permis", details: "Perfectionnement et éco-conduite" },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-4 hover:shadow-sm transition-shadow"
              >
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{f.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{f.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/formations"
              className="inline-block bg-[#2563eb] text-white rounded-xl px-6 py-3 font-bold hover:bg-blue-700 transition-colors"
            >
              Voir toutes les formations →
            </Link>
            <Link
              href="/tarifs"
              className="inline-block border-2 border-gray-200 text-gray-700 rounded-xl px-6 py-3 font-bold hover:border-[#2563eb] transition-colors"
            >
              Consulter les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
            Pourquoi nous ?
          </p>
          <h2 className="font-bebas text-[40px] md:text-[52px] text-gray-900 mb-10">
            {SCHOOL_NAME} — le choix des élèves de {ville}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: "🏅", title: "Certification Qualiopi", desc: "Label officiel de qualité pédagogique reconnu par l'État." },
              { icon: "💳", title: "CPF + Aide IDF jusqu'à 1 000€", desc: "Plusieurs dispositifs pour financer votre permis." },
              { icon: "🎯", title: "Suivi personnalisé", desc: "Pédagogie bienveillante, chaque élève avance à son rythme." },
              { icon: "⚡", title: "Simulateur de conduite", desc: "Pratiquez en toute sécurité avant de prendre la route." },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 p-5 rounded-2xl bg-[#f8fafc]">
                <span className="text-2xl">{a.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{a.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <GoogleBadge />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#2563eb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-[44px] md:text-[56px] text-white mb-4">
            Prêt à commencer depuis {ville} ?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contactez {SCHOOL_NAME} — devis gratuit, réponse rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="bg-white text-[#2563eb] rounded-xl px-8 py-4 font-bold hover:bg-blue-50 transition-colors"
            >
              📞 {PHONE}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white rounded-xl px-8 py-4 font-bold hover:bg-white hover:text-[#2563eb] transition-colors"
            >
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
