// Original illustrations for the service cards, in OneStep's blue palette.
// Pure inline SVG: no image requests, crisp at any size, and they follow light/dark mode via the card background.

export type Kind = "digital" | "duubis" | "plus" | "connect" | "custom" | "website" | "logo" | "ads" | "event";

const Defs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3b82f6" /><stop offset="1" stopColor="#1d4ed8" /></linearGradient>
    <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7dd3fc" /><stop offset="1" stopColor="#0ea5e9" /></linearGradient>
    <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fcd34d" /><stop offset="1" stopColor="#f59e0b" /></linearGradient>
    <filter id={`${id}-sh`} x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#1e3a8a" floodOpacity=".22" /></filter>
  </defs>
);

function Art({ kind }: { kind: Kind }) {
  const id = `sa-${kind}`;
  const B = `url(#${id}-b)`, S = `url(#${id}-s)`, A = `url(#${id}-a)`, SH = `url(#${id}-sh)`;
  switch (kind) {
    case "digital": // designed posts + AI sparkles
      return <>
        <Defs id={id} />
        <g filter={SH} transform="rotate(-8 110 88)"><rect x="62" y="34" width="86" height="104" rx="12" fill="#fff" /><rect x="70" y="42" width="70" height="56" rx="8" fill={S} /><circle cx="92" cy="62" r="8" fill="#fff" opacity=".8" /><path d="M72 96l22-20 16 14 12-10 18 16Z" fill="#1d4ed8" opacity=".55" /><rect x="72" y="108" width="50" height="7" rx="3.5" fill="#cbd5e1" /><rect x="72" y="121" width="34" height="6" rx="3" fill="#e2e8f0" /></g>
        <g filter={SH}><rect x="150" y="26" width="86" height="112" rx="12" fill={B} /><rect x="158" y="34" width="70" height="64" rx="8" fill="#eff6ff" /><path d="M193 48l6 14 14 6-14 6-6 14-6-14-14-6 14-6Z" fill={A} /><rect x="160" y="108" width="52" height="7" rx="3.5" fill="#bfdbfe" /><rect x="160" y="121" width="36" height="6" rx="3" fill="#93c5fd" /></g>
        <path d="M262 40l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill={A} /><path d="M268 104l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#93c5fd" /><path d="M44 52l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#7dd3fc" />
      </>;
    case "connect": // phone with WhatsApp-style chat, map pin, check
      return <>
        <Defs id={id} />
        <rect x="118" y="18" width="84" height="132" rx="16" fill={B} filter={SH} />
        <rect x="126" y="30" width="68" height="104" rx="8" fill="#fff" />
        <rect x="134" y="42" width="40" height="14" rx="7" fill="#dbeafe" /><rect x="146" y="62" width="40" height="14" rx="7" fill="#22c55e" /><rect x="134" y="82" width="32" height="14" rx="7" fill="#dbeafe" />
        <rect x="136" y="102" width="48" height="8" rx="4" fill="#bfdbfe" /><rect x="144" y="116" width="32" height="6" rx="3" fill="#dbeafe" />
        <g filter={SH}><path d="M248 46c-15 0-26 11-26 25 0 19 26 43 26 43s26-24 26-43c0-14-11-25-26-25Z" fill={A} /><circle cx="248" cy="71" r="9" fill="#fff" /></g>
        <g filter={SH}><rect x="40" y="52" width="62" height="40" rx="14" fill={S} /><path d="M52 92l-6 12 16-12Z" fill="#0ea5e9" /><circle cx="58" cy="72" r="4" fill="#fff" /><circle cx="71" cy="72" r="4" fill="#fff" /><circle cx="84" cy="72" r="4" fill="#fff" /></g>
        <circle cx="70" cy="128" r="14" fill="#fff" stroke="#93c5fd" strokeWidth="3" /><path d="M64 128l4 4 8-8" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>;
    case "duubis": // phone with play button, film strip, sparkle
      return <>
        <Defs id={id} />
        <g filter={SH} transform="rotate(-8 90 90)"><rect x="40" y="44" width="110" height="74" rx="10" fill="#1e293b" />{[0, 1, 2, 3, 4].map(i => <rect key={i} x={48 + i * 20} y="50" width="12" height="7" rx="2" fill="#64748b" />)}{[0, 1, 2, 3, 4].map(i => <rect key={i} x={48 + i * 20} y="105" width="12" height="7" rx="2" fill="#64748b" />)}<rect x="48" y="62" width="94" height="38" rx="4" fill={S} /></g>
        <rect x="160" y="20" width="84" height="132" rx="16" fill={B} filter={SH} />
        <rect x="168" y="32" width="68" height="104" rx="8" fill="#eff6ff" />
        <circle cx="202" cy="80" r="20" fill="#fff" filter={SH} /><path d="M196 70v20l16-10Z" fill="#2563eb" />
        <rect x="176" y="114" width="52" height="6" rx="3" fill="#bfdbfe" /><rect x="176" y="114" width="30" height="6" rx="3" fill="#2563eb" />
        <path d="M272 38l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z" fill={A} /><path d="M282 104l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#93c5fd" />
      </>;
    case "plus": // stacked posts, heart, rising chart
      return <>
        <Defs id={id} />
        <rect x="58" y="40" width="90" height="100" rx="14" fill="#dbeafe" transform="rotate(-10 103 90)" />
        <g filter={SH}><rect x="78" y="28" width="96" height="112" rx="14" fill="#fff" /><rect x="88" y="38" width="76" height="56" rx="8" fill={S} /><circle cx="96" cy="108" r="7" fill="#bfdbfe" /><rect x="108" y="104" width="44" height="7" rx="3.5" fill="#e2e8f0" /><rect x="88" y="122" width="56" height="6" rx="3" fill="#e2e8f0" /></g>
        <g filter={SH}><circle cx="178" cy="46" r="18" fill="#fff" /><path d="M178 56s-11-7-11-14a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 7-11 14-11 14Z" fill="#ef4444" /></g>
        <g filter={SH}><rect x="200" y="70" width="88" height="72" rx="14" fill={B} /><rect x="214" y="114" width="12" height="18" rx="3" fill="#93c5fd" /><rect x="232" y="102" width="12" height="30" rx="3" fill="#bfdbfe" /><rect x="250" y="88" width="12" height="44" rx="3" fill="#fff" /><path d="M212 98l18-12 14 8 26-18" stroke={A} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
      </>;
    case "custom": // browser + palette + target
      return <>
        <Defs id={id} />
        <g filter={SH}><rect x="44" y="34" width="150" height="100" rx="12" fill="#fff" /><rect x="44" y="34" width="150" height="20" rx="12" fill={B} /><circle cx="58" cy="44" r="3" fill="#fff" /><circle cx="68" cy="44" r="3" fill="#fff" /><rect x="56" y="64" width="56" height="34" rx="6" fill={S} /><rect x="120" y="64" width="62" height="8" rx="4" fill="#cbd5e1" /><rect x="120" y="78" width="46" height="8" rx="4" fill="#e2e8f0" /><rect x="56" y="108" width="126" height="14" rx="7" fill="#dbeafe" /></g>
        <g filter={SH}><path d="M250 30c-27 0-48 20-48 44s20 44 44 44c8 0 10-6 6-11s-2-12 6-12h12c16 0 28-10 28-24 0-23-21-41-48-41Z" fill="#fff" /><circle cx="228" cy="60" r="7" fill="#2563eb" /><circle cx="250" cy="48" r="7" fill="#0ea5e9" /><circle cx="272" cy="58" r="7" fill="#f59e0b" /><circle cx="228" cy="84" r="7" fill="#ef4444" /></g>
        <circle cx="236" cy="132" r="14" fill={A} filter={SH} /><circle cx="236" cy="132" r="7" fill="#fff" /><circle cx="236" cy="132" r="3" fill="#f59e0b" />
      </>;
    case "website":
      return <>
        <Defs id={id} />
        <g filter={SH}><rect x="30" y="16" width="100" height="70" rx="10" fill="#fff" /><rect x="30" y="16" width="100" height="16" rx="10" fill={B} /><rect x="40" y="40" width="40" height="26" rx="5" fill={S} /><rect x="86" y="40" width="34" height="7" rx="3.5" fill="#cbd5e1" /><rect x="86" y="53" width="26" height="7" rx="3.5" fill="#e2e8f0" /><rect x="40" y="72" width="80" height="6" rx="3" fill="#dbeafe" /></g>
        <g filter={SH}><rect x="112" y="40" width="34" height="52" rx="7" fill={B} /><rect x="116" y="47" width="26" height="38" rx="3" fill="#eff6ff" /><rect x="120" y="52" width="18" height="10" rx="2" fill="#7dd3fc" /></g>
      </>;
    case "logo":
      return <>
        <Defs id={id} />
        <circle cx="62" cy="52" r="30" fill={B} filter={SH} /><path d="M50 52l12-14 12 14-12 14Z" fill="#fff" />
        <rect x="98" y="30" width="44" height="44" rx="12" fill={A} filter={SH} transform="rotate(12 120 52)" />
        <path d="M100 86l30-30 8 8-30 30-12 4Z" fill="#1e293b" /><path d="M130 56l8 8 6-6-8-8Z" fill="#0ea5e9" />
      </>;
    case "ads":
      return <>
        <Defs id={id} />
        <g filter={SH}><circle cx="96" cy="52" r="38" fill="#fff" /><circle cx="96" cy="52" r="28" fill={B} /><circle cx="96" cy="52" r="18" fill="#fff" /><circle cx="96" cy="52" r="8" fill={A} /></g>
        <path d="M96 52l40-28" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" /><path d="M136 24l2 10-10-2 8-8Z" fill="#1e293b" />
        <g filter={SH}><path d="M24 44h14l22-14v44L38 60H24Z" fill={S} /><rect x="28" y="60" width="9" height="18" rx="3" fill="#0ea5e9" /></g>
      </>;
    case "event":
      return <>
        <Defs id={id} />
        <g filter={SH}><rect x="38" y="30" width="100" height="62" rx="12" fill={B} /><rect x="58" y="22" width="30" height="12" rx="4" fill="#1d4ed8" /><circle cx="88" cy="61" r="20" fill="#fff" /><circle cx="88" cy="61" r="13" fill={S} /><circle cx="84" cy="57" r="4" fill="#fff" /><rect x="118" y="40" width="10" height="7" rx="2" fill={A} /></g>
        <path d="M150 20l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill={A} /><path d="M30 78l3 6 6 3-6 3-3 6-3-6-6-3 6-3Z" fill="#93c5fd" />
      </>;
  }
}

/** Large banner (service cards) or compact tile (custom service cards). */
export default function ServiceArt({ kind, compact = false }: { kind: Kind; compact?: boolean }) {
  const viewBox = compact ? "0 0 170 104" : "0 0 320 160";
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800/80 dark:to-blue-950/60 ring-1 ring-blue-100/80 dark:ring-slate-700 ${compact ? "h-24 mb-4" : "h-36 sm:h-40 mb-6"}`}>
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl dark:bg-blue-500/20" aria-hidden="true" />
      <svg viewBox={viewBox} className="relative h-full w-full transition-transform duration-500 group-hover:scale-105" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <Art kind={kind} />
      </svg>
    </div>
  );
}
