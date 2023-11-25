"use client"
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';

export const AuthLinks = () => {
  
  const {data, status} = useSession();
  let isLoggedin = false;

  if(status != 'loading' && status == "authenticated")
    isLoggedin = true;

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
    <Link href='/'
    className='text-text dark:text-bg text-lg'
    onClick={() => signOut()}
    >
      Logout
    </Link>
    {data && (
      // @ts-ignore
    <Link href={`/profile/${data?.user?.id}`} className='relative cursor-pointer'>
      <Image src={data?.user?.image || 'https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png'} alt={data?.user?.name || ''} width={50} height={50}
      className='w-[35px] h-[35px] rounded-full cursor-pointer'
      />
    </Link>
    )}
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
