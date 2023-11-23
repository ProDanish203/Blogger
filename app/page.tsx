import { Banner, Category, Sidebar, Blogs } from "@/components/shared";

export default function Home() {
  return (
    <>
    <Banner/>

    <Category/>

     <section className="flex mt-10">
        <Blogs/>
        <Sidebar/>
     </section>
    </>
  )
}
