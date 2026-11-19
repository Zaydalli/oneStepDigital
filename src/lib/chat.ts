export const handoffUrl = "https://wa.me/252615894875";
export const welcome = "Salaan! Waxaan ahay kaaliyaha OneStep Digital. Maxaan kaa caawiyaa? Ha soo dirin password, xog lacag-bixin ama xog gaar ah.";
export const publicKnowledge = "OneStep Digital waxay bixisaa social media management, content creation, websites iyo digital optimization. WhatsApp: +252615894875. Email: onestepdigital4so@gmail.com. Qiime, scope, deadline iyo stock waxay u baahan yihiin xaqiijin kooxda. Lama ballanqaadi karo sales ama natiijo ads. Su'aalaha lacagta, refund, cabashada iyo access-ka waxaa loo gudbiyaa qof.";
export function faq(message: string): string | null {
  const text = message.toLowerCase();
  if (/refund|cabasho|lacag|payment|invoice|password|access|balance|haraag/.test(text)) return "Arrintan kooxda OneStep ayaa hubinaysa. Fadlan WhatsApp noogala xiriir; ha soo dirin password ama xogta kaarka. Farriin weli looma dirin kooxda.";
  if (/qiim|price|cost|package/.test(text)) return "Qiimuhu wuxuu ku xiran yahay adeegga iyo shaqada aad u baahan tahay. Noo sheeg ganacsiga iyo ujeeddadaada, kadib WhatsApp uga codso kooxda qiime-soo-jeedin.";
  if (/adeeg|service|website|social|marketing|content/.test(text)) return "Waxaan kaa caawin karnaa social media management, content creation, websites iyo digital optimization. Adeeggee ayaad danaynaysaa?";
  if (/xiriir|contact|whatsapp|email|qof/.test(text)) return "OneStep kala xiriir WhatsApp +252615894875 ama onestepdigital4so@gmail.com. Badhanka hoose ayaa kuu furaya WhatsApp; adiga ayaa farriinta diraya.";
  return null;
}
