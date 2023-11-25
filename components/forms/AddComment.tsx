import { CommentField } from './CommentField';
import Link from 'next/link';

export const AddComment = () => {

    const isLoggedin = false;

    return (
    <>
    {isLoggedin ? (
        <>
        <CommentField/>
        </>
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
