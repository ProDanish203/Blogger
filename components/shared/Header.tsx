"use client"
import { navLinks } from '@/util/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeSwitcher } from '../helpers/ThemeSwitcher'
import { AuthLinks } from '../helpers/AuthLinks'

export const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    <header className='relative dark:text-bg flex items-center justify-between gap-2 max-w-[1500px] mx-auto py-5 px-4'>

        <div>
            <h2 className='text-text dark:text-bg text-4xl font-bold'>Blogger</h2>
        </div>

        <nav className='max-md:hidden flex items-center justify-center gap-4'>

            <ThemeSwitcher/>
            {navLinks.map((item, i) => (
                <Link href={item.path}
                className='text-text dark:text-bg text-lg'
                key={i}
                >
                    {item.name}
                </Link>
            ))}

            <AuthLinks setOpen={setOpen}/>
        </nav>
            
        <div className='flex gap-3 items-center'>
            <ThemeSwitcher/>
            <div className='md:hidden cursor-pointer'
            onClick={() => setOpen(prev => !prev)}
            >
                <i className={`fas fa-${open ? 'times': 'bars'} text-2xl`}></i>
            </div>
        </div>

        {/* Mobile nav */}
        {open && (
        <nav className='mobileNav md:hidden flex flex-col gap-5 absolute top-full left-0 p-5 dark:bg-darkBg bg-bg z-50 w-full'>
            {navLinks.map((item, i) => (
                <Link href={item.path}
                onClick={() => setOpen(false)}
                className='text-text dark:text-bg text-lg'
                key={i}
                >
                    {item.name}
                </Link>
            ))}

            <AuthLinks setOpen={setOpen}/>
        </nav>
        )}
    </header>
  )
}
