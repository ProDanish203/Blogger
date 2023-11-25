"use client"
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import { toast } from "react-toastify";

export const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e:FormEvent) => {
        e.preventDefault();
        if(!username || !password) return toast.error("Please provide credentials")
    }

  return (
    <form className='mt-5 flex flex-col gap-4'>
        <div>
            <label htmlFor="username" className='text-text dark:text-darkText ml-2 '>Username</label>
            <input type="text" id='username' placeholder='Username'
            className='w-full px-2 py-2.5 bg-neutral-300 dark:bg-neutral-800 outline-none rounded-md mt-2'
            value={username}
            onChange={(e:any) => setUsername(e.target.value)}
            autoComplete='off'
            required
            /> 
        </div>

        <div>
            <label htmlFor="password" className='text-text dark:text-darkText ml-2 '>Password</label>
            <input type="text" id='password' placeholder='Password'
            className='w-full px-2 py-2.5 bg-neutral-300 dark:bg-neutral-800 outline-none rounded-md mt-2'
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
            autoComplete='off'
            required
            /> 
        </div>

        <div className='mt-2'>
            <button type='submit' className='bg-primary text-white w-full text-center rounded-md py-2 cursor-pointer md:text-lg'>Login</button> 
        </div>

        <div>
            <p>Don't have an account? <Link href='/signup' className='underline text-primary'>Signup</Link></p>
        </div>
    </form>
  )
}
