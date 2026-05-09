export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  (window as any).gtag?.("event", name, params);
}
