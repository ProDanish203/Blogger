"use client"
import { createComment } from '@/lib/actions/Comment'
import { usePathname } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export const CommentField = ({postId}:{postId: string}) => {
    const [comment, setComment] = useState("")
    const pathname = usePathname();
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if(!comment) return toast.error("please add text for comment");
        
        const {success} = await createComment({
            desc: comment,
            postId,
            pathname
        })
        
        if(success) 
            toast.success("Comment added");
        else    
            toast.error("Something went wrong");
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className='flex max-md:flex-col md:max-w-[500px] w-full md:items-end gap-2'>
            <textarea 
            rows={5}
            placeholder='Add Comment'
            value={comment}
            onChange={(e:any) => setComment(e.target.value)}
            className='resize-none px-3 py-2 rounded-md bg-neutral-300 max-md:w-full md:min-w-[500px] outline-none dark:bg-neutral-900'
            ></textarea>

            <div className='max-md:block'>
                <button type='submit' className='block w-full bg-primary text-white px-5 py-2 rounded-md cursor-pointer'>Add</button>
            </div>
        </div>
    </form>
  )
}
