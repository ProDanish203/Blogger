"use server"
import { connectDb } from "@/lib/db";
import User from "@/lib/models/User";
import Comment from "@/lib/models/Comment";
import Blog from "@/lib/models/Blog";
import { getAuthSession } from "@/store/auth";
import { revalidatePath } from "next/cache";

interface Props{
    postId: string;
    desc: string;
    pathname: string
}

export const getComments = async (id:string) => {
    try{
        await connectDb();

        const comments = await Comment.find({postId: id})
        .populate({path: 'author', model: User})

        if(comments){
            return {comments, success: true, message: "Comments fetched successfully"}
        }else{
            return {success: false, message: "Error while fetching comments"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch comments: ${error.message}`)
    }
}


export const createComment = async ({desc, postId, pathname}: Props) => {
    try{
        const session = await getAuthSession()
        if(!session) 
            return { success: false, message: "Authentication error"}
    
        await connectDb();
        const comment = await Comment.create({
            desc, postId, author: session.user.id 
        });

        await Blog.findByIdAndUpdate(postId, { $push: { comments: comment._id}})

        if(comment){
            revalidatePath(pathname);
            return {success: true, message: "Comment added"}
        }else{
            return {success: false, message: "Error while adding comment"}
        }

    }catch(error:any){
        throw new Error(`Failed to add comment: ${error.message}`)
    }
}
