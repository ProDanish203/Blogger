import { Loader } from "@/components/helpers/Loader";
import { Banner, Category, Sidebar, Blogs } from "@/components/shared";
import { Suspense, } from "react";

export default function Home({searchParams}:any) {

  const page = parseInt(searchParams.page) || 1
  
  return (
    <>
    <Banner/>

    <Category/>

     <section className="overflow-hidden flex gap-10 justify-between mt-10 relative">
      <Suspense key={page} fallback={<Loader dark={false}/>}>
        <Blogs page={page} limit={5}/>
      </Suspense>
      <div className="max-2xl:hidden mt-12">
        <Sidebar/>
      </div>
     </section>
    </>
  )
}
