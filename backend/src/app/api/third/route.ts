import { user } from "@/lib/db";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";


export const GET=async()=>{

    try {
        return NextResponse.json({
            message:"success",
            status:200,
            data:user

        })
        
    } catch (error:any) {
        console.log(error);
        return NextResponse.json(error)

        
    }
}
// create

export const POST=async(request:NextRequest,response:NextResponse)=>{
    const{userName}=await request.json();
    try {
        console.log(userName,">>name")
        if(!userName ){
            return NextResponse.json({
                success:false,
                status:400,
                message:"Please enter the fields"
            })
        }
        else{
            const newdata={userName};
            newdata.id=user.length+1;
            user.push(newdata);
            console.log(newdata,">>new data")


            return NextResponse.json({
                success:true,
                message:"user created successfully",
                data:user,
            })
        }
        
    } catch (error) {
        console.log(error,">>error ")
        return new Response("Error in creating user");
        
    }
}