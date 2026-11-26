// Tests for the WhatsApp agent: signature, verification, quote → Trello, handoff/pause, coexistence echo, dedupe.
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
const { default: w } = await import('./worker.js');
const { parseReply } = await import('./whatsapp.js');

// In-memory D1 stand-in covering the statements the agent uses.
function fakeDB() {
  const t = { wa_messages: [], wa_seen: new Set(), wa_pause: new Map() };
  const stmt = (sql) => ({ args: [], bind(...a) { this.args = a; return this; },
    async run() { const a = this.args;
      if (sql.startsWith('INSERT OR IGNORE INTO wa_seen')) { const had = t.wa_seen.has(a[0]); t.wa_seen.add(a[0]); return { meta: { changes: had ? 0 : 1 } }; }
      if (sql.startsWith('INSERT INTO wa_messages')) { t.wa_messages.push({ phone: a[1], role: a[2], text: a[3], created_at: a[4] }); }
      if (sql.startsWith('INSERT INTO wa_pause')) t.wa_pause.set(a[0], a[1]);
      return { meta: { changes: 1 } }; },
    async first() { if (sql.startsWith('SELECT until')) { const u = t.wa_pause.get(this.args[0]); return u ? { until: u } : null; } return null; },
    async all() { const [phone, before] = this.args; return { results: t.wa_messages.filter(m => m.phone === phone && m.created_at < before).sort((x, y) => y.created_at - x.created_at).slice(0, 10) }; } });
  return { t, prepare: stmt, batch: async () => [] };
}

const SECRET = 'appsecret';
const sign = body => 'sha256=' + createHmac('sha256', SECRET).update(body).digest('hex');
const env = { AI_ENABLED: 'true', GEMINI_API_KEY: 'gk', WA_APP_SECRET: SECRET, WA_VERIFY_TOKEN: 'vt', WA_TOKEN: 'wt', WA_PHONE_NUMBER_ID: '123', TRELLO_KEY: 'tk', TRELLO_TOKEN: 'tt', TRELLO_LIST_ID: 'L1', DB: fakeDB() };
let geminiText = '', sent = [], cards = [];
globalThis.fetch = async (u, o) => {
  u = String(u);
  if (u.includes('generativelanguage')) return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: geminiText }] } }] }));
  if (u.includes('graph.facebook.com')) { assert.equal(o.headers.Authorization, 'Bearer wt'); sent.push(JSON.parse(o.body)); return new Response('{}'); }
  if (u.includes('api.trello.com')) { assert.match(u, /key=tk&token=tt/); cards.push(JSON.parse(o.body)); return new Response('{}'); }
  throw new Error('unexpected fetch ' + u);
};
async function post(payload, sig) {
  const body = JSON.stringify(payload); const jobs = [];
  const r = await w.fetch(new Request('https://x.test/whatsapp', { method: 'POST', headers: { 'X-Hub-Signature-256': sig ?? sign(body) }, body }), env, { waitUntil: p => jobs.push(p) });
  await Promise.all(jobs); return r;
}
const msg = (id, text, from = '252611111111') => ({ entry: [{ changes: [{ value: { contacts: [{ wa_id: from, profile: { name: 'Ali' } }], messages: [{ id, from, type: 'text', text: { body: text } }] } }] }] });

// 1. Verification handshake
let r = await w.fetch(new Request('https://x.test/whatsapp?hub.mode=subscribe&hub.verify_token=vt&hub.challenge=42'), env, {});
assert.equal(r.status, 200); assert.equal(await r.text(), '42');
r = await w.fetch(new Request('https://x.test/whatsapp?hub.mode=subscribe&hub.verify_token=no&hub.challenge=42'), env, {});
assert.equal(r.status, 403);
// 2. Bad signature rejected, nothing sent
r = await post(msg('m0', 'hi'), 'sha256=00'); assert.equal(r.status, 401); assert.equal(sent.length, 0);
// 3. Normal answer
geminiText = 'Duubis waa $225 bishii.';
r = await post(msg('m1', 'qiimaha?')); assert.equal(r.status, 200);
assert.equal(sent.length, 1); assert.equal(sent[0].to, '252611111111'); assert.equal(sent[0].text.body, 'Duubis waa $225 bishii.'); assert.equal(cards.length, 0);
// 4. Duplicate delivery ignored
await post(msg('m1', 'qiimaha?')); assert.equal(sent.length, 1);
// 5. Quote → reply without marker + Trello card
geminiText = 'Mahadsanid! Kooxdu xigashada ayay kuu diyaarinaysaa.\n[[QUOTE]]{"service":"Website","business":"Hotel Jazeera","summary":"5 bog + booking","details":"logo wuu haystaa"}';
await post(msg('m2', 'website 5 bog ah, booking'));
assert.equal(sent.at(-1).text.body, 'Mahadsanid! Kooxdu xigashada ayay kuu diyaarinaysaa.');
assert.equal(cards.length, 1); assert.equal(cards[0].idList, 'L1'); assert.match(cards[0].name, /Website – Hotel Jazeera/); assert.match(cards[0].desc, /wa\.me\/252611111111/); assert.match(cards[0].desc, /Ali/);
// 6. Handoff → card + bot paused for that customer
geminiText = 'Qof kooxda ka mid ah ayaa kuu soo jawaabi doona.\n[[HANDOFF]]{"reason":"lacag bixin"}';
await post(msg('m3', 'sideen lacagta u bixiyaa'));
assert.equal(cards.length, 2); assert.match(cards[1].name, /Qof la hadal/);
const before = sent.length; await post(msg('m4', 'hello?')); assert.equal(sent.length, before, 'bot must stay quiet while paused');
// 7. Coexistence echo (team replied from the app) pauses another customer
await post({ entry: [{ changes: [{ value: { message_echoes: [{ to: '252622222222' }] } }] }] });
geminiText = 'x'; const b2 = sent.length; await post(msg('m5', 'salaan', '252622222222')); assert.equal(sent.length, b2);
// 8. Non-text message gets a polite text request
const b3 = sent.length; await post({ entry: [{ changes: [{ value: { messages: [{ id: 'm6', from: '252633333333', type: 'image' }] } }] }] });
assert.equal(sent.length, b3 + 1); assert.match(sent.at(-1).text.body, /qoraal/);
// 9. Marker parser
assert.deepEqual(parseReply('ok').action, null);
assert.equal(parseReply('a\n[[HANDOFF]]').action, 'HANDOFF');
console.log('WhatsApp: 9 checks passed (verify, signature, answer, dedupe, quote→Trello, handoff+pause, coexistence echo, non-text, parser)');
