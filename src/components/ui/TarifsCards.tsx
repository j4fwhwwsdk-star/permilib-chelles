"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IcoCar,
  IcoBolt,
  IcoUsers,
  IcoTarget,
  IcoShield,
  IcoCheck,
  IcoPhone,
} from "@/components/ui/Icons";
import { PHONE } from "@/lib/site";

interface Forfait {
  id: string;
  Icon: (props: { size?: number }) => React.ReactNode;
  title: string;
  type: string;
  price: string;
  popular: boolean;
  cardDesc: string;
  modalDesc: string;
  features: string[];
  reassurance: string;
}

const forfaits: Forfait[] = [
  {
    id: "manuel",
    Icon: IcoCar,
    title: "Permis B Manuel",
    type: "Boîte manuelle",
    price: "Sur devis",
    popular: false,
    cardDesc: "Formation complète avec moniteurs certifiés",
    modalDesc:
      "Maîtrisez la conduite dans sa forme la plus complète. Nos moniteurs certifiés vous accompagnent à votre rythme avec un suivi pédagogique personnalisé, jusqu'à votre réussite.",
    features: [
      "Formation personnalisée à votre rythme",
      "Code de la route inclus",
      "Frais d'examen inclus",
      "Suivi pédagogique complet",
    ],
    reassurance: "Moniteurs certifiés · Suivi jusqu'à la réussite",
  },
  {
    id: "auto",
    Icon: IcoBolt,
    title: "Permis B Automatique",
    type: "Boîte automatique",
    price: "Sur devis",
    popular: true,
    cardDesc: "Idéal en ville · Apprentissage simplifié",
    modalDesc:
      "La boîte automatique vous permet de vous concentrer sur l'essentiel : maîtriser la route. Idéale en ville, elle accélère souvent l'obtention du permis. Notre formule la plus demandée.",
    features: [
      "Véhicule automatique récent",
      "Code de la route inclus",
      "Frais d'examen inclus",
      "Formation accélérée possible",
    ],
    reassurance: "Formule la plus populaire · Résultats prouvés",
  },
  {
    id: "aac",
    Icon: IcoUsers,
    title: "Conduite Accompagnée",
    type: "AAC — dès 15 ans",
    price: "Sur devis",
    popular: false,
    cardDesc: "Dès 15 ans avec un accompagnateur",
    modalDesc:
      "Démarrez dès 15 ans et accumulez une expérience précieuse avec un proche. Les élèves AAC réussissent mieux et bénéficient souvent de primes d'assurance réduites.",
    features: [
      "Formation initiale incluse",
      "Suivi AAC personnalisé",
      "Rendez-vous pédagogiques inclus",
      "Examen inclus",
    ],
    reassurance: "Meilleur taux de réussite · Assurance réduite",
  },
  {
    id: "supervisee",
    Icon: IcoTarget,
    title: "Conduite Supervisée",
    type: "Pour les +18 ans",
    price: "Sur devis",
    popular: false,
    cardDesc: "Accumulez km et confiance après le permis",
    modalDesc:
      "Nouvellement diplômé(e), renforcez votre confiance au volant. Supervisé par un proche, vous accumulez de précieux kilomètres en conditions réelles avec un filet de sécurité professionnel.",
    features: [
      "Pour titulaires du permis",
      "Suivi professionnel personnalisé",
      "Rendez-vous pédagogiques réguliers",
      "Kilométrage illimité avec accompagnateur",
    ],
    reassurance: "Confiance renforcée · Sinistralité réduite",
  },
  {
    id: "post-permis",
    Icon: IcoShield,
    title: "Formation Post-Permis",
    type: "Perfectionnement",
    price: "Sur devis",
    popular: false,
    cardDesc: "Perfectionnement après l'obtention",
    modalDesc:
      "Allez au-delà du permis. Éco-conduite, conduite défensive, maîtrise autoroutière — une formation qui vous rend plus sûr sur la route et peut réduire votre prime d'assurance.",
    features: [
      "Éco-conduite certifiée",
      "Conduite défensive avancée",
      "Maîtrise autoroutière",
      "Certificat officiel remis",
    ],
    reassurance: "Certification reconnue · Prime d'assurance réduite possible",
  },
];

/* ─────────────────────────────── Card ─────────────────────────────── */
function TarifCard({
  f,
  index,
  onClick,
}: {
  f: Forfait;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ y: -6, scale: 1.018 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-2xl"
      >
        {/* Gradient border wrapper */}
        <div
          className={`relative p-[1px] rounded-2xl transition-all duration-500 ${
            f.popular
              ? "bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500"
              : "bg-gradient-to-br from-white/[0.07] to-white/[0.03] group-hover:from-green-500/35 group-hover:to-teal-500/15"
          }`}
        >
          {/* Ambient glow behind card (popular only) */}
          {f.popular && (
            <div
              aria-hidden
              className="absolute inset-0 -z-10 scale-110 rounded-2xl bg-gradient-to-br from-green-500/15 to-teal-500/8 blur-2xl"
            />
          )}

          {/* Inner card */}
          <div className="relative bg-[#0a0f1e] rounded-[15px] p-6 overflow-hidden">
            {/* Subtle ambient inside */}
            {f.popular && (
              <div
                aria-hidden
                className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-green-500/[0.07] blur-3xl pointer-events-none"
              />
            )}

            {/* Icon row */}
            <div className="flex items-start justify-between mb-5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  f.popular
                    ? "bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg shadow-green-900/25"
                    : "bg-white/[0.05] text-white/40 border border-white/[0.07] group-hover:bg-white/[0.09] group-hover:text-white/65"
                }`}
              >
                <f.Icon size={20} />
              </div>
              {f.popular && (
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-full">
                  Populaire
                </span>
              )}
            </div>

            {/* Text */}
            <div className="mb-5">
              <p className="text-green-400/55 text-[9px] font-bold tracking-[0.18em] uppercase mb-1.5">
                {f.type}
              </p>
              <h3 className="text-white font-bold text-base leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-white/30 text-xs leading-relaxed">{f.cardDesc}</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
              <span className="text-white/20 text-[11px]">Prix sur demande</span>
              <span
                className={`flex items-center gap-1 text-[11px] font-semibold transition-all duration-300 ${
                  f.popular
                    ? "text-green-400"
                    : "text-white/30 group-hover:text-green-400"
                }`}
              >
                Découvrir
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

/* ─────────────────────────────── Modal ─────────────────────────────── */
function TarifModal({ f, onClose }: { f: Forfait; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xl z-50"
      />

      {/* Panel — bottom sheet mobile, centered desktop */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="pointer-events-auto w-full sm:max-w-[440px]"
        >
          {/* Gradient border */}
          <div
            className={`p-[1px] rounded-t-3xl sm:rounded-2xl ${
              f.popular
                ? "bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500"
                : "bg-gradient-to-br from-white/15 to-white/[0.04]"
            }`}
          >
            <div className="bg-[#080d1a] rounded-t-[23px] sm:rounded-[15px] overflow-hidden">
              {/* Drag handle (mobile) */}
              <div className="flex justify-center pt-3 pb-1 sm:hidden">
                <div className="w-9 h-1 bg-white/15 rounded-full" />
              </div>

              {/* Header */}
              <div className="px-6 pt-5 pb-4 border-b border-white/[0.05] relative">
                <button
                  onClick={onClose}
                  aria-label="Fermer"
                  className="absolute top-4 right-5 w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-white/35 hover:text-white/80 transition-all text-sm leading-none"
                >
                  ✕
                </button>
                <div className="flex items-center gap-4 pr-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      f.popular
                        ? "bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg shadow-green-900/25"
                        : "bg-white/[0.05] border border-white/[0.08] text-white/55"
                    }`}
                  >
                    <f.Icon size={22} />
                  </div>
                  <div>
                    <p className="text-green-400 text-[9px] font-bold tracking-[0.18em] uppercase mb-0.5">
                      {f.type}
                    </p>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {f.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 max-h-[72vh] sm:max-h-[65vh] overflow-y-auto">
                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-5"
                >
                  <p className="text-white/25 text-[9px] font-bold tracking-widest uppercase mb-1.5">
                    Tarif
                  </p>
                  <span className="text-3xl font-bold text-white">{f.price}</span>
                  <p className="text-green-400/60 text-xs mt-1.5">{f.reassurance}</p>
                </motion.div>

                <div className="w-full h-px bg-white/[0.05] mb-5" />

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.14, duration: 0.4 }}
                  className="text-white/50 text-sm leading-relaxed mb-6"
                >
                  {f.modalDesc}
                </motion.p>

                {/* Features */}
                <div className="mb-7">
                  <p className="text-white/20 text-[9px] font-bold tracking-widest uppercase mb-3">
                    Inclus dans cette formule
                  </p>
                  <ul className="space-y-2.5">
                    {f.features.map((feat, i) => (
                      <motion.li
                        key={feat}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18 + i * 0.065, duration: 0.35 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 text-green-400">
                          <IcoCheck size={10} />
                        </span>
                        <span className="text-white/60">{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="shine-btn block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-900/25"
                  >
                    Demander un devis gratuit →
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full border border-white/[0.08] hover:border-white/20 text-white/50 hover:text-white/80 font-medium text-sm py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <IcoPhone size={15} />
                    Appeler directement
                  </a>
                </div>

                {/* Safe area bottom (mobile) */}
                <div className="h-5 sm:h-0 pb-safe" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────── Main export ──────────────────────── */
export default function TarifsCards() {
  const [selected, setSelected] = useState<Forfait | null>(null);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {forfaits.map((f, i) => (
          <TarifCard key={f.id} f={f} index={i} onClick={() => setSelected(f)} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <TarifModal
            key={selected.id}
            f={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
