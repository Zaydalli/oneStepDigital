"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { wantsLead, welcome, whatsappLink } from "@/lib/chat";

export default function OneStepChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: welcome }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [consent, setConsent] = useState(false);
  const [storage, setStorage] = useState("");
  const [lead, setLead] = useState<"hidden" | "offer" | "sending" | "sent" | "closed">("hidden");
  const [phone, setPhone] = useState("");
  const [leadError, setLeadError] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, busy, lead]);
  function close() { setOpen(false); toggle.current?.focus(); }
  async function send(event?: FormEvent, preset?: string) {
    event?.preventDefault(); const message = (preset ?? input).trim(); if (!message || busy) return;
    setInput(""); setMessages(previous => [...previous.slice(-18), { role: "user", text: message }]); setBusy(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, consent }), signal: AbortSignal.timeout(25000) });
      const data = await response.json();
      setStorage(data.storage === "saved" ? "Farriinta waa la kaydiyey (30 maalmood)." : consent ? "Kaydintu ma guulaysan; kooxda WhatsApp kala xiriir." : "");
      setMessages(previous => [...previous, { role: "assistant", text: typeof data.reply === "string" ? data.reply : "Fadlan WhatsApp noogala xiriir." }]);
      if (wantsLead(message)) setLead(current => current === "hidden" ? "offer" : current);
    } catch { setMessages(previous => [...previous, { role: "assistant", text: "Xiriirka ayaa go'ay. Mar kale isku day ama WhatsApp noogala xiriir." }]); }
    finally { setBusy(false); field.current?.focus(); }
  }
  const questions = messages.filter(m => m.role === "user").map(m => m.text);
  async function sendLead(event: FormEvent) {
    event.preventDefault(); setLeadError("");
    const clean = phone.replace(/[\s()-]/g, "");
    if (!/^\+?[0-9]{7,15}$/.test(clean)) { setLeadError("Lambar sax ah qor, tusaale 61xxxxxxx."); return; }
    setLead("sending");
    try {
      const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone: clean, note: questions.slice(-3).join(" | ") }), signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error();
      setLead("sent");
    } catch { setLead("offer"); setLeadError("Lama dirin. Isku day mar kale ama WhatsApp noogu soo qor."); }
  }
  return <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    {open && <section id="onestep-chat" role="dialog" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === "Escape") close(); }} className="mb-3 flex h-[min(640px,calc(100dvh-7rem))] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <header className="flex items-center justify-between bg-slate-950 px-4 py-2 text-white"><div><h2 id="chat-title" className="font-semibold">OneStep Digital</h2><p className="text-xs text-slate-300">Kaaliyaha adeegyada</p></div><button aria-label="Xir chat-ka" onClick={close} className="rounded p-2 hover:bg-slate-800"><X size={20} /></button></header>
      <div ref={log} role="log" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4 text-sm">
        {messages.map((message, index) => <p key={index} className={`whitespace-pre-wrap rounded-xl p-3 ${message.role === "user" ? "ml-8 bg-blue-600 text-white" : "mr-4 bg-slate-100 dark:bg-slate-800"}`}><span className="sr-only">{message.role === "user" ? "Adiga: " : "OneStep: "}</span>{message.text}</p>)}
        {busy && <p role="status">Jawaab ayaa la diyaarinayaa…</p>}
        {(lead === "offer" || lead === "sending") && <form onSubmit={sendLead} className="mr-4 space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950/40">
          <p className="font-medium">Ma rabtaa in kooxdu kula soo xiriirto?</p>
          <div className="flex gap-2"><input type="tel" inputMode="tel" autoComplete="tel" aria-label="Lambarkaaga WhatsApp" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Lambarkaaga WhatsApp" maxLength={20} className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 dark:border-slate-600 dark:bg-slate-900" /><button disabled={lead === "sending"} className="rounded-lg bg-blue-600 px-3 text-white disabled:opacity-50">{lead === "sending" ? "…" : "Dir"}</button></div>
          {leadError && <p role="alert" className="text-xs text-red-600">{leadError}</p>}
          <div className="flex items-center justify-between text-[11px] text-slate-500"><span>Lambarka iyo su&apos;aashaada 30 maalmood ayaa la hayaa.</span><button type="button" onClick={() => setLead("closed")} className="underline">Maya</button></div>
        </form>}
        {lead === "sent" && <p role="status" className="mr-4 rounded-xl bg-green-50 p-3 text-green-800 dark:bg-green-950/40 dark:text-green-300">Mahadsanid! Kooxda OneStep ayaa WhatsApp kugula soo xiriiri doonta.</p>}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-slate-200 px-3 pt-2 dark:border-slate-700">{["Adeegyada", "Qiimaha", "La hadal qof"].map(text => <button key={text} type="button" disabled={busy} onClick={() => send(undefined, text)} className="rounded-full border border-slate-300 px-3 py-1 text-xs disabled:opacity-40 dark:border-slate-600">{text}</button>)}</div>
      <label className="flex items-center gap-2 px-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> Kaydi sheekadan si kooxdu kuu caawiso</label>
      {storage && <p role="status" className="px-3 text-[11px] text-slate-500 dark:text-slate-400">{storage}</p>}
      <form onSubmit={send} className="flex gap-2 p-3"><input ref={field} aria-label="Farriintaada" value={input} onChange={event => setInput(event.target.value)} maxLength={1000} placeholder="Qor su'aashaada…" className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-600" /><button disabled={busy || !input.trim()} aria-label="Dir su'aasha" className="rounded-lg bg-blue-600 p-3 text-white disabled:opacity-40"><Send size={18} /></button></form>
      <a href={whatsappLink(questions[questions.length - 1])} target="_blank" rel="noopener noreferrer" className="bg-green-700 px-4 py-2.5 text-center text-sm font-medium text-white">Kooxda kala hadal WhatsApp ↗</a>
      <p className="px-3 py-1.5 text-[11px] text-slate-500">Jawaabaha xaqiiji marka ay khuseeyaan qiime ama heshiis. <a className="underline" href="/privacy-policy">Asturnaanta</a></p>
    </section>}
    <button ref={toggle} aria-label={open ? "Xir chat-ka" : "Fur chat-ka OneStep"} aria-expanded={open} aria-controls="onestep-chat" onClick={() => open ? close() : setOpen(true)} className="flex h-14 items-center gap-2 rounded-full bg-blue-700 px-5 font-semibold text-white shadow-lg hover:bg-blue-800">{open ? <X size={22} /> : <MessageCircle size={22} />} Caawimaad</button>
  </div>;
}
