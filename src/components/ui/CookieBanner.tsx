"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const CONSENT_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0f172a",
        borderTop: "2px solid rgba(0,232,122,0.35)",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.45)",
        padding: "clamp(16px,3vw,24px) clamp(16px,5vw,48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      {/* Texte */}
      <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0, maxWidth: 640 }}>
        🍪 Ce site utilise des cookies Google Analytics pour mesurer l&apos;audience (statistiques anonymes).
        Aucun cookie publicitaire.{" "}
        <Link href="/politique-cookies" style={{ color: "#00e87a", textDecoration: "underline", whiteSpace: "nowrap" }}>
          En savoir plus
        </Link>
      </p>

      {/* Boutons */}
      <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
        <button
          onClick={refuse}
          style={{
            background: "transparent",
            border: "1.5px solid rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.55)",
            borderRadius: 99,
            padding: "10px 20px",
            fontSize: "0.82rem",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.45)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
          }}
        >
          Refuser
        </button>

        <button
          onClick={accept}
          style={{
            background: "#00e87a",
            color: "#0a1a0a",
            border: "none",
            borderRadius: 99,
            padding: "10px 22px",
            fontSize: "0.82rem",
            fontWeight: 800,
            cursor: "pointer",
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
            boxShadow: "0 0 18px rgba(0,232,122,0.4)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,232,122,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 18px rgba(0,232,122,0.4)";
          }}
        >
          Tout accepter
        </button>
      </div>
    </div>
  );
}
