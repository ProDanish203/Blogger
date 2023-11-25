"use server"
import { connectDb } from "../db";
import Blog from "../models/Blog";

export const getBlogs = async () => {
    try{
        await connectDb();
        const data = await Blog.find();

        if(data){
            return {data, success: true, message: "Blogs fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching blogs"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch blogs: ${error.message}`)
    }
}


export const getBlog = async (id:string) => {
    try{
        await connectDb();
        const data = await Blog.findById(id);

        if(data){
            return {data, success: true, message: "Blog fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching blog"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch blog: ${error.message}`)
    }
}
