"use client"
import Link from 'next/link'

export const AuthLinks = () => {

    const isLoggedin = false;

  return (
    <>
    {
    isLoggedin ? 
    <>
    <Link href='/write'
    className='text-text dark:text-bg text-lg'
    >
        Write
    </Link>
    <Link href='/logout'
    className='text-text dark:text-bg text-lg'
    >
        Logout
    </Link>
    </>
    :
    <Link href='/login'
    className='text-text dark:text-bg text-lg'
    >
        Login
    </Link>
    }
    
    </>
  )
}
