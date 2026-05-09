import { buildMetadata } from "@/lib/metadata";
import LocalSeoPage from "@/components/LocalSeoPage";

export const metadata = buildMetadata({
  title: "Auto-école près de Roissy-en-Brie",
  description: `Vous habitez à Roissy-en-Brie et cherchez une auto-école ? ${process.env.NEXT_PUBLIC_SCHOOL_NAME} est à 5 minutes à Ozoir-la-Ferrière. Certification Qualiopi, 5/5 sur Google.`,
  path: "/roissy-en-brie",
});

export default function RoissyEnBriePage() {
  return (
    <LocalSeoPage
      ville="Roissy-en-Brie"
      distance="5 min"
      description="Vous habitez à Roissy-en-Brie et cherchez une auto-école de qualité ? Auto Moto Ecole d'Estoril est à seulement 5 minutes à Ozoir-la-Ferrière. Certification Qualiopi, financement CPF, 5/5 sur Google."
    />
  );
}
