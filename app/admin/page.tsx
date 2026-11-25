import {redirect} from "next/navigation";import {currentUser} from "@/lib/account-auth";
export const dynamic="force-dynamic";
export default async function Admin(){const user=await currentUser();if(!user)redirect("/account");if(!user.admin)redirect("/account");return <main style={{minHeight:"100vh",background:"#d6cfc2",color:"#292f2a",padding:"110px 8vw"}}><h1 style={{fontFamily:"Georgia",fontWeight:400}}>Admin</h1></main>;}
