import type { Metadata } from "next";
import { APP_URL, SCHOOL_NAME, CITY } from "@/lib/site";

export function buildMetadata(p: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const base   = APP_URL;
  const school = SCHOOL_NAME;
  const city   = CITY;

  let metadataBase: URL;
  try {
    metadataBase = new URL(base);
  } catch {
    metadataBase = new URL("https://automotoecoledestoril.fr");
  }

  return {
    metadataBase,
    title: { absolute: `${p.title} | ${school} — ${city}` },
    description: p.description,
    openGraph: {
      type:   "website",
      locale: "fr_FR",
      title:  p.title,
      url:    `${base}${p.path}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: { canonical: `${base}${p.path}` },
    robots: p.noindex
      ? { index: false }
      : { index: true, follow: true },
  };
}
