import { buildMetadata } from "@/lib/metadata";
import LocalSeoPage from "@/components/LocalSeoPage";

export const metadata = buildMetadata({
  title: "Auto-école près de Noisiel",
  description: `Vous habitez à Noisiel et cherchez une auto-école ? ${process.env.NEXT_PUBLIC_SCHOOL_NAME} est à 15 minutes à Ozoir-la-Ferrière. Certification Qualiopi, 5/5 sur Google.`,
  path: "/noisiel",
});

export default function NoisielPage() {
  return (
    <LocalSeoPage
      ville="Noisiel"
      distance="15 min"
      description="Vous habitez à Noisiel et cherchez une auto-école sérieuse ? Auto Moto Ecole d'Estoril est à 15 minutes à Ozoir-la-Ferrière. Certification Qualiopi, financement CPF, 5/5 sur Google."
    />
  );
}
