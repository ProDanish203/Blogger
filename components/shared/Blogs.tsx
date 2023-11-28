import { BlogCard } from '../cards/BlogCard'
import { Pagination } from '.'
import { getBlogs } from '@/lib/actions/Blogs';
import { toast } from 'react-toastify';

interface Props{
  cat?: string;
  page: number;
  limit: number;
}

export const Blogs = async ({cat, page, limit}: Props) => {

  // @ts-ignore
  const {data: {blogs, blogsCount}, success, message} = await getBlogs(page, limit, cat);
  if(!success)
    toast.error(message);
  
  const pageLimit = limit;
  const hasPrev = pageLimit * (page-1) > 0;
  const hasNext = pageLimit * (page - 1) + pageLimit < blogsCount;

  return (
    <div className='max-w-[1000px] w-full'>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Recent Posts</h4>

        <div className='mt-5 w-full  flex flex-col gap-5 max-sm:gap-8'>
        {blogs?.map((item:any, i:number) => (
          <BlogCard data={item} key={i}/>
        ))}
        </div>

        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}
