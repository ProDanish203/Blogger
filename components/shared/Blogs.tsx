import { BlogCard } from '../cards/BlogCard'
import { Pagination } from '.'
import { getBlogs } from '@/lib/actions/Blogs';
import { toast } from 'react-toastify';

interface Props{
  cat?: string;
}

export const Blogs = async ({cat}: Props) => {

  const {data, success, message} = await getBlogs();
  if(!success)
    toast.error(message);
  return (
    <div className='max-w-[1000px]'>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Recent Posts</h4>

        <div className='mt-5 flex flex-col gap-5 max-sm:gap-8'>
        {data?.map((item, i) => (
          <BlogCard data={item} key={i}/>
        ))}
        </div>

        <Pagination/>
    </div>
  )
}
