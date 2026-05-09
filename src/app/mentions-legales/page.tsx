import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, SCHOOL_NAME, ADDRESS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales de ${SCHOOL_NAME} à ${process.env.NEXT_PUBLIC_CITY}.`,
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-[#2563eb] hover:underline text-sm font-medium">
        ← Retour à l'accueil
      </Link>

      <h1 className="font-bebas text-[48px] text-gray-900">Mentions légales</h1>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-gray-900">Éditeur du site</h2>
        <p className="text-gray-600">{SCHOOL_NAME}</p>
        <p className="text-gray-600">{ADDRESS}</p>
        <p className="text-gray-600">Tél : {PHONE}</p>
        <p className="text-gray-600">Directeur de publication : [Prénom Nom du gérant]</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-gray-900">Hébergement</h2>
        <p className="text-gray-600">Vercel Inc.</p>
        <p className="text-gray-600">340 Pine Street, Suite 900, San Francisco, CA 94104, USA</p>
        <p className="text-gray-600">
          <a
            href="https://vercel.com"
            className="text-[#2563eb] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com
          </a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-gray-900">Propriété intellectuelle</h2>
        <p className="text-gray-600">
          L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de{" "}
          {SCHOOL_NAME}. Toute reproduction est interdite sans autorisation
          préalable.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-gray-900">Responsabilité</h2>
        <p className="text-gray-600">
          {SCHOOL_NAME} s'efforce de maintenir les informations publiées
          exactes et à jour, mais ne peut garantir l'exactitude ou la complétude des informations
          diffusées.
        </p>
      </section>
    </main>
  );
}
