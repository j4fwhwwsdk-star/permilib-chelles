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
  {
    question: "Comment s'inscrire à l'auto-école ?",
    answer: "Vous pouvez vous inscrire en nous appelant, en nous envoyant un message WhatsApp ou en remplissant notre formulaire de contact. Un membre de notre équipe vous recontactera rapidement pour organiser un rendez-vous.",
  },
  {
    question: "Quel est l'âge minimum pour commencer la conduite ?",
    answer: "Pour le permis B classique, l'âge minimum est 17 ans (examen possible à 17 ans, conduire seul à 18 ans). Pour la conduite accompagnée (AAC), vous pouvez commencer dès 15 ans.",
  },
  {
    question: "Combien de temps faut-il pour obtenir le permis ?",
    answer: "La durée varie selon les élèves. En moyenne, comptez 4 à 6 mois pour un permis B classique avec 20 à 25h de conduite. La conduite accompagnée peut durer jusqu'à 2 ans mais vous rend beaucoup plus à l'aise.",
  },
  {
    question: "Puis-je utiliser mon CPF pour financer le permis ?",
    answer: "Oui, le permis B est éligible au CPF (Compte Personnel de Formation). Contactez-nous pour vérifier votre éligibilité et vous accompagner dans les démarches.",
  },
  {
    question: "Qu'est-ce que le permis à 1€/jour ?",
    answer: "C'est un dispositif de prêt à taux zéro destiné aux jeunes de 15 à 25 ans. Vous empruntez le montant de la formation et le remboursez sur 3 ans à raison d'environ 1€ par jour. Renseignez-vous auprès de notre équipe.",
  },
  {
    question: "Que comprend le forfait permis ?",
    answer: "Nos forfaits incluent le code de la route, les heures de conduite, les frais d'inscription à l'examen et le suivi pédagogique. Les détails varient selon le forfait choisi — consultez notre page Tarifs.",
  },
  {
    question: "Que se passe-t-il si j'échoue à l'examen ?",
    answer: "En cas d'échec, nous analysons ensemble les points à améliorer et vous proposons des heures de conduite supplémentaires avant de représenter l'examen. Les frais de repassage sont à prévoir.",
  },
  {
    question: "Quels documents faut-il fournir pour s'inscrire ?",
    answer: "Vous aurez besoin d'une pièce d'identité valide, d'une photo d'identité, d'un justificatif de domicile de moins de 6 mois et d'un avis ASSR (pour les moins de 18 ans). Nous vous indiquerons précisément les documents lors de votre inscription.",
  },
];

export default function FaqPage() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h1 className="font-bebas text-[52px] md:text-[72px] text-white leading-none mb-4">
            Questions fréquentes
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos formations, tarifs et financement.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="bottom">
            <div className="space-y-2 mb-16">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal variant="scale">
            <div className="bg-[#f8fafc] rounded-xl border border-gray-100 p-8 text-center">
              <h2 className="font-bebas text-[32px] text-gray-900 leading-none mb-2">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-7 py-3 font-bold hover:bg-blue-700 transition-colors"
                >
                  <IcoPhone /> Appeler
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg px-7 py-3 font-bold hover:bg-gray-50 transition-colors"
                >
                  Envoyer un message →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
