"use client"
import { useRouter } from "next/navigation";

export const Pagination = ({page, hasPrev, hasNext}: {page: number, hasNext:boolean, hasPrev:boolean}) => {

  const router = useRouter();
  const nextPage = () => {
    router.push(`?page=${page + 1}`, { scroll: false});
  }

  const prevPage = () => {
    let prevPage = page > 1 ? page - 1 : 1;
    router.push(`?page=${prevPage}`, { scroll: false });
  }

  return (
    <div className='w-full flex items-center justify-between gap-2 mt-5'>
        <button className='bg-primary disabled:hidden px-5 py-2.5 rounded-sm cursor-pointer text-white' onClick={prevPage}
        disabled={!hasPrev}
        >Previous</button>
        {/* @ts-ignore */}
        <button className='bg-primary disabled:hidden px-5 py-2.5 rounded-sm cursor-pointer text-white' onClick={nextPage}
        disabled={!hasNext}
        >Next</button>
    </div>
  )
}
