import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <section className='py-10'>

    <h1 className='md:text-center text-7xl max-lg:text-5xl max-md:text-3xl relative text-text dark:text-bg font-extrabold'>
        <i className='fas fa-quote-left text-gray-700 dark:text-gray-500'></i>
    Capturing Moments Through the Lens: Explore the World of Photography with Danish Siddiqui's Blogs 
        <i className='fas fa-quote-right text-gray-700 dark:text-gray-500'></i>
    </h1>

    <div className='row my-5 md:mt-10'>

        <div className='col-1 sm:mb-10'>
            <div className='w-full max-w-[700px] max-h-[400px] h-full '>
                <Image src='/banner.jpg' alt='banner' width={1500} height={800}
                className='rounded-md'
                />
            </div>
        </div>

        <div className='col-2'>
            <h4 className='text-gray-700 dark:text-white sm:text-3xl text-lg font-bold'>
            Dive into the latest in tech at Bloggers. <br /> Explore insightful articles, stay updated on cutting-edge innovations, and fuel your curiosity. Your journey into the world of technology begins here.
            </h4>

            <button className='bg-primary text-bg px-10 flex items-center justify-center gap-2 hover:gap-3 py-2.5 rounded-md mt-5 mb-2'>
                <p>Explore</p>
                <i className='fas fa-arrow-right'></i>
            </button>
        </div>

    </div>

    </section>
  )
}
