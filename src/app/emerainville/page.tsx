import { buildMetadata } from "@/lib/metadata";
import LocalSeoPage from "@/components/LocalSeoPage";

export const metadata = buildMetadata({
  title: "Auto-école près d'Émerainville",
  description: `Vous habitez à Émerainville et cherchez une auto-école ? ${process.env.NEXT_PUBLIC_SCHOOL_NAME} est à 10 minutes à Ozoir-la-Ferrière. Certification Qualiopi, 5/5 sur Google.`,
  path: "/emerainville",
});

export default function EmerainvillePage() {
  return (
    <LocalSeoPage
      ville="Émerainville"
      distance="10 min"
      description="Vous habitez à Émerainville ? Auto Moto Ecole d'Estoril est à seulement 10 minutes à Ozoir-la-Ferrière. Formateurs certifiés, certification Qualiopi, financement CPF et aide Région IDF jusqu'à 1 000€."
    />
  );
}
