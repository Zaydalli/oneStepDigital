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

/** Hand-written Somali answers. The AI only picks one of these keys for Somali messages; it never writes Somali itself. */
export const answers = {
  handoff: "Arrintan kooxda OneStep ayaa hubinaysa. Fadlan WhatsApp noogala xiriir; ha soo dirin password ama xogta kaarka. Farriin weli looma dirin kooxda.",
  prices: "Xirmooyinkayaga:\n• Digital Starter: $120 (hal mar)\n• Content Boost: $150 bishii\n• Growth Management: $200 bishii\nWebsite, Logo, Meta Ads iyo Event Coverage waxay leeyihiin qiime gaar ah. Qiimaha kama dambaysta ah WhatsApp ka xaqiiji.",
  starter: "Digital Starter ($120, hal mar): QR / Digital Catalog setup, WhatsApp Business setup, Google Maps + sawirro, 5 QR stands, 100 logo stickers, 1 welcome post iyo tijaabo dhammaystiran. WhatsApp nagala soo xiriir si aad u dalbato.",
  content: "Content Boost ($150 bishii): 2 short reels, 2 saacadood oo duubis ah, editing iyo captions, iyo faylal diyaar ah. Adiga ayaa post-gareynaya. Event coverage-ka qiime gaar ah ayuu leeyahay.",
  growth: "Growth Management ($200 bishii): 6 posts/designs, 2 reels, post-garaynta Facebook/Instagram/TikTok, content plan iyo warbixin bille ah. Lacagta Meta Ads iyo ka jawaabidda DMs kuma jiraan.",
  custom: "Website Development, Logo & Brand Identity, Meta Ads Management iyo Event & Video Coverage waa adeegyo gaar ah oo qiime gaar ah leh. Noo sheeg waxaad u baahan tahay, kadib WhatsApp kaga codso xigasho.",
  services: "OneStep Digital waxay bixisaa:\n• Digital Starter ($120 hal mar): QR menu/catalog, WhatsApp Business, Google Maps\n• Content Boost ($150/bil): reels iyo muuqaallo\n• Growth Management ($200/bil): maamulka bogagga Facebook/Instagram/TikTok\n• Adeegyo gaar ah: Website, Logo, Meta Ads, Event & Video Coverage\nAdeeggee ayaad danaynaysaa?",
  contact: "OneStep kala xiriir WhatsApp +252615894875 ama info@onestepdigital.co. Xaruntu waa Muqdisho. Badhanka hoose ayaa kuu furaya WhatsApp; adiga ayaa farriinta diraya.",
  greeting: "Wa alaykum salaam! Ku soo dhawoow OneStep Digital. Ma waxaad rabtaa inaad ogaato adeegyadayada, qiimaha, mise inaad kooxda la hadasho?",
  other: "Su'aashan kooxda OneStep ayaa si fiican uga jawaabi karta. Fadlan WhatsApp-ka hoose noogu soo qor, waan kuu jawaabi doonaa.",
} as const;
export type AnswerKey = keyof typeof answers;

export function faq(message: string): string | null {
  const text = message.toLowerCase();
  if (/refund|lacag[- ]?celin|lacag[- ]?bixin|cabasho|payment|invoice|password|access|balance|haraag/.test(text)) return answers.handoff;
  if (/qiim|price|cost|package|xirm|immisa|lacag/.test(text)) return answers.prices;
  if (/\bqr\b|menu|catalog|maps|google|starter/.test(text)) return answers.starter;
  if (/reel|video|muuqaal|duub|content boost/.test(text)) return answers.content;
  if (/social|facebook|instagram|tiktok|page|bog|maamul|management|post/.test(text)) return answers.growth;
  if (/website|web|logo|brand|ads|xayeysiis|event|munaasab/.test(text)) return answers.custom;
  if (/adeeg|service|marketing|content|ma bixisaan|maxaad/.test(text)) return answers.services;
  if (/xiriir|contact|whatsapp|email|qof|address|xarun|meesha|muqdisho/.test(text)) return answers.contact;
  return null;
}
