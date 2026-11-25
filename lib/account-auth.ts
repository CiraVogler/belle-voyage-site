import { cookies } from "next/headers";
const base=()=>process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=()=>process.env.SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export async function auth(path:string,body?:object,token?:string){
 if(!base()||!key()) throw new Error("Authentication is not configured");
 const res=await fetch(base()+"/auth/v1/"+path,{method:body?"POST":"GET",headers:{apikey:key()!,Authorization:"Bearer "+(token||key()),"Content-Type":"application/json"},body:body?JSON.stringify(body):undefined,cache:"no-store"});
 const data=await res.json().catch(()=>({}));return {ok:res.ok,data};
}
export function isAdmin(email:string){return email.toLowerCase().endsWith("@bellevoyageestates.com")&&(process.env.BVE_ADMIN_EMAILS||"ciravogler@bellevoyageestates.com").toLowerCase().split(",").map(x=>x.trim()).includes(email.toLowerCase());}
export async function currentUser(){const token=(await cookies()).get("bve_session")?.value;if(!token)return null;try{const {ok,data}=await auth("user",undefined,token);return ok&&data.email_confirmed_at&&typeof data.email==="string"?{email:data.email,admin:isAdmin(data.email)}:null;}catch{return null;}}
