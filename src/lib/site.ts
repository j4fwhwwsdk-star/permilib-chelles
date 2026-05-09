export const CITY         = process.env.NEXT_PUBLIC_CITY         ?? "Ozoir-la-Ferrière";
export const SCHOOL_NAME  = process.env.NEXT_PUBLIC_SCHOOL_NAME  ?? "Auto Moto Ecole d'Estoril";
export const PHONE        = process.env.NEXT_PUBLIC_PHONE        ?? "0164402797";
export const APP_URL      = process.env.NEXT_PUBLIC_APP_URL      ?? "https://automotoecoledestoril.fr";
export const WHATSAPP     = process.env.NEXT_PUBLIC_WHATSAPP     ?? "0164402797";
export const ADDRESS      = process.env.NEXT_PUBLIC_ADDRESS      ?? "12 Av. du Général de Gaulle, 77330 Ozoir-la-Ferrière";
export const GOOGLE_RATING       = process.env.NEXT_PUBLIC_GOOGLE_RATING        ?? "5";
export const GOOGLE_REVIEW_COUNT = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT  ?? "10";

export const HORAIRES_CODE = [
  { jour: "Lundi",           heures: "Fermé" },
  { jour: "Mardi – Vendredi", heures: "15h00 – 19h00" },
  { jour: "Samedi",          heures: "10h00 – 12h00\n14h00 – 16h00" },
];

export const HORAIRES_CONDUITE = [
  { jour: "Lundi",           heures: "Fermé" },
  { jour: "Mardi – Vendredi", heures: "9h00 – 20h00" },
  { jour: "Samedi",          heures: "9h00 – 18h00" },
];
