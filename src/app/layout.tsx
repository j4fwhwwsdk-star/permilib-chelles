import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PageTransitionOverlay from "@/components/layout/PageTransitionOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import { CITY, SCHOOL_NAME, PHONE } from "@/lib/site";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SCHOOL_NAME,
  description: `Auto-école à ${CITY} — Permis B, code de la route, certification Qualiopi.`,
};

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type":    "DrivingSchool",
  "name":      SCHOOL_NAME,
  "telephone": PHONE,
  "address": {
    "@type":           "PostalAddress",
    "streetAddress":   process.env.NEXT_PUBLIC_ADDRESS,
    "addressLocality": CITY,
    "addressCountry":  "FR",
  },
  "aggregateRating": {
    "@type":       "AggregateRating",
    "ratingValue": process.env.NEXT_PUBLIC_GOOGLE_RATING,
    "reviewCount": process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT,
  },
  "priceRange": "€€",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `if(typeof globalThis==='undefined'){window.globalThis=window;}` }} />
        <Suspense><ScrollToTop /></Suspense>
        <Suspense><PageTransitionOverlay /></Suspense>
        <CustomCursor />
        <Header />
        {/* pb-20 sur mobile pour dégager la StickyCallBar fixe (~80px) */}
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
        <Suspense><GoogleAnalytics /></Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaOrg }}
        />
      </body>
    </html>
  );
}
