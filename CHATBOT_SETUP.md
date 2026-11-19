# OneStep: Cloudflare AI + kaydinta — IT setup

Xirmadani waa koodh diyaarsan, ma aha adeeg durba la hawlgeliyey. Website-ku Vercel ayuu ku sii jiraa; domain/DNS ha beddelin. WhatsApp API automation kuma jiro. Email rasmi ah: info@onestepdigital.co.

## 1. Gelinta faylasha
ZIP-ka `website-files/` waxa ku jira oo keliya faylasha website-ka ee la beddelay iyo `cloudflare/`. Ku dul koobi waddooyinkooda repository-ga, branch cusub. Ha tirtirin qaybaha kale ee website-ka. Haddii IT-gu hore wax uga beddelay faylashaas, isbarbar dhig ka hor beddelid. Patch-ka buuxa waa beddel kale oo loogu talagalay source-kii hore ee chatbot-ka ka hor; ZIP overlay ayaa u habboon website chatbot hore leh.

## 2. Account
Samee Cloudflare account Free. Ha dooran Workers Paid, AI Gateway paid credits ama model u baahan lacag. Domain gelintiisa uma baahnid.

## 3. Diyaarinta Cloudflare (terminal gudaha repository)
Node.js iyo npm ayaa loo baahan yahay. Adeegso Wrangler rasmi ah oo npm ah:

```sh
cd cloudflare
npx wrangler login
npx wrangler d1 create onestep-chat
```
Jawaabta command-ka waxay bixisaa `database_id`. Ku beddel `REPLACE_WITH_DATABASE_ID` gudaha `wrangler.jsonc`. Ha gelin API token gudaha faylka.

```sh
npx wrangler d1 execute onestep-chat --remote --file=schema.sql
npx wrangler secret put CHAT_SECRET
```
Marka secret-ka la weydiiyo, geli password random ugu yaraan32 xaraf ah, password manager ku samee. Si gaar ah u kaydi; isla qiimahan Vercel ayaa loo baahan yahay. Ha ku qorin chat, GitHub ama screenshot.

```sh
npx wrangler deploy
```
Waxa uu soo saaraa Worker URL. Marka hore AI_ENABLED=false ku hay inta setup/tijaabintu socoto. D1 binding DB iyo AI binding AI waxaa dejinaya wrangler.jsonc. Kadib milkiiluhu oggolaado, AI_ENABLED u beddel string true oo mar kale deploy samee. DAILY_LIMIT=50 waa xad codsiyada AI ee account-kan maalintii UTC; ma aha qiyaas sax ah neurons. Free quota sidoo kale way dhammaan kartaa; FAQ ayaa markaas jawaabaya. Ha upgrade-gareyn Free plan si cilad loo xalliyo.

## 4. Vercel
Project-ka website-ka → Settings → Environment Variables. Ku dar Preview marka hore:

- CLOUDFLARE_CHAT_URL = Worker URL-ga laguu siiyey oo `/chat` ku dhammaada.
- CLOUDFLARE_CHAT_SECRET = isla CHAT_SECRET-kii.

Ha isticmaalin NEXT_PUBLIC_. Old OPENAI/UPSTASH variables koodhkan uma baahna. Dib u deploy Preview. Marka la tijaabiyo oo la ansixiyo, isla variables-ka ku dar Production oo deploy samee.

## 5. Tijaabooyinka laga rabo
1. Adeegyada/Qiimaha/La hadal qof: FAQ iyo info@onestepdigital.co sax ah.
2. Su'aal adeeg gaar ah oo aan FAQ-ga ku jirin: AI jawaab gaar ah; server response mode=ai. Ha u qaadan jawaab kasta in AI tahay.
3. Checkbox kaydinta off: storage=not_requested; D1 messages miiska wax cusub kuma kordhaan.
4. Checkbox on: storage=saved; Cloudflare D1 Studio ka eeg laba saf (user/assistant), session isku mid ah. Ha samayn URL public ah oo farriimaha lagu akhriyo.
5. Isla browser-ka su'aal xigta kaydinta on: server-ku wuxuu qaataa ugu badnaan6 farriimood oo hore. Refresh-ka UI-gu taariikhda ma soo bandhigayo; kaydka server-ka ayaa sii jira.
6. AI_ENABLED=false ama quota dhammaatay: FAQ, lacag dheeraad ah si automatic ah ma hawlgelinayo. Save fail waa inuu muujiyo digniin, lama oran karo waa la kaydiyey.
7. Mobile iyo keyboard Escape; link WhatsApp wuu furmaa, laakiin farriin ma dirto chatbot-kani.

## Asturnaanta iyo hawlgalka
Farriinta hadda la qoray AI-ga waxaa loo diraa Cloudflare. Kaydintu waa opt-in, 30 maalmood, cookie HttpOnly session ah30 maalmood. Checkbox ka saaristu waxay joojinaysaa kaydinta farriimaha xiga, ma tirtirto kuwii hore. Scheduled cleanup maalin kasta ayaa tirtira records duqoobay (illaa qiyaastii31 maalmood). D1 Studio waxa arka oo keliya account users la oggolaaday. Dashboard kooxda oo gaar ah weli kuma jiro.

Ka hor Production, privacy policy-ga la jaanqaad Cloudflare processing, optional storage iyo muddada30maalmood; milkiiluhu ha ansixiyo. Ha ku darin client finance/ads xogta FAQ-ga. Model-ka Af-Soomaaligiisa waa in qof dib u eego. Global50 limit wuxuu xaddidayaa isticmaalka, balse ma aha ka hortag bot oo buuxa; marka traffic kordho ku dar Turnstile/rate-limiting ka hor kor u qaadista xadka. D1 outage ama AI outage waxay keentaa fallback; ha ballanqaadin uptime.

## Local validation
`npx tsc --noEmit` gudaha website root; `node cloudflare/test.mjs`. Tijaabooyinkan waa mocks/local, ma xaqiijiyaan deploy, credentials, dhab ahaan AI usage ama D1 live.

Ilaha rasmiga ah:
https://developers.cloudflare.com/workers-ai/get-started/workers-wrangler/
https://developers.cloudflare.com/d1/worker-api/prepared-statements/
https://developers.cloudflare.com/workers-ai/platform/pricing/
