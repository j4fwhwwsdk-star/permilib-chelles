"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="font-bebas text-[40px] text-gray-900 mb-4">
          Une erreur est survenue
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Quelque chose s'est mal passé. Réessayez ou revenez à l'accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#2563eb] text-white rounded-xl px-8 py-3 font-bold hover:bg-blue-700 transition-colors"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="border-2 border-gray-200 text-gray-700 rounded-xl px-8 py-3 font-bold hover:border-[#2563eb] transition-colors"
          >
            ← Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
