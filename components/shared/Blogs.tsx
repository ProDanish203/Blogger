import React from 'react'
import { BlogCard } from '../cards/BlogCard'

export const Blogs = () => {
  return (
    <div className='max-w-[1000px]'>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Recent Posts</h4>

        <div className='mt-5 flex flex-col gap-5'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
  )
}
