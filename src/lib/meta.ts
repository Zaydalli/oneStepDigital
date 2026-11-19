type Fbq = (command: "track", event: string, params?: Record<string, string | number>) => void;

/** Sends a standard Meta Pixel event. Does nothing if the Pixel is blocked or not loaded yet. */
export function trackMeta(event: "Lead" | "Contact", params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") fbq("track", event, params);
}
