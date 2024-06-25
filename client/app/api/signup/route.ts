import { connect } from "@/app/(DBConfig)/dbconfig";
import User from '@/app/(Models)/User'
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

connect()

export async function post(request: NextRequest) {
    try{
        const {username,email,password} = await request.json()

        //check if user already exists
        const user = await User.findOne(email)
        if(user){
            return NextResponse.json({message:"User already exists"})
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            
        }).save()    

        return NextResponse.json({message:"User created successfully"})

    }catch(error:any){
        return NextResponse.json({ error: error.message });
    }

}