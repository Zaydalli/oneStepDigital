export const handoffUrl = "https://wa.me/252615894875";
export const welcome = "Salaan! Waxaan ahay kaaliyaha OneStep Digital. Maxaan kaa caawiyaa? Ha soo dirin password, xog lacag-bixin ama xog gaar ah.";

// Public facts, mirrored from the website (Services, Pricing, CustomServices, Contact).
// Keep in sync with cloudflare/worker.js system prompt when prices or packages change.
export const publicKnowledge = `OneStep Digital waa Digital Marketing Studio ku yaal Muqdisho, Soomaaliya.
Xirmooyinka:
1. Digital Starter (Basic Setup) - $120 hal mar: QR / Digital Catalog setup, WhatsApp Business setup, Google Maps setup + sawirro, 5 QR stands, 100 logo stickers, 1 welcome/offer post, tijaabada QR, link iyo WhatsApp.
2. Content Boost - $150 bishii: 2 short reels bishii, 2 saacadood oo duubis ah, editing iyo captions, faylal diyaar u ah post-garaynta. Macmiilka ayaa isagu post-gareeya.
3. Growth Management - $200 bishii: 6 posts/designs bishii, 2 short reels, post-garaynta Facebook/Instagram/TikTok, content plan iyo warbixin bille ah. Kuma jiraan lacagta Meta Ads iyo ka jawaabidda DMs/comments.
Adeegyo gaar ah (qiime gaar ah): Website Development, Logo & Brand Identity, Meta Ads Management, Event & Video Coverage.
Xiriir: WhatsApp +252615894875, email info@onestepdigital.co.`;

const services = "OneStep Digital waxay bixisaa:\n• Digital Starter ($120 hal mar): QR menu/catalog, WhatsApp Business, Google Maps\n• Content Boost ($150/bil): reels iyo muuqaallo\n• Growth Management ($200/bil): maamulka bogagga Facebook/Instagram/TikTok\n• Adeegyo gaar ah: Website, Logo, Meta Ads, Event & Video Coverage\nAdeeggee ayaad danaynaysaa?";
const prices = "Xirmooyinkayaga:\n• Digital Starter: $120 (hal mar)\n• Content Boost: $150 bishii\n• Growth Management: $200 bishii\nWebsite, Logo, Meta Ads iyo Event Coverage waxay leeyihiin qiime gaar ah. Qiimaha kama dambaysta ah WhatsApp ka xaqiiji.";

export function faq(message: string): string | null {
  const text = message.toLowerCase();
  if (/refund|lacag[- ]?celin|lacag[- ]?bixin|cabasho|payment|invoice|password|access|balance|haraag/.test(text)) return "Arrintan kooxda OneStep ayaa hubinaysa. Fadlan WhatsApp noogala xiriir; ha soo dirin password ama xogta kaarka. Farriin weli looma dirin kooxda.";
  if (/qiim|price|cost|package|xirm|immisa|lacag/.test(text)) return prices;
  if (/\bqr\b|menu|catalog|maps|google|starter/.test(text)) return "Digital Starter ($120, hal mar): QR / Digital Catalog setup, WhatsApp Business setup, Google Maps + sawirro, 5 QR stands, 100 logo stickers, 1 welcome post iyo tijaabo dhammaystiran. WhatsApp nagala soo xiriir si aad u dalbato.";
  if (/reel|video|muuqaal|duub|content boost/.test(text)) return "Content Boost ($150 bishii): 2 short reels, 2 saacadood oo duubis ah, editing iyo captions, iyo faylal diyaar ah. Adiga ayaa post-gareynaya. Event coverage-ka qiime gaar ah ayuu leeyahay.";
  if (/social|facebook|instagram|tiktok|page|bog|maamul|management|post/.test(text)) return "Growth Management ($200 bishii): 6 posts/designs, 2 reels, post-garaynta Facebook/Instagram/TikTok, content plan iyo warbixin bille ah. Lacagta Meta Ads iyo ka jawaabidda DMs kuma jiraan.";
  if (/website|web|logo|brand|ads|xayeysiis|event|munaasab/.test(text)) return "Website Development, Logo & Brand Identity, Meta Ads Management iyo Event & Video Coverage waa adeegyo gaar ah oo qiime gaar ah leh. Noo sheeg waxaad u baahan tahay, kadib WhatsApp kaga codso xigasho.";
  if (/adeeg|service|marketing|content|ma bixisaan|maxaad/.test(text)) return services;
  if (/xiriir|contact|whatsapp|email|qof|address|xarun|meesha|muqdisho/.test(text)) return "OneStep kala xiriir WhatsApp +252615894875 ama info@onestepdigital.co. Xaruntu waa Muqdisho. Badhanka hoose ayaa kuu furaya WhatsApp; adiga ayaa farriinta diraya.";
  return null;
}

/** Questions that show buying interest: the chat then offers a call-back. */
export function wantsLead(message: string): boolean {
  return /qiim|price|cost|package|xirm|immisa|lacag|adeeg|service|\bqr\b|menu|catalog|maps|reel|video|website|web|logo|ads|xayeysiis|social|facebook|instagram|tiktok|page|maamul|dalbo|order|event/.test(message.toLowerCase())
    && !/refund|lacag[- ]?celin|cabasho|password/.test(message.toLowerCase());
}

/** WhatsApp link that opens with the visitor's question already typed (they still press send). */
export function whatsappLink(question?: string): string {
  const q = question?.trim().slice(0, 300);
  const text = `Salaan OneStep, waxaan ka imid website-ka.${q ? ` Su'aashaydu: ${q}` : ""}`;
  return `${handoffUrl}?text=${encodeURIComponent(text)}`;
}
