import { Banner, Category, Sidebar, Blogs } from "@/components/shared";

export default function Home() {
  return (
    <>
    <Banner/>

    <Category/>

     <section className="overflow-hidden flex gap-10 justify-between mt-10 relative">
      <Blogs/>
      <div className="max-2xl:hidden mt-12">
        <Sidebar/>
      </div>
     </section>
    </>
  )
}
