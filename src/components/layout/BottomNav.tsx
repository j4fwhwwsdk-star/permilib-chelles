"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, BookOpen, CreditCard, Star, MessageSquare,
} from "lucide-react";
import { PHONE, WHATSAPP } from "@/lib/site";

/* ── Configuration des items ───────────────────────────────────
   5 items : 2 gauche | centre (call FAB) | 2 droite
   ─────────────────────────────────────────────────────────── */
const LEFT_ITEMS = [
  { href: "/",           label: "Accueil",    Icon: Home     },
  { href: "/formations", label: "Formations", Icon: BookOpen },
] as const;

const RIGHT_ITEMS = [
  { href: "/tarifs",  label: "Tarifs",   Icon: CreditCard   },
  { href: "/contact", label: "Contact",  Icon: MessageSquare },
] as const;

/* ── Helper : item actif ──────────────────────────────────────── */
function useActiveHref() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
}

/* ── Composant tab individuel ────────────────────────────────── */
function NavItem({
  href,
  label,
  Icon,
  active,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-center gap-[3px] flex-1 py-2 min-h-[44px] min-w-[44px]"
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
      {/* Pill de fond animée via layoutId */}
      {active && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-x-1 top-1 bottom-1 rounded-xl"
          style={{ backgroundColor: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.18)" }}
          transition={{ type: "spring", stiffness: 380, damping: 35 }}
        />
      )}

      {/* Icône avec feedback tap */}
      <motion.div
        whileTap={{ scale: 0.82 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="relative z-10"
      >
        <Icon
          size={20}
          strokeWidth={active ? 2.2 : 1.6}
          className={`transition-colors duration-200 ${
            active ? "text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]" : "text-white/40"
          }`}
        />
      </motion.div>

      {/* Label */}
      <span
        className={`relative z-10 text-[9px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 leading-none ${
          active ? "text-green-400" : "text-white/30"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

/* ════════════════════════════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ════════════════════════════════════════════════════════════════ */
export default function BottomNav() {
  const isActive      = useActiveHref();
  const [hidden, setHidden]     = useState(false);
  const [mounted, setMounted]   = useState(false);

  /* Attente du mount côté client */
  useEffect(() => { setMounted(true); }, []);

  /* Cache la nav quand le clavier virtuel s'ouvre */
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const onViewportResize = () => {
      const keyboardOpen = window.visualViewport!.height < window.innerHeight * 0.72;
      setHidden(keyboardOpen);
    };

    window.visualViewport.addEventListener("resize", onViewportResize);
    return () => window.visualViewport!.removeEventListener("resize", onViewportResize);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          key="bottom-nav"
          /* Slide depuis le bas au premier rendu */
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          aria-label="Navigation principale"
          role="navigation"
        >
          {/* Safe area spacer */}
          <div
            style={{
              /* Glassmorphism */
              background:       "rgba(10, 22, 44, 0.85)",
              borderTop:        "1px solid rgba(22, 163, 74, 0.15)",
              backdropFilter:   "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              paddingBottom:    "env(safe-area-inset-bottom, 0px)",
            }}
          >
            {/* Ligne glow verte en haut */}
            <div
              aria-hidden
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.5) 50%, transparent)",
              }}
            />

            {/* Items — 5 colonnes : 2 | FAB | 2 */}
            <div className="flex items-center h-16">

              {/* Gauche */}
              {LEFT_ITEMS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  Icon={item.Icon}
                  active={isActive(item.href)}
                />
              ))}

              {/* Centre — FAB appel */}
              <div className="flex flex-col items-center justify-center flex-1 relative">
                <motion.a
                  href={`tel:${PHONE}`}
                  aria-label="Appeler maintenant"
                  className="relative flex flex-col items-center gap-[3px]"
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                >
                  {/* Cercle vert surélevé */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-0.5"
                    style={{
                      background:    "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                      boxShadow:     "0 0 0 4px rgba(10,22,44,0.95), 0 8px 24px rgba(22,163,74,0.45)",
                      marginTop:     "-18px",
                    }}
                  >
                    {/* Icône téléphone SVG inline — fiable partout */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-green-400 leading-none">
                    Appeler
                  </span>
                </motion.a>
              </div>

              {/* Droite */}
              {RIGHT_ITEMS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  Icon={item.Icon}
                  active={isActive(item.href)}
                />
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
