import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base   = process.env.NEXT_PUBLIC_APP_URL || "https://j4fwhwwsdk-star-autoecole-comb-zwy7.vercel.app";
  const pages  = ["/", "/formations", "/tarifs", "/financement", "/avis", "/contact", "/a-propos", "/faq"];
  const villes = ["/roissy-en-brie", "/emerainville", "/noisiel", "/ozoir-la-ferriere"];

  return [...pages, ...villes].map((url) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: url === "/" ? "weekly" : "monthly",
    priority: url === "/" ? 1 : villes.includes(url) ? 0.7 : 0.8,
  }));
}
