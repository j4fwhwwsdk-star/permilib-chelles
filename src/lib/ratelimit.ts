const store = new Map<string, number[]>();

export function rateLimit(ip: string, max = 3, windowMs = 60_000): boolean {
  const now = Date.now();
  const hits = (store.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= max) return false;
  store.set(ip, [...hits, now]);
  return true;
}
