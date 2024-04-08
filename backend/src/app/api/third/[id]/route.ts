import { user } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE=async(req,res)=>{
    try {
        const id=req.url.split("third/")[1];
        console.log(id,">>user id");
        user.pop(id);
        return NextResponse.json({
            message:true,
            data:user
        })

        
    } catch (error) {
        return NextResponse.json({
            message:error,
            
        })
        
    }
}