# WhatsApp agent setup (Cloud API, free tier)

Endpoint: `https://onestep-chat.sayidcali934.workers.dev/whatsapp`

## Cloudflare secrets (Workers → onestep-chat → Settings → Variables and Secrets)
| Name | Where it comes from |
|---|---|
| `WA_VERIFY_TOKEN` | Any random string you choose; paste the same value in Meta → WhatsApp → Configuration → Verify token |
| `WA_APP_SECRET` | Meta app → App settings → Basic → App secret |
| `WA_TOKEN` | Meta → WhatsApp → API Setup → access token (use a System User permanent token for production) |
| `WA_PHONE_NUMBER_ID` | Meta → WhatsApp → API Setup → Phone number ID |
| `TRELLO_KEY` / `TRELLO_TOKEN` | trello.com/power-ups/admin → your Power-Up → API key → generate token |
| `TRELLO_LIST_ID` | Open the Trello board, add `.json` to the URL, find the list "Cusub" → `id` |

## Meta webhook
WhatsApp → Configuration → Callback URL = endpoint above, Verify token = `WA_VERIFY_TOKEN` → Verify and save → subscribe to **messages** (and **smb_message_echoes** when using coexistence).

## Behaviour
- Packages: exact prices. Custom services (website, apps, logo, …): collects a brief → Trello card → team quotes.
- "Qof la hadal" / payment / complaint → Trello card, bot silent for that customer 24h.
- Team replies from the WhatsApp Business app (coexistence) → bot silent 12h for that customer.
- History kept 30 days in D1 (`wa_messages`), auto-cleaned daily.
- Logs: Observability → `wa_send_error`, `trello_error`, `wa_not_configured`, `gemini_error`.

## Tests
`node cloudflare/test.mjs && node cloudflare/test-whatsapp.mjs`
