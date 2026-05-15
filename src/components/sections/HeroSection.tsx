"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SCHOOL_NAME, CITY, PHONE, WHATSAPP } from "@/lib/site";
import GoogleBadge from "@/components/ui/GoogleBadge";

/* ── icônes inline ── */
const IcoPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IcoStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const EASE_SPRING = [0.16, 1, 0.3, 1] as const;

/* ── Composant : texte char par char ── */
function SplitChars({
  text,
  yOffset,
  blurPx,
}: {
  text: string;
  yOffset: number;
  blurPx: number;
}) {
  const charV = {
    hidden:  { opacity: 0, y: yOffset, filter: `blur(${blurPx}px)` },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE_SPRING },
    },
  };
  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charV}
          aria-hidden
          style={{
            display:  "inline-block",
            minWidth: char === " " ? "0.28em" : undefined,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Composant : texte mot par mot ── */
function SplitWords({ text, yOffset }: { text: string; yOffset: number }) {
  const words = text.split(" ");
  const wordV = {
    hidden:  { opacity: 0, y: yOffset },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.55, ease: EASE_SPRING },
    },
  };
  return (
    <span aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordV}
          aria-hidden
          style={{
            display:     "inline-block",
            marginRight: i < words.length - 1 ? "0.28em" : undefined,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ════════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ════════════════════════════════════════════ */
export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  /*
   * Détection mobile dès le premier rendu client.
   * useState lazy-initializer → valeur correcte sans effet de bord hydration.
   */
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Valeurs d'animation adaptées mobile / desktop */
  const yChar  = isMobile ? 9  : 18;
  const blurPx = isMobile ? 4  : 8;
  const yWord  = isMobile ? 14 : 30;
  const yFade  = isMobile ? 12 : 24;

  /* Variante fade-up générique */
  const fadeUp = {
    hidden:  { opacity: 0, y: yFade, filter: `blur(${blurPx / 2}px)` },
    visible: (delay = 0) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: isMobile ? 0.68 : 0.85, ease: EASE_SPRING, delay },
    }),
  };

  /* Conteneur stagger */
  const containerChar = (stagger = 0.03, delayStart = 0) => ({
    hidden:  {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delayStart } },
  });

  /* Aurora désactivée sur mobile (économie batterie + performance) */
  const disableAurora = isMobile || !!reduceMotion;

  return (
    <section className="relative flex items-center min-h-viewport overflow-hidden">

      {/* ── Photo de fond ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=85"
          alt={`Auto-école ${SCHOOL_NAME} ${CITY}`}
          fill
          className="object-cover scale-[1.04]"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Overlays gradient ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#020609]/95 via-[#050d18]/80 to-[#050d18]/35" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020609]/75 via-transparent to-transparent" />

      {/* ── Grille premium ── */}
      <div className="absolute inset-0 z-[2] bg-grid pointer-events-none" />

      {/* ── Aurora — desktop uniquement ── */}
      {!disableAurora && (
        <motion.div
          aria-hidden
          className="absolute inset-0 z-[3] pointer-events-none"
          animate={{
            background: [
              "radial-gradient(ellipse 70% 55% at 10% 60%, rgba(22,163,74,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 85% 25%, rgba(34,197,94,0.04) 0%, transparent 55%)",
              "radial-gradient(ellipse 80% 65% at 20% 45%, rgba(22,163,74,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 75% 35%, rgba(34,197,94,0.05) 0%, transparent 55%)",
              "radial-gradient(ellipse 70% 55% at 10% 60%, rgba(22,163,74,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 85% 25%, rgba(34,197,94,0.04) 0%, transparent 55%)",
            ],
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
      )}

      {/* ── Contenu — padding réduit sur mobile ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-32 sm:pt-32 sm:pb-36">

        {/* Badge Qualiopi */}
        <motion.div
          custom={0.05}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 border border-green-500/35 text-green-400 text-[11px] font-bold px-4 py-2 rounded-full mb-6 sm:mb-8 tracking-[0.12em] uppercase bg-white/[0.04]"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          Certifiée Qualiopi · {CITY}
        </motion.div>

        {/* H1 — ligne 1 */}
        <motion.h1
          className="font-bebas leading-none text-white mb-5 sm:mb-6 max-w-3xl"
          aria-label={`Votre permis ${CITY}`}
        >
          <motion.span
            className="block text-[clamp(48px,9vw,108px)]"
            variants={containerChar(isMobile ? 0.022 : 0.028, 0.18)}
            initial="hidden"
            animate="visible"
          >
            <SplitChars text="Votre permis" yOffset={yChar} blurPx={blurPx} />
          </motion.span>

          <motion.span
            className="block text-[clamp(48px,9vw,108px)] gradient-text-bright"
            variants={containerChar(isMobile ? 0.032 : 0.04, 0.36)}
            initial="hidden"
            animate="visible"
          >
            <SplitChars text={CITY} yOffset={yChar} blurPx={blurPx} />
          </motion.span>
        </motion.h1>

        {/* Ligne décorative */}
        <motion.div
          className="h-0.5 w-16 sm:w-20 bg-green-500 mb-6 sm:mb-8 rounded-full origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: isMobile ? 0.56 : 0.7, ease: EASE_SPRING, delay: 0.65 }}
        />

        {/* Sous-titre */}
        <motion.p
          className="text-white/60 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md leading-relaxed"
          variants={containerChar(isMobile ? 0.04 : 0.05, 0.72)}
          initial="hidden"
          animate="visible"
          aria-label={`${SCHOOL_NAME} — formateurs certifiés, suivi personnalisé. Financement CPF et aide Région IDF disponibles.`}
        >
          <SplitWords
            text={`${SCHOOL_NAME} — formateurs certifiés, suivi personnalisé. Financement CPF et aide Région IDF disponibles.`}
            yOffset={yWord}
          />
        </motion.p>

        {/* Boutons CTA — flex-col mobile (pleine largeur) */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12"
          custom={0.88}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Primaire */}
          <motion.a
            href={`tel:${PHONE}`}
            className="relative overflow-hidden bg-green-600 text-white rounded-xl px-8 py-4 font-bold text-base text-center flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgba(22,163,74,0.35)] group w-full sm:w-auto"
            whileHover={isMobile || reduceMotion ? {} : { y: -3, scale: 1.03, boxShadow: "0 14px 36px rgba(22,163,74,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            />
            <IcoPhone /> Appeler maintenant
          </motion.a>

          {/* Secondaire */}
          <motion.a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden border border-white/22 text-white rounded-xl px-8 py-4 font-bold text-base text-center flex items-center justify-center gap-2.5 group w-full sm:w-auto"
            whileHover={isMobile || reduceMotion ? {} : { y: -3, scale: 1.03, borderColor: "rgba(255,255,255,0.45)", backgroundColor: "rgba(255,255,255,0.07)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-white/[0.06] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out rounded-xl"
            />
            <IcoChat /> WhatsApp
          </motion.a>
        </motion.div>

        {/* Google Badge */}
        <motion.div
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <GoogleBadge />
        </motion.div>

        {/*
         * Floating badge — caché sur mobile :
         * évite l'overlap avec la StickyCallBar (80px en bas)
         */}
        <motion.div
          className="absolute bottom-10 right-6 md:right-12 z-20 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_SPRING, delay: 1.1 }}
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -9, 0] }}
            transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
            className="bg-white/96 rounded-2xl px-5 py-4 text-center shadow-2xl border border-white/60"
            style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
          >
            <div className="flex justify-center gap-0.5 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => <IcoStar key={i} />)}
            </div>
            <div className="font-bold text-gray-900 text-sm">5 / 5</div>
            <div className="text-gray-400 text-[10px] mt-0.5 font-medium">Google · Avis vérifiés</div>
          </motion.div>
        </motion.div>
      </div>

      {/*
       * Scroll indicator — repositionné sur mobile pour dépasser
       * la StickyCallBar (fixed ~74px en bas)
       */}
      <motion.div
        className="absolute bottom-24 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, isMobile ? 4 : 6, 0] }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] tracking-[0.22em] uppercase">Découvrir</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M7 13l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
