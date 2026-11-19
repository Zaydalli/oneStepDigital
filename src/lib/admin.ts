import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "os_admin";
const MIN_PASSWORD = 12;

export type ChatRow = { session: string; role: "user" | "assistant"; text: string; created_at: number };
export type Listing = { days: number; rows: ChatRow[]; truncated: boolean };

/** Admin is disabled unless a strong password and the Worker settings exist. */
export function adminConfigured(): boolean {
  const { ADMIN_PASSWORD, CLOUDFLARE_CHAT_URL, CLOUDFLARE_CHAT_SECRET } = process.env;
  return !!ADMIN_PASSWORD && ADMIN_PASSWORD.length >= MIN_PASSWORD && !!CLOUDFLARE_CHAT_URL && !!CLOUDFLARE_CHAT_SECRET;
}

/** Session token derived from the password: changing ADMIN_PASSWORD logs everyone out. */
export function sessionToken(): string {
  return createHash("sha256").update(`onestep-admin:${process.env.ADMIN_PASSWORD}:${process.env.CLOUDFLARE_CHAT_SECRET}`).digest("hex");
}

function same(a: string, b: string): boolean {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function passwordMatches(input: string): boolean {
  return adminConfigured() && same(createHash("sha256").update(input).digest("hex"), createHash("sha256").update(process.env.ADMIN_PASSWORD!).digest("hex"));
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  return !!value && same(value, sessionToken());
}

export async function fetchListing(days: number): Promise<Listing | null> {
  const base = new URL(process.env.CLOUDFLARE_CHAT_URL!);
  if (base.protocol !== "https:") return null;
  const url = new URL("/admin", base);
  url.searchParams.set("days", String(days));
  try {
    const response = await fetch(url, { headers: { Authorization: `Bearer ${process.env.CLOUDFLARE_CHAT_SECRET}` }, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!response.ok) return null;
    const data = await response.json();
    return Array.isArray(data.rows) ? data : null;
  } catch {
    return null;
  }
}
