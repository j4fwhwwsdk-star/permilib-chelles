import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/site";

export default function GoogleBadge() {
  return (
    <div
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
      style={{
        background:           "rgba(13,28,53,0.80)",
        border:               "1px solid rgba(255,255,255,0.10)",
        backdropFilter:       "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <span aria-hidden="true" className="text-sm">⭐</span>
      <span className="font-bold text-white text-sm">{GOOGLE_RATING}/5</span>
      <span
        className="text-xs"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {GOOGLE_REVIEW_COUNT}+ avis Google
      </span>
    </div>
  );
}
