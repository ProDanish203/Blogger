"use server"
import { getAuthSession } from "@/store/auth";
import { connectDb } from "../db";
import Blog from "../models/Blog";
import Comment from "../models/Comment";
import User from "../models/User";

import { revalidatePath } from "next/cache";

interface Props{
    slug: string;
    title: string;
    desc: string;
    image: string;
    cat: string;
    pathname: string
}

export const getBlogs = async (page:number, limit:number, cat?:string) => {
    try{
        await connectDb();
        const startIndex = (page - 1) * limit;

        const blogs = await Blog.find().skip(startIndex).limit(limit);
        const blogsCount = await Blog.countDocuments();

        const data = {
            blogs, blogsCount
        };

        if(blogs){
            return {data, success: true, message: "Blogs fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching blogs"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch blogs: ${error.message}`)
    }
}


export const getBlog = async (slug:string, id:string) => {
    try{
        await connectDb();
        const data = await Blog.findOne({$and: [{ slug }, { _id: id }],})
                    .populate({path: 'author', model: User})
                    .populate({path: 'comments', model: Comment})

        if(data){
            return {data, success: true, message: "Blog fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching blog"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch blog: ${error.message}`)
    }
}


export const createBlog = async ({slug, title, desc, image, cat, pathname}: Props) => {
    try{
        const session = await getAuthSession()
        if(!session) 
            return { success: false, message: "Authentication error"}
        
        await connectDb();
        const data = await Blog.create({
            slug, title, desc, image, cat, author: session.user.id 
        });

        await User.findByIdAndUpdate(session.user.id, { $push: { blogs: data._id}})
        

        if(data){
            revalidatePath(pathname);
            return {data, success: true, message: "Blog fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching blog"}
        }

    }catch(error:any){
        throw new Error(`Failed to create blog: ${error.message}`)
    }
}
