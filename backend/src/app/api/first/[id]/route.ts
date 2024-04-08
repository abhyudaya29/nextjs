// import { user } from "@/lib/db";
// import { NextApiRequest } from "next";
// import { NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";


// export async function GET(request:NextApiRequest,params:any){

//     console.log(params)
//     const singleUsers=user.filter((item)=>{
//         // console.log(item);
//         return item.id==params.params.id
        

//     }
//         )
//     if(singleUsers.length==0){
//         return NextResponse.json({
//             message:"No data found"
//         })
//     }
//     console.log(singleUsers),">>data";
//     return NextResponse.json({
//         message:true,
//         data:singleUsers
//     })

// }


export async function GET(req:NextRequest,res:NextResponse) {
    const{searchParams}=new URL(req.url);
    console.log(searchParams,">>search params")
    return NextResponse.json({
        success:true,
        status:200
    })
}