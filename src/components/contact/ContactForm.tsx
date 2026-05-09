"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Erreur lors de l'envoi.");
      }

      setStatus("success");
      trackEvent("form_submit", { formation: String(data.formation ?? "") });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-bold text-xl mb-2 text-green-800">Message envoyé !</h3>
        <p className="text-green-700">Nous vous recontacterons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
          <input
            name="prenom"
            required
            placeholder="Marie"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
          <input
            name="nom"
            required
            placeholder="Dupont"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          name="email"
          type="email"
          required
          placeholder="marie.dupont@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
        <input
          name="telephone"
          type="tel"
          required
          placeholder="06 12 34 56 78"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Formation souhaitée</label>
        <select
          name="formation"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white"
        >
          <option value="">-- Choisir une formation --</option>
          <option value="permis-b">Permis B</option>
          <option value="aac">Conduite Accompagnée (AAC)</option>
          <option value="boite-auto">Boîte automatique</option>
          <option value="code">Code de la route</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Votre message..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#2563eb] text-white rounded-xl py-4 font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <p className="text-xs text-gray-400 mt-2">
        En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous
        recontacter.{" "}
        <Link href="/politique-confidentialite" className="underline">
          Politique de confidentialité
        </Link>
      </p>
    </form>
  );
}
