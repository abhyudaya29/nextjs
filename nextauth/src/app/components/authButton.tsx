"use client"
import Link from "next/link"
import { signIn,signOut,useSession } from "next-auth/react"
export const AuthButton=()=>{
    const{data:session}=useSession();
    console.log(session,">>>>session");
    
    
    
        if(session){
            return(
                <>
                {session?.user.name}
                <button onClick={()=>signOut()}>sign out</button>
                
                </>
            )

        }
            return(
                <>
                Not signIN
                
                
                <button onClick={()=>signIn()}>sign In</button>
                
                
                </>
            )
        
    

    

    
}

