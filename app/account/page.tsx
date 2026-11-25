import AccountForm from "@/components/AccountForm";import {currentUser} from "@/lib/account-auth";
export const dynamic="force-dynamic";
export const metadata={title:"My Account — Belle Voyage Estates",robots:{index:false,follow:false}};
export default async function Account(){const user=await currentUser();if(!user)return <AccountForm/>;return <main style={{minHeight:"100vh",background:"#d6cfc2",color:"#292f2a",padding:"110px 8vw"}}><h1 style={{fontFamily:"Georgia",fontWeight:400}}>My Account</h1></main>;}
