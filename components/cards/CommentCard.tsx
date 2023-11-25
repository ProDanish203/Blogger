import Image from 'next/image'
import React from 'react'

export const CommentCard = () => {
  return (
    <div className='w-full p-4 max-md:px-2 rounded-md bg-neutral-200 dark:bg-neutral-900'>
        <div className="flex items-center gap-4">
            <div className='md:h-[50px] md:w-[50px] h-[40px] w-[40px] round relative'>
                <Image src='/banner.jpg' alt='banner' width={500} height={500}
                className='round object-cover w-full h-full'
                />
            </div>

            <div>
                <p className="max-md:text-sm font-semibold text-text dark:text-darkText">Author Name</p>
                <p className="text-neutral-500 text-sm font-semibold">Date created</p>
            </div>
        </div>

        <p className='mt-2 max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam?</p>
    </div>
  )
}
