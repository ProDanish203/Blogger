"use server"
import { revalidatePath } from "next/cache";
import { connectDb } from "../db";
import Category from "../models/Category";

interface Props{
    title: string;
    slug: string;
}

export const createCat = async ({title, slug}: Props) => {
    try{
        await connectDb();
        const data = await Category.create({title, slug});

        if(data){
            revalidatePath('/');
            return {data, success: true, message: "Category added successfully"}
        }else{
            return {success: false, message: "Error while creatimg category"}
        }

    }catch(error:any){
        throw new Error(`Failed to create category: ${error.message}`)
    }
}

export const getCategories = async () => {
    try{
        await connectDb();
        const data = await Category.find();

        if(data){
            return {data, success: true, message: "Category fetched"}
        }else{
            return {success: false, message: "Error while fetching categories"}
        }

    }catch(error:any){
        throw new Error(`Failed to fetch categories: ${error.message}`)
    }
}

