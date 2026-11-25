import type { Metadata } from "next";
export const metadata: Metadata = {title:"My Account — Belle Voyage Estates",robots:{index:false,follow:true}};
export default function AccountPage(){
return <main className="account-preview"><style>{`
.account-preview{min-height:100dvh;background:#d6cfc2;color:#292f2a;padding:110px 8vw 80px;}
.account-preview a{color:inherit;}
.account-invite{background:#292f2a;color:#f4efe6;padding:48px 24px;text-align:center;}
.account-invite-inner{border:1px solid #b99b6a;padding:40px 24px;display:grid;gap:20px;justify-items:center;}
.account-invite h1{font:400 clamp(28px,4vw,48px)/1.2 Georgia,serif;margin:0;}
.account-invite em,.account-kicker{color:#d9b985;}
.account-kicker{font-size:11px;letter-spacing:.16em;}
.account-invite p{max-width:58ch;line-height:1.7;margin:0;}
.account-rule{height:1px;width:72px;background:#b99b6a;}
.account-notice{border:1px solid #b99b6a;padding:16px;max-width:58ch;font-size:14px;}
.account-preview .account-browse{display:inline-block;background:#d9b985;color:#292f2a;padding:12px 24px;text-decoration:none;}
.account-benefits{padding:48px 0;display:grid;gap:24px;}
.account-benefits h2{font:400 32px Georgia,serif;margin:0;}
.account-benefits-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
.account-benefits-grid article{border-top:1px solid #a58a60;padding-top:20px;}
.account-benefits-grid h3{font:400 24px Georgia,serif;margin:0 0 8px;}
.account-benefits-grid p{margin:0;line-height:1.6;}
@media(max-width:600px){.account-preview{padding:80px 16px 48px;}.account-invite{padding:24px 16px;}.account-invite-inner{padding:32px 16px;}.account-benefits-grid{grid-template-columns:1fr;}}
`}</style><section className="account-invite"><div className="account-invite-inner"><span className="account-kicker">BELLE VOYAGE ESTATES / MY ACCOUNT</span><h1>Some places stay with you.<br/><em>Keep them close.</em></h1><span className="account-rule" aria-hidden="true"/><p>Your complimentary account will bring the places, possibilities and destinations that inspire you into one personal space.</p><p className="account-notice">Member accounts are coming soon. Registration and sign-in are not available yet.</p><a className="account-browse" href="/properties">Continue exploring ↗</a></div></section><section className="account-benefits"><h2>A journey of your own.</h2><p>Planned member features</p><div className="account-benefits-grid">{[["My collection","Save properties and organize your own collections."],["My destinations","Follow the markets that interest you."],["My connections","Keep track of your property inquiries."],["Discover more","Explore suggestions and optional new listing alerts."]].map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section></main>
}
