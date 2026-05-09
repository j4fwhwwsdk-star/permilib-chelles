import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="font-bebas text-[120px] text-gray-100 leading-none select-none">404</div>
        <h1 className="font-bebas text-[40px] text-gray-900 -mt-4 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#2563eb] text-white rounded-xl px-8 py-3 font-bold hover:bg-blue-700 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-200 text-gray-700 rounded-xl px-8 py-3 font-bold hover:border-[#2563eb] transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
