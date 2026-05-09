import { buildMetadata } from "@/lib/metadata";
import LocalSeoPage from "@/components/LocalSeoPage";

export const metadata = buildMetadata({
  title: "Auto-école à Ozoir-la-Ferrière",
  description: `${process.env.NEXT_PUBLIC_SCHOOL_NAME} — auto-école à Ozoir-la-Ferrière. Permis B, AAC, conduite supervisée, formation post-permis. Certification Qualiopi, 5/5 sur Google.`,
  path: "/ozoir-la-ferriere",
});

export default function OzoirLaFerrierePage() {
  return (
    <LocalSeoPage
      ville="Ozoir-la-Ferrière"
      distance="sur place"
      description="Auto Moto Ecole d'Estoril est votre auto-école à Ozoir-la-Ferrière. Permis B, boîte automatique, AAC, conduite supervisée et formation post-permis. Certification Qualiopi, financement CPF, aide IDF jusqu'à 1 000€."
    />
  );
}
