import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const out = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Visitor-initiated contact request from the chat. Forwards phone + recent questions to the Worker.
export async function POST(req: NextRequest) {
  if (req.headers.get("origin") !== req.nextUrl.origin) return out({ ok: false }, 403);
  if (!req.headers.get("content-type")?.includes("application/json")) return out({ ok: false }, 415);
  const raw = await req.text();
  if (Buffer.byteLength(raw) > 2048) return out({ ok: false }, 413);
  let body: { phone?: unknown; note?: unknown };
  try { body = JSON.parse(raw); } catch { return out({ ok: false }, 400); }
  const phone = typeof body.phone === "string" ? body.phone.replace(/[\s()-]/g, "") : "";
  if (!/^\+?[0-9]{7,15}$/.test(phone)) return out({ ok: false, error: "phone" }, 400);
  const note = typeof body.note === "string" ? body.note.slice(0, 1000) : "";

  const { CLOUDFLARE_CHAT_URL, CLOUDFLARE_CHAT_SECRET } = process.env;
  if (!CLOUDFLARE_CHAT_URL || !CLOUDFLARE_CHAT_SECRET) return out({ ok: false }, 503);
  try {
    const base = new URL(CLOUDFLARE_CHAT_URL);
    if (base.protocol !== "https:") return out({ ok: false }, 503);
    const response = await fetch(new URL("/lead", base), { method: "POST", headers: { Authorization: `Bearer ${CLOUDFLARE_CHAT_SECRET}`, "Content-Type": "application/json" }, body: JSON.stringify({ phone, note }), signal: AbortSignal.timeout(15000), cache: "no-store" });
    return out({ ok: response.ok }, response.ok ? 200 : 502);
  } catch {
    return out({ ok: false }, 502);
  }
}
