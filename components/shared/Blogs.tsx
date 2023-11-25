import React from 'react'
import { BlogCard } from '../cards/BlogCard'
import { Pagination } from '.'

interface Props{
  cat?: string;
}

export const Blogs = ({cat}: Props) => {
  return (
    <div className='max-w-[1000px]'>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Recent Posts</h4>

        <div className='mt-5 flex flex-col gap-5 max-sm:gap-8'>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>

        <Pagination/>
    </div>
  )
}
