import { Blogs, Sidebar } from '@/components/shared'

const page = ({searchParams}:any) => {

  const cat = searchParams.cat;
  const page = parseInt(searchParams.page) || 1

  return (
    <>
    <div className='text-center bg-accent dark:bg-primary py-3 px-5 rounded-md'>
      <h4 className='text-3xl max-sm:text-xl text-darkText uppercase'>{cat}</h4>
    </div>
    
    <section className="flex gap-10 justify-between mt-10 relative">
      <Blogs page={page} limit={10} cat={cat}/>
      <div className="max-2xl:hidden mt-12">
        <Sidebar/>
      </div>
     </section>
    </>
  )
}

export default page