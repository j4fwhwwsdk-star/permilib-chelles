import { z } from "zod";

const schema = z.object({
  RESEND_API_KEY:          z.string().min(10),
  RESEND_TO_EMAIL:         z.string().email(),
  RESEND_FROM_EMAIL:       z.string().email(),
  RESEND_FROM_NAME:        z.string().min(2),
  NEXT_PUBLIC_APP_URL:     z.string().url(),
  NEXT_PUBLIC_PHONE:       z.string().regex(/^(\+33|0)[1-9](\d{8})$/),
  NEXT_PUBLIC_SCHOOL_NAME: z.string().min(2),
  NEXT_PUBLIC_CITY:        z.string().min(2),
  NEXT_PUBLIC_GA_ID:       z.string().optional(),
});

const result = schema.safeParse(process.env);

if (!result.success) {
  const missing = result.error.issues.map((i) => i.path[0]).join(", ");
  if (missing.includes("RESEND_API_KEY")) {
    throw new Error("❌ RESEND_API_KEY manquante — ajoute-la dans .env.local");
  }
  throw new Error(`❌ Variables d'environnement invalides : ${missing}`);
}

export const env = result.data;
