import { categories } from '@/util/data'
import Image from 'next/image'

export const Category = () => {

  return (
    <section className=''>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Popular Categories</h4>
        <div className='flex items-center gap-5 my-5 mt-3'>
            {
                categories.map((cat, i) => (
                    <div className={`flex items-center justify-center gap-2 rounded-lg bg-[#dfdabf] dark:bg-gray-500 py-3 px-4`}
                    key={i}
                    >
                        <div className='relative w-[30px] h-[30px]'>
                            <Image src={cat.img} alt={cat.text} fill
                            className='rounded-full object-cover'
                            />
                        </div>
                        <p className='dark:text-white'>{cat.text}</p>
                    </div>
                ))
            }
        </div>

    </section>
  )
}
