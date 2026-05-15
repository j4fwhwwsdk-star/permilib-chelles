"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Désactive temporairement le smooth-scroll pour que le reset soit instantané
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Réactive le smooth-scroll après le frame suivant (après le rendu de la page)
    const id = requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
