export const CITY         = process.env.NEXT_PUBLIC_CITY         ?? "Chelles";
export const SCHOOL_NAME  = process.env.NEXT_PUBLIC_SCHOOL_NAME  ?? "Permilib Chelles";
export const PHONE        = process.env.NEXT_PUBLIC_PHONE        ?? "0644332823";
export const APP_URL      = process.env.NEXT_PUBLIC_APP_URL      ?? "https://permilibchelles.fr";
export const WHATSAPP     = process.env.NEXT_PUBLIC_WHATSAPP     ?? "33644332823";
export const ADDRESS      = process.env.NEXT_PUBLIC_ADDRESS      ?? "Chelles, 77500 Seine-et-Marne";
export const GOOGLE_RATING       = process.env.NEXT_PUBLIC_GOOGLE_RATING        ?? "5";
export const GOOGLE_REVIEW_COUNT = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT  ?? "10";

export const HORAIRES_CODE = [
  { jour: "Lundi",            heures: "Fermé" },
  { jour: "Mardi – Vendredi", heures: "15h00 – 19h00" },
  { jour: "Samedi",           heures: "10h00 – 12h00\n14h00 – 16h00" },
];

export const HORAIRES_CONDUITE = [
  { jour: "Lundi",            heures: "Fermé" },
  { jour: "Mardi – Vendredi", heures: "9h00 – 20h00" },
  { jour: "Samedi",           heures: "9h00 – 18h00" },
];
