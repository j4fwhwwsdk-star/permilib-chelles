"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, CreditCard, Star, HelpCircle } from "lucide-react";
import { PHONE } from "@/lib/site";

const ITEMS = [
  { href: "/",           label: "Accueil",    Icon: Home       },
  { href: "/formations", label: "Formations", Icon: BookOpen   },
  { href: "/tarifs",     label: "Tarifs",     Icon: CreditCard },
  { href: "/avis",       label: "Avis",       Icon: Star       },
  { href: "/faq",        label: "FAQ",        Icon: HelpCircle },
] as const;

function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavTab({ href, label, Icon, active }: {
  href: string; label: string; Icon: React.ElementType; active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full min-w-[44px] py-2"
    >
      {active && (
        <motion.div
          layoutId="bn-pill"
          className="absolute inset-x-1 inset-y-1 rounded-xl"
          style={{ background: "rgba(22,163,74,0.14)", border: "1px solid rgba(22,163,74,0.22)" }}
          transition={{ type: "spring", stiffness: 400, damping: 38 }}
        />
      )}
      <motion.div
        whileTap={{ scale: 0.80 }}
        transition={{ duration: 0.10 }}
        className="relative z-10"
      >
        <Icon
          size={21}
          strokeWidth={active ? 2.3 : 1.6}
          className={active ? "text-green-400" : "text-white/38"}
          style={active ? { filter: "drop-shadow(0 0 6px rgba(34,197,94,0.55))" } : {}}
        />
      </motion.div>
      <span
        className="relative z-10 text-[9px] font-bold tracking-[0.10em] uppercase leading-none"
        style={{ color: active ? "#4ade80" : "rgba(255,255,255,0.30)" }}
      >
        {label}
      </span>
    </Link>
  );
}

const IcoPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function BottomNav() {
  const isActive   = useIsActive();
  const [show, setShow]       = useState(false);
  const [hidden, setHidden]   = useState(false);

  /* Monte côté client uniquement */
  useEffect(() => { setShow(true); }, []);

  /* Cache quand clavier virtuel ouvert */
  useEffect(() => {
    const vp = window.visualViewport;
    if (!vp) return;
    const onResize = () => setHidden(vp.height < window.innerHeight * 0.75);
    vp.addEventListener("resize", onResize);
    return () => vp.removeEventListener("resize", onResize);
  }, []);

  if (!show || hidden) return null;

  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className="fixed bottom-0 left-0 right-0 md:hidden"
      style={{ zIndex: 60 }}
    >
      {/* Glow line vert en haut */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.55) 50%, transparent)" }}
      />

      <div
        style={{
          background:           "rgba(6, 14, 28, 0.92)",
          borderTop:            "1px solid rgba(22,163,74,0.18)",
          backdropFilter:       "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          paddingBottom:        "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div className="flex items-stretch h-16">

          {/* 2 tabs gauche */}
          {ITEMS.slice(0, 2).map((item) => (
            <NavTab key={item.href} {...item} active={isActive(item.href)} />
          ))}

          {/* FAB Appel centre */}
          <div className="flex flex-col items-center justify-center flex-1 relative">
            <motion.a
              href={`tel:${PHONE}`}
              aria-label="Appeler maintenant"
              className="flex flex-col items-center gap-[3px]"
              whileTap={{ scale: 0.86 }}
              transition={{ duration: 0.11 }}
            >
              <div
                className="w-13 h-13 rounded-full flex items-center justify-center"
                style={{
                  width: "52px", height: "52px",
                  background:   "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  boxShadow:    "0 0 0 4px rgba(6,14,28,0.95), 0 6px 22px rgba(22,163,74,0.50)",
                  marginTop:    "-16px",
                }}
              >
                <IcoPhone />
              </div>
              <span
                className="text-[9px] font-bold tracking-[0.10em] uppercase leading-none"
                style={{ color: "#4ade80" }}
              >
                Appeler
              </span>
            </motion.a>
          </div>

          {/* 3 tabs droite */}
          {ITEMS.slice(2).map((item) => (
            <NavTab key={item.href} {...item} active={isActive(item.href)} />
          ))}

        </div>
      </div>
    </nav>
  );
}
