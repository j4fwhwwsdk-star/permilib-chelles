import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/site";

export default function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border">
      <span aria-hidden="true">⭐</span>
      <span className="font-bold">{GOOGLE_RATING}/5</span>
      <span className="text-gray-500 text-sm">{GOOGLE_REVIEW_COUNT}+ avis Google</span>
    </div>
  );
}
