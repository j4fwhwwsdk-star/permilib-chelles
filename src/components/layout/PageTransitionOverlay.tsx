"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function PageTransitionOverlay() {
  const pathname    = usePathname();
  const isMounted   = useRef(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    /* Nouveau pathname → déclenche une nouvelle animation */
    setAnimKey((k) => k + 1);
  }, [pathname]);

  if (animKey === 0) return null;

  return (
    <motion.div
      key={animKey}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ backgroundColor: "#16a34a", opacity: 0.97 }}
      /* Slide depuis bas → couvre page → sort par le haut */
      initial={{ y: "100%" }}
      animate={{ y: ["100%", "0%", "0%", "-100%"] }}
      transition={{
        duration:  0.6,
        times:     [0, 0.45, 0.55, 1],
        ease:      [0.65, 0, 0.35, 1],
      }}
    />
  );
}
