"use server"
import { connectDb } from "../db";
import User from "../models/User";

export const getUser = async (id: string) => {
    try{
        await connectDb();
        const data = await User.findById(id);

        if(data){
            return {data, success: true, message: "User fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching user data"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch User data: ${error.message}`)
    }
}