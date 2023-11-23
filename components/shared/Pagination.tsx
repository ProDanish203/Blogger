import React from 'react'

export const Pagination = () => {
  return (
    <div className='flex items-center justify-between gap-2 mt-5'>
        <div className='bg-primary px-5 py-2.5 rounded-sm cursor-pointer'>Previous</div>
        <div className='bg-primary px-5 py-2.5 rounded-sm cursor-pointer'>Next</div>
    </div>
  )
}
