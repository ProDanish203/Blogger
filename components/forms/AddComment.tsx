"use client"
import { useSession } from 'next-auth/react';
import { CommentField } from './CommentField';
import Link from 'next/link';

export const AddComment = ({postId}: {postId: string}) => {

    const {data, status} = useSession();
    let isLoggedin = false;

    if(status != 'loading' && status == "authenticated")
    isLoggedin = true;
    
    return (
    <>
    {isLoggedin ? (
        // @ts-ignore
        <CommentField postId={postId}/>
    ) : (
        <Link href='/login'
        className='text-primary text-lg font-bold'
        >
            Login to add comment
        </Link>
    )}
    </>
    )
    
  
}
