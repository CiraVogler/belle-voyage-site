import { NextRequest,NextResponse } from "next/server";
import { auth,currentUser } from "@/lib/account-auth";
export async function GET(){return NextResponse.json({user:await currentUser()},{headers:{"Cache-Control":"no-store"}});}
export async function POST(req:NextRequest){
 const fail=(error:string,status=400)=>NextResponse.json({error},{status});
 if(req.headers.get("origin")!==req.nextUrl.origin)return fail("Request rejected.",403);
 try{
 const raw=await req.text();if(raw.length>8192)return fail("Request too large.",413);
 const b=JSON.parse(raw);const email=typeof b.email==="string"?b.email.trim().toLowerCase():"";const password=typeof b.password==="string"?b.password:"";
 if(b.action==="logout"){const token=req.cookies.get("bve_session")?.value;if(token)await auth("logout",{},token);const res=NextResponse.json({ok:true});res.cookies.delete("bve_session");return res;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254)return fail("Enter a valid email address.");
 let result;
 if(b.action==="register"){if(password.length<12||password.length>128||password!==b.confirm)return fail("Passwords must match and contain 12–128 characters.");result=await auth("signup",{email,password});if(!result.ok)return fail("Unable to register. Please try again later.");return NextResponse.json({ok:true});}
 if(b.action==="resend"){result=await auth("resend",{type:"signup",email});return result.ok?NextResponse.json({ok:true}):fail("Unable to resend. Please wait and try again.");}
 if(b.action==="verify"){if(!/^\d{6}$/.test(b.code||""))return fail("Enter the six-digit code.");result=await auth("verify",{email,token:b.code,type:"signup"});}
 else if(b.action==="login"){if(!password||password.length>128)return fail("Enter your password.");result=await auth("token?grant_type=password",{email,password});}
 else return fail("Unknown action.");
 if(!result.ok||!result.data.access_token||!result.data.user?.email_confirmed_at)return fail("Invalid credentials or verification code. Confirm your email and try again.",401);
 const res=NextResponse.json({ok:true});res.cookies.set("bve_session",result.data.access_token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:Math.min(Number(result.data.expires_in)||3600,3600)});return res;
 }catch{return fail("Account service is temporarily unavailable.",503);}
}
