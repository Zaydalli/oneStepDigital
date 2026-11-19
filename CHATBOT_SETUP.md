# OneStep website assistant

This change replaces the home page's WhatsApp popup with an in-page chat and a
click-to-WhatsApp handoff to +252615894875. It does not read WhatsApp messages.
FAQ answers require no AI subscription. Unknown questions fall back to the team.
Messages live in the current page's memory only; reloading clears them. No CRM,
ticket creation, transcript storage or automatic WhatsApp reply is claimed.

## Preview and deployment
1. Review this branch's Vercel preview on the onestepdigital.co project.
2. Test Services, Price, Contact, an unknown question, mobile view and keyboard Escape.
3. Review the public FAQ in src/lib/chat.ts and the privacy policy before enabling AI.
4. Deploy the reviewed branch using the project's existing deployment workflow.

## Optional AI (disabled until owner configuration)
In Vercel server-side Environment Variables set OPENAI_API_KEY, OPENAI_MODEL,
UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN and CHAT_AI_ENABLED=true only
after the account owner accepts provider billing. Set a provider project budget
and rate limits. No calls or credits were purchased during implementation.
The Redis global daily request ceiling defaults to 20, maximum100. Calls fail
closed to FAQ when configuration, budget storage or provider is unavailable.
It bounds AI calls, not hosting traffic. No end-user authentication is provided.
Each AI request sends only the current visitor message and public business facts,
with store:false; no agency ledger, email or client-specific data is accessible.
Disclosure/retention terms must reflect the chosen providers before activation.

## WhatsApp Business automation remains a separate integration
The existing Business app number is confirmed, but no Meta authorization,
phone-number ID, app secret, approved coexistence/migration path or durable
webhook queue is available. Do not delete/migrate the existing number on guesswork.
Use Meta's test number first, then verify incoming message, durable deduplication,
reply, opt-out and human handoff before enabling the production number.
The website WhatsApp link opens a compose/chat screen: the visitor sends it.

## Validation
Run npm ci, npx tsc --noEmit and npm run build. AI live response and Vercel
production deployment require account access/configuration; do not infer them
from a successful compile. API documentation:
https://developers.openai.com/api/reference/resources/responses/methods/create
