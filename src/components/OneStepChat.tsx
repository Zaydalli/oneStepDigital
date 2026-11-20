"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Facebook, Instagram, Mail, Send, Share2, X } from "lucide-react";
import { handoffUrl, welcome } from "@/lib/chat";

export default function OneStepChat() {
  const [open, setOpen] = useState(false);
  const [dial, setDial] = useState(false);
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
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, consent, history: messages.slice(1).slice(-6).map(m => ({ role: m.role, text: m.text })) }), signal: AbortSignal.timeout(25000) });
      const data = await response.json();
      setStorage(data.storage === "saved" ? "Farriinta waa la kaydiyey (30 maalmood)." : consent ? "Kaydintu ma guulaysan; kooxda WhatsApp kala xiriir." : "");
      setMessages(previous => [...previous, { role: "assistant", text: typeof data.reply === "string" ? data.reply : "Fadlan WhatsApp noogala xiriir." }]);
    } catch { setMessages(previous => [...previous, { role: "assistant", text: "Xiriirka ayaa go'ay. Mar kale isku day ama WhatsApp noogala xiriir." }]); }
    finally { setBusy(false); field.current?.focus(); }
  }
  return <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6" onKeyDown={event => { if (event.key === "Escape" && dial) setDial(false); }}>
    {open && <section id="onestep-chat" role="dialog" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === "Escape") close(); }} className="mb-3 flex h-[min(640px,calc(100dvh-7rem))] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <header className="flex items-center justify-between bg-slate-950 px-4 py-2 text-white"><div><h2 id="chat-title" className="font-semibold">OneStep Digital</h2><p className="text-xs text-slate-300">Kaaliyaha adeegyada</p></div><button aria-label="Xir chat-ka" onClick={close} className="rounded p-2 hover:bg-slate-800"><X size={20} /></button></header>
      <div ref={log} role="log" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4 text-sm">
        {messages.map((message, index) => <p key={index} className={`whitespace-pre-wrap rounded-xl p-3 ${message.role === "user" ? "ml-8 bg-blue-600 text-white" : "mr-4 bg-slate-100 dark:bg-slate-800"}`}><span className="sr-only">{message.role === "user" ? "Adiga: " : "OneStep: "}</span>{message.text}</p>)}
        {busy && <p role="status">Jawaab ayaa la diyaarinayaa…</p>}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-slate-200 px-3 pt-2 dark:border-slate-700">{["Adeegyada", "Qiimaha", "La hadal qof"].map(text => <button key={text} type="button" disabled={busy} onClick={() => send(undefined, text)} className="rounded-full border border-slate-300 px-3 py-1 text-xs disabled:opacity-40 dark:border-slate-600">{text}</button>)}</div>
      <label className="flex items-center gap-2 px-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> Kaydi sheekadan si kooxdu kuu caawiso</label>
      {storage && <p role="status" className="px-3 text-[11px] text-slate-500 dark:text-slate-400">{storage}</p>}
      <form onSubmit={send} className="flex gap-2 p-3"><input ref={field} aria-label="Farriintaada" value={input} onChange={event => setInput(event.target.value)} maxLength={1000} placeholder="Qor su'aashaada…" className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-600" /><button disabled={busy || !input.trim()} aria-label="Dir su'aasha" className="rounded-lg bg-blue-600 p-3 text-white disabled:opacity-40"><Send size={18} /></button></form>
      <p className="px-3 py-1.5 text-[11px] text-slate-500">Jawaabaha xaqiiji marka ay khuseeyaan qiime ama heshiis. <a className="underline" href="/privacy-policy">Asturnaanta</a></p>
    </section>}
    {!open && <div className="mb-3 flex flex-col items-center gap-3">
      {dial && <ul id="onestep-contact" className="flex flex-col items-center gap-3">
        {contacts.map((c, i) => <li key={c.label} className="animate-[fadeUp_.2s_ease-out_both]" style={{ animationDelay: `${(contacts.length - 1 - i) * 40}ms` }}>
          <a href={c.href} target={c.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={c.label} title={c.label} className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white/80 transition hover:scale-110 dark:ring-slate-900 ${c.color}`}>{c.icon}</a>
        </li>)}
      </ul>}
      <button type="button" aria-label={dial ? "Xir xiriirada" : "Nala soo xiriir"} aria-expanded={dial} aria-controls="onestep-contact" onClick={() => setDial(d => !d)} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl transition hover:scale-105">
        {dial ? <X size={24} /> : <Share2 size={22} />}
        {!dial && <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 px-1 text-xs font-bold dark:border-slate-900">{contacts.length}</span>}
      </button>
    </div>}
    <button ref={toggle} type="button" aria-label={open ? "Xir chat-ka" : "La hadal kaaliyaha AI"} title="Kaaliyaha AI" aria-expanded={open} aria-controls="onestep-chat" onClick={() => { setDial(false); if (open) close(); else setOpen(true); }} className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-800 shadow-xl ring-1 ring-blue-200 transition hover:scale-105 dark:bg-blue-950 dark:text-blue-200 dark:ring-blue-900">{open ? <X size={24} /> : <Bot size={26} />}</button>
  </div>;
}

const WhatsAppIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>;
const TikTokIcon = () => <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>;
const contacts = [
  { label: "Email: info@onestepdigital.co", href: "mailto:info@onestepdigital.co", color: "bg-slate-700", icon: <Mail size={20} /> },
  { label: "TikTok", href: "https://www.tiktok.com/@onestepdigital.co", color: "bg-black", icon: <TikTokIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/onestepdigital.co", color: "bg-gradient-to-br from-fuchsia-600 via-pink-500 to-amber-400", icon: <Instagram size={20} /> },
  { label: "Facebook", href: "https://www.facebook.com/share/1EmiJsmLUa/", color: "bg-[#1877F2]", icon: <Facebook size={20} /> },
  { label: "WhatsApp: +252615894875", href: handoffUrl, color: "bg-[#25D366]", icon: <WhatsAppIcon /> },
];
