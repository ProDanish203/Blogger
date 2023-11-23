import { navLinks } from '@/util/data'
import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from '../helpers/ThemeSwitcher'

export const Header = () => {
  return (
    <header className='dark:text-bg flex items-center justify-between gap-2 max-w-[1500px] mx-auto py-5 px-4'>

        <div>
            <h2 className='text-text dark:text-bg text-4xl font-bold'>Blogger</h2>
        </div>

        <nav className='flex items-center justify-center gap-4'>

            <ThemeSwitcher/>
            {navLinks.map((item, i) => (
                <Link href={item.path}
                className='text-text dark:text-bg text-lg'
                key={i}
                >
                    {item.name}
                </Link>
            ))}

            <Link href='/login'
            className='text-text dark:text-bg text-lg'
            >
                Login
            </Link>
        </nav>

    </header>
  )
}
