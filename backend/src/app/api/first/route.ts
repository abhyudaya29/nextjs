// export async function GET(){
//     return new Response("chai")

import { user } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

// }
// export const GET=async()=>{
//     return NextResponse.json({
//         data:user,
    
//     })
// }

export async function GET(req:NextRequest,res:NextResponse) {
    const{searchParams}=new URL(req.url);
    console.log(searchParams,">>search params")
    const name=searchParams.get('name')
    console.log(name);
    const age=searchParams.get('age');
    console.log(age);

    return NextResponse.json({
        success:true,
        status:200,
        data:{
            name,
            age
        }
    })
}