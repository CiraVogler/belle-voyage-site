"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

export default function OwnersPage() {
 const dialog = useRef<HTMLDialogElement>(null);
 const [status,setStatus] = useState<"idle"|"sending"|"done">("idle");
 const [error,setError] = useState("");
 async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault(); setError(""); setStatus("sending");
  const d = new FormData(e.currentTarget);
  const message = ["Company: "+(d.get("company")||"Not supplied"),"Phone: "+(d.get("phone")||"Not supplied"),"Location: "+d.get("location"),"Category: "+d.get("category"),"Listing URL: "+(d.get("url")||"Not supplied"),"Details: "+d.get("details")].join("\n");
  try {
   const res = await fetch("/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d.get("name"),email:d.get("email"),subject:"Property listing inquiry",message,website:d.get("website")})});
   if(!res.ok){const j=await res.json().catch(()=>({}));throw new Error(j.error||"Unable to send. Please try again.");}
   setStatus("done");
  } catch(err){setError(err instanceof Error?err.message:"Unable to send. Please try again.");setStatus("idle");}
 }
 return <main className="about-page owners-page">
 <style>{`
 .owners-hero{padding:110px clamp(24px,7vw,92px) 80px;background:#f4f2eb;}
 .owners-hero h1{font:400 clamp(46px,7vw,100px)/1.08 Georgia,serif;letter-spacing:-.045em;margin:32px 0;}
 .owners-hero em{color:#78856d;}
 .owners-hero p{max-width:60ch;line-height:1.8;}
 .owners-hero .about-scroll{color:#515b50;border-color:#b99b6a;}
 .owners-page .about-section{border-bottom:1px solid #b99b6a;}
 .owners-flow{list-style:none;padding:0;margin:32px 0;text-align:center;display:grid;gap:24px;}
 .owners-flow li{position:relative;border:1px solid #b99b6a;background:#e5e7dc;padding:20px;font:400 22px Georgia,serif;}
 .owners-flow li:not(:last-child)::after{content:"↓";position:absolute;top:100%;left:50%;transform:translateX(-50%);color:#9b7949;font-size:20px;}
 .owners-payment{background:#e5e7dc;}
 .owners-note{border-top:1px solid #b99b6a;padding-top:24px;font-style:italic;}
 .owners-check{border:1px solid #b99b6a;padding:24px;margin-top:32px;}
 .owners-check h3{font:400 26px Georgia,serif;margin-bottom:16px;}
 .owners-check ul{list-style:none;padding:0;display:grid;gap:12px;}
 .owners-check li::before{content:"✓ ";color:#697665;}
 .owners-close{background:#292f2a;color:#f4efe6;text-align:center;padding:80px 24px;}
 .owners-close h2{font:400 clamp(36px,5vw,72px)/1.15 Georgia,serif;margin:32px 0;}
 .owners-close em,.owners-close .about-kicker{color:#d9b985;}
 .owners-close>p{max-width:60ch;margin:0 auto 32px;line-height:1.8;}
 .owners-cta{border:1px solid #d9b985;color:#d9b985;background:transparent;padding:16px 24px;cursor:pointer;font:inherit;}
 .owners-cta:hover{background:#d9b985;color:#292f2a;}
 .owners-dialog{width:min(680px,92vw);max-height:90dvh;overflow:auto;background:#292f2a;color:#f4efe6;border:1px solid #d9b985;padding:32px;margin:auto;}
 .owners-dialog::backdrop{background:rgba(0,0,0,.65);}
 .owners-dialog h2{font:400 clamp(28px,4vw,44px)/1.2 Georgia,serif;margin:24px 0;}
 .owners-dialog .ct-form{display:grid;gap:20px;}
 .owners-dialog .ct-f{min-width:0;}
 .owners-dialog .ct-f label{color:#d9b985;}
 .owners-dialog .ct-f input,.owners-dialog .ct-f textarea,.owners-dialog .ct-f select{width:100%;background:transparent;color:#f4efe6;border:0;border-bottom:1px solid #b99b6a;padding:12px 0;font:inherit;}
 .owners-dialog option{background:#292f2a;color:#f4efe6;}
 .owners-dialog .ct-send{background:#d9b985;color:#292f2a;}
 .owners-dialog .owners-dismiss{float:right;background:transparent;color:#d9b985;border:0;font-size:24px;cursor:pointer;}
 .owners-dialog .owners-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;}
 @media(max-width:600px){.owners-dialog{padding:20px;}.owners-dialog .owners-grid{grid-template-columns:1fr;}}
 `}</style>
 <section className="owners-hero"><p className="about-kicker">BELLE VOYAGE ESTATES / FOR PROPERTY OWNERS</p><h1>List your property.<br/><em>Reach beyond your borders.</em></h1><p>A straightforward approach to international property promotion, designed for property owners, hosts and real estate professionals.</p><a className="about-scroll" href="#owners-platform">DISCOVER HOW IT WORKS ↓</a></section>
 <section className="about-section" id="owners-platform"><div className="about-section-label">01 / THE PLATFORM</div><div className="about-section-body"><h2>What is it?</h2><p>Belle Voyage Estates offers a dedicated platform for promoting residential properties and accommodations to individuals exploring opportunities locally and internationally.</p><p>Whether your property is available for sale, rent or short-term stays, BVE provides an additional avenue for discovery without replacing your existing marketing channels.</p></div></section>
 <section className="about-section"><div className="about-section-label">02 / THE PROCESS</div><div className="about-section-body"><h2>How does it work?</h2><p>Your property is presented on Belle Voyage Estates through photographs, descriptions, relevant property information and a direct connection to your business or listing.</p><ol className="owners-flow"><li>You provide the property.</li><li>BVE promotes the property.</li><li>Interested visitors connect with you.</li></ol><p>You retain control over your pricing, availability, client relationships and transactions. Our role is promotional, allowing you to continue conducting business on your own terms.</p></div></section>
 <section className="about-section owners-payment"><div className="about-section-label">03 / WORKING WITH US</div><div className="about-section-body"><h2>An investment in<br/><em>greater visibility.</em></h2><p>Property promotion through Belle Voyage Estates is a paid service, with pricing tailored to the individual needs of each property owner or business.</p><p>All pricing and partnership arrangements are discussed directly with our team prior to any commitment.</p><p className="owners-note">Every partnership begins with a conversation, not an obligation.</p></div></section>
 <section className="about-section"><div className="about-section-label">04 / GETTING STARTED</div><div className="about-section-body"><h2>How do I get started?</h2><p>Getting started is simple. Submit an initial property inquiry with some basic information about yourself, your property and your promotional objectives.</p><p>We&apos;ll then connect with you directly to discuss listing requirements and partnership arrangements before proceeding with your listing.</p><div className="owners-check"><h3>What you&apos;ll need.</h3><ul><li>Your contact or business information</li><li>Property location and listing type</li><li>Property photographs and details</li><li>An existing listing link, if applicable</li></ul></div></div></section>
 <section className="owners-close"><span className="about-kicker">05 / LET&apos;S WORK TOGETHER</span><h2>Great partnerships<br/><em>begin with a conversation.</em></h2><p>Whether you represent a single property or an entire portfolio, we&apos;d love to explore what we could achieve together.</p><button className="owners-cta" onClick={()=>dialog.current?.showModal()}>Begin your listing inquiry ↗</button><div className="about-vision-signature"><h3>Belle Voyage Estates</h3><p>A WORLD WITHIN REACH.</p></div></section>
 <footer className="about-footer"><Link href="/">← Back to home</Link><span>BELLE VOYAGE ESTATES</span><Link href="/properties">Explore properties ↗</Link></footer>
 <dialog ref={dialog} className="owners-dialog" aria-labelledby="owners-inquiry-title"><button className="owners-dismiss" aria-label="Close inquiry" onClick={()=>dialog.current?.close()}>×</button><p className="about-kicker" style={{color:"#d9b985"}}>BELLE VOYAGE ESTATES / PARTNERSHIPS</p><h2 id="owners-inquiry-title">Let&apos;s introduce your property to the world.</h2>
 {status==="done"?<div role="status"><p>Thank you. Your listing inquiry has been received.</p><button className="owners-cta" onClick={()=>{setStatus("idle");dialog.current?.close();}}>Close</button></div>:<form className="ct-form" onSubmit={submit}><div className="owners-grid">{[["name","Full name *","text",true,120],["company","Company name","text",false,200],["email","Email address *","email",true,160],["phone","Phone number","tel",false,80],["location","Property location *","text",true,200]].map(([name,label,type,required,max])=><div className="ct-f" key={String(name)}><label htmlFor={"oi-"+name}>{label}</label><input id={"oi-"+name} name={String(name)} type={String(type)} required={Boolean(required)} maxLength={Number(max)}/></div>)}<div className="ct-f"><label htmlFor="oi-category">Listing category *</label><select id="oi-category" name="category" required defaultValue=""><option value="" disabled>Select a category</option><option>For sale</option><option>Long-term rental</option><option>Short-term stay</option><option>Multiple properties / portfolio</option><option>Other</option></select></div></div><div className="ct-f"><label htmlFor="oi-url">Existing property listing URL (optional)</label><input id="oi-url" name="url" type="url" maxLength={500} placeholder="https://"/></div><div className="ct-f"><label htmlFor="oi-details">Tell us about your property or portfolio</label><textarea id="oi-details" name="details" rows={4} maxLength={2400}/></div><div className="ct-pot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>{error&&<p role="alert">{error}</p>}<button className="ct-send" disabled={status==="sending"} type="submit">{status==="sending"?"Sending…":"Submit listing inquiry ↗"}</button><small>Submitting an inquiry does not commit you to a paid listing.</small></form>}
 </dialog></main>;
}
