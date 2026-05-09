import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, CITY, ADDRESS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et RGPD de ${SCHOOL_NAME} à ${process.env.NEXT_PUBLIC_CITY}.`,
  path: "/politique-confidentialite",
  noindex: true,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-[#2563eb] hover:underline text-sm font-medium">
        ← Retour à l'accueil
      </Link>

      <h1 className="font-bebas text-[48px] text-gray-900">Politique de confidentialité</h1>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Données collectées</h2>
        <p className="text-gray-600">
          Dans le cadre du formulaire de contact, {SCHOOL_NAME} collecte
          les données suivantes :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Prénom et nom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Formation souhaitée</li>
          <li>Message libre</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Finalité du traitement</h2>
        <p className="text-gray-600">
          Les données collectées sont utilisées uniquement pour vous recontacter dans le cadre de
          votre demande d'information ou d'inscription aux formations de{" "}
          {SCHOOL_NAME}.
        </p>
        <p className="text-gray-600">
          Elles ne sont jamais transmises à des tiers, ni utilisées à des fins commerciales ou
          publicitaires.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Durée de conservation</h2>
        <p className="text-gray-600">
          Vos données sont conservées pendant une durée maximale de <strong>12 mois</strong> à
          compter de leur collecte, puis supprimées définitivement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Vos droits (RGPD)</h2>
        <p className="text-gray-600">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          des droits suivants :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à la suppression (droit à l'oubli)</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p className="text-gray-600">
          Pour exercer ces droits, contactez {SCHOOL_NAME} par téléphone
          au{" "}
          <a href={`tel:${PHONE}`} className="text-[#2563eb] underline">
            {PHONE}
          </a>{" "}
          ou via notre{" "}
          <Link href="/contact" className="text-[#2563eb] underline">
            formulaire de contact
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Cookies</h2>
        <p className="text-gray-600">
          Ce site peut utiliser Google Analytics pour mesurer l'audience de manière anonyme. Vous
          pouvez désactiver les cookies dans les paramètres de votre navigateur.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-bold text-xl text-gray-900">Responsable du traitement</h2>
        <p className="text-gray-600">{SCHOOL_NAME}</p>
        <p className="text-gray-600">{ADDRESS}</p>
        <p className="text-gray-600">Tél : {PHONE}</p>
      </section>
    </main>
  );
}
