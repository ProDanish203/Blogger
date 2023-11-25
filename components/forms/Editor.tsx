"use client"
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export const Editor = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [content, setContent] = useState("");

  return (
    <>
    <div className=''>
        <input type="text" placeholder='Title'
        className='bg-transparent w-full outline-none text-5xl max-md:text-3xl'
        />

        <div className='flex gap-5 mt-5'>
            <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
            onClick={() => setShowOptions(prev => !prev)}
            >
                <i className='fas fa-plus'></i>
            </button>
        {
            showOptions && (
                <div className='flex gap-4'>
                    <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                    >
                        <i className='fas fa-image'></i>
                    </button>
                    <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                    >
                        <i className='fas fa-file-image'></i>
                    </button>
                    <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                    >
                        <i className='fas fa-video'></i>
                    </button>
                </div>
            )
        }
        </div>

        <div className='mt-5'>
            <ReactQuill theme='bubble' value={content} onChange={setContent} placeholder='Content goes here...'
            className='w-full dark:text-neutral-300 min-h-[400px]'
            />
        </div>

        <div>
            <button className='bg-primary rounded-md px-5 py-2 cursor-pointer max-sm:w-full'>Publish</button>
        </div>
    </div>
    </>
  )
}
