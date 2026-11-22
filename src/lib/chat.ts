export const handoffUrl = "https://wa.me/252615894875";
export const welcome = "Salaan! Waxaan ahay kaaliyaha OneStep Digital. Maxaan kaa caawiyaa? Ha soo dirin password, xog lacag-bixin ama xog gaar ah.";

// FAQ answers are only a fallback for when the Gemini assistant is unavailable.
// Keep in sync with the rate card, Pricing.tsx, Services.tsx and cloudflare/worker.js (KNOWLEDGE).
const packages = "• Digital: $150 bishii (6 naqshadood + 2 muuqaal AI)\n• Duubis: $225 bishii (6 naqshadood + 2 muuqaal goobta lagu duubo)\n• Duubis Plus: $300 bishii (10 naqshadood + 2 duubis + 2 AI)\nXirmo kasta waxaa ku jira $50 xayeysiis Meta ah, qorshaha nuxurka, daabacaadda Facebook/Instagram/TikTok iyo warbixin bille ah.";

export const answers = {
  handoff: "Arrintan kooxda OneStep ayaa hubinaysa. Fadlan WhatsApp noogala xiriir; ha soo dirin password ama xogta kaarka. Farriin weli looma dirin kooxda.",
  prices: "Xirmooyinkayaga:\n" + packages + "\nAdeegyada dheeriga ah (website, apps, logo, munaasabado, ololayaasha Meta) qiimahoodu wuxuu ku xiran yahay shaqada.",
  digital: "Digital ($150 bishii): 6 naqshadood iyo 2 muuqaal oo AI ah. Waxaan adeegsannaa sawirrada alaabtaada iyo goobtaada. Waxaa ku jira $50 xayeysiis Meta ah iyo maamulka baraha bulshada.",
  duubis: "Duubis ($225 bishii): 6 naqshadood iyo 2 muuqaal oo goobta lagu duubo (hal booqasho bishii, hal goob oo magaalada ah). Duubis Plus ($300 bishii): 10 naqshadood, 2 duubis iyo 2 muuqaal AI ah. Labaduba waxay leeyihiin $50 xayeysiis Meta ah.",
  custom: "Adeegyada dheeriga ah: website-yada iyo apps, logo iyo aqoonsiga ganacsiga, duubista munaasabadaha, muuqaallo AI ah, ololayaasha Meta, QR menu, WhatsApp Business iyo Google Maps. Qiimaha waxaa lagu saleeyaa shaqada; WhatsApp nooga codso.",
  services: "OneStep waxay kuu samaysaa naqshado iyo muuqaallo xirfad leh, waxayna kuu maamushaa baraha bulshada iyo xayeysiisyada.\n" + packages,
  contact: "OneStep kala xiriir WhatsApp +252615894875 ama info@onestepdigital.co. Xaruntu waa Muqdisho.",
  greeting: "Wa alaykum salaam! Ku soo dhawoow OneStep Digital. Ma waxaad rabtaa inaad ogaato xirmooyinkayaga, qiimaha, mise inaad kooxda la hadasho?",
  other: "Su'aashan kooxda OneStep ayaa si fiican uga jawaabi karta. Fadlan WhatsApp +252615894875 noogu soo qor.",
} as const;
export type AnswerKey = keyof typeof answers;

export function faq(message: string): string | null {
  const text = message.toLowerCase();
  if (/refund|lacag[- ]?celin|lacag[- ]?bixin|cabasho|payment|invoice|password|access|balance|haraag/.test(text)) return answers.handoff;
  if (/qiim|price|cost|package|xirm|immisa/.test(text)) return answers.prices;
  if (/duubis|film|\breels?\b/.test(text)) return answers.duubis;
  if (/\bai\b|naqshad|design|\bdigital\b/.test(text)) return answers.digital;
  if (/website|\bapps?\b|logo|branding|meta ads|olole|munaasab|google maps|whatsapp business|\bqr\b|menu/.test(text)) return answers.custom;
  if (/adeeg|service|ma bixisaan/.test(text)) return answers.services;
  if (/xiriir|contact|email|la hadal qof|xarun/.test(text)) return answers.contact;
  return null;
}
