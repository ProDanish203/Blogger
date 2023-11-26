import { getCategories } from '@/lib/actions/Category';

export const Category = async () => {

    const {data, success} = await getCategories();
    if(!success) return;

  return (
    <section className=''>
        <h4 className='text-2xl font-bold text-text dark:text-white'>Popular Categories</h4>
        <div className='flex flex-wrap items-center gap-5 my-5 mt-3'>
        {
        data?.map((cat, i:number) => (
            <div className={`rounded-lg bg-neutral-200 dark:bg-neutral-800 py-3 px-4`}
            key={i}
            >
                <p className='dark:text-white capitalize'>{cat.title}</p>
            </div>
        ))
        }
        </div>

    </section>
  )
}
