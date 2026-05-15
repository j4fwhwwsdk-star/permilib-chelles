import Link from "next/link";
import { FaqItem } from "@/components/ui/FaqItem";
import Reveal from "@/components/ui/Reveal";
import { IcoPhone } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY } from "@/lib/site";

export const metadata = buildMetadata({
  title: "FAQ — Questions fréquentes",
  description: `Toutes les réponses sur le permis, les tarifs, le CPF et la conduite accompagnée. ${SCHOOL_NAME} à ${CITY}.`,
  path: "/faq",
});

const faqs = [
  { question: "Comment s'inscrire à l'auto-école ?",         answer: "Vous pouvez vous inscrire en nous appelant, en nous envoyant un message WhatsApp ou en remplissant notre formulaire de contact. Un membre de notre équipe vous recontactera rapidement." },
  { question: "Quel est l'âge minimum pour commencer ?",     answer: "Pour le permis B classique, l'âge minimum est 17 ans (conduire seul à 18 ans). Pour la conduite accompagnée (AAC), vous pouvez commencer dès 15 ans." },
  { question: "Combien de temps pour obtenir le permis ?",   answer: "En moyenne, comptez 4 à 6 mois pour un permis B classique avec 20 à 25h de conduite. La conduite accompagnée peut durer jusqu'à 2 ans mais vous rend beaucoup plus à l'aise." },
  { question: "Puis-je utiliser mon CPF pour le permis ?",   answer: "Oui, le permis B est éligible au CPF. Contactez-nous pour vérifier votre éligibilité et vous accompagner dans les démarches sur Mon Compte Formation." },
  { question: "Qu'est-ce que le permis à 1€/jour ?",         answer: "C'est un prêt à taux zéro destiné aux jeunes de 15 à 25 ans. Vous empruntez le montant de la formation et le remboursez sur 3 ans (~1€/jour). Renseignez-vous auprès de nous." },
  { question: "Que comprend le forfait permis ?",             answer: "Nos forfaits incluent le code de la route, les heures de conduite, les frais d'inscription à l'examen et le suivi pédagogique. Consultez notre page Tarifs pour les détails." },
  { question: "Que se passe-t-il si j'échoue à l'examen ?", answer: "En cas d'échec, nous analysons les points à améliorer et proposons des heures supplémentaires avant de représenter l'examen. Les frais de repassage sont à prévoir." },
  { question: "Quels documents pour s'inscrire ?",           answer: "Pièce d'identité, photo d'identité, justificatif de domicile (moins de 6 mois) et avis ASSR pour les moins de 18 ans. Nous vous indiquons précisément les documents lors de l'inscription." },
];

export default function FaqPage() {
  return (
    <div style={{ background: "linear-gradient(180deg, #081428 0%, #0b1d38 100%)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(22,163,74,0.10) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500" />
            <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">FAQ</span>
          </div>
          <h1 className="font-bebas text-[58px] md:text-[84px] text-white leading-none mb-5">
            Questions<br />
            <span className="gradient-text">fréquentes</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos formations, tarifs et financement.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="bottom">
            <div className="space-y-3 mb-16">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Reveal>

          <Reveal variant="scale">
            <div
              className="rounded-2xl p-10 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f3320 0%, #0a2016 50%, #112a1a 100%)",
                border: "1px solid rgba(34,197,94,0.20)",
                boxShadow: "0 0 60px rgba(22,163,74,0.12)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #22c55e 50%, transparent)" }} />
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 bg-green-500" />
                  <span className="text-green-400 text-xs font-bold tracking-[0.18em] uppercase">On est là</span>
                  <div className="h-px w-8 bg-green-500" />
                </div>
                <h2 className="font-bebas text-[36px] md:text-[46px] text-white leading-none mb-3">
                  Vous n&apos;avez pas trouvé votre réponse ?
                </h2>
                <p className="text-white/55 text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Notre équipe répond à toutes vos questions sur les formations, tarifs et financement.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-green-500 transition-colors"
                    style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.40)" }}
                  >
                    <IcoPhone /> Appeler
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
