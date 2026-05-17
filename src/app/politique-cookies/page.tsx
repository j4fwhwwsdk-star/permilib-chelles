import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SCHOOL_NAME, PHONE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique de cookies",
  description: `Politique d'utilisation des cookies de ${SCHOOL_NAME}.`,
  path: "/politique-cookies",
  noindex: true,
});

export default function PolitiqueCookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-[#16a34a] hover:underline text-sm font-medium">
        ← Retour à l'accueil
      </Link>

      <h1 className="font-bebas text-[48px] text-gray-900">Politique de cookies</h1>

      <p className="text-gray-600 text-sm">Dernière mise à jour : mai 2025</p>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Qu'est-ce qu'un cookie ?</h2>
        <p className="text-gray-600">
          Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette)
          lorsque vous visitez un site internet. Il permet au site de mémoriser vos préférences et d'analyser
          la façon dont vous utilisez le site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Cookies utilisés sur ce site</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Cookie</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Type</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Finalité</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 text-gray-600">_ga, _gid</td>
                <td className="p-3 border border-gray-200 text-gray-600">Analytique</td>
                <td className="p-3 border border-gray-200 text-gray-600">Google Analytics — mesure d'audience anonyme</td>
                <td className="p-3 border border-gray-200 text-gray-600">13 mois / 24h</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 text-gray-600">_gat</td>
                <td className="p-3 border border-gray-200 text-gray-600">Analytique</td>
                <td className="p-3 border border-gray-200 text-gray-600">Limite le taux de requêtes Google Analytics</td>
                <td className="p-3 border border-gray-200 text-gray-600">1 minute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600">
          Ce site n'utilise <strong>pas de cookies publicitaires</strong> ni de cookies de réseaux sociaux.
          Les données collectées via Google Analytics sont anonymisées et ne permettent pas de vous identifier personnellement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Base légale</h2>
        <p className="text-gray-600">
          Conformément au RGPD et aux recommandations de la CNIL, les cookies analytiques sont déposés uniquement
          après votre consentement explicite. Vous pouvez retirer votre consentement à tout moment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Comment refuser ou supprimer les cookies ?</h2>
        <p className="text-gray-600">Vous pouvez gérer les cookies via les paramètres de votre navigateur :</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Google Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies</li>
          <li><strong>Mozilla Firefox</strong> : Options → Vie privée et sécurité → Cookies</li>
          <li><strong>Safari</strong> : Préférences → Confidentialité → Cookies</li>
          <li><strong>Microsoft Edge</strong> : Paramètres → Confidentialité → Cookies</li>
        </ul>
        <p className="text-gray-600">
          La désactivation des cookies peut affecter certaines fonctionnalités du site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Contact</h2>
        <p className="text-gray-600">
          Pour toute question relative à l'utilisation des cookies, contactez-nous :
        </p>
        <p className="text-gray-600">
          <strong>{SCHOOL_NAME}</strong><br />
          Tél : <a href={`tel:${PHONE}`} className="text-[#16a34a] underline">{PHONE}</a><br />
          Ou via notre <Link href="/contact" className="text-[#16a34a] underline">formulaire de contact</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">En savoir plus</h2>
        <p className="text-gray-600">
          Pour plus d'informations sur vos droits et la protection de vos données, consultez notre{" "}
          <Link href="/politique-confidentialite" className="text-[#16a34a] underline">
            politique de confidentialité
          </Link>{" "}
          ou le site de la{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16a34a] underline"
          >
            CNIL
          </a>.
        </p>
      </section>
    </main>
  );
}
