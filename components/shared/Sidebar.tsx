import React from 'react'
import { Category } from '.'

export const Sidebar = () => {
  return (
    <div className='p-4 w-full max-w-[400px] max-h-[80vh] h-full rounded-md bg-neutral-100 dark:bg-neutral-900'>

      <Category/>

    </div>
  )
}
