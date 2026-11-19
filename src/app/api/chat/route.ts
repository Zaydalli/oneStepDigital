import { NextRequest, NextResponse } from "next/server";
import { faq, handoffUrl } from "@/lib/chat";
export const runtime = "nodejs";
const fallback = "Fadlan kooxda kala xiriir WhatsApp +252615894875 ama info@onestepdigital.co.";
export async function POST(req: NextRequest) {
 const reply=(text:string,extra:Record<string,unknown>={})=>NextResponse.json({reply:text,mode:"faq",handoffUrl,...extra},{headers:{"Cache-Control":"no-store"}});
 if(req.headers.get("origin")!==req.nextUrl.origin) return new NextResponse(null,{status:403});
 if(!req.headers.get("content-type")?.includes("application/json"))return new NextResponse(null,{status:415});
 const raw=await req.text();if(Buffer.byteLength(raw)>4096)return new NextResponse(null,{status:413});
 let b;try{b=JSON.parse(raw);}catch{return new NextResponse(null,{status:400});}
 if(typeof b.message!=="string"||!b.message.trim()||b.message.length>1000)return new NextResponse(null,{status:400});
 const known=faq(b.message),session=req.cookies.get("os_chat")?.value||crypto.randomUUID();
 const finish=(text:string,extra:Record<string,unknown>={})=>{const r=reply(text,extra);if(b.consent===true)r.cookies.set("os_chat",session,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",maxAge:30*86400,path:"/api/chat"});return r;};
 const {CLOUDFLARE_CHAT_URL,CLOUDFLARE_CHAT_SECRET}=process.env;
 if(CLOUDFLARE_CHAT_URL&&CLOUDFLARE_CHAT_SECRET){try{
  const url=new URL(CLOUDFLARE_CHAT_URL);if(url.protocol!=="https:")throw Error("HTTPS required");
  const r=await fetch(url,{method:"POST",headers:{"Authorization":`Bearer ${CLOUDFLARE_CHAT_SECRET}`,"Content-Type":"application/json"},body:JSON.stringify({message:b.message,session,consent:b.consent===true,faq:known||null}),signal:AbortSignal.timeout(20000),cache:"no-store"});
  if(!r.ok)throw Error("Worker unavailable");const d=await r.json();
  if(typeof d.reply!=="string")throw Error("Invalid reply");
  return finish(d.reply,{mode:d.mode==="ai"?"ai":"faq",storage:d.storage});
 }catch{}}
 return finish(known||fallback,{storage:b.consent===true?"failed":"not_requested"});
}
