import type { Metadata } from "next";
import { LogOut, MessageSquare, Lock } from "lucide-react";
import { adminConfigured, fetchListing, isAdmin, type ChatRow } from "@/lib/admin";
import { login, logout } from "./actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin | OneStep Digital", robots: { index: false, follow: false } };

const TZ = "Africa/Mogadishu";
const when = (ms: number) => new Intl.DateTimeFormat("en-GB", { timeZone: TZ, day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(ms);
const dayKey = (ms: number) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(ms);

type Props = { searchParams: Promise<{ e?: string; days?: string }> };

function Shell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100"><div className="mx-auto max-w-4xl">{children}</div></main>;
}

export default async function AdminPage({ searchParams }: Props) {
  const params = await searchParams;

  if (!adminConfigured()) {
    return <Shell><h1 className="text-xl font-bold">Dashboard-ka lama dejin</h1><p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Vercel ku dar <code>ADMIN_PASSWORD</code> (ugu yaraan 12 xaraf), <code>CLOUDFLARE_CHAT_URL</code> iyo <code>CLOUDFLARE_CHAT_SECRET</code>, kadib redeploy.</p></Shell>;
  }

  if (!(await isAdmin())) {
    return <Shell>
      <form action={login} className="mx-auto mt-16 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center gap-2 font-semibold"><Lock size={18} /> OneStep Admin</div>
        <label htmlFor="password" className="text-sm">Password</label>
        <input id="password" name="password" type="password" required autoFocus autoComplete="current-password" className="mt-1 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" />
        {params.e && <p role="alert" className="mt-2 text-sm text-red-600">Password-ku waa khaldan yahay.</p>}
        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">Gal</button>
      </form>
    </Shell>;
  }

  const days = params.days === "7" ? 7 : params.days === "1" ? 1 : 30;
  const listing = await fetchListing(days);
  if (!listing) {
    return <Shell><h1 className="text-xl font-bold">Xogta lama heli karo</h1><p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Worker-ka Cloudflare ama D1 ma jawaabin. Hubi in Worker-ku live yahay iyo in secret-ku isku mid yahay.</p></Shell>;
  }

  // Group rows into conversations, newest conversation first, messages oldest first.
  const bySession = new Map<string, ChatRow[]>();
  for (const row of listing.rows) bySession.set(row.session, [...(bySession.get(row.session) ?? []), row]);
  const conversations = [...bySession.entries()]
    .map(([session, rows]) => ({ session, rows: rows.sort((a, b) => a.created_at - b.created_at), last: Math.max(...rows.map(r => r.created_at)) }))
    .sort((a, b) => b.last - a.last);

  const today = dayKey(Date.now());
  const userRows = listing.rows.filter(r => r.role === "user");
  const todayCount = conversations.filter(c => dayKey(c.last) === today).length;
  const counts = new Map<string, number>();
  for (const r of userRows) { const q = r.text.trim().toLowerCase(); counts.set(q, (counts.get(q) ?? 0) + 1); }
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

  const stat = (label: string, value: number) => <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p className="text-xs text-slate-500">{label}</p><p className="mt-1 text-2xl font-bold">{value}</p></div>;

  return <Shell>
    <header className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="flex items-center gap-2 text-xl font-bold"><MessageSquare size={20} /> Wadahadallada chat-ka</h1>
      <div className="flex items-center gap-2 text-sm">
        {[1, 7, 30].map(d => <a key={d} href={`/admin?days=${d}`} className={`rounded-full px-3 py-1 ${d === days ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-slate-700"}`}>{d === 1 ? "24 saac" : `${d} maalin`}</a>)}
        <form action={logout}><button className="flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700"><LogOut size={14} /> Ka bax</button></form>
      </div>
    </header>

    <section className="mt-6 grid grid-cols-3 gap-3">
      {stat("Wadahadal maanta", todayCount)}
      {stat(`Wadahadal (${days === 1 ? "24 saac" : `${days} maalin`})`, conversations.length)}
      {stat("Su'aalo", userRows.length)}
    </section>
    {listing.truncated && <p className="mt-2 text-xs text-amber-600">Kaliya 2,000-ka farriimood ee ugu dambeeyay ayaa la muujiyay.</p>}

    {top.length > 0 && <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-2 font-semibold">Su&apos;aalaha ugu badan</h2>
      <ol className="space-y-1 text-sm">{top.map(([q, n]) => <li key={q} className="flex justify-between gap-4"><span className="truncate">{q}</span><span className="shrink-0 font-mono text-slate-500">{n}</span></li>)}</ol>
    </section>}

    <section className="mt-6 space-y-3">
      <h2 className="font-semibold">Wadahadallada ({conversations.length})</h2>
      {conversations.length === 0 && <p className="text-sm text-slate-500">Wali wadahadal la kaydiyay ma jiro. Kaliya kuwa booqdayaashu oggolaadeen ayaa halkan ka muuqda.</p>}
      {conversations.map(c => {
        const first = c.rows.find(r => r.role === "user")?.text ?? "";
        return <details key={c.session} className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm">
            <span className="truncate font-medium">{first}</span>
            <span className="shrink-0 text-xs text-slate-500">{when(c.last)} · {c.rows.filter(r => r.role === "user").length} su&apos;aal · #{c.session.slice(0, 6)}</span>
          </summary>
          <div className="space-y-2 border-t border-slate-200 p-4 text-sm dark:border-slate-800">
            {c.rows.map((r, i) => <div key={i} className={`whitespace-pre-wrap rounded-lg p-3 ${r.role === "user" ? "ml-8 bg-blue-600 text-white" : "mr-8 bg-slate-100 dark:bg-slate-800"}`}><p className="mb-1 text-[11px] opacity-70">{r.role === "user" ? "Booqde" : "Bot"} · {when(r.created_at)}</p>{r.text}</div>)}
          </div>
        </details>;
      })}
    </section>
    <p className="mt-8 text-center text-xs text-slate-500">Farriimaha 30 maalmood kadib si toos ah ayay u tirmaan.</p>
  </Shell>;
}
