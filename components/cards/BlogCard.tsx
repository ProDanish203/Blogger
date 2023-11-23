import Image from "next/image"

export const BlogCard = () => {
  return (
    <div className="flex max-lg:flex-col items-center gap-5">
        <div className="relative max-lg:w-full lg:w-[1000px] h-[250px]">
            <Image src='/banner.jpg' alt="blog" fill
            className="object-cover rounded-md"
            />
        </div>

        <div className="flex flex-col md:gap-5 gap-3">
            <div className="flex items-center gap-2">
                <p className="text-neutral-600 dark:text-neutral-400  font-semibold">22-11-2023 | </p>
                <p className="text-red-500">Category</p>
            </div>

            <h2 className="text-2xl max-sm:text-xl text-text dark:text-white">Blog Title goes here</h2>

            <p className="text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum impedit necessitatibus, tempora voluptas minus. Nostrum delectus, tempore sunt distinctio molestias, officia ex excepturi obcaecati natus repellat quasi nemo. Incidunt.
            </p>

            <button className="text-bg bg-accent px-5 py-2.5 rounded-md max-w-[150px]">
                Read More
            </button>
        </div>
    </div>
  )
}
