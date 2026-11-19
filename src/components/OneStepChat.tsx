"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { handoffUrl, welcome } from "@/lib/chat";

export default function OneStepChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: welcome }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [consent, setConsent] = useState(false);
  const [storage, setStorage] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, busy]);
  function close() { setOpen(false); toggle.current?.focus(); }
  async function send(event?: FormEvent, preset?: string) {
    event?.preventDefault(); const message = (preset ?? input).trim(); if (!message || busy) return;
    setInput(""); setMessages(previous => [...previous.slice(-18), { role: "user", text: message }]); setBusy(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, consent }), signal: AbortSignal.timeout(25000) });
      const data = await response.json();
      setStorage(data.storage === "saved" ? "Farriinta waa la kaydiyey (30 maalmood)." : consent ? "Kaydintu ma guulaysan; kooxda WhatsApp kala xiriir." : "");
      setMessages(previous => [...previous, { role: "assistant", text: typeof data.reply === "string" ? data.reply : "Fadlan WhatsApp noogala xiriir." }]);
    } catch { setMessages(previous => [...previous, { role: "assistant", text: "Xiriirka ayaa go'ay. Mar kale isku day ama WhatsApp noogala xiriir." }]); }
    finally { setBusy(false); field.current?.focus(); }
  }
  return <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    {open && <section id="onestep-chat" role="dialog" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === "Escape") close(); }} className="mb-3 flex max-h-[75dvh] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <header className="flex items-center justify-between bg-slate-950 px-4 py-3 text-white"><div><h2 id="chat-title" className="font-semibold">OneStep Digital</h2><p className="text-xs text-slate-300">Kaaliyaha adeegyada</p></div><button aria-label="Xir chat-ka" onClick={close} className="rounded p-2 hover:bg-slate-800"><X size={20} /></button></header>
      <div ref={log} role="log" aria-live="polite" aria-relevant="additions" className="min-h-32 flex-1 space-y-3 overflow-y-auto p-4 text-sm">
        {messages.map((message, index) => <p key={index} className={`whitespace-pre-wrap rounded-xl p-3 ${message.role === "user" ? "ml-8 bg-blue-600 text-white" : "mr-4 bg-slate-100 dark:bg-slate-800"}`}><span className="sr-only">{message.role === "user" ? "Adiga: " : "OneStep: "}</span>{message.text}</p>)}
        {busy && <p role="status">Jawaab ayaa la diyaarinayaa…</p>}
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-3">{["Adeegyada", "Qiimaha", "La hadal qof"].map(text => <button key={text} type="button" disabled={busy} onClick={() => send(undefined, text)} className="rounded-full border border-slate-300 px-3 py-1 text-xs disabled:opacity-40 dark:border-slate-600">{text}</button>)}</div>
      <label className="px-3 py-2 text-xs"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> Waxaan oggolahay in farriimaha xiga 30 maalmood loo kaydiyo dabagalka kooxda. AI wuxuu adeegsanayaa Cloudflare; ha dirin xog gaar ah.</label>
      {storage && <p role="status" className="px-3 text-xs">{storage}</p>}
      <form onSubmit={send} className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700"><input ref={field} aria-label="Farriintaada" value={input} onChange={event => setInput(event.target.value)} maxLength={1000} placeholder="Qor su'aashaada…" className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-600" /><button disabled={busy || !input.trim()} aria-label="Dir su'aasha" className="rounded-lg bg-blue-600 p-3 text-white disabled:opacity-40"><Send size={18} /></button></form>
      <a href={handoffUrl} target="_blank" rel="noopener noreferrer" className="bg-green-700 px-4 py-3 text-center text-sm font-medium text-white">Kooxda kala hadal WhatsApp ↗</a>
      <p className="px-3 py-2 text-xs text-slate-500">Jawaabaha xaqiiji marka ay khuseeyaan qiime ama heshiis. <a className="underline" href="/privacy-policy">Asturnaanta</a></p>
    </section>}
    <button ref={toggle} aria-label={open ? "Xir chat-ka" : "Fur chat-ka OneStep"} aria-expanded={open} aria-controls="onestep-chat" onClick={() => open ? close() : setOpen(true)} className="flex h-14 items-center gap-2 rounded-full bg-blue-700 px-5 font-semibold text-white shadow-lg hover:bg-blue-800">{open ? <X size={22} /> : <MessageCircle size={22} />} Caawimaad</button>
  </div>;
}
